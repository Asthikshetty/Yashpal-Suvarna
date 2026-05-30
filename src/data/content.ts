import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  FileText,
  Fish,
  GraduationCap,
  IndianRupee,
  Landmark,
  MapPin,
  Palmtree,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Locale = 'en' | 'kn';

export const copy = {
  en: {
    nav: ['About', 'Works', 'Map', 'Services', 'Gallery', 'Contact'],
    heroMessage:
      'A constituency-first public service portal for transparent development, responsive citizen support, and a future-ready Udupi.',
    buttons: ['Development Works', 'Contact Office'],
    about:
      'Yashpal Anand Suvarna represents Udupi Assembly Constituency in the Karnataka Legislative Assembly. His public profile is rooted in community leadership, cooperative and fisheries sector work, youth engagement, and a development agenda focused on infrastructure, employment, education, tourism, and citizen services.',
    vision:
      'The vision for Udupi is practical and ambitious: stronger roads and civic assets, a coastal economy that protects fishermen, IT-BT employment pathways for local youth, and transparent access to government services.',
    chatbotPlaceholder: 'Ask about projects, office timings, schemes...',
  },
  kn: {
    nav: ['ಪರಿಚಯ', 'ಅಭಿವೃದ್ಧಿ', 'ನಕ್ಷೆ', 'ಸೇವೆಗಳು', 'ಗ್ಯಾಲರಿ', 'ಸಂಪರ್ಕ'],
    heroMessage:
      'ಪಾರದರ್ಶಕ ಅಭಿವೃದ್ಧಿ, ತ್ವರಿತ ನಾಗರಿಕ ಸೇವೆ ಮತ್ತು ಭವಿಷ್ಯಮುಖಿ ಉಡುಪಿಗಾಗಿ ಕ್ಷೇತ್ರಕೇಂದ್ರಿತ ಸಾರ್ವಜನಿಕ ಸೇವಾ ಪೋರ್ಟಲ್.',
    buttons: ['ಅಭಿವೃದ್ಧಿ ಕಾರ್ಯಗಳು', 'ಕಚೇರಿ ಸಂಪರ್ಕ'],
    about:
      'ಯಶ್ಪಾಲ್ ಆನಂದ್ ಸುವರ್ಣ ಅವರು ಕರ್ನಾಟಕ ವಿಧಾನಸಭೆಯಲ್ಲಿ ಉಡುಪಿ ಕ್ಷೇತ್ರವನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತಾರೆ. ಸಮುದಾಯ ನಾಯಕತ್ವ, ಮೀನುಗಾರಿಕೆ ಮತ್ತು ಸಹಕಾರಿ ಕ್ಷೇತ್ರ, ಯುವ ಸಬಲೀಕರಣ ಹಾಗೂ ಮೂಲಸೌಕರ್ಯ, ಉದ್ಯೋಗ, ಶಿಕ್ಷಣ, ಪ್ರವಾಸೋದ್ಯಮ ಮತ್ತು ನಾಗರಿಕ ಸೇವೆಗಳ ಅಭಿವೃದ್ಧಿ ದೃಷ್ಟಿಕೋನ ಅವರ ಸಾರ್ವಜನಿಕ ಕಾರ್ಯದ ಕೇಂದ್ರವಾಗಿದೆ.',
    vision:
      'ಉಡುಪಿಗಾಗಿ ದೃಷ್ಟಿ ಸ್ಪಷ್ಟವಾಗಿದೆ: ಉತ್ತಮ ರಸ್ತೆ ಮತ್ತು ನಾಗರಿಕ ಸೌಲಭ್ಯಗಳು, ಮೀನುಗಾರರ ರಕ್ಷಣೆ, ಸ್ಥಳೀಯ ಯುವಕರಿಗೆ IT-BT ಉದ್ಯೋಗ ಮಾರ್ಗಗಳು ಮತ್ತು ಸರ್ಕಾರಿ ಸೇವೆಗಳಿಗೆ ಪಾರದರ್ಶಕ ಪ್ರವೇಶ.',
    chatbotPlaceholder: 'ಯೋಜನೆಗಳು, ಕಚೇರಿ ಸಮಯ, ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಕೇಳಿ...',
  },
};

