export const portfolioContent = {
  profile: {
    name: "Dinesh Kumar Lakshmanan",
    title: "Senior Quality Engineer / SDET Lead",
    superhead: "SDET · AUTOMATION ARCHITECT",
    headline: "I break software so your users never experience failure.",
    subhead:
      "SDET with 4+ years of experience designing and executing enterprise automation frameworks for UI and API testing with Selenium WebDriver and RestSharp (C#/Java). Proven track record cutting regression cycles by 75% across Humana Healthcare Insurance ecosystems.",
    avatar: `${import.meta.env.BASE_URL}profile.jpg`,
    status: "Active in QEA SBU · Humana Account",
    ctaPrimary: "Contact Me",
    ctaSecondary: "Download Resume",
  },

  navigation: [
    { id: "about", label: "Overview" },
    { id: "execution", label: "Methodology" },
    { id: "technologies", label: "Tech Stack" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Recognition" },
    { id: "contact", label: "Contact" },
  ],

  metrics: [
    {
      value: 4,
      suffix: "+",
      label: "Years Enterprise SDET",
    },
    {
      value: 75,
      suffix: "%",
      label: "Regression Time Reduced",
    },
    {
      value: 100,
      suffix: "+",
      label: "Suites Automated",
    },
  ],

  execution: {
    tag: "QUALITY ENGINEERING FRAMEWORK",
    title: "How I Deliver Zero-Defect Releases",
    subtitle:
      "A systematic approach built on 4 years of mission-critical healthcare insurance automation.",
    steps: [
      {
        step: "01",
        title: "Analyze & Architect",
        description:
          "Deconstruct complex healthcare user workflows into deterministic test models, Page Object Models (POM), and contract specifications.",
        tools: "PRD, Jira, User Stories",
        iconName: "Search",
      },
      {
        step: "02",
        title: "Automate (UI & API)",
        description:
          "Author scalable C# / Java automation suites with Selenium WebDriver and RestSharp. Integrate Codeium AI for 30% faster script authoring.",
        tools: "Selenium, C#, RestSharp",
        iconName: "Code2",
      },
      {
        step: "03",
        title: "Execute via CI/CD",
        description:
          "Trigger parallel regression runs inside Jenkins continuous delivery pipelines with cross-browser matrix coverage.",
        tools: "Jenkins, Git, Multi-Browser",
        iconName: "PlayCircle",
      },
      {
        step: "04",
        title: "Govern & Certify",
        description:
          "Audit execution logs in Azure DevOps & QTest, report defect triage, and deliver sign-offs for production deployments.",
        tools: "Azure DevOps, QTest",
        iconName: "BarChart3",
      },
    ],
  },

  technologies: {
    tag: "TECH STACK",
    title: "Technologies I Know",
    subtitle:
      "Battle-tested tools and frameworks scaled across enterprise healthcare production systems.",
    categories: [
      {
        iconName: "Layers",
        title: "UI Automation",
        description:
          "Robust multi-browser testing architectures, Page Object Model (POM), data-driven frameworks, and Codeium AI script optimization.",
        skills: [
          {
            name: "Selenium WebDriver",
            detail: "Primary UI Test Harness",
            logos: [{ type: "svg", id: "selenium", name: "Selenium WebDriver" }],
          },
          {
            name: "C# & Java",
            detail: "Core Automation Languages",
            logos: [
              { type: "svg", id: "csharp", name: "C#" },
              { type: "svg", id: "java", name: "Java" },
            ],
          },
          {
            name: "NUnit & TestNG",
            detail: "Test Runners & Assertions",
            logos: [
              { type: "monogram", initials: "NU", name: "NUnit" },
              { type: "monogram", initials: "NG", name: "TestNG" },
            ],
          },
          {
            name: "Codeium AI",
            detail: "30% Faster Script Generation",
            logos: [{ type: "svg", id: "codeium", name: "Codeium AI" }],
          },
        ],
        footerLink: "View UI Automation Architecture →",
      },
      {
        iconName: "Network",
        title: "API & Backend Testing",
        description:
          "Validating RESTful services, schema drift, request/response headers, status codes, and high-volume data ingestion.",
        skills: [
          {
            name: "RestSharp (C#)",
            detail: "Enterprise API Harness",
            logos: [{ type: "monogram", initials: "RS", name: "RestSharp" }],
          },
          {
            name: "Postman",
            detail: "Contract & Endpoint Testing",
            logos: [{ type: "svg", id: "postman", name: "Postman" }],
          },
          {
            name: "Rest Assured",
            detail: "Java RESTful Validation",
            logos: [{ type: "monogram", initials: "RA", name: "Rest Assured" }],
          },
          {
            name: "Data-Driven Suites",
            detail: "Negative & Edge Cases",
            logos: [{ type: "monogram", initials: "DD", name: "Data-Driven Suites" }],
          },
        ],
        footerLink: "View API Test Harnesses →",
      },
      {
        iconName: "Cpu",
        title: "CI/CD & Management",
        description:
          "Continuous testing pipelines, test governance, requirement traceability, and cross-functional Agile leadership.",
        skills: [
          {
            name: "Jenkins CI/CD",
            detail: "Automated Build Quality Gates",
            logos: [{ type: "svg", id: "jenkins", name: "Jenkins" }],
          },
          {
            name: "Git & GitHub",
            detail: "Version Control & Branching",
            logos: [
              { type: "svg", id: "git", name: "Git" },
              { type: "svg", id: "github", name: "GitHub" },
            ],
          },
          {
            name: "Azure DevOps & QTest",
            detail: "Test Management & Defect Triaging",
            logos: [
              { type: "svg", id: "azuredevops", name: "Azure DevOps" },
              { type: "monogram", initials: "QT", name: "QTest" },
            ],
          },
          {
            name: "VS Code & Visual Studio",
            detail: "Core Engineering Platforms",
            logos: [
              { type: "svg", id: "vscode", name: "VS Code" },
              { type: "svg", id: "visualstudio", name: "Visual Studio" },
            ],
          },
        ],
        footerLink: "View Pipeline Integrations →",
      },
    ],
  },

  experience: {
    tag: "CAREER JOURNEY",
    title: "Professional Experience",
    subtitle:
      "Enterprise quality engineering, healthcare platform automation, and technical leadership at Cognizant.",
    role: {
      title: "Sr. Quality Engineer (SDET Lead)",
      employer: "Cognizant Technology Solutions",
      client: "HUMANA Healthcare Insurance",
      division: "Quality Engineering & Assurance (QEA SBU)",
      period: "May 2022 — Present",
      duration: "4+ Years",
      location: "Enterprise Healthcare Platform",
      status: "CURRENT ROLE",
      impactMetrics: [
        { value: "75%", label: "Regression Time Cut", detail: "End-to-end cycle reduction" },
        { value: "100+", label: "Suites Automated", detail: "UI & API test cases" },
        { value: "30%", label: "AI Acceleration", detail: "Via Codeium AI script authoring" },
        { value: "39+", label: "Single-Cycle Scripts", detail: "Automation Enabler recognition" },
      ],
      responsibilities: [
        {
          title: "UI Automation Frameworks",
          tag: "Selenium & C#",
          desc: "Designed and maintained robust end-to-end UI automation suites using Selenium WebDriver and C# (NUnit). Implemented Page Object Model (POM) and data-driven patterns across HUMANA's member insurance portals, ensuring multi-browser consistency and robust test stability.",
        },
        {
          title: "Enterprise API Testing",
          tag: "RestSharp & Postman",
          desc: "Architected RESTful API automation frameworks using RestSharp (C#) to validate backend microservices, request/response payloads, status codes, headers, and schema integrity for critical insurance claims and enrollment workflows.",
        },
        {
          title: "CI/CD & AI-Assisted Scripting",
          tag: "Jenkins & Codeium AI",
          desc: "Seamlessly integrated automated test suites into Jenkins CI/CD pipelines for continuous regression gates. Pioneered the adoption of Codeium AI for script generation, accelerating framework development cycles by 30%.",
        },
        {
          title: "Technical Leadership & Crisis Delivery",
          tag: "Agile & Production Support",
          desc: "Led testing teams during critical emergency production fixes, ensuring rapid test coverage and minimal downtime. Contributed across 5 Agile scrums (Functionality, Stability, API, Security, AI) and mentored junior SDETs on automation best practices.",
        },
      ],
      clientProjects: [
        {
          name: "Centerwell Specialty (DTC/DTE & P3 Integration)",
          client: "HUMANA Healthcare Ecosystem",
          badge: "High-Volume Data & Enterprise Consolidation",
          description:
            "Spearheaded test automation strategy for Centerwell Specialty's DTC/DTE volume expansions to handle high-throughput healthcare data ingestion. Led end-to-end validation for the enterprise P3 initiative, successfully consolidating multiple distributed systems under a unified platform.",
          tech: ["RestSharp", "C#", "Data Ingestion", "Enterprise Architecture", "QTest"],
        },
        {
          name: "RxManagement API Enhancements (Greendale Phases 1 & 2)",
          client: "HUMANA Healthcare Ecosystem",
          badge: "Core Healthcare API & Workflow Modernization",
          description:
            "Validated critical healthcare APIs and endpoints across positive, negative, and edge-case flows with seamless cross-system integration. Automated core backend insurance business processes triggered via REST APIs, significantly eliminating manual intervention and operational overhead.",
          tech: ["RestSharp", "Selenium WebDriver", "CI/CD Pipelines", "Jenkins", "JSON Schema"],
        },
      ],
      awards: [
        {
          title: '"ABOVE & BEYOND" Award',
          conferredBy: "SBU Head-QEA at Cognizant QEA Townhall",
          description:
            "Awarded for exceptional leadership, composure, and critical delivery execution during high-stakes emergency production releases.",
        },
        {
          title: '"Automation Enabler" Award',
          conferredBy: "Cognizant Quality Engineering Leadership",
          description:
            "Honored for authoring and delivering over 39 end-to-end automation scripts in a single release cycle.",
        },
      ],
    },
    roles: [
      {
        role: "Sr. Quality Engineer (SDET Lead)",
        company: "Cognizant Technology Solutions — Client: HUMANA Healthcare Insurance",
        period: "May 2022 — Present",
        badge: "CURRENT",
        isCurrent: true,
        bullets: [
          "Designed and maintained end-to-end UI automation suites for major regression cycles across HUMANA's healthcare insurance platform, cutting regression cycle time by 75%.",
          "Built and maintained enterprise API automation frameworks using RestSharp (C#) to validate RESTful services, status codes, headers, and schema integrity.",
          "Integrated Codeium AI for automation script generation, decreasing test script development cycle times by 30%.",
          "Automated critical workflows across multiple browsers, ensuring consistent cross-browser UI behavior.",
          "Integrated UI and API test suites into CI/CD pipelines via Jenkins, guaranteeing continuous backend and frontend validation on every build.",
          "Led testing efforts during critical emergency production fixes, ensuring rapid test coverage, minimal downtime, and on-time delivery.",
          "Contributed across multiple Agile scrums covering Functionality, Stability, API, Security, and AI Modernization streams — from contributor to team lead.",
          "Collaborated with developers, BAs, and DevOps for requirement analysis, test strategy definition, and mentored junior SDETs on automation best practices.",
        ],
      },
    ],
  },

  education: {
    tag: "BACKGROUND & RECOGNITION",
    title: "Education & Credentials",
    degreeCard: {
      category: "FORMAL EDUCATION",
      degree: "Bachelor of Engineering (B.E.)",
      institution: "Anna University Affiliated Institute",
      period: "Engineering Graduate",
      description:
        "Specialized in Software Engineering, Object-Oriented Programming (Java/C#), Database Management Systems, Data Structures, and Software Quality Assurance Principles.",
      honors: "Specialization: SDET & Quality Engineering",
      gpa: "First Class with Distinction",
    },
    credentialsCard: {
      category: "PROFESSIONAL RECOGNITION & AWARDS",
      title: "Key Honors & Certifications",
      certifications: [
        {
          name: '"ABOVE & BEYOND" Award',
          code: "Cognizant QEA Townhall",
          year: "2023",
        },
        {
          name: '"Automation Enabler" Award',
          code: "Cognizant Quality Engineering",
          year: "2023",
        },
        {
          name: "Selenium WebDriver & C# Test Automation",
          code: "Enterprise SDET",
          year: "2022",
        },
        {
          name: "REST API & RestSharp Enterprise Verification",
          code: "Healthcare Microservices",
          year: "2022",
        },
      ],
      footerNote: "Verified official Cognizant & Humana SDET track record",
    },
    awards: [
      {
        year: "Cognizant QEA",
        title: '"ABOVE & BEYOND" Award',
        organization: "QEA SBU Townhall (by SBU Head - QEA)",
        description:
          "Awarded for stellar performance, technical ownership, and delivering critical emergency production fixes for HUMANA Healthcare Insurance.",
      },
      {
        year: "Automation Excellence",
        title: '"Automation Enabler" Award',
        organization: "Cognizant Delivery Leadership",
        description:
          "Recognized for authoring over 39 automation test scripts in a single cycle, accelerating test execution velocity.",
      },
    ],
  },

  contact: {
    tag: "COLLABORATE",
    title: "Looking for an SDET Lead for your team?",
    subtitle:
      "Available for senior quality engineering roles, framework architecture contracts, and technical advisory.",
    cta: "Send Message",
    directEmail: "dineshkanappa@gmail.com",
    directPhone: "+91 9345327818",
    linkedin: "https://www.linkedin.com/in/dineshkumar1110/",
    github: "https://github.com/dineshkumar1110",
    location: "Tamil Nadu, India · Open to Hybrid & Remote",
    links: [
      {
        iconName: "Mail",
        label: "Email",
        value: "dineshkanappa@gmail.com",
        href: "mailto:dineshkanappa@gmail.com",
      },
      {
        iconName: "Linkedin",
        label: "LinkedIn",
        value: "linkedin.com/in/dineshkumar1110",
        href: "https://www.linkedin.com/in/dineshkumar1110/",
      },
      {
        iconName: "Github",
        label: "GitHub",
        value: "github.com/dineshkumar1110",
        href: "https://github.com/dineshkumar1110",
      },
    ],
    form: {
      nameLabel: "Your Name",
      namePlaceholder: "Jane Doe",
      emailLabel: "Work Email",
      emailPlaceholder: "jane@company.com",
      messageLabel: "Project Scope & Timeline",
      messagePlaceholder: "Describe your test automation architecture requirements or role details...",
      submitButton: "Send Inquiry",
    },
  },

  footer: {
    copyright: "© 2026 Dinesh Kumar Lakshmanan. All rights reserved.",
    links: [
      { label: "Overview", href: "#about" },
      { label: "Methodology", href: "#execution" },
      { label: "Technologies", href: "#technologies" },
      { label: "Experience", href: "#experience" },
      { label: "Resume", href: "#" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/dineshkumar1110/" },
      { label: "GitHub", href: "https://github.com/dineshkumar1110" },
    ],
  },
};
