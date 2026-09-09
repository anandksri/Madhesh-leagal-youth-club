import {
  GalleryItem,
  InitiativeItem,
  LeadershipMember,
  LegalTopic,
  NavItem,
  OrganizationStat,
  PurposeCard,
  FAQItem,
} from '../types';

export const ORGANIZATION_CONFIG = {
  name: 'Madhesh Legal Youth Club',
  shortName: 'MLYC',
  slogan: 'Know Your Rights. Know Your Law.',
  supportingLine: 'Building a legally aware and empowered society across Nepal.',
  tagline: 'Built for awareness. Driven by justice.',
  vision: 'A legally aware society where everyone understands their rights and responsibilities.',
  mission: 'To spread practical legal awareness and help people understand and exercise their rights.',
  type: 'Non-profit Organization',
  primaryPurpose: 'Legal awareness and social justice',
  location: 'Birgunj, Nepal',
  phone: '9823941684',
  email: 'madheshlegalyouthclub@gmail.com',
  totalMembersCount: 30,
  establishedQuote: 'Awareness is the first step toward justice.',
  disclaimer:
    'Information provided through this website is intended for general awareness and educational purposes and should not be considered a substitute for professional legal advice.',
  aboutSummary:
    'Madhesh Legal Youth Club is a non-profit organization whose prominent motive is to promote legal awareness in society. Although the organization is based in Birgunj, its jurisdiction and mission are not limited to Madhesh Province. The organization aims to work across Nepal.',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Birgunj+Nepal',
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'HOME', href: '#home' },
  { id: 'about', label: 'ABOUT', href: '#about' },
  { id: 'team', label: 'TEAM', href: '#team' },
  { id: 'initiatives', label: 'INITIATIVES', href: '#initiatives' },
  { id: 'legal-awareness', label: 'LEGAL AWARENESS', href: '#legal-awareness' },
  { id: 'gallery', label: 'GALLERY', href: '#gallery' },
  { id: 'contact', label: 'CONTACT', href: '#contact' },
];

export const KEY_STATS: OrganizationStat[] = [
  {
    value: '30+',
    label: 'Members',
    description: 'Committed youth members and volunteers',
  },
  {
    value: '1',
    label: 'Core Mission',
    description: 'Promoting grassroots legal awareness',
  },
  {
    value: 'All Nepal',
    label: 'Our Vision',
    description: 'Expanding awareness across provinces',
  },
  {
    value: 'Birgunj',
    label: 'Our Base',
    description: 'Rooted in Madhesh Province',
  },
];

export const PURPOSE_CARDS: PurposeCard[] = [
  {
    id: 'p1',
    number: '01',
    title: 'Legal Awareness',
    description: 'Making legal knowledge easier to understand and access.',
    iconName: 'Scale',
  },
  {
    id: 'p2',
    number: '02',
    title: 'Rights & Justice',
    description: 'Helping people recognize and question violations of their rights.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'p3',
    number: '03',
    title: 'Community Empowerment',
    description: 'Supporting communities through practical awareness and education.',
    iconName: 'Users',
  },
  {
    id: 'p4',
    number: '04',
    title: 'Social Change',
    description: 'Challenging outdated concepts through knowledge and awareness.',
    iconName: 'Sparkles',
  },
];

export const LEADERSHIP_MEMBERS: LeadershipMember[] = [
  {
    id: 'shrawan-patel',
    name: 'Shrawan Patel',
    role: 'President',
    bio: 'Founder and President leading the organization’s civic mission, grassroots community outreach, and nationwide awareness vision.',
    image: 'images/members/shrawan-patel.jpeg',
    isPlaceholder: true,
  },
  {
    id: 'sanjana-shukla',
    name: 'Sanjana Shukla',
    role: 'Vice President',
    bio: 'Vice President dedicated to youth mobilization, community engagement, and promoting legal awareness among vulnerable groups.',
    image: 'images/members/sanjhana-shukla.jpeg',
    isPlaceholder: true,
  },
  {
    id: 'anil-patel',
    name: 'Anil Kr. Patel',
    role: 'Secretary',
    bio: 'Founder and Secretary managing organizational coordination, civic documentation, communications, and club initiatives.',
    image: 'images/members/anil-patel.jpeg',
    isPlaceholder: true,
  },
];

