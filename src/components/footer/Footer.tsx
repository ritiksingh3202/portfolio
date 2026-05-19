"use client";

import { useState, useCallback } from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export type FooterProps = {
  name: string;
  phone: string;
  email: string;
  instagramUrl: string;
  linkedinUrl: string;
  whatsappNumber: string;
};

const inputClass =
  "footer-input w-full rounded-xl px-5 py-4 text-base transition-all duration-200 ease-out";

export default function Footer({
  name,
  phone,
  email,
  instagramUrl,
  linkedinUrl,
  whatsappNumber,
}: FooterProps) {
  const [fullName, setFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const whatsappHref = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

  const handleSubmit = useCallback(() => {
    const subject = encodeURIComponent(`Portfolio message from ${fullName || "Visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n---\nName: ${fullName}\nReply to: ${userEmail}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }, [fullName, userEmail, message, email]);

  const socials = [
    { icon: FaInstagram, href: instagramUrl, label: "Instagram" },
    { icon: FaLinkedin, href: linkedinUrl, label: "LinkedIn" },
    { icon: FaWhatsapp, href: whatsappHref, label: "WhatsApp" },
  ];

  return (
    <footer
      id="contact"
      className="site-footer relative w-full text-[var(--footer-text)]"
    >
      {/* Contact + form */}
      <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 sm:pt-32 md:pb-24 md:pt-36 lg:pt-40">
        <div
          className="footer-glow pointer-events-none absolute left-1/2 top-[22%] h-[min(480px,65vw)] w-[min(680px,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-full"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-xl">
          <div className="mb-10 text-center md:mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--footer-text)] sm:text-4xl md:text-5xl">
              Let&apos;s work together
            </h2>
            <p className="mt-3 text-sm text-[var(--footer-muted)] sm:text-base md:mt-4">
              Drop me a message or reach out directly
            </p>
          </div>

          <div className="footer-form-card rounded-2xl p-5 sm:p-7 md:p-8">
            <div className="space-y-4">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className={inputClass}
                autoComplete="name"
              />
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Enter your email"
                className={inputClass}
                autoComplete="email"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a message here..."
                rows={6}
                className={`${inputClass} min-h-[160px] resize-y`}
              />

              <button
                type="button"
                onClick={handleSubmit}
                className="mt-1 w-full rounded-full bg-[var(--footer-btn-bg)] px-6 py-4 text-base font-semibold text-[var(--footer-btn-text)] shadow-[0_4px_14px_rgba(15,23,42,0.18)] transition-all duration-200 ease-out hover:opacity-90 hover:shadow-[0_6px_20px_rgba(15,23,42,0.22)] active:scale-[0.99] dark:shadow-none"
              >
                Submit
              </button>

              <p className="pt-1 text-center text-xs text-[var(--footer-muted)] sm:text-sm">
                Your info stays private.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom bar: contact · name & socials · copyright */}
      <div className="footer-bar border-t border-[var(--footer-divider)] bg-[var(--footer-bar-bg)] px-4 py-12 sm:px-6 md:py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8 lg:gap-12">
          <div className="space-y-2.5 md:justify-self-start">
            <p className="text-sm font-medium text-[var(--footer-muted)]">Say hello!</p>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="block text-lg font-semibold text-[var(--footer-text)] transition-opacity duration-200 hover:opacity-75 sm:text-xl"
            >
              {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="block text-lg font-semibold text-[var(--footer-text)] transition-opacity duration-200 hover:opacity-75 sm:text-xl"
            >
              {email}
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 md:justify-self-center">
            <p className="text-center text-3xl font-bold tracking-tight text-[var(--footer-text)] sm:text-4xl">
              {name}
            </p>
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="footer-social-link flex h-11 w-11 items-center justify-center rounded-full text-[var(--footer-text)] shadow-sm transition-all duration-200 ease-out hover:scale-110 hover:shadow-md sm:h-12 sm:w-12"
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <p className="text-sm text-[var(--footer-muted)] md:justify-self-end md:text-right">
            © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
