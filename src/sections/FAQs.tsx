"use client";

import { useState } from "react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs, type FaqItem } from "@/data/faqs";
import { VIEWPORT, EASE, DURATION } from "@/motion/config";
import { staggerContainer, fadeUp } from "@/motion/variants";

function FaqRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const reduced = useReducedMotion() ?? false;

  return (
    <m.div variants={fadeUp} className="faq-row border-b border-[var(--faq-row-border)] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7 md:py-8"
      >
        <span className="text-base font-medium leading-snug text-[var(--faq-question)] sm:text-lg md:text-xl">
          {item.question}
        </span>

        <m.span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--faq-toggle-bg)] text-[var(--faq-question)] sm:h-10 sm:w-10"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: DURATION.fast, ease: EASE.out }}
        >
          <ChevronDown size={18} strokeWidth={2} className="sm:h-5 sm:w-5" />
        </m.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            key="answer"
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{
              height: { duration: DURATION.normal, ease: EASE.out },
              opacity: { duration: DURATION.fast, ease: EASE.out },
            }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 text-sm leading-relaxed text-[var(--faq-answer)] sm:pb-7 sm:text-base md:pb-8">
              {item.answer}
            </p>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
}

export function FAQs() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faqs"
      className="faq-section relative overflow-hidden scroll-mt-28 py-16 sm:py-20 md:py-28"
    >
      <div
        className="faq-section-glow pointer-events-none absolute -left-32 top-1/4 h-[min(520px,80vw)] w-[min(520px,80vw)] -translate-y-1/2 rounded-full"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <m.header
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.slow, ease: EASE.out }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-[var(--faq-question)] sm:text-4xl md:text-5xl">
            FAQs
          </h2>
          <p className="mt-3 text-sm text-[var(--faq-answer)] sm:mt-4 sm:text-base md:text-lg">
            A few common questions, answered simply.
          </p>
        </m.header>

        <m.div
          className="mx-auto max-w-3xl"
          variants={staggerContainer(0.08, 0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {faqs.map((item) => (
            <FaqRow
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </m.div>
      </div>
    </section>
  );
}
