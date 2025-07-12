
export interface JourneyItem {
  type: 'Education' | 'Experience';
  title: string;
  organization: string;
  period: string;
  description: string[];
  logo?: React.ReactNode;
  link?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  note?: string;
}

export interface Skill {
  name: string;
  slug: string;
  isDark?: boolean;
  customIconUrl?: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  date: string;
  abstract: string;
  link: string;
  keywords: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  issued: string;
  credentialId: string;
  link?: string;
}