export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    id: "services",
    question: "What services do you offer?",
    answer:
      "Full stack web and mobile development — SaaS dashboards, marketing sites, MVPs, and internal tools. I handle UI, APIs, databases, and deployment with a focus on clean design and smooth interactions.",
  },
  {
    id: "timeline",
    question: "How long does a project usually take?",
    answer:
      "A landing page or small feature often takes 1–2 weeks. Full products typically run 4–12 weeks depending on scope. You'll get a clear timeline and milestones once we align on requirements.",
  },
  {
    id: "revisions",
    question: "Can I ask for more revisions if needed?",
    answer:
      "Yes. I build in feedback rounds at key milestones so you can refine before launch. If scope grows, we'll agree on any extra revisions upfront so everything stays transparent.",
  },
  {
    id: "tools",
    question: "What tools do you use?",
    answer:
      "React, Next.js, TypeScript, Node.js, React Native, Tailwind CSS, Figma, and modern backends like PostgreSQL and Supabase. I choose tools that fit your product goals and long-term maintainability.",
  },
  {
    id: "code",
    question: "Will I need to code anything?",
    answer:
      "No. I handle design and development end to end. You'll review progress, share feedback, and approve milestones — no coding required on your side unless you want to collaborate technically.",
  },
];
