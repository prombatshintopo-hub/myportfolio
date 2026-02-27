import { person, titles } from '@/lib/content';
import type { Title } from '@/lib/types';
import { Navigation } from '@/components/portfolio/navigation';
import { HeroSection } from '@/components/portfolio/hero-section';
import { AboutSection } from '@/components/portfolio/about-section';
import { SkillsSection } from '@/components/portfolio/skills-section';
import { ExperienceSection } from '@/components/portfolio/experience-section';
import { ProjectsSection } from '@/components/portfolio/projects-section';
import { ContactSection } from '@/components/portfolio/contact-section';
import { Footer } from '@/components/portfolio/footer';
import { SiteEnhancements } from '@/components/portfolio/site-enhancements';
import { MbatshiAIChatbot } from '@/components/portfolio/jarvis-chatbot';

function getStartYear(item: Title) {
  const year = item.year?.match(/\d{4}/)?.[0];
  return year ? Number(year) : null;
}

function getShortDescription(text: string) {
  return text.split('\n')[0].trim();
}

const cvSkills = [
  {
    title: 'IT Support and Service Delivery',
    description:
      'Incident and request handling, troubleshooting, onboarding, and support process documentation.',
    href: '#experience',
    details: [
      'Hands-on support across endpoints, user issues, and daily service requests.',
      'Process documentation to reduce repeated incidents and improve response quality.',
      'Clear stakeholder communication and prioritization of operationally critical issues.'
    ]
  },
  {
    title: 'Systems and ERP Support',
    description:
      'Business software support, user access administration, operational continuity, and maintenance checks.',
    href: '#experience',
    details: [
      'Business software troubleshooting and user guidance for continuity.',
      'Secure access support and practical administration of day-to-day workflows.',
      'Routine checks and change documentation to improve reliability.'
    ]
  },
  {
    title: 'Networking and Infrastructure',
    description:
      'Connectivity troubleshooting, LAN fundamentals, and structured problem-solving for stable operations.',
    href: '#experience',
    details: [
      'Connectivity troubleshooting and LAN support fundamentals.',
      'Structured diagnostics to isolate root causes quickly.',
      'Practical focus on uptime and user productivity.'
    ]
  },
  {
    title: 'Cybersecurity Fundamentals',
    description:
      'Access control hygiene, baseline hardening, risk awareness, and controls-focused security practices.',
    href: '#projects',
    details: [
      'Risk assessment mindset with controls and compliance awareness.',
      'Baseline access hygiene and practical security-first execution.',
      'Experience with Wireshark and Metasploit in learning and analysis contexts.'
    ]
  },
  {
    title: 'Tools and Platforms',
    description: 'Active Directory, Microsoft 365, ManageEngine, SysAid, Wireshark, and Metasploit.',
    href: '#experience',
    details: [
      'Daily productivity and administration with Microsoft 365.',
      'Identity and access handling with Active Directory support patterns.',
      'Service management exposure through ManageEngine and SysAid.'
    ]
  },
  {
    title: 'Web and Mobile Development',
    description: 'Next.js, TypeScript, Flutter, React Native, and Supabase for practical product delivery.',
    href: '#projects',
    details: [
      'Built production-oriented web and mobile concepts across multiple stacks.',
      'Delivered ecommerce and prototype applications with maintainable architecture.',
      'Integrated authentication, data, and user flow considerations.'
    ]
  }
];

export default function HomePage() {
  const about = titles.find((item) => item.kind === 'about');
  const projects = titles.filter((item) => item.kind === 'project');
  const experiences = titles.filter((item) => item.kind === 'experience');
  const certifications = titles.filter(
    (item) => item.kind === 'education' || item.kind === 'certification'
  );

  const experienceStartYear =
    experiences
      .map(getStartYear)
      .filter((year): year is number => Number.isFinite(year))
      .sort((a, b) => a - b)[0] ?? new Date().getFullYear();

  const yearsInField = Math.max(1, new Date().getFullYear() - experienceStartYear);
  const summary = getShortDescription(about?.description ?? person.headline);

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <SiteEnhancements
        email={person.email}
        whatsapp={person.links.whatsapp}
        resumeUrl={person.resumeUrl}
      />
      <Navigation />
      <HeroSection
        name={person.name}
        headline={person.headline}
        email={person.email}
        phone={person.phone}
        whatsapp={person.links.whatsapp}
        portfolioUrl={person.portfolioUrl}
        resumeUrl={person.resumeUrl}
        location={person.location}
        openTo={person.openTo}
      />
      <AboutSection summary={summary} years={yearsInField} projects={projects.length} satisfaction="100%" />
      <SkillsSection skills={cvSkills} />
      <ExperienceSection experiences={experiences} certifications={certifications} />
      <ProjectsSection
        projects={projects}
        portfolioUrl={person.portfolioUrl}
        githubUrl={person.links.github || undefined}
      />
      <ContactSection
        email={person.email}
        phone={person.phone}
        linkedin={person.links.linkedin || undefined}
        github={person.links.github || undefined}
        whatsapp={person.links.whatsapp}
        portfolioUrl={person.portfolioUrl}
        resumeUrl={person.resumeUrl}
        location={person.location}
        openTo={person.openTo}
      />
      <Footer
        name={person.name}
        headline={person.headline}
        email={person.email}
        phone={person.phone}
        linkedin={person.links.linkedin || undefined}
        github={person.links.github || undefined}
        whatsapp={person.links.whatsapp}
        portfolioUrl={person.portfolioUrl}
        resumeUrl={person.resumeUrl}
      />
      <MbatshiAIChatbot />
    </main>
  );
}
