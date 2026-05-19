"use client";

import { m } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { contactInfo } from "@/data/about";
import { SectionHeading } from "./SectionHeading";
import { EASE } from "@/motion/config";

const contactIcons = {
  phone: Phone,
  email: Mail,
  location: MapPin,
} as const;

const inputClass =
  "about-input w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-colors";

export function AboutContact() {
  return (
    <section id="about-contact">
      <SectionHeading icon={Send} title="Contact" />

      <m.h3
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: EASE.out }}
        className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold tracking-tight text-foreground mb-8 md:mb-10 lg:mb-12"
      >
        Let&apos;s Get in Touch!
      </m.h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="space-y-4"
        >
          {contactInfo.map((item) => {
            const Icon = contactIcons[item.icon];
            return (
              <m.div
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: EASE.out }}
                whileHover={{ y: -2 }}
                className="about-card p-5 flex items-center gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl about-icon-wrap">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="font-semibold text-foreground text-sm md:text-base break-words">
                    {item.value}
                  </p>
                </div>
              </m.div>
            );
          })}
        </m.div>

        <m.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE.out, delay: 0.1 }}
          onSubmit={(e) => e.preventDefault()}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Full Name
            </label>
            <input type="text" placeholder="Your Name" className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input type="email" placeholder="Your Email" className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Phone Number
            </label>
            <input type="tel" placeholder="Your Phone" className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Your message"
              className={`${inputClass} resize-none`}
            />
          </div>
          <m.button
            type="submit"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25, ease: EASE.out }}
            className="w-full rounded-xl bg-primary text-primary-foreground py-4 text-sm font-bold hover:brightness-110 transition-all about-primary-btn"
          >
            Send Message
          </m.button>
        </m.form>
      </div>
    </section>
  );
}
