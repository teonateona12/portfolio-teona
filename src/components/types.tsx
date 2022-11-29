export interface HomePageProps {
  setPortfolioPage: (event: boolean) => void;
}

export interface ProjectProps {
  name: string;
  text: string;
  image: string;
  path: string;
  setCardProject?: (event: boolean) => void;
}

export interface PortfolioProps {
  cardProject: boolean;
  path:string
  setCardProject: (event: boolean) => void;
  setPortfolioPage: (event: boolean) => void;
}

export interface ProjectsProps {
  setCardProject: (event: boolean) => void;
  setGithub: (event: boolean) => void;
  path:string
}

export interface ProjectWebsiteProps {
  name: string;
}
