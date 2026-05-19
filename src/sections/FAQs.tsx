"use client";

import { useState } from "react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs, type FaqItem } from "@/data/faqs";
import { SectionHeader } from "@/components/motion/SectionHeader";
import { VIEWPORT, EASE, DURATION } from "@/motion/config";
import { staggerContainer, fadeUp } from "@/motion/variants";
import { cn } from "@/lib/utils";

function FaqAccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const reduced = useReducedMotion() ?? false;

  return (
    <m.div
      variants={fadeUp}
      layout={!reduced}
      className={cn(
        "faq-item group relative overflow-hidden rounded-2xl border transition-colors duration-300",
        isOpen
          ? "border-primary/30 bg-[var(--faq-item-open-bg)] shadow-[var(--faq-item-open-shadow)]"
          : "border-[var(--faq-border)] bg-[var(--faq-item-bg)] hover:border-primary/20 hover:shadow-[var(--faq-item-hover-shadow)]"
      )}
    >
      <m.div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl"
        animate={
          isOpen && !reduced
            ? { opacity: 1, scale: 1.2 }
            : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: DURATION.normal, ease: EASE.out }}
      />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="relative flex w-full items-start gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
      >
        <span className="mt-0.5 shrink-0 font-mono text-xs font-semibold tabular-nums text-primary/70 sm:text-sm">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="flex-1 pr-2 text-base font-semibold leading-snug text-foreground sm:text-lg">
          {item.question}
        </span>

        <m.span
          className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--faq-border)] bg-[var(--faq-icon-bg)] text-foreground"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: DURATION.fast, ease: EASE.out }}
        >
          <Plus size={18} strokeWidth={2.25} />
        </m.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            key="content"
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={
              reduced
                ? { opacity: 1 }
                : { height: "auto", opacity: 1 }
            }
            exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{
              height: { duration: DURATION.normal, ease: EASE.out },
              opacity: { duration: DURATION.fast, ease: EASE.out },
            }}
            className="overflow-hidden"
          >
            <m.p
              initial={reduced ? false : { y: 8 }}
              animate={{ y: 0 }}
              exit={{ y: 4 }}
              transition={{ duration: DURATION.fast, ease: EASE.out }}
              className="border-t border-[var(--faq-border)] px-5 pb-5 pt-0 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pb-6 sm:pl-[3.25rem] sm:text-base"
            >
              <span className="block pt-4">{item.answer}</span>
            </m.p>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
}

export function FAQs() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faqs"
      className="faq-section relative overflow-hidden scroll-mt-28 py-20 sm:py-24 md:py-32"
    >
      <m.div
        className="pointer-events-none absolute left-1/4 top-20 h-72 w-72 rounded-full bg-primary/8 blur-[100px]"
        animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <m.div
        className="pointer-events-none absolute bottom-10 right-1/4 h-64 w-64 rounded-full bg-violet-500/10 blur-[90px] dark:bg-violet-500/15"
        animate={{ x: [0, -20, 0], y: [0, 12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <SectionHeader
          number="03"
          label="FAQ"
          title={
            <>
              Questions, <span className="text-primary italic">answered.</span>
            </>
          }
        />

        <m.div
          className="mx-auto max-w-3xl space-y-3 sm:space-y-4"
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {faqs.map((item, index) => (
            <FaqAccordionItem
              key={item.id}
              item={item}
              index={index}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </m.div>

        <m.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.slow, ease: EASE.out, delay: 0.3 }}
          className="mx-auto mt-10 max-w-xl text-center text-sm text-muted-foreground sm:mt-12 sm:text-base"
        >
          Still curious?{" "}
          <a
            href="#contact"
            className="font-medium text-primary underline-offset-4 transition-opacity hover:underline hover:opacity-80"
          >
            Drop me a message
          </a>{" "}
          — I&apos;m happy to help.
        </m.p>
      </div>
    </section>
  );
}
