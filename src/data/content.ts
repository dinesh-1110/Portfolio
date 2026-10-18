export interface NavItem {
  id: string;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SkillCategory {
  category: string;
  skills: string;
}

export interface ExperienceRole {
  title: string;
  company: string;
  client: string;
  period: string;
  bullets: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
}

export interface ContactLink {
  type: string;
  label: string;
  href: string;
  display: string;
}

export interface PortfolioData {
  meta: {
    name: string;
    title: string;
    summary: string;
    avatar: string;
    resumeUrl: string;
  };
  navigation: NavItem[];
  hero: {
    name: string;
    title: string;
    summary: string;
    stats: StatItem[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  skills: {
    heading: string;
    items: SkillCategory[];
  };
  experience: {
    heading: string;
    item: ExperienceRole;
  };
  projects: {
    heading: string;
    client: string;
    items: ProjectItem[];
  };
  achievements: {
    heading: string;
    items: string[];
  };
  contact: {
    heading: string;
    subtext: string;
    links: ContactLink[];
  };
  footer: {
    text: string;
  };
}

const baseUrl = import.meta.env.BASE_URL || "/";

export const portfolioContent: PortfolioData = {
  meta: {
    name: "Dinesh Kumar Lakshmanan",
    title: "Senior Quality Engineer (SDET)",
    summary:
      "SDET with 4 years of experience designing UI and API automation frameworks with Selenium WebDriver and RestSharp (C#/Java) for enterprise healthcare clients.",
    avatar: `${baseUrl}profile.jpg`,
    resumeUrl: `${baseUrl}Dinesh_Kumar_Lakshmanan_Resume.pdf`,
  },

  navigation: [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ],

  hero: {
    name: "Dinesh Kumar Lakshmanan",
    title: "Senior Quality Engineer (SDET)",
    summary:
      "SDET with 4 years of experience designing UI and API automation frameworks with Selenium WebDriver and RestSharp (C#/Java) for enterprise healthcare clients.",
    stats: [
      { value: "4 yrs", label: "experience" },
      { value: "100+", label: "test cases automated" },
      { value: "75%", label: "regression time reduced" },
    ],
    ctaPrimary: "Download Resume",
    ctaSecondary: "Contact",
  },

  skills: {
    heading: "Skills",
    items: [
      {
        category: "UI Automation",
        skills: "Selenium WebDriver, C#, NUnit, Java, TestNG",
      },
      {
        category: "Frameworks",
        skills: "Page Object Model, Data-Driven, Hybrid",
      },
      {
        category: "API Testing",
        skills: "RestSharp, Postman, Rest Assured",
      },
      {
        category: "CI/CD & Build",
        skills: "Git, Jenkins",
      },
      {
        category: "Management & Tools",
        skills:
          "Azure DevOps, QTest, Visual Studio / VS Code, Eclipse, Codeium AI",
      },
    ],
  },

  experience: {
    heading: "Experience",
    item: {
      title: "Sr. Quality Engineer",
      company: "Cognizant Technology Solutions",
      client: "HUMANA Healthcare Insurance",
      period: "May 2022 – Present",
      bullets: [
        "Designed and maintained end-to-end UI automation suites for major regression cycles across multiple browsers",
        "Built RestSharp (C#) API frameworks covering functional, regression, and negative scenarios; validated payloads, status codes, headers, and schema",
        "Integrated UI and API suites into Jenkins CI/CD pipelines for continuous validation on every build",
        "Used Codeium AI for script generation, reducing development time by 30%",
        "Led testing during critical emergency production fixes, worked across 5 Agile scrums (Functionality, Stability, API, Security, AI Modernization), and mentored junior SDETs",
      ],
    },
  },

  projects: {
    heading: "Key Projects",
    client: "HUMANA",
    items: [
      {
        title: "RxManagement API Enhancements – Greendale Phase 1",
        description:
          "Validated new APIs across positive, negative, and edge-case flows with E2E integration across services.",
      },
      {
        title: "RxManagement API Enhancements – Greendale Phase 2",
        description:
          "Tested API-triggered internal automation that reduced manual intervention and operational cost.",
      },
      {
        title: "Centerwell Specialty – DTC/DTE Volume Expansion",
        description:
          "Validated endpoint enhancements for high-volume data ingestion.",
      },
      {
        title: "Centerwell Specialty – P3 Integration",
        description:
          "Contributed to consolidating multiple systems under a unified platform and delivered on schedule.",
      },
    ],
  },

  achievements: {
    heading: "Achievements",
    items: [
      '"Above & Beyond" award, QEA SBU Townhall (from SBU Head – QEA)',
      '"Automation Enabler" recognition for 39+ automation scripts in a single release cycle',
    ],
  },

  contact: {
    heading: "Contact",
    subtext:
      "Available for Senior Quality Engineer and SDET opportunities. Feel free to reach out directly.",
    links: [
      {
        type: "email",
        label: "Email",
        href: "mailto:dineshkanappa@gmail.com",
        display: "dineshkanappa@gmail.com",
      },
      {
        type: "phone",
        label: "Phone",
        href: "tel:+919345327818",
        display: "+91 9345327818",
      },
      {
        type: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/dineshkumar1110/",
        display: "linkedin.com/in/dineshkumar1110",
      },
      {
        type: "github",
        label: "GitHub",
        href: "https://github.com/dineshkumar1110",
        display: "github.com/dineshkumar1110",
      },
    ],
  },

  footer: {
    text: "© 2026 Dinesh Kumar Lakshmanan",
  },
};
