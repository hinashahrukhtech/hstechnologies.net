export type Service = {
  id: string;
  title: string;
  description: string;
  tagline: string;
  capabilities: string[];
  content: string[];
};

export const SERVICES: readonly Service[] = [
  {
    id: "design",
    title: "Design",
    description:
      "From your business idea's logo to the workflow needed by your global enterprise, we help design graphics, processes, applications, websites and documents.",
    tagline: "Crafting visual identities and seamless experiences.",
    capabilities: [
      "Brand Identity & Logo Design",
      "UI/UX Design",
      "Process & Workflow Design",
      "Web & Application Design",
      "Document & Print Design",
      "Design Systems & Guidelines",
    ],
    content: [
      "Great design is the intersection of aesthetics and function. Our design team works across every medium — from brand identities that define your market presence, to application interfaces that delight users and drive engagement. We approach each project with a deep understanding of your audience and objectives, ensuring every visual decision serves a strategic purpose.",
      "Whether you need a complete brand overhaul, a streamlined user experience for your digital product, or meticulously crafted documents and workflows, our designers bring precision and creativity to the table. We follow a research-driven process: discovery, ideation, prototyping, and refinement — delivering results that are both visually compelling and operationally effective.",
    ],
  },
  {
    id: "develop",
    title: "Develop",
    description:
      "With experts in multiple technologies and frameworks, we code and create software and IoT solutions for almost every sector and cater to all project sizes.",
    tagline: "Engineering robust software for every scale.",
    capabilities: [
      "Web & Mobile Applications",
      "Enterprise Software Solutions",
      "IoT & Embedded Systems",
      "API Design & Integration",
      "Cloud-Native Development",
      "Quality Assurance & Testing",
    ],
    content: [
      "Our development team brings together expertise across a broad technology landscape — from modern web frameworks and mobile platforms to embedded systems and IoT devices. We build software that is reliable, scalable, and maintainable, whether for a startup launching its first product or an enterprise modernizing its infrastructure.",
      "Every project follows our disciplined engineering process: thorough requirements analysis, architecture planning, iterative development with continuous integration, and rigorous testing. We work with the technologies best suited to your needs, maintaining clean codebases and comprehensive documentation so your investment continues to deliver value long after launch.",
    ],
  },
  {
    id: "deploy",
    title: "Deploy",
    description:
      "Using advanced technologies including our cloud infrastructure and decentralized ledgers (based on our in-house blockchain platform), your project is deployed at scale, securely.",
    tagline: "Launching and scaling with confidence.",
    capabilities: [
      "Cloud Infrastructure & DevOps",
      "Blockchain & Decentralized Ledgers",
      "CI/CD Pipeline Configuration",
      "Security Hardening & Compliance",
      "Performance Optimization",
      "Monitoring & Incident Response",
    ],
    content: [
      "Deployment is where potential becomes reality. Our infrastructure team ensures your applications are launched on resilient, scalable platforms — from cloud environments to our proprietary blockchain-based decentralized ledger systems. We design architectures that handle growth gracefully while maintaining the security standards your business demands.",
      "Beyond the initial launch, we build automated pipelines that enable rapid, reliable releases. Continuous integration, automated testing, infrastructure-as-code, and real-time monitoring form the backbone of our deployment practice. The result: your team ships with confidence, and your users experience consistent, high-performance service.",
    ],
  },
  {
    id: "research",
    title: "Research",
    description:
      "Our team of analysts and scientists helps you collect, parse and format data into meaningful information. Some of our research is publicly available in popular research journals.",
    tagline: "Turning raw data into actionable knowledge.",
    capabilities: [
      "Data Collection & Surveys",
      "Statistical Analysis",
      "Academic & Scientific Research",
      "Market & Industry Research",
      "Data Formatting & Visualization",
      "Published Research & White Papers",
    ],
    content: [
      "Informed decisions start with quality research. Our team of analysts and data scientists specializes in collecting, parsing, and interpreting data across industries — transforming raw information into structured insights that drive strategy. From large-scale surveys to focused competitive analyses, we apply rigorous methodologies to every engagement.",
      "Our research output extends beyond client deliverables. We contribute to the broader knowledge ecosystem through publications in respected journals and industry white papers. This commitment to original research keeps our methods sharp and our clients at the forefront of their fields, backed by evidence rather than assumption.",
    ],
  },
  {
    id: "analyze",
    title: "Analyze",
    description:
      "Leveraging latest technologies, such as machine learning and data analytics, we help you make more informed decisions, while business intelligence tools keeps you updated in real time.",
    tagline: "Intelligence-driven decisions, delivered in real time.",
    capabilities: [
      "Machine Learning & AI Models",
      "Business Intelligence Dashboards",
      "Predictive Analytics",
      "Real-Time Data Monitoring",
      "Data Pipeline Architecture",
      "Custom Reporting Solutions",
    ],
    content: [
      "Data is only valuable when it leads to action. Our analytics practice combines machine learning, statistical modeling, and business intelligence tooling to surface the patterns and predictions that matter most to your organization. We build systems that don't just report on the past — they anticipate what's next.",
      "From real-time dashboards that keep leadership informed to predictive models that optimize operations, our solutions are tailored to your decision-making workflows. We handle the full pipeline: ingestion, transformation, analysis, and presentation — ensuring data flows cleanly from source to insight without manual bottlenecks.",
    ],
  },
  {
    id: "market",
    title: "Market",
    description:
      "We help bring projects to life and drive business growth through integrated marketing, content and communication strategies, making you visible and conveying your message to the masses.",
    tagline: "Strategic visibility that drives measurable growth.",
    capabilities: [
      "Digital Marketing Strategy",
      "Content Creation & Copywriting",
      "Social Media Management",
      "SEO & Search Marketing",
      "Brand Communication",
      "Campaign Analytics & Optimization",
    ],
    content: [
      "Visibility without strategy is noise. Our marketing team builds integrated campaigns that connect your brand with the right audiences through the right channels at the right time. We combine creative storytelling with data-driven targeting to ensure every piece of content, every ad, and every social post contributes to measurable business outcomes.",
      "From comprehensive digital marketing strategies to granular campaign optimization, we handle the full spectrum of brand communication. Our approach is rooted in understanding your market positioning, competitive landscape, and customer journey — then crafting narratives and experiences that convert attention into engagement and engagement into growth.",
    ],
  },
  {
    id: "automation",
    title: "Automation",
    description:
      "Converting processes to digital workflows, we help you take a load off your core resources so that they can focus on what matters the most to your business or project.",
    tagline: "Freeing your teams to focus on what matters.",
    capabilities: [
      "Business Process Automation",
      "Workflow Digitization",
      "Robotic Process Automation (RPA)",
      "Integration & Middleware",
      "Document & Approval Workflows",
      "Custom Automation Platforms",
    ],
    content: [
      "Every hour spent on repetitive manual work is an hour not spent on innovation, strategy, or customer engagement. Our automation practice identifies high-impact opportunities within your operations and converts them into streamlined digital workflows — reducing errors, accelerating throughput, and freeing your most valuable resources for higher-order work.",
      "We go beyond simple task automation. Our team designs end-to-end workflow solutions that integrate with your existing systems, handle complex decision logic, and scale with your organization. From document approval chains to cross-platform data synchronization, we build automation that is robust, auditable, and adaptable to evolving business needs.",
    ],
  },
  {
    id: "productivity",
    title: "Productivity",
    description:
      "Developing capacity of your business by providing the best talent, technology, and business acumen needed for success, efficiency, better oversight and management.",
    tagline: "Building capacity through talent, technology, and insight.",
    capabilities: [
      "Staff Augmentation & Talent Sourcing",
      "Technology Consulting",
      "Project & Program Management",
      "Operational Efficiency Audits",
      "Training & Capacity Building",
      "Management & Oversight Tools",
    ],
    content: [
      "Productivity is not about working harder — it's about having the right people, the right tools, and the right processes aligned toward clear objectives. We help organizations build capacity by supplementing teams with skilled professionals, implementing technologies that reduce friction, and establishing management frameworks that provide real visibility into performance.",
      "Our productivity engagements are tailored to your organization's maturity and goals. Whether you need specialized technical talent for a critical project, a comprehensive operational audit, or leadership training that elevates your management culture, we deliver solutions grounded in practical experience across industries and scales.",
    ],
  },
  {
    id: "advisory",
    title: "Advisory",
    description:
      "Customized services to help you strategize, plan, and transform your business, while keeping you informed of the latest trends in every aspect of your business.",
    tagline: "Strategic counsel for lasting transformation.",
    capabilities: [
      "Business Strategy & Planning",
      "Digital Transformation Roadmaps",
      "Technology Assessment & Selection",
      "Risk & Compliance Advisory",
      "Industry Trend Analysis",
      "Organizational Change Management",
    ],
    content: [
      "The pace of change in technology and markets demands more than reactive decision-making. Our advisory practice provides the strategic perspective organizations need to plan with confidence — from evaluating emerging technologies and assessing competitive threats to mapping multi-year digital transformation roadmaps that align with business reality.",
      "We work as an extension of your leadership team, bringing cross-industry insight and practical frameworks to the table. Our advisory engagements are designed to be actionable: every recommendation comes with a clear implementation path, risk assessment, and success criteria. We stay engaged through execution, ensuring strategy translates into measurable outcomes.",
    ],
  },
] as const;

export const PARTNERS = [
  { id: "chapter1", name: "Chapter 1 Solutions" },
  { id: "fdh", name: "FDH Development" },
  { id: "nic", name: "National Incubation Center" },
  { id: "pepsi", name: "Pepsi" },
  { id: "amazing-brownies", name: "Amazing Brownies" },
  { id: "rode-kors", name: "Røde Kors" },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/values", label: "Values" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/reports", label: "Reports" },
  { href: "/contact", label: "Contact" },
] as const;

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/hinashahrukhtechnologies/",
  linkedin: "https://www.linkedin.com/company/hstech/",
  twitter: "https://twitter.com/hstechpk",
} as const;

export const CONTACT_INFO = {
  phone: "+92 301 8510470",
  email: "technologies@hsco.pk",
  address: "Office 1, 2nd Floor, Al-Hameed Plaza, G-11 Markaz, Islamabad, Pakistan",
} as const;