export const OBJECTIVES = [
  'Promote legal awareness in everyday society',
  'Raise constructive questions about legal rights',
  'Help citizens understand their duties alongside rights',
  'Support legal awareness among lower-income and vulnerable communities',
  'Challenge obsolete and harmful social concepts',
  'Encourage fair access to justice and legal literacy',
  'Expand youth-led legal awareness across Nepal',
];

export const INITIATIVES: InitiativeItem[] = [
  {
    id: 'legal-awareness-programs',
    title: 'Legal Awareness Programs',
    tag: 'Core Focus',
    shortDesc: 'Conducting structured educational sessions to explain constitutional rights and fundamental civic laws in accessible language.',
    fullDesc: 'Focused on demystifying fundamental citizen rights, basic procedural awareness, and common legal rights for youth, students, and local residents.',
    image: '/images/program/home-one.jpg',
    highlights: [
      'Accessible non-technical legal concepts',
      'Interactive Q&A for citizens',
      'Informational booklets and guidance',
    ],
  },
  {
    id: 'community-outreach',
    title: 'Community Outreach',
    tag: 'Grassroots',
    shortDesc: 'Connecting directly with lower-income and marginalized communities to facilitate understanding of civic entitlements and grievance mechanisms.',
    fullDesc: 'Ensuring that legal awareness reaches beyond urban centers into local wards and vulnerable populations who have historically lacked access to civic legal information.',
    image: '/images/program/home-two.jpg',
    highlights: [
      'Ward-level community dialogues',
      'Special focus on underprivileged groups',
      'Fostering civic trust and mutual support',
    ],
  },
  {
    id: 'youth-participation',
    title: 'Youth Participation',
    tag: 'Youth Led',
    shortDesc: 'Mobilizing students and energetic young individuals to actively participate in civic education, justice discussions, and leadership.',
    fullDesc: 'Empowering young leaders from diverse backgrounds to become community ambassadors of legal awareness and social responsibility.',
    image: '/images/program/home-three.jpg',
    highlights: [
      'Youth civic discussions',
      'Peer-to-peer legal learning',
      'Leadership and volunteer mobilization',
    ],
  },
  {
    id: 'rights-awareness',
    title: 'Rights Awareness',
    tag: 'Civic Literacy',
    shortDesc: 'Helping citizens recognize unlawful discrimination, civil liberties violations, and their right to fair treatment under the law.',
    fullDesc: 'Encouraging citizens to identify injustice, know where to turn for legitimate remedies, and build confidence when speaking up.',
    image: '/images/program/home-four.jpg',
    highlights: [
      'Understanding equality before law',
      'Civil rights recognition',
      'Safe reporting and grievance awareness',
    ],
  },
  {
    id: 'legal-education',
    title: 'Legal Education',
    tag: 'Knowledge',
    shortDesc: 'Developing straightforward reference guides, visual explainers, and resource modules covering fundamental everyday legal topics.',
    fullDesc: 'Bridging the gap between dense legal texts and practical public knowledge through easy-to-read educational formats.',
    image: '/images/program/home-five.jpg',
    highlights: [
      'Simplified civic reading materials',
      'Civic rights checklists',
      'Educational sessions in schools & clubs',
    ],
  },
  {
    id: 'social-awareness',
    title: 'Social Awareness',
    tag: 'Social Reform',
    shortDesc: 'Challenging outdated, harmful social customs and superstitions by upholding human dignity and legal protections.',
    fullDesc: 'Working proactively to reduce obsolete practices and encourage community dialogues grounded in dignity, equality, and civic mutual respect.',
    image: '/images/program/home-six.jpg',
    highlights: [
      'Advocating equality and dignity',
      'Questioning obsolete social prejudices',
      'Promoting progressive civic solidarity',
    ],
  },
];

