export type PortfolioShotType = "landing" | "dashboard" | "web";

export interface PortfolioShot {
  src: string;
  type: PortfolioShotType;
}

export interface PortfolioProject {
  id: "delfincheckin" | "mario" | "rafa";
  url: string;
  shots: PortfolioShot[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "delfincheckin",
    url: "https://delfincheckin.com/",
    shots: [
      { src: "/portfolio/delfin-landing.png", type: "landing" },
      { src: "/portfolio/delfin-dashboard.png", type: "dashboard" },
      { src: "/portfolio/delfin-calculator.png", type: "dashboard" },
    ],
  },
  {
    id: "mario",
    url: "https://marioentrenadorpersonal.pro/",
    shots: [
      { src: "/portfolio/mario-landing.png", type: "landing" },
      { src: "/portfolio/mario-dashboard.png", type: "dashboard" },
      { src: "/portfolio/mario-schedule.png", type: "dashboard" },
    ],
  },
  {
    id: "rafa",
    url: "https://rafaromera.info/",
    shots: [
      { src: "/portfolio/rafa-bio.png", type: "web" },
      { src: "/portfolio/rafa-music.png", type: "web" },
    ],
  },
];
