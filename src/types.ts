export enum TriangleDirection {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  "BOTTOM-LEFT" = "bottom-left",
  "BOTTOM-RIGHT" = "bottom-right",
  "TOP-LEFT" = "top-left",
  "TOP-RIGHT" = "top-right",
}

export enum Sizes {
  TINY = "tiny",
  NORMAL = "normal",
  BIG = "big",
  HUGE = "huge",
}

interface CompanyType {
  name: string;
  url: string;
  description: string;
}

interface LinkType {
  url: string;
  icon: string;
  label: string;
}

export interface ExperienceType {
  company: CompanyType;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  role: string;
  stack: string[];
  skills: string[];
  isRecent: boolean;
}

export interface ProfileInfoType {
  owner: string;
  role: string;
  email: string;
  dob: string;
  nationality: string[];
  phone: string;
  profilePicture: string;
  links?: LinkType[];
  resume?: string;
}

export interface PortfolioType extends ProfileInfoType {
  experiences: ExperienceType[];
}