export const LEGAL_TOPICS: LegalTopic[] = [
  {
    id: 'know-your-rights',
    category: 'Foundational',
    title: 'Know Your Rights',
    summary: 'Essential civic liberties, equality guarantees, and fundamental protections guaranteed to every citizen.',
    description: 'Every citizen is entitled to fundamental freedoms, equality before the law, and protection from arbitrary action. Awareness of these rights allows individuals to identify violations and seek appropriate legal remedies.',
    keyPoints: [
      'Right to equality and freedom from discrimination',
      'Right to personal liberty, dignity, and privacy',
      'Right to information regarding public actions and civic services',
      'Protection against unlawful detention and arbitrary treatment',
    ],
  },
  {
    id: 'know-your-duties',
    category: 'Civic Responsibility',
    title: 'Know Your Duties',
    summary: 'Understanding civic responsibilities that uphold public harmony, constitutional values, and community welfare.',
    description: 'Rights and duties go hand-in-hand. An empowered and legally conscious society recognizes that respecting the rights of others and fulfilling civic obligations builds a peaceful, stable nation.',
    keyPoints: [
      'Respecting the Constitution and laws of the country',
      'Protecting public property and natural heritage',
      'Fostering communal harmony, mutual tolerance, and social peace',
      'Abiding by civic duties without infringing upon others’ liberties',
    ],
  },
  {
    id: 'access-to-justice',
    category: 'Justice Systems',
    title: 'Access to Justice',
    summary: 'Demystifying how local judicial bodies, legal aid institutions, and mediation mechanisms function.',
    description: 'Access to justice should not be a privilege reserved only for the affluent. Understanding institutional avenues—including local judicial committees, dispute mediation centers, and state legal aid desks—empowers citizens to pursue legitimate resolutions.',
    keyPoints: [
      'Role of local municipal judicial committees',
      'Community dispute mediation and conciliation pathways',
      'Availability of free government legal aid for low-income citizens',
      'How to file basic complaints and grievance petitions properly',
    ],
  },
  {
    id: 'basic-legal-awareness',
    category: 'Everyday Law',
    title: 'Basic Legal Awareness',
    summary: 'Everyday legal concepts including basic contracts, consumer awareness, identity documentation, and property rights.',
    description: 'Many everyday community conflicts stem from simple documentation omissions or unawareness of basic procedures. Learning simple best practices helps prevent fraud and exploitation.',
    keyPoints: [
      'Importance of written agreements and official receipts',
      'Vital event registration (birth, marriage, death certificates)',
      'Consumer rights against substandard goods or deceptive practices',
      'Verifying land or tenancy documentation before agreements',
    ],
  },
  {
    id: 'community-resources',
    category: 'Guidance',
    title: 'Community Resources & Helplines',
    summary: 'Key directory of public helplines, civic administrative desks, and local assistance avenues in Nepal.',
    description: 'Knowing where to go in times of emergency or civic need is vital. This curated directory points community members toward official government bodies, emergency contacts, and public assistance desks.',
    keyPoints: [
      'National emergency and police assistance contacts',
      'Women and children helpline support channels',
      'District legal aid committee contact guidelines',
      'Local government ward citizen charter reference points',
    ],
  },
];