export const stats = [
  { label: 'Development Projects', value: '150+' },
  { label: 'Citizens Assisted', value: '50,000+' },
  { label: 'Public Meetings', value: '100+' },
  { label: 'Years of Service', value: '3' },
];

export const achievements = [
  { label: 'Development Funds', value: '250', suffix: ' Cr+', icon: IndianRupee },
  { label: 'Projects Completed', value: '150', suffix: '+', icon: Building2 },
  { label: 'Citizen Meetings', value: '500', suffix: '+', icon: Users },
  { label: 'Village Visits', value: '50', suffix: '+', icon: MapPin },
];

export const timeline = ['ABVP', 'Community Leadership', 'BJP Leadership', 'MLA - Udupi'];

type Work = {
  title: string;
  items: string[];
  progress: number;
  icon: LucideIcon;
  accent: string;
};

export const works: Work[] = [
  {
    title: 'Infrastructure',
    items: ['Road upgrades', 'Bridges', 'Public facilities'],
    progress: 78,
    icon: Landmark,
    accent: '#FF6B00',
  },
  {
    title: 'Employment',
    items: ['IT-BT Park proposal', 'Youth opportunities', 'Skill partnerships'],
    progress: 62,
    icon: BriefcaseBusiness,
    accent: '#D8A928',
  },
  {
    title: 'Fisheries',
    items: ['Fishermen welfare', 'Harbour support', 'Port development'],
    progress: 70,
    icon: Fish,
    accent: '#0EA5E9',
  },
  {
    title: 'Education',
    items: ['Schools', 'Colleges', 'Scholarships'],
    progress: 66,
    icon: GraduationCap,
    accent: '#22C55E',
  },
  {
    title: 'Tourism',
    items: ['Beach development', 'Temple tourism', 'Visitor amenities'],
    progress: 58,
    icon: Palmtree,
    accent: '#A855F7',
  },
];

export const mapPins = [
  { area: 'Udupi City', project: 'Urban roads package', budget: 'Rs 32 Cr', status: 'In progress', completion: 74, x: 47, y: 43 },
  { area: 'Malpe', project: 'Fisheries harbour services', budget: 'Rs 18 Cr', status: 'Tender stage', completion: 38, x: 26, y: 55 },
  { area: 'Kaup Region', project: 'Tourism connectivity corridor', budget: 'Rs 21 Cr', status: 'Planning', completion: 24, x: 62, y: 72 },
  { area: 'Village Belt', project: 'Drinking water and civic facilities', budget: 'Rs 14 Cr', status: 'Active', completion: 61, x: 72, y: 35 },
];

export const news = [
  { type: 'Development', title: 'IT-BT Park proposal highlighted for local employment', date: 'Mar 2025', icon: BriefcaseBusiness },
  { type: 'Infrastructure', title: 'Santhekatte market and education facility upgrades reviewed', date: 'Nov 2024', icon: Building2 },
  { type: 'Assembly', title: 'Government medical college proposal raised for Udupi district', date: 'Mar 2026', icon: FileText },
  { type: 'Public Service', title: 'Village-level citizen meetings and grievance reviews scheduled', date: 'Ongoing', icon: CalendarDays },
];

export const gallery = [
  'Public Meetings',
  'Temple Visits',
  'Development Projects',
  'Youth Programs',
  'Fisheries Events',
  'Office Interactions',
];

export const testimonials = [
  { name: 'Citizen Representative', role: 'Udupi City', quote: 'The office response system makes public follow-up clearer and more accountable.' },
  { name: 'Youth Entrepreneur', role: 'Manipal-Udupi corridor', quote: 'The IT-BT focus can help local graduates find opportunity closer to home.' },
  { name: 'Fisheries Voice', role: 'Malpe', quote: 'Coastal livelihoods need consistent infrastructure and welfare attention.' },
];

export const reports = ['Constituency Development Report', 'Fisheries Welfare Brief', 'Youth Employment Roadmap'];
