"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, Linkedin, Mail, Phone, Send } from "lucide-react";
import { personalInfo } from "@/config/site-config";
import { Magnetic } from "@/components/motion/MagneticButton";

interface SubmitResponse {
  delivered?: boolean;
  fallbackMailto?: string;
  message?: string;
  error?: string;
}

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const announcerRef = useRef<HTMLDivElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmitResponse | null>(null);

  // Sync aria-invalid, aria-describedby, and polite error announcement with :user-invalid
  useEffect(() => {
    const form = formRef.current;
    const announcer = announcerRef.current;
    if (!form || !announcer) return;

    const supportsUserInvalid =
      typeof CSS !== "undefined" && CSS.supports("selector(:user-invalid)");
    const dirtyState = new WeakMap<
      HTMLElement,
      { hasInteracted: boolean; hasBlurred: boolean }
    >();
    const flagged = new WeakSet<HTMLElement>();
    const announced = new WeakSet<HTMLElement>();
    let announceTimer: ReturnType<typeof setTimeout> | undefined;
    let announcedField: HTMLElement | undefined;

    const linkError = (el: HTMLElement, shown: boolean) => {
      const errorId = el.dataset.error;
      if (!errorId) return;
      const ids = (el.getAttribute("aria-describedby") || "")
        .split(/\s+/)
        .filter((id) => id && id !== errorId);
      if (shown) ids.push(errorId);
      if (ids.length) el.setAttribute("aria-describedby", ids.join(" "));
      else el.removeAttribute("aria-describedby");
    };

    const announceError = (el: HTMLInputElement | HTMLTextAreaElement) => {
      const errorId = el.dataset.error;
      if (!errorId) return;
      const errorEl = document.getElementById(errorId);
      if (!errorEl) return;
      const labelText = el.labels?.[0]?.textContent?.trim()
        ? `${el.labels[0].textContent.trim()}: `
        : "";
      if (announceTimer) clearTimeout(announceTimer);
      announcer.textContent = "";
      announcedField = el;
      announceTimer = setTimeout(() => {
        announcer.textContent = `${labelText}${errorEl.textContent?.trim() || ""}`;
      }, 500);
    };

    const syncField = (
      el: HTMLInputElement | HTMLTextAreaElement,
      announce = false,
    ) => {
      let isInvalid = false;
      if (supportsUserInvalid) {
        isInvalid = el.matches(":user-invalid");
      } else {
        const state = dirtyState.get(el);
        const shouldEvaluate = Boolean(state?.hasInteracted && state?.hasBlurred);
        isInvalid = shouldEvaluate && !el.validity.valid;
        el.classList.toggle("user-invalid-fallback", isInvalid);
        el.classList.toggle("user-valid-fallback", shouldEvaluate && el.validity.valid);
      }

      if (isInvalid) {
        if (announce && !announced.has(el)) {
          announceError(el);
          announced.add(el);
        }
        el.setAttribute("aria-invalid", "true");
        linkError(el, true);
        flagged.add(el);
      } else if (flagged.has(el) || el.getAttribute("aria-invalid") !== "true") {
        el.setAttribute("aria-invalid", "false");
        linkError(el, false);
        flagged.delete(el);
        announced.delete(el);
        if (announcedField === el) {
          if (announceTimer) clearTimeout(announceTimer);
          announcer.textContent = "";
        }
      }
    };

    const fields = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
      "input[data-error], textarea[data-error]",
    );
    fields.forEach((field) => syncField(field));

    const onBlur = (e: Event) => {
      const target = e.target as HTMLInputElement | HTMLTextAreaElement;
      if (!target?.dataset?.error) return;
      const state = dirtyState.get(target) ?? { hasInteracted: false, hasBlurred: false };
      state.hasBlurred = true;
      dirtyState.set(target, state);
      syncField(target, true);
    };

    const onInput = (e: Event) => {
      const target = e.target as HTMLInputElement | HTMLTextAreaElement;
      if (!target?.dataset?.error) return;
      const state = dirtyState.get(target) ?? { hasInteracted: false, hasBlurred: false };
      state.hasInteracted = true;
      dirtyState.set(target, state);
      syncField(target, false);
    };

    const onInvalid = (e: Event) => {
      const target = e.target as HTMLInputElement | HTMLTextAreaElement;
      if (!target?.dataset?.error) return;
      dirtyState.set(target, { hasInteracted: true, hasBlurred: true });
      announced.add(target);
      syncField(target, false);
    };

    form.addEventListener("blur", onBlur, true);
    form.addEventListener("input", onInput);
    form.addEventListener("invalid", onInvalid, true);

    return () => {
      if (announceTimer) clearTimeout(announceTimer);
      form.removeEventListener("blur", onBlur, true);
      form.removeEventListener("input", onInput);
      form.removeEventListener("invalid", onInvalid, true);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const fd = new FormData(form);
    setSubmitting(true);
    setResult(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(fd.get("name") || ""),
          email: String(fd.get("email") || ""),
          project: String(fd.get("project") || ""),
          companyWebsite: String(fd.get("companyWebsite") || ""),
        }),
      });
      const data: SubmitResponse = await res.json();
      setResult(data);
      if (res.ok && data.delivered) {
        form.reset();
      }
    } catch {
      setResult({
        error: `Could not reach the server. Please email ${personalInfo.email} directly.`,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 border-t border-[rgba(245,241,234,0.09)] scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Direct channels */}
        <div className="lg:col-span-5">
          <p className="font-mono-label text-[#FF6B4A] mb-3">04 / CONTACT</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F1EA] mb-5">
            Let&apos;s talk engineering.
          </h2>
          <p className="text-sm sm:text-base text-[#e1bfb8] leading-relaxed mb-8">
            Open to Software Engineering internships, full-stack roles, and
            selective production builds. Reach out directly or send a short note.
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-between p-4 bg-[#261815] border border-[rgba(245,241,234,0.1)] hover:border-[#FF6B4A]/60 transition-colors"
            >
              <span className="flex items-center gap-3 text-sm text-[#F5F1EA]">
                <Mail size={16} className="text-[#FF6B4A]" aria-hidden="true" />
                {personalInfo.email}
              </span>
              <ArrowUpRight size={15} className="text-[#a88a83]" aria-hidden="true" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-[#261815] border border-[rgba(245,241,234,0.1)] hover:border-[#FF6B4A]/60 transition-colors"
            >
              <span className="flex items-center gap-3 text-sm text-[#F5F1EA]">
                <Linkedin size={16} className="text-[#56d9d8]" aria-hidden="true" />
                linkedin.com/in/devharis
              </span>
              <ArrowUpRight size={15} className="text-[#a88a83]" aria-hidden="true" />
            </a>

            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
              className="flex items-center justify-between p-4 bg-[#261815] border border-[rgba(245,241,234,0.1)] hover:border-[#FF6B4A]/60 transition-colors"
            >
              <span className="flex items-center gap-3 text-sm text-[#F5F1EA]">
                <Phone size={16} className="text-[#FF6B4A]" aria-hidden="true" />
                {personalInfo.phone}
              </span>
              <ArrowUpRight size={15} className="text-[#a88a83]" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right: Accessible validated form */}
        <div className="lg:col-span-7 bg-[#261815] border border-[rgba(245,241,234,0.12)] p-7 sm:p-10">
          {/* Single polite live region for post-interaction validation announcements */}
          <div ref={announcerRef} aria-live="polite" className="visually-hidden" />

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-7">
            {/* Honeypot spam trap */}
            <div className="visually-hidden" aria-hidden="true">
              <label htmlFor="companyWebsite">Company Website</label>
              <input
                type="text"
                id="companyWebsite"
                name="companyWebsite"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div>
              <label
                htmlFor="contact-name"
                className="block font-mono-label text-xs text-[#F5F1EA] mb-1"
              >
                Your Name
              </label>
              <span
                id="contact-name-hint"
                className="block text-xs text-[#a88a83] mb-1.5"
              >
                At least 2 characters
              </span>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={100}
                autoComplete="name"
                placeholder="Jane Doe"
                aria-invalid="false"
                aria-describedby="contact-name-hint"
                data-error="contact-name-error"
                className="form-field-control"
              />
              <p id="contact-name-error" className="form-error-msg">
                Please enter your name (at least 2 characters).
              </p>
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block font-mono-label text-xs text-[#F5F1EA] mb-1"
              >
                Email Address
              </label>
              <span
                id="contact-email-hint"
                className="block text-xs text-[#a88a83] mb-1.5"
              >
                Format: you@company.com
              </span>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                aria-invalid="false"
                aria-describedby="contact-email-hint"
                data-error="contact-email-error"
                className="form-field-control"
              />
              <p id="contact-email-error" className="form-error-msg">
                Enter an email address in the format you@company.com.
              </p>
            </div>

            <div>
              <label
                htmlFor="contact-project"
                className="block font-mono-label text-xs text-[#F5F1EA] mb-1"
              >
                Role or Project Details
              </label>
              <span
                id="contact-project-hint"
                className="block text-xs text-[#a88a83] mb-1.5"
              >
                Share a brief note (minimum 10 characters)
              </span>
              <textarea
                id="contact-project"
                name="project"
                rows={4}
                required
                minLength={10}
                maxLength={2000}
                placeholder="Tell me about the engineering team, role, or problem you're solving..."
                aria-invalid="false"
                aria-describedby="contact-project-hint"
                data-error="contact-project-error"
                className="form-field-control resize-y"
              />
              <p id="contact-project-error" className="form-error-msg">
                Please enter at least 10 characters describing the role or project.
              </p>
            </div>

            {result?.error && (
              <div
                role="alert"
                className="p-4 border border-[#ff7a70]/50 bg-[#1d100e] text-sm text-[#ff7a70]"
              >
                {result.error}
              </div>
            )}

            {result && !result.error && (
              <div
                role="status"
                className="p-4 border border-[#56d9d8]/50 bg-[#0f3d3e]/35 text-sm text-[#F5F1EA] space-y-3"
              >
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#56d9d8] shrink-0" aria-hidden="true" />
                  <span>{result.message}</span>
                </p>
                {result.fallbackMailto && (
                  <a
                    href={result.fallbackMailto}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B4A] text-[#1d100e] font-mono-label font-bold text-xs hover:bg-[#ff856b] transition-colors"
                  >
                    Open Pre-Filled Email
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
              </div>
            )}

            <Magnetic>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#FF6B4A] text-[#1d100e] font-mono-label font-bold hover:bg-[#ff856b] disabled:opacity-60 transition-colors cursor-pointer"
              >
                <Send size={14} aria-hidden="true" />
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </Magnetic>
          </form>
        </div>
      </div>
    </section>
  );
}
