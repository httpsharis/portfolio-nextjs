import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { personalInfo } from "@/config/site-config";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name (at least 2 characters).").max(100),
  email: z.string().trim().email("Please enter a valid email address."),
  project: z
    .string()
    .trim()
    .min(10, "Please share a short note about the role or project (at least 10 characters).")
    .max(2000),
  companyWebsite: z.string().optional(), // Honeypot field
});

// Lightweight per-IP sliding window limiter (5 submissions / 10 min)
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  if (requestLog.size > 500) {
    for (const [key, times] of requestLog.entries()) {
      const fresh = times.filter((t) => now - t < WINDOW_MS);
      if (fresh.length === 0) requestLog.delete(key);
      else requestLog.set(key, fresh);
    }
  }
  const timestamps = (requestLog.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (timestamps.length >= MAX_REQUESTS) {
    requestLog.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return false;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages sent recently. Please email me directly instead." },
      { status: 429 },
    );
  }

  let rawBody: unknown;
  try {
    rawBody = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(rawBody);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]?.message ?? "Please check your form details.";
    return NextResponse.json({ error: firstIssue }, { status: 400 });
  }

  const { name, email, project, companyWebsite } = parsed.data;
  if (companyWebsite && companyWebsite.trim().length > 0) {
    return NextResponse.json({
      delivered: true,
      message: "Thanks for reaching out.",
    });
  }
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactFrom = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  if (resendApiKey) {
    try {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: contactFrom,
          to: [personalInfo.email],
          reply_to: email,
          subject: `Portfolio Inquiry from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${project}`,
        }),
      });

      if (!resendRes.ok) {
        return NextResponse.json(
          {
            error: `Delivery failed upstream. Please reach out directly at ${personalInfo.email}.`,
          },
          { status: 502 },
        );
      }

      return NextResponse.json({
        delivered: true,
        message: "Thanks for reaching out — your note was delivered directly to my inbox.",
      });
    } catch {
      return NextResponse.json(
        {
          error: `Network error while sending. Please email ${personalInfo.email} directly.`,
        },
        { status: 502 },
      );
    }
  }

  // Transparent fallback when RESEND_API_KEY is not configured yet
  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${name}`,
  )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${project}`)}`;

  return NextResponse.json({
    delivered: false,
    fallbackMailto: mailtoUrl,
    message:
      "Your details are validated. Direct SMTP is not configured on this preview — click below to open your email client pre-filled.",
  });
}
