export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    id: "services",
    question: "What kind of projects do you take on?",
    answer:
      "I build full stack web and mobile products — SaaS dashboards, marketing sites, MVPs, and internal tools. I handle frontend, APIs, databases, and deployment, with a strong focus on clean UI and smooth interactions.",
  },
  {
    id: "timeline",
    question: "How long does a typical project take?",
    answer:
      "A focused landing page or small feature might take 1–2 weeks. Full products usually run 4–12 weeks depending on scope. I share a clear timeline and milestones after we align on requirements.",
  },
  {
    id: "remote",
    question: "Do you work remotely?",
    answer:
      "Yes. I collaborate with clients worldwide over async updates and scheduled calls. I'm comfortable with tools like GitHub, Figma, Slack, and Notion to keep everything transparent.",
  },
  {
    id: "stack",
    question: "What technologies do you use?",
    answer:
      "React, Next.js, TypeScript, Node.js, React Native, Tailwind CSS, and modern backends (PostgreSQL, Supabase, REST/GraphQL). I pick the stack that fits performance, maintainability, and your product goals.",
  },
  {
    id: "process",
    question: "What does your workflow look like?",
    answer:
      "Discovery → wireframes or quick prototypes → iterative builds with regular demos → polish, testing, and handoff. You get visible progress early so feedback is easy at every stage.",
  },
  {
    id: "start",
    question: "How do we get started?",
    answer:
      "Send a message through the contact form below with your idea, timeline, and budget range. I'll reply within 24–48 hours with next steps and whether we're a good fit.",
  },
];