export const LEGAL_FAQS: FAQItem[] = [
  {
    question: 'Does Madhesh Legal Youth Club provide individual legal representation in court?',
    answer:
      'No. Madhesh Legal Youth Club is a dedicated non-profit civic awareness organization. We focus on public legal education, civic literacy, and community awareness. We do not provide court representation or formal legal counsel.',
  },
  {
    question: 'Who can participate in your legal awareness sessions and workshops?',
    answer:
      'Our programs are open to all community members—including youth, students, workers, women, and local residents. We prioritize accessible, welcoming environments with no barriers to participation.',
  },
  {
    question: 'Is Madhesh Legal Youth Club only active in Birgunj?',
    answer:
      'While our founding base is in Birgunj, Madhesh Province, our mission and jurisdiction are not limited to one region. The organization is actively working to expand legal awareness initiatives and branches across Nepal.',
  },
  {
    question: 'How can young people get involved as volunteers or members?',
    answer:
      'We welcome passionate youth who want to champion civic literacy and community rights. You can reach out through our Contact page or call our team at 9823941684 to learn about upcoming volunteer opportunities.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Civic Legal Awareness Session',
    category: 'Awareness Programs',
    image: '/images/program/home-five.jpg',
    alt: 'Community members attending a legal awareness gathering in Madhesh',
    caption: 'Interactive civic awareness gathering focused on fundamental constitutional rights, citizen protections, and civic duties.',
    date: 'February 2026',
    location: 'Birgunj, Parsa',
    tags: ['Constitutional Rights', 'Civic Literacy', 'Public Gathering'],
  },
  {
    id: 'g2',
    title: 'Community Outreach Dialogue',
    category: 'Community Outreach',
    image: '/images/about-one.jpg',
    alt: 'Volunteer explaining civic guidelines to community members in Birgunj',
    caption: 'Grassroots ward-level dialogue discussing fundamental citizen entitlements, local government dispute resolution, and public welfare access.',
    date: 'January 2026',
    location: 'Parsa District, Nepal',
    tags: ['Grassroots', 'Dispute Resolution', 'Citizen Guidance'],
  },
  {
    id: 'g3',
    title: 'Youth Legal Education Workshop',
    category: 'Youth Meetings',
    image: '/images/program/home-four.jpg',
    alt: 'Youth participants reviewing legal education reference booklets',
    caption: 'Student and youth study group analyzing civic literacy materials, legal rights, and fundamental constitutional frameworks.',
    date: 'February 2026',
    location: 'Birgunj Youth Hub',
    tags: ['Youth Leadership', 'Education', 'Constitutional Law'],
  },
  {
    id: 'g4',
    title: 'Madhesh Legal Youth Club Members',
    category: 'Youth Meetings',
    image: '/images/members/members-team.jpeg',
    alt: 'Group of dedicated young club members gathered in Birgunj',
    caption: 'Dedicated young club members and volunteers united by a shared dedication to spreading legal awareness across all provinces of Nepal.',
    date: 'January 2026',
    location: 'Club Headquarters, Birgunj',
    tags: ['Team', 'Volunteers', 'Youth Mobilization'],
  },
  {
    id: 'g5',
    title: 'Grassroots Community Consultation',
    category: 'Community Outreach',
    image: '/images/home-about.jpg',
    alt: 'Open-air community consultation on rights and welfare',
    caption: 'Community consultation listening to residents regarding access to state legal aid, vital document registration, and local grievance mechanisms.',
    date: 'December 2025',
    location: 'Rural Parsa',
    tags: ['Legal Aid', 'Public Grievance', 'Civic Support'],
  },
  {
    id: 'g6',
    title: 'Civic Training & Document Review',
    category: 'Awareness Programs',
    image: '/images/program/home-two.jpg',
    alt: 'Participants examining civic educational guides',
    caption: 'Hands-on legal literacy workshop training community advocates on how to read contracts, basic rights pamphlets, and citizenship registration procedures.',
    date: 'November 2025',
    location: 'Birgunj Civic Center',
    tags: ['Training', 'Documentation', 'Advocacy'],
  },
  {
    id: 'g7',
    title: 'Constitutional Rights Orientation',
    category: 'Awareness Programs',
    image: '/images/program/home-six.jpg',
    alt: 'Youth and community members participating in constitutional rights orientation',
    caption: 'Open civic forum introducing youth to fundamental civil liberties, non-discrimination protections, and peaceful dispute resolution.',
    date: 'October 2025',
    location: 'Madhesh Youth Assembly',
    tags: ['Civil Liberties', 'Human Rights', 'Orientation'],
  },
  {
    id: 'g8',
    title: 'Youth Legal Literacy Forum',
    category: 'Youth Meetings',
    image: '/images/program/home-three.jpg',
    alt: 'Youth leaders planning awareness campaigns',
    caption: 'Strategy session coordinating upcoming educational drives, school legal clubs, and volunteer training sessions for the year.',
    date: 'September 2025',
    location: 'Birgunj, Nepal',
    tags: ['Planning', 'Strategic Drive', 'Youth Engagement'],
  },
];
     


