export interface ProjectProps {
  name: string;
  text: string;
  image: string;
  path: string;
  setCardProject?: (event: boolean) => void;
}
export interface ProjectsProps {
  setCardProject: (event: boolean) => void;
  setGithub: (event: boolean) => void;
  path: string;
}

export interface ProjectWebsiteProps {
  name: string;
  image: string;
  text: string;
  skills: string;
}

export interface projectProps {
  id?: string;
  text: string;
  image: string;
  skills: string;
  name: string;
}

export interface SliderProps {
  setValue: (event: number) => void;
}
