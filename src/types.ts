export type PageId =
  | 'home'
  | 'about'
  | 'team'
  | 'initiatives'
  | 'legal-awareness'
  | 'gallery'
  | 'contact'
  | 'sitemap';

export interface NavItem {
  id: PageId;
  label: string;
  href: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  isPlaceholder?: boolean;
}

export interface InitiativeItem {
  id: string;
  title: string;
  tag: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  highlights: string[];
}

export interface LegalTopic {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  keyPoints: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Awareness Programs' | 'Community Outreach' | 'Youth Meetings';
  image: string;
  alt: string;
  caption: string;
  date?: string;
  location?: string;
  tags?: string[];
}

export interface OrganizationStat {
  value: string;
  label: string;
  description?: string;
}

export interface PurposeCard {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: 'Scale' | 'ShieldCheck' | 'Users' | 'Sparkles';
}
