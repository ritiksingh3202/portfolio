export type ImpactStat = {
  id: string;
  value: number;
  suffix: string;
  label: string;
  variant: "experience" | "projects" | "satisfaction";
};

export const impactStats: ImpactStat[] = [
  {
    id: "experience",
    value: 2,
    suffix: "+",
    label: "Years of experience in design and development",
    variant: "experience",
  },
  {
    id: "projects",
    value: 20,
    suffix: "+",
    label: "Projects shipped",
    variant: "projects",
  },
  {
    id: "satisfaction",
    value: 100,
    suffix: "%",
    label: "Client satisfaction rate built on trust and results.",
    variant: "satisfaction",
  },
];
