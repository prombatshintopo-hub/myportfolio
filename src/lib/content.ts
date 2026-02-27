import type { Profile, Row, Title } from './types';

export const person = {
  name: 'Mbatshi Ntopo',
  headline:
    'IT Support and Systems Analyst | Software and ERP Support | Cybersecurity Fundamentals | Software Developer',
  location: 'Gaborone, Botswana',
  phone: '+267 75705767',
  email: 'mbatshi.ntopo@outlook.com',
  portfolioUrl: 'https://sites.google.com/view/mbatshintopo-portfolio',
  resumeUrl: '/docs/Mbatshi_Ntopo_CV.pdf',
  openTo: 'Open to relocate, remote work, and project-based collaborations',
  links: {
    linkedin: 'https://www.linkedin.com/in/mbatshi-ntopo',
    github: '',
    whatsapp: 'https://wa.me/26775705767'
  }
};

export const profiles: Profile[] = [
  {
    id: 'it',
    label: 'IT & Infrastructure',
    tagline: 'Support, systems, networks, uptime, and governance.'
  },
  {
    id: 'security',
    label: 'Security & Forensics',
    tagline: 'Risk awareness, controls, investigations, and security-first delivery.'
  },
  {
    id: 'marketing',
    label: 'Digital Marketing',
    tagline: 'Brand-focused content, social growth, and clean visuals.'
  },
  {
    id: 'all',
    label: 'Web & Mobile Development',
    tagline: 'Cross-platform app concepts, websites, mobile UX, and product execution.'
  }
];

