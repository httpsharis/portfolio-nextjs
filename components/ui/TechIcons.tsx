"use client";

import React, { useId } from "react";

export function TechIcon({
  name,
  className = "w-4 h-4",
}: {
  name: string;
  className?: string;
}) {
  const maskId = useId();
  const norm = name.toLowerCase().replace(/[\s.\-_]/g, "");

  if (norm.includes("typescript")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3 3h18v18H3V3zm10.2 9.4h-2v6.6H9.6v-6.6H7.6V11h5.6v1.4zm1.5 5.1c.6.4 1.4.6 2.2.6 1.5 0 2.5-.8 2.5-2 0-1-.6-1.6-1.9-2.1-.9-.3-1.2-.5-1.2-.9 0-.4.4-.7 1-.7.6 0 1.1.2 1.6.5l.5-1.2c-.5-.3-1.2-.5-2-.5-1.5 0-2.5.8-2.5 2 0 1 .7 1.6 2 2 .8.3 1.1.5 1.1.9 0 .4-.4.7-1.1.7-.7 0-1.3-.2-1.8-.6l-.4 1.3z" />
      </svg>
    );
  }

  if (norm.includes("react")) {
    return (
      <svg
        className={className}
        viewBox="-11.5 -10.23174 23 20.46348"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
      >
        <circle cx="0" cy="0" r="2.05" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  if (norm.includes("next")) {
    return (
      <svg className={className} viewBox="0 0 180 180" fill="none" aria-hidden="true">
        <mask height="180" id={maskId} maskUnits="userSpaceOnUse" width="180" x="0" y="0">
          <circle cx="90" cy="90" fill="white" r="90" />
        </mask>
        <g mask={`url(#${maskId})`}>
          <circle cx="90" cy="90" fill="currentColor" r="90" />
          <path
            d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
            fill="#1d100e"
          />
          <rect fill="#1d100e" height="72" width="12" x="115" y="54" />
        </g>
      </svg>
    );
  }

  if (norm.includes("nest")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 3c4.8 0 8.5 3.4 8.5 7.8 0 4.6-3.7 8.4-8.5 10.2C7.2 19.2 3.5 15.4 3.5 10.8 3.5 6.4 7.2 3 12 3z" />
        <path d="M8.5 11.5c1-2.5 3.2-3.8 5.8-3.3 1.8.4 2.7 1.8 2.4 3.5-.4 2-2.4 3.4-4.7 3.4-1.7 0-2.9-.8-3.5-2" />
      </svg>
    );
  }

  if (norm.includes("python")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11.9 2C8.3 2 8.5 3.5 8.5 3.5v1.6h3.5v.5H7.1S4.7 5.3 4.7 9c0 3.7 2.1 3.5 2.1 3.5h1.2v-1.7s-.1-2.1 2.1-2.1h3.5s2 0 2-1.9V3.9S15.9 2 11.9 2zm-1.9 1.2a.7.7 0 110 1.4.7.7 0 010-1.4zM12.1 22c3.6 0 3.4-1.5 3.4-1.5v-1.6H12v-.5h4.9s2.4.3 2.4-3.4c0-3.7-2.1-3.5-2.1-3.5H16v1.7s.1 2.1-2.1 2.1h-3.5s-2 0-2 1.9v2.9S8.1 22 12.1 22zm1.9-1.2a.7.7 0 110-1.4.7.7 0 010 1.4z" />
      </svg>
    );
  }

  if (norm.includes("supabase")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 2L4 13.8h7.2L10.5 22 20 10.2h-7.2L13.5 2z" />
      </svg>
    );
  }

  if (norm.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2L2 7.7v11.6L12 25l10-5.7V7.7L12 2zm7.9 16.2l-7.9 4.5-7.9-4.5V8.8l7.9-4.5 7.9 4.5v9.4z" />
      </svg>
    );
  }

  if (norm.includes("express")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.8 7.3c-.4-.4-.9-.7-1.5-.7H8.5c-.8 0-1.5.7-1.5 1.5v7.8c0 .8.7 1.5 1.5 1.5h8.8c.6 0 1.1-.3 1.5-.7l3.7-4.7-3.7-4.7zM16 13h-4v2h-2V9h6v4z" />
      </svg>
    );
  }

  if (norm.includes("mongo")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 1.5c-4.8 6.6-4.5 10.6-4.5 10.6 0 3.9 2.7 7.4 6 8.9 0 0-.8-2.6 1.5-4.4 2.5-2 1.8-4.9 1.8-4.9s.7 2.1-.2 3.6c-.9 1.5-.2 2.7-.2 2.7 3.3-1.5 6-5 6-8.9 0 0 .3-4-4.4-10.6 0 0-3 3.9-3 3.9s-3-3.9-3-3.9z" />
      </svg>
    );
  }

  if (norm.includes("postgres") || norm.includes("sql")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    );
  }

  if (norm.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    );
  }

  if (norm.includes("docker")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.186V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.186v1.888c0 .102.084.185.186.185M23.79 11.29c-.37-.24-.97-.33-1.63-.25-.13-.53-.41-.99-.81-1.34l-.4-.32-.38.35c-.83.77-1.07 1.83-.98 2.6-.47.22-.98.37-1.52.43-.88.1-1.78-.05-2.61-.43-.72-.33-1.37-.8-1.92-1.38l-.34-.36-.34.36c-.95 1.01-2.17 1.63-3.52 1.79H.12C.05 14.53 0 14.99 0 15.46c0 1.76.57 3.4 1.55 4.75 1.34 1.84 3.43 3.09 5.86 3.49.88.15 1.78.23 2.69.23 2.92 0 5.67-.81 8.01-2.26 3.45-2.14 5.75-5.91 5.89-10.22.02-.05.02-.1.02-.16 0-.01-.06-.03-.23 0" />
      </svg>
    );
  }

  if (norm.includes("git")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M2.6 10.59L8.38 4.8a1.37 1.37 0 0 1 1.94 0l1.45 1.45-2.28 2.29a2.07 2.07 0 0 0-.67 1.48 2.06 2.06 0 0 0 .54 1.41L7.3 13.48a2 2 0 1 0 1.35 1.36l1.9-1.9a2.14 2.14 0 0 0 1.25.32 2.08 2.08 0 0 0 2.08-2.08 2 2 0 0 0-.58-1.42l2.25-2.25 5.83 5.83a1.37 1.37 0 0 1 0 1.94l-5.78 5.79a1.37 1.37 0 0 1-1.94 0L2.6 12.53a1.37 1.37 0 0 1 0-1.94z" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
