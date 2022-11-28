export interface HomePageProps {
  setPortfolioPage: (event: boolean) => void;
}

export interface ProjectProps {
  name: string;
  text: string;
  image: string;
  setCardProject?: (event: boolean) => void;
}

export interface PortfolioProps {
  cardProject: boolean;
  setCardProject: (event: boolean) => void;
  setPortfolioPage: (event: boolean) => void;
}

export interface ProjectsProps {
  setCardProject: (event: boolean) => void;
  setGithub: (event: boolean) => void;
}

export interface ProjectWebsiteProps {
  name: string;
}
