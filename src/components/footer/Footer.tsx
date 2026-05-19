"use client";

import { useState, useCallback } from "react";
import { m, useReducedMotion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Loader2, Check } from "lucide-react";
import { EASE } from "@/motion/config";

export type FooterProps = {
  name: string;
  phone: string;
  email: string;
  instagramUrl: string;
  linkedinUrl: string;
  whatsappNumber: string;
};

function FloatingField({
  id,
  label,
  type = "text",
  value,
  onChange,
  multiline,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
}) {
  const shared = {
    id,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(e.target.value),
    placeholder: " ",
    className:
      "footer-input peer w-full rounded-xl px-5 py-4 text-base transition-all duration-200 ease-out",
    autoComplete: id === "email" ? "email" : id === "name" ? "name" : undefined,
  };

  return (
    <div className={`footer-input-wrap ${multiline ? "" : ""}`}>
      {multiline ? (
        <textarea {...shared} rows={6} className={`${shared.className} min-h-[160px] resize-y`} />
      ) : (
        <input type={type} {...shared} />
      )}
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default function Footer({
  name,
  phone,
  email,
  instagramUrl,
  linkedinUrl,
  whatsappNumber,
}: FooterProps) {
  const reduced = useReducedMotion();
  const [fullName, setFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const whatsappHref = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

  const handleSubmit = useCallback(async () => {
    if (loading || success) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 900));

    const subject = encodeURIComponent(`Portfolio message from ${fullName || "Visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\nName: ${fullName}\nReply to: ${userEmail}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    setLoading(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3200);
  }, [fullName, userEmail, message, email, loading, success]);

  const socials = [
    {
      icon: FaInstagram,
      href: instagramUrl,
      label: "Instagram",
      className: "footer-social-instagram",
    },
    {
      icon: FaLinkedin,
      href: linkedinUrl,
      label: "LinkedIn",
      className: "footer-social-linkedin",
    },
    {
      icon: FaWhatsapp,
      href: whatsappHref,
      label: "WhatsApp",
      className: "footer-social-whatsapp",
    },
  ];

  return (
    <footer
      id="contact"
      className="site-footer relative w-full text-[var(--footer-text)]"
    >
      <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 sm:pt-32 md:pb-24 md:pt-36 lg:pt-40">
        <div
          className="footer-glow pointer-events-none absolute left-1/2 top-[22%] h-[min(480px,65vw)] w-[min(680px,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-full"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-xl">
          <m.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE.out }}
            className="mb-10 text-center md:mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-[var(--footer-text)] sm:text-4xl md:text-5xl">
              Let&apos;s work together
            </h2>
            <p className="mt-3 text-sm text-[var(--footer-muted)] sm:text-base md:mt-4">
              Drop me a message or reach out directly
            </p>
          </m.div>

          <div className="footer-form-card rounded-2xl p-5 sm:p-7 md:p-8">
            <div className="space-y-4">
              <FloatingField
                id="name"
                label="Full Name"
                value={fullName}
                onChange={setFullName}
              />
              <FloatingField
                id="email"
                label="Enter your email"
                type="email"
                value={userEmail}
                onChange={setUserEmail}
              />
              <FloatingField
                id="message"
                label="Write a message here..."
                value={message}
                onChange={setMessage}
                multiline
              />

              <m.button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                whileTap={reduced ? undefined : { scale: 0.99 }}
                className="mt-1 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--footer-btn-bg)] px-6 py-4 text-base font-semibold text-[var(--footer-btn-text)] shadow-[0_4px_14px_rgba(15,23,42,0.18)] transition-all duration-200 ease-out hover:opacity-90 hover:shadow-[0_6px_20px_rgba(15,23,42,0.22)] disabled:opacity-80 dark:shadow-none"
                data-cursor-hover
              >
                {loading && <Loader2 className="h-5 w-5 animate-spin" />}
                {success && !loading && (
                  <m.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  >
                    <Check className="h-5 w-5 text-emerald-500" />
                  </m.span>
                )}
                {success ? "Sent ✓" : loading ? "Sending…" : "Submit"}
              </m.button>

              <p className="pt-1 text-center text-xs text-[var(--footer-muted)] sm:text-sm">
                Your info stays private.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-bar border-t border-[var(--footer-divider)] bg-[var(--footer-bar-bg)] px-4 py-12 sm:px-6 md:py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8 lg:gap-12">
          <div className="space-y-2.5 md:justify-self-start">
            <p className="text-sm font-medium text-[var(--footer-muted)]">Say hello!</p>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="block text-lg font-semibold text-[var(--footer-text)] transition-opacity duration-200 hover:opacity-75 sm:text-xl"
              data-cursor-hover
            >
              {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="block text-lg font-semibold text-[var(--footer-text)] transition-opacity duration-200 hover:opacity-75 sm:text-xl"
              data-cursor-hover
            >
              {email}
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 md:justify-self-center">
            <p className="footer-name-shimmer text-center text-3xl font-bold tracking-tight sm:text-4xl">
              {name}
            </p>
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              {socials.map(({ icon: Icon, href, label, className }) => (
                <m.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={
                    reduced
                      ? undefined
                      : { y: [0, -6, 0], transition: { duration: 0.45, ease: EASE.out } }
                  }
                  className={`footer-social-link flex h-11 w-11 items-center justify-center rounded-full border border-[var(--footer-social-border)] bg-[var(--footer-social-bg)] text-[var(--footer-text)] shadow-sm transition-colors duration-200 sm:h-12 sm:w-12 ${className}`}
                  data-cursor-hover
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </m.a>
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