export const titles: Title[] = [
  {
    id: 'about',
    kind: 'about',
    profileTags: ['it', 'security', 'marketing', 'all'],
    name: 'Meet Mbatshi',
    subtitle: 'Security-minded IT Support and Systems Analyst',
    description:
      'Security-minded IT Support and Systems Analyst with hands-on experience keeping business software and ERP environments stable, secure, and efficient. I reduce downtime, prevent repeat issues through documentation, and improve user workflows across Microsoft 365, Active Directory, endpoints, and core applications.',
    bullets: [
      'Security-first mindset with hands-on corporate IT support experience',
      'Background in Network Security and Computer Forensics (investigation mindset)',
      'Comfortable bridging technical delivery with business communication and branding',
      'Long-term focus: lead impactful tech projects across Botswana and Africa'
    ],
    tags: ['IT Support', 'Networking', 'Systems', 'Cybersecurity', 'Digital Marketing'],
    posterSeed: 'about'
  },

  // Projects
  {
    id: 'project-cartaskers',
    kind: 'project',
    profileTags: ['it', 'security', 'all'],
    name: 'CarTaskers',
    subtitle: 'On-demand platform with secure evidence and verification workflow',
    status: 'Completed',
    description:
      'On-demand platform for car-related services built with trust and safety features such as verification, ratings, and job history. The product uses a security-first approach for user actions, uploads, and verification flows.',
    bullets: [
      'Designed scalable service categories and operational workflows',
      'Implemented secure evidence capture and verification-aligned flows',
      'Focused on reliability, trust signals, and practical marketplace growth'
    ],
    tech: ['React Native', 'Backend API Services', 'Verification Workflow'],
    tags: ['Marketplace', 'Trust & Safety', 'Mobile Platform'],
    links: [{ label: 'Portfolio reference', href: person.portfolioUrl }],
    posterSeed: 'cartaskers'
  },
  {
    id: 'project-maridadi-ecommerce',
    kind: 'project',
    profileTags: ['it', 'all'],
    name: 'Maridadi Wear Ecommerce Website',
    subtitle: 'Ecommerce platform with clean UX and reliable admin workflows',
    status: 'Completed',
    description:
      'Built an ecommerce experience with product catalog, cart and checkout flow, and practical admin operations. The project emphasized clean UX, reliable day-to-day management, and production-ready delivery standards.',
    bullets: [
      'Delivered product catalog, cart, and checkout journey',
      'Implemented database and authentication-backed workflows',
      'Focused on stable operations and maintainable architecture'
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase'],
    tags: ['Ecommerce', 'Web Platform', 'Admin Operations'],
    links: [{ label: 'Portfolio reference', href: person.portfolioUrl }],
    posterSeed: 'maridadi'
  },
  {
    id: 'project-police-response',
    kind: 'project',
    profileTags: ['security', 'it', 'all'],
    name: 'Police Response App',
    subtitle: 'Prototype for structured emergency reporting and location sharing',
    status: 'In progress',
    description:
      'Flutter prototype aimed at reducing delayed emergency response through structured incident reporting and location sharing. It also introduces role-based views for citizens and responders for clearer dispatch information.',
    bullets: [
      'Mitigate delayed response times through better dispatch and resource allocation patterns',
      'Enable real-time location sharing for emergency reporting',
      'Create a channel for police to engage and collaborate with the community',
      'Support coordination of community safety initiatives and services'
    ],
    tech: ['Dart', 'Flutter'],
    tags: ['Public Safety', 'Mobile', 'Location'],
    links: [{ label: 'Portfolio reference', href: person.portfolioUrl }],
    posterSeed: 'police'
  },
  {
    id: 'project-security-audit',
    kind: 'project',
    profileTags: ['security'],
    name: 'Cyber Security Audit',
    subtitle: 'Controls and compliance checklist (Botium Toys)',
    status: 'Completed',
    description:
      "I conducted an audit aimed at assessing Botium Toy's current assets and completing a controls and compliance checklist. The objective was to identify gaps and apply best practices in controls and compliance to improve the overall security posture.",
    bullets: [
      'Defined scope, goals, and performed a risk assessment',
      'Mapped controls into categories and documented coverage',
      'Produced a controls and compliance checklist for improvement planning'
    ],
    tech: ['Risk assessment', 'Controls mapping', 'Compliance checklist'],
    tags: ['GRC', 'Audit', 'Security Controls'],
    links: [{ label: 'Portfolio reference', href: person.portfolioUrl }],
    posterSeed: 'audit'
  },
  {
    id: 'project-o365-migration',
    kind: 'project',
    profileTags: ['it', 'security'],
    name: 'Office 365 Migration Support',
    subtitle: 'User and device migration across Microsoft 365 services',
    status: 'Completed',
    description:
      'Delivered migration support for users moving to Office 365, including account readiness checks, mailbox setup, and post-migration user support to minimize downtime.',
    bullets: [
      'Prepared users and devices for migration using structured pre-checks',
      'Supported mailbox and productivity app transition with minimal disruption',
      'Resolved post-migration access and configuration issues quickly'
    ],
    tech: ['Office 365', 'Active Directory', 'End-user Support'],
    tags: ['Migration', 'Enterprise IT', 'Service Delivery'],
    links: [{ label: 'Portfolio reference', href: person.portfolioUrl }],
    posterSeed: 'o365-migration'
  },
  {
    id: 'project-home-lab',
    kind: 'project',
    profileTags: ['it', 'security', 'all'],
    name: 'Personal IT and Security Home Lab',
    subtitle: 'Self-managed environment for testing systems, networking, and security tools',
    status: 'Active',
    description:
      'Built and maintain a personal home lab to simulate enterprise scenarios, practice troubleshooting, and test security workflows in a controlled environment.',
    bullets: [
      'Configured virtual machines and segmented test environments',
      'Tested troubleshooting and hardening workflows before production use',
      'Used the lab for skill growth in networking, systems, and cybersecurity'
    ],
    tech: ['Virtualization', 'Windows', 'Linux', 'Wireshark'],
    tags: ['Home Lab', 'Continuous Learning', 'Security Practice'],
    links: [{ label: 'Portfolio reference', href: person.portfolioUrl }],
    posterSeed: 'home-lab'
  },
  {
    id: 'project-erp-stability',
    kind: 'project',
    profileTags: ['it'],
    name: 'ERP Stability and Support Improvement',
    subtitle: 'Operational continuity initiative for business software and ERP workflows',
    status: 'Completed',
    description:
      'Improved reliability of ERP usage by addressing recurring incidents, improving documentation, and strengthening daily support processes for business teams.',
    bullets: [
      'Reduced repeat incidents through root-cause tracking and fixes',
      'Created support documentation and escalation pathways',
      'Improved turnaround time for user-facing ERP support requests'
    ],
    tech: ['ERP Support', 'Process Documentation', 'Incident Management'],
    tags: ['ERP', 'Operations', 'Reliability'],
    links: [{ label: 'Portfolio reference', href: person.portfolioUrl }],
    posterSeed: 'erp-stability'
  },
  {
    id: 'project-manageengine-rollout',
    kind: 'project',
    profileTags: ['it'],
    name: 'ManageEngine Service Workflow Rollout',
    subtitle: 'Service desk workflow setup and operational alignment',
    status: 'Completed',
    description:
      'Configured practical ticketing and workflow patterns using ManageEngine to improve request tracking, issue visibility, and support coordination.',
    bullets: [
      'Aligned ticket categories and priorities with real support demand',
      'Improved tracking and visibility for incident and request handling',
      'Supported service desk reporting for better operational decisions'
    ],
    tech: ['ManageEngine', 'ITSM', 'Service Operations'],
    tags: ['Service Desk', 'Workflow Optimization', 'ITSM'],
    links: [{ label: 'Portfolio reference', href: person.portfolioUrl }],
    posterSeed: 'manageengine-rollout'
  },
  {
    id: 'project-ad-access',
    kind: 'project',
    profileTags: ['it', 'security'],
    name: 'Active Directory Access and User Lifecycle',
    subtitle: 'Structured onboarding, offboarding, and access governance support',
    status: 'Completed',
    description:
      'Strengthened identity workflows by standardizing account provisioning, access updates, and user lifecycle support across teams.',
    bullets: [
      'Supported secure onboarding and offboarding account workflows',
      'Improved account consistency and reduced access-related errors',
      'Documented repeatable AD procedures for faster support delivery'
    ],
    tech: ['Active Directory', 'Access Management', 'User Support'],
    tags: ['Identity', 'Governance', 'Operations'],
    links: [{ label: 'Portfolio reference', href: person.portfolioUrl }],
    posterSeed: 'ad-access'
  },
  {
    id: 'project-backup-ops',
    kind: 'project',
    profileTags: ['it', 'security'],
    name: 'Backup and Maintenance Operations',
    subtitle: 'Routine backup checks and preventive maintenance cadence',
    status: 'Completed',
    description:
      'Established practical backup verification and maintenance routines to improve resilience, reduce unexpected failures, and keep systems dependable.',
    bullets: [
      'Maintained scheduled checks for backups and endpoint readiness',
      'Improved continuity posture through preventive maintenance routines',
      'Tracked maintenance completion with clear operational records'
    ],
    tech: ['Backup Operations', 'Maintenance', 'Asset Tracking'],
    tags: ['Business Continuity', 'Reliability', 'Operations'],
    links: [{ label: 'Portfolio reference', href: person.portfolioUrl }],
    posterSeed: 'backup-ops'
  },
  {
    id: 'project-endpoint-hardening',
    kind: 'project',
    profileTags: ['security', 'it'],
    name: 'Endpoint Hardening and Malware Response',
    subtitle: 'Practical endpoint hygiene and threat response support',
    status: 'Completed',
    description:
      'Supported endpoint protection by applying baseline hardening practices, removing malware when identified, and reinforcing safe user behavior.',
    bullets: [
      'Handled malware response and cleanup on affected endpoints',
      'Applied practical hardening and security hygiene controls',
      'Improved user awareness of safe behavior and threat signals'
    ],
    tech: ['Endpoint Security', 'Threat Response', 'User Awareness'],
    tags: ['Security Operations', 'Endpoint', 'Risk Reduction'],
    links: [{ label: 'Portfolio reference', href: person.portfolioUrl }],
    posterSeed: 'endpoint-hardening'
  },
  {
    id: 'project-network-playbook',
    kind: 'project',
    profileTags: ['it', 'security'],
    name: 'Network Troubleshooting Playbook',
    subtitle: 'Structured diagnostics for recurring connectivity issues',
    status: 'Completed',
    description:
      'Created and applied a repeatable troubleshooting playbook for common network issues to speed up diagnosis and reduce user impact.',
    bullets: [
      'Standardized troubleshooting steps for faster issue isolation',
      'Used packet and connectivity checks to identify root causes',
      'Reduced turnaround time on recurring connectivity tickets'
    ],
    tech: ['LAN Support', 'Diagnostics', 'Wireshark'],
    tags: ['Networking', 'Incident Response', 'Support Quality'],
    links: [{ label: 'Portfolio reference', href: person.portfolioUrl }],
    posterSeed: 'network-playbook'
  },

  // Experience
  {
    id: 'exp-ppcb',
    kind: 'experience',
    profileTags: ['it', 'security'],
    name: 'System Analyst (Software and ERP Support Lead)',
    subtitle: 'Printing and Publishing Company Botswana (PPCB), Gaborone',
    year: 'Mar 2023 - Mar 2025',
    description:
      'Owned day-to-day support and stability for business software and ERP systems, ensuring operational continuity across departments with practical, reliability-focused improvements.',
    bullets: [
      'Managed user support across hardware, software, and connectivity issues',
      'Reduced repeat incidents through documentation and process clarity',
      'Supported onboarding, endpoint setup, and secure user access workflows',
      'Maintained IT asset tracking, backups, and routine maintenance checks'
    ],
    tags: ['IT Support', 'Operations', 'Asset Management', 'Continuity'],
    posterSeed: 'ppcb'
  },
  {
    id: 'exp-stats',
    kind: 'experience',
    profileTags: ['it'],
    name: 'Data Analyst (Short Contract)',
    subtitle: 'Statistics Botswana, Kweneng (Molepolole)',
    year: 'Mar 2022 - Apr 2022',
    description:
      'Collected data accurately, supported smooth field operations, and used IT tools and a structured approach to improve data quality and consistency during collection.',
    bullets: [
      'Improved accuracy and consistency through disciplined data capture',
      'Resolved basic technical issues to prevent delays in field operations'
    ],
    tags: ['Data Collection', 'Field Operations'],
    posterSeed: 'stats'
  },
  {
    id: 'exp-shakinah',
    kind: 'experience',
    profileTags: ['it', 'security'],
    name: 'IT Technician',
    subtitle: 'Shakinah Investments, South East (Lobatse)',
    year: 'Mar 2020 - Jan 2022',
    description:
      'Installed and tested hardware, set up workstations, connected devices to networks, and supported users through troubleshooting. Monitored basic performance and addressed malware or threats when needed.',
    bullets: [
      'Hardware installation, workstation setup, and network connectivity',
      'Troubleshooting across software, hardware, and connectivity issues',
      'Basic security hygiene including identifying and removing malware'
    ],
    tags: ['Desktop Support', 'Networking', 'Troubleshooting'],
    posterSeed: 'shakinah'
  },
  {
    id: 'exp-debswana',
    kind: 'experience',
    profileTags: ['it', 'security'],
    name: 'IT Support (End-User Support)',
    subtitle: 'Debswana Corporate Center, Gaborone',
    year: 'Jun 2019 - Jan 2020',
    description:
      'Supported end users, managed accounts and devices via Active Directory, assisted with an Office 365 migration project, and provided updates and reporting to the help desk lead.',
    bullets: [
      'User account and device support using Active Directory',
      'Assisted with Office 365 device migration activities',
      'Service delivery support with structured reporting'
    ],
    tags: ['Active Directory', 'O365', 'Help Desk'],
    posterSeed: 'debswana'
  },

  // Marketing
  {
    id: 'mkt-express',
    kind: 'marketing',
    profileTags: ['marketing'],
    name: 'Express Copy Shop',
    subtitle: 'Social Media Manager',
    year: '2023 - 2025',
    description:
      'Managed social presence with clear service communication and consistent branding. Planned content explaining printing options, turnaround expectations, and common customer questions, plus simple promotional campaigns.',
    bullets: [
      'Improved page consistency through cleaner visuals and structured content',
      'Created offers and campaigns that were direct and action-oriented',
      'Maintained engagement and kept the page active and updated'
    ],
    tech: ['Canva', 'Meta Business Suite', 'Google Business Profile', 'Google Ads', 'Facebook Ads'],
    tags: ['Branding', 'Content', 'Campaigns'],
    posterSeed: 'express'
  },
  {
    id: 'mkt-frame',
    kind: 'marketing',
    profileTags: ['marketing'],
    name: 'The Frame Gallery',
    subtitle: 'Social Media Manager',
    year: '2023 - 2025',
    description:
      'Curated premium visual storytelling, showcased finished work with clean presentation, and maintained a consistent visual identity aligned with the gallery brand.',
    bullets: [
      'Premium presentation and consistent brand feel',
      'Planned posts that build trust: highlights, behind-the-scenes, customer messaging'
    ],
    tech: ['Canva', 'Meta Business Suite'],
    tags: ['Premium Branding', 'Visual Storytelling'],
    posterSeed: 'frame'
  },
  {
    id: 'mkt-nolwazi',
    kind: 'marketing',
    profileTags: ['marketing'],
    name: 'Nolwazi Interiors',
    subtitle: 'Social Media Manager',
    year: '2025 - Present',
    description:
      "Manage the brand's social presence to match premium interior work. Plan content that tells a clear story with showcases, design highlights, and service positioning. Maintain a clean, consistent feed that supports enquiries and builds trust.",
    bullets: [
      'Started and grew TikTok presence with consistent short-form direction',
      'Maintained consistent captions, visuals, and brand identity'
    ],
    tech: ['TikTok', 'Canva', 'Meta Business Suite'],
    tags: ['Interior Design Branding', 'Short-form'],
    posterSeed: 'nolwazi'
  },

  // Education and Certifications
  {
    id: 'edu-botho',
    kind: 'education',
    profileTags: ['it', 'security'],
    name: 'BSc (Hons) Network Security and Computer Forensics',
    subtitle: 'Botho University',
    year: 'Certified 2021',
    description:
      'Formal training in networking, security concepts, incident thinking, and computer forensics fundamentals with an investigative approach to technical problems.',
    tags: ['Networking', 'Security', 'Forensics'],
    posterSeed: 'botho'
  },
  {
    id: 'cert-fortinet-nse',
    kind: 'certification',
    profileTags: ['it', 'security'],
    name: 'Fortinet Network Security Associate (NSE)',
    subtitle: 'Fortinet NSE Training Institute',
    year: 'Apr 2021',
    description:
      'Foundation-level network security concepts and exposure to enterprise security thinking around perimeter and policy control.',
    tags: ['Network Security'],
    posterSeed: 'fortinet'
  },
  {
    id: 'cert-ibm-intro-cyber',
    kind: 'certification',
    profileTags: ['security'],
    name: 'IBM Introduction to Cybersecurity Tools and Cyber-Attacks',
    subtitle: 'Coursera',
    year: 'Jul 2022',
    description:
      'Practical exposure to common cyber attack patterns and cybersecurity tooling fundamentals.',
    tags: ['Cybersecurity'],
    posterSeed: 'ibm'
  },
  {
    id: 'cert-ibm-cyber-analyst',
    kind: 'certification',
    profileTags: ['security', 'it'],
    name: 'IBM Cybersecurity Analyst Professional Certificate',
    subtitle: 'IBM / Coursera',
    year: 'Completed',
    status: 'Completed',
    description:
      'Professional certification path covering foundational cybersecurity analysis workflows, tools, and practical security operations concepts.',
    tags: ['Cybersecurity', 'SOC Foundations'],
    posterSeed: 'ibm-analyst'
  },
  {
    id: 'cert-google-cyber',
    kind: 'certification',
    profileTags: ['security', 'it'],
    name: 'Google Cybersecurity Certificate',
    subtitle: 'Google / Coursera',
    year: 'Completed',
    status: 'Completed',
    description:
      'Role-aligned certificate focused on core cybersecurity practices, incident handling, and operational security fundamentals.',
    tags: ['Cybersecurity'],
    posterSeed: 'google-cyber'
  },
  {
    id: 'cert-gdpr',
    kind: 'certification',
    profileTags: ['security'],
    name: 'GDPR Compliance: Essential Training',
    subtitle: 'LinkedIn Learning',
    year: 'Sep 2024',
    status: 'Completed',
    description:
      'Training in GDPR compliance essentials, privacy obligations, and practical legal-compliance awareness for digital workflows.',
    tags: ['Compliance', 'Data Protection'],
    posterSeed: 'gdpr'
  },
  {
    id: 'cert-comptia-secplus',
    kind: 'certification',
    profileTags: ['security'],
    name: 'CompTIA Security+',
    subtitle: 'CompTIA',
    year: 'Anticipated Jan 2024',
    status: 'In progress',
    description:
      'Core security concepts across identity, network security, risk, and incident response.',
    tags: ['Security Fundamentals'],
    posterSeed: 'secplus'
  },
  {
    id: 'cert-ms-security-engineer',
    kind: 'certification',
    profileTags: ['security', 'it'],
    name: 'Microsoft Security Engineer',
    subtitle: 'Microsoft',
    year: 'In progress',
    status: 'In progress',
    description:
      'Progressing through Microsoft security engineering topics focused on identity, cloud security controls, and threat protection.',
    tags: ['Cloud Security', 'Identity Security'],
    posterSeed: 'ms-security'
  },
  {
    id: 'cert-isc2-cc',
    kind: 'certification',
    profileTags: ['security'],
    name: 'ISC2 Certified in Cybersecurity',
    subtitle: 'ISC2',
    year: 'Feb 2024',
    status: 'Completed',
    description:
      'Validates baseline cybersecurity knowledge across security principles, incident response, and governance fundamentals.',
    tags: ['Cybersecurity'],
    posterSeed: 'isc2'
  },

  // Skills (as titles so they can appear as rows)
  {
    id: 'skill-manageengine',
    kind: 'skill',
    profileTags: ['it'],
    name: 'ManageEngine',
    subtitle: 'IT service management and operations (2 years)',
    description:
      'Deployed and used ManageEngine in real environments. Comfortable handling service workflows and operational tooling.',
    tags: ['~85% confidence'],
    posterSeed: 'manageengine'
  },
  {
    id: 'skill-sysaid',
    kind: 'skill',
    profileTags: ['it'],
    name: 'SysAid',
    subtitle: 'IT service management (1 year)',
    description:
      'Worked with SysAid for service management and support processes. Growing confidence through practical exposure.',
    tags: ['~50% confidence'],
    posterSeed: 'sysaid'
  },
  {
    id: 'skill-ad',
    kind: 'skill',
    profileTags: ['it', 'security'],
    name: 'Active Directory',
    subtitle: 'Identity and access foundation (2 years)',
    description:
      'Managed users and device support with Active Directory as a cornerstone for identity, access, and operational control.',
    tags: ['~70% confidence'],
    posterSeed: 'ad'
  },
  {
    id: 'skill-o365',
    kind: 'skill',
    profileTags: ['it'],
    name: 'Office 365',
    subtitle: 'Modern workplace productivity (6 years)',
    description:
      'Strong day-to-day proficiency with Office 365 tooling and workflows in corporate environments.',
    tags: ['~100% confidence'],
    posterSeed: 'o365'
  },
  {
    id: 'skill-wireshark',
    kind: 'skill',
    profileTags: ['security', 'it'],
    name: 'Wireshark',
    subtitle: 'Packet analysis (2 years)',
    description:
      'Used Wireshark for network packet analysis, troubleshooting, and learning traffic patterns. Comfortable with basics and improving depth.',
    tags: ['~60% confidence'],
    posterSeed: 'wireshark'
  },
  {
    id: 'skill-metasploit',
    kind: 'skill',
    profileTags: ['security'],
    name: 'Metasploit',
    subtitle: 'Penetration testing exposure (4 years)',
    description:
      'Significant exposure to Metasploit and its core workflows for security testing and learning exploit chains safely.',
    tags: ['~90% confidence'],
    posterSeed: 'metasploit'
  },
  {
    id: 'skill-htmlcss',
    kind: 'skill',
    profileTags: ['it', 'marketing', 'all'],
    name: 'HTML & CSS',
    subtitle: 'Structured pages and clean layout',
    description:
      'Built structured pages and landing pages with clean layout, readable sections, and proper semantic structure.',
    posterSeed: 'htmlcss'
  },
  {
    id: 'skill-flutter',
    kind: 'skill',
    profileTags: ['it', 'all'],
    name: 'Dart / Flutter',
    subtitle: 'Mobile UI and navigation flows',
    description:
      'Built and tested mobile app screens, implemented navigation flows, and experimented with state management and API calls in personal projects.',
    posterSeed: 'flutter'
  },
  {
    id: 'skill-reactnative',
    kind: 'skill',
    profileTags: ['it', 'all'],
    name: 'React Native',
    subtitle: 'Cross-platform mobile components',
    description:
      'Developed cross-platform UI components and navigation flows while learning mobile development patterns.',
    posterSeed: 'reactnative'
  },
  {
    id: 'skill-canva',
    kind: 'skill',
    profileTags: ['marketing'],
    name: 'Canva',
    subtitle: 'Brand visuals and social creatives',
    description:
      'Designed clean, consistent social media creatives and brand visuals for Nolwazi Interiors, Express Copy Shop, The Frame Gallery, and Cognicraft.',
    posterSeed: 'canva'
  },
  {
    id: 'skill-facebook-ads',
    kind: 'skill',
    profileTags: ['marketing'],
    name: 'Facebook Ads',
    subtitle: 'Promoted posts and simple campaigns',
    description:
      'Supported promoted posts and simple campaigns focused on strong creatives and clear messaging.',
    posterSeed: 'facebookads'
  },
  {
    id: 'skill-tiktok',
    kind: 'skill',
    profileTags: ['marketing'],
    name: 'TikTok',
    subtitle: 'Short-form growth and posting style',
    description:
      'Started and grew Nolwazi Interiors TikTok by building the posting style, brand look, and content direction for better reach and engagement.',
    posterSeed: 'tiktok'
  },
  {
    id: 'skill-google-ads',
    kind: 'skill',
    profileTags: ['marketing'],
    name: 'Google Ads',
    subtitle: 'Search, display, and video',
    description:
      'Managed Google Ads activity for Express Copy Shop, aligning campaigns with clear offers and measurable goals to improve visibility for key services.',
    posterSeed: 'googleads'
  },
  {
    id: 'skill-meta-suite',
    kind: 'skill',
    profileTags: ['marketing'],
    name: 'Meta Business Suite',
    subtitle: 'Scheduling and engagement monitoring',
    description:
      'Scheduled content, managed page activity, and monitored engagement across Facebook and Instagram.',
    posterSeed: 'metasuite'
  },
  {
    id: 'skill-google-business',
    kind: 'skill',
    profileTags: ['marketing'],
    name: 'Google Business Profile',
    subtitle: 'Local discovery and presentation',
    description:
      'Set up and managed Express Copy Shop Google Business Profile, keeping details current and improving local discovery.',
    posterSeed: 'gbp'
  },

  // Contact
  {
    id: 'contact',
    kind: 'contact',
    profileTags: ['it', 'security', 'marketing', 'all'],
    name: 'Contact Mbatshi',
    subtitle: "Let's talk work, projects, or collaboration",
    description: `Email: ${person.email}\nPhone: ${person.phone}\nLocation: ${person.location}\n${person.openTo}`,
    links: [
      { label: 'Email', href: `mailto:${person.email}` },
      { label: 'WhatsApp', href: person.links.whatsapp },
      { label: 'Current portfolio', href: person.portfolioUrl }
    ],
    posterSeed: 'contact'
  }
];

const byProfile = (profile: string) => (t: Title) =>
  t.profileTags.includes(profile as any);

export const rows: Row[] = [
  {
    id: 'row-featured',
    label: 'Featured',
    predicate: (t) =>
      ['project-cartaskers', 'project-maridadi-ecommerce', 'project-police-response'].includes(t.id)
  },
  {
    id: 'row-projects',
    label: 'Projects',
    predicate: (t) => t.kind === 'project'
  },
  {
    id: 'row-experience',
    label: 'Professional Experience',
    predicate: (t) => t.kind === 'experience'
  },
  {
    id: 'row-certs',
    label: 'Education & Certifications',
    predicate: (t) => t.kind === 'education' || t.kind === 'certification'
  },
  {
    id: 'row-it-tools',
    label: 'Enterprise IT & Service Desk Tooling',
    predicate: (t) =>
      [
        'skill-manageengine',
        'skill-sysaid',
        'skill-ad',
        'skill-o365',
        'skill-wireshark',
        'skill-metasploit'
      ].includes(t.id)
  },
  {
    id: 'row-dev',
    label: 'Mobile and Web Development',
    predicate: (t) => ['skill-htmlcss', 'skill-flutter', 'skill-reactnative'].includes(t.id)
  },
  {
    id: 'row-marketing',
    label: 'Digital Marketing and Content',
    predicate: (t) =>
      t.kind === 'marketing' ||
      [
        'skill-canva',
        'skill-facebook-ads',
        'skill-tiktok',
        'skill-google-ads',
        'skill-meta-suite',
        'skill-google-business'
      ].includes(t.id)
  },
  {
    id: 'row-about',
    label: 'Start Here',
    predicate: (t) => t.kind === 'about' || t.kind === 'contact'
  }
];

export function getRowsForProfile(profileId: string): Row[] {
  return rows.map((r) => ({
    ...r,
    predicate: (t: Title) => r.predicate(t) && byProfile(profileId)(t)
  }));
}

export function getTitlesForProfile(profileId: string): Title[] {
  return titles.filter(byProfile(profileId));
}

export function findTitle(id: string): Title | undefined {
  return titles.find((t) => t.id === id);
}
