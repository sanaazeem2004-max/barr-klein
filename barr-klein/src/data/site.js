// All firm facts below are sourced from https://barrklein.com/ and /attorney-profiles/.
import { Megaphone, Landmark, Gavel, ShieldCheck } from 'lucide-react'

export const ORIGIN = 'https://barrklein.com'

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Practice Areas', href: '#practice' },
  { label: 'Attorneys', href: '#attorneys' },
  { label: 'Contact', href: '#contact' },
]

export const practiceAreas = [
  {
    title: 'Free Speech',
    icon: Megaphone,
    image: '/images/library-busts.jpg',
    description:
      'Defending speakers, journalists and organizations against censorship — whether by the government’s heavy hand or clever red tape.',
    href: `${ORIGIN}/free-speech/`,
  },
  {
    title: 'Campaign Finance & Election Law',
    icon: Landmark,
    image: '/images/columns.jpg',
    description:
      'Counsel on campaign finance, nonprofit compliance and political privacy, from regulatory proceedings to constitutional challenges.',
    href: `${ORIGIN}/campaign-finance/`,
  },
  {
    title: 'Political Lawsuits & Prosecutions',
    icon: Gavel,
    image: '/images/gavel.jpg',
    description:
      'Representation in state and federal courts, in trials and appeals, when political activity becomes the target of litigation.',
    href: `${ORIGIN}/political-lawsuits/`,
  },
  {
    title: 'Defamation Defense',
    icon: ShieldCheck,
    image: '/images/law-books.jpg',
    description:
      'Defense for clients sued by someone who is simply trying to shut them up — protecting your voice and your work.',
    href: `${ORIGIN}/defamation-defense/`,
  },
]

export const attorneys = [
  {
    name: 'Benjamin Barr',
    role: 'Partner',
    image: '/images/benjamin-barr.jpg',
    email: 'ben@barrklein.com',
    phone: '(202) 595-4671',
    tel: '+12025954671',
    office: ['1050 30th Street NW', 'Washington, DC 20007'],
    bio: 'Benjamin Barr focuses his practice on constitutional law, new media operations, election law, and political privacy. The Supreme Court has cited his work on First Amendment issues in Citizens United, and he has served as counsel to two chairmen of the Federal Election Commission.',
    highlights: [
      'Counsel to two Chairmen of the Federal Election Commission',
      'Work cited by the Supreme Court in Citizens United',
      'Chicago-Kent College of Law, J.D. (2001)',
    ],
    admissions: 'U.S. Supreme Court · Illinois · D.C. Circuit',
  },
  {
    name: 'Stephen Klein',
    role: 'Partner',
    image: '/images/stephen-klein.jpg',
    email: 'steve@barrklein.com',
    phone: '(202) 804-6676',
    tel: '+12028046676',
    office: ['1629 K Street NW, Ste. 300', 'Washington, DC 20006'],
    bio: 'Steve Klein fights for his clients’ rights in courts across the country. His advocacy has led to the successful amendment of state statutes to respect individual rights, and he has helped reform civil asset forfeiture and changed election law nationwide.',
    highlights: [
      'Co-counsel, Wyoming Gun Owners v. Gray (10th Cir. 2023)',
      'Drafted civil asset forfeiture reform passed 90–0 in Wyoming',
      'Ave Maria School of Law, J.D. (2009) · Hillsdale College, B.A.',
    ],
    admissions: 'U.S. Supreme Court · District of Columbia · Michigan · Illinois',
  },
]

export const reasons = [
  {
    title: 'Extensive Experience',
    text: 'More than thirty years of combined experience in trials, appeals, and before regulatory bodies.',
  },
  {
    title: 'Constitutional Law Knowledge',
    text: 'Especially known for our work on the First Amendment, political privacy and campaign finance law.',
  },
  {
    title: 'Strategic Advocacy',
    text: 'Uncompromising advocates who defend clients’ constitutional rights creatively and aggressively.',
  },
  {
    title: 'State & Federal Courts',
    text: 'Representation in state and federal courts nationwide, up to the United States Supreme Court bar.',
  },
  {
    title: 'Client-Focused Approach',
    text: 'Our goal is to advance your goals and your voice — not the preferences of bureaucrats.',
  },
]

export const licensingNotice =
  'Benjamin Barr is licensed to practice law in Illinois and is also admitted to practice before the U.S. District Court for the District of Columbia and the U.S. Court of Appeals for the D.C. Circuit. Benjamin Barr is not admitted to the District of Columbia Bar, and his practice in Washington, D.C. is limited to federal court matters in accordance with D.C. Court of Appeals Rule 49. Stephen Klein is licensed in the District of Columbia, Michigan and Illinois.'
