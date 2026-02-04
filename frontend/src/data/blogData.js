/* ================= CATEGORIES ================= */

export const blogCategories = [
  "All",
  "Research",
  "Academics",
  "Innovation",
  "Funding",
  "Lifestyle",
];

/* ================= SHARED ASSETS ================= */

const sharedImage = "/images/blog/landing/blog_hero.png";

/* ================= BLOG POSTS ================= */

export const blogPosts = [
  /* ================= RESEARCH ================= */
  {
    id: 1,
    slug: "reimagining-african-research-infrastructure",
    title: "Reimagining African Research Infrastructure",
    excerpt:
      "How digital platforms are reshaping collaboration, data access, and research visibility across Africa.",
    content: `
      <p>
        Africa’s research ecosystem is undergoing a profound digital transformation.
        As access to tools and collaboration increases, visibility becomes just as important
        as discovery itself.
      </p>

      <h2>Why Infrastructure Matters</h2>

      <p>
        Research today depends on more than brilliance. It relies on systems that
        support collaboration, data sharing, and global visibility.
      </p>

      <blockquote>
        Research today depends on more than brilliance. It relies on systems that
        support collaboration, data sharing, and global visibility.
      </blockquote>

      <p>
        Platforms like Nnyocha help researchers connect their work to institutions,
        funders, and policymakers across borders.
      </p>
    `,
    image: sharedImage,
    category: "Research",
    author: "NNYOCHA Editorial",
    date: "30 Jan 2024",
    readTime: "8 mins read",
  },
  {
    id: 2,
    slug: "open-science-and-the-future-of-african-research",
    title: "Open Science and the Future of African Research",
    excerpt:
      "Why open-access data and shared research tools are critical for accelerating innovation.",
    content: `
      <p>Open science promotes transparency, collaboration, and equity.</p>
      <h2>The Power of Open Access</h2>
      <p>Shared tools and datasets reduce duplication and cost.</p>
    `,
    image: sharedImage,
    category: "Research",
    author: "Research Desk",
    date: "27 Jan 2024",
    readTime: "7 mins read",
  },
  {
    id: 3,
    slug: "bridging-the-gap-between-research-and-policy",
    title: "Bridging the Gap Between Research and Policy",
    excerpt:
      "Translating academic findings into policies that drive real-world impact.",
    content: `
      <p>Policy impact depends on accessible, actionable research.</p>
      <h2>From Insight to Action</h2>
      <p>Bridging this gap requires collaboration and communication.</p>
    `,
    image: sharedImage,
    category: "Research",
    author: "Policy & Impact Team",
    date: "24 Jan 2024",
    readTime: "6 mins read",
  },

  /* ================= ACADEMICS ================= */
  {
    id: 4,
    slug: "building-a-sustainable-academic-career",
    title: "Building a Sustainable Academic Career",
    excerpt:
      "Practical strategies for early-career researchers navigating grants, mentorship, and impact.",
    content: `
      <p>Academic careers require strategy, resilience, and support.</p>
      <h2>Long-Term Thinking</h2>
      <p>Mentorship and funding planning are key.</p>
    `,
    image: sharedImage,
    category: "Academics",
    author: "Dr. Adaeze Okorie",
    date: "22 Jan 2024",
    readTime: "6 mins read",
  },
  {
    id: 5,
    slug: "publishing-in-high-impact-journals",
    title: "Publishing in High-Impact Journals",
    excerpt:
      "What editors look for and how African scholars can compete globally.",
    content: `
      <p>High-impact publishing starts with clarity and originality.</p>
      <h2>What Editors Want</h2>
      <p>Strong methodology and relevance are essential.</p>
    `,
    image: sharedImage,
    category: "Academics",
    author: "Academic Affairs",
    date: "20 Jan 2024",
    readTime: "7 mins read",
  },
  {
    id: 6,
    slug: "mentorship-as-a-catalyst-for-academic-growth",
    title: "Mentorship as a Catalyst for Academic Growth",
    excerpt:
      "Why structured mentorship is essential for long-term academic success.",
    content: `
      <p>Mentorship accelerates learning and confidence.</p>
      <h2>Structured Guidance</h2>
      <p>Effective mentorship builds sustainable careers.</p>
    `,
    image: sharedImage,
    category: "Academics",
    author: "NNYOCHA Mentors",
    date: "18 Jan 2024",
    readTime: "5 mins read",
  },

  /* ================= INNOVATION ================= */
  {
    id: 7,
    slug: "ai-tools-every-researcher-should-know",
    title: "AI Tools Every Researcher Should Know",
    excerpt:
      "From literature reviews to data analysis, these tools are changing how research is done.",
    content: `
      <p>AI is reshaping research workflows.</p>
      <h2>Smarter Research</h2>
      <p>Automation saves time and improves accuracy.</p>
    `,
    image: sharedImage,
    category: "Innovation",
    author: "NNYOCHA Labs",
    date: "16 Jan 2024",
    readTime: "10 mins read",
  },
  {
    id: 8,
    slug: "digital-platforms-powering-research-collaboration",
    title: "Digital Platforms Powering Research Collaboration",
    excerpt:
      "How technology is breaking down silos across institutions and borders.",
    content: `
      <p>Collaboration thrives on connected platforms.</p>
      <h2>Breaking Silos</h2>
      <p>Technology enables global research teams.</p>
    `,
    image: sharedImage,
    category: "Innovation",
    author: "Innovation Unit",
    date: "14 Jan 2024",
    readTime: "8 mins read",
  },
  {
    id: 9,
    slug: "the-role-of-data-in-modern-scientific-discovery",
    title: "The Role of Data in Modern Scientific Discovery",
    excerpt:
      "Why data-driven research is becoming the backbone of innovation.",
    content: `
      <p>Data fuels modern science.</p>
      <h2>Evidence at Scale</h2>
      <p>Better data leads to better decisions.</p>
    `,
    image: sharedImage,
    category: "Innovation",
    author: "Data Science Desk",
    date: "12 Jan 2024",
    readTime: "6 mins read",
  },

  /* ================= FUNDING ================= */
  {
    id: 10,
    slug: "winning-international-research-grants",
    title: "Winning International Research Grants",
    excerpt:
      "A step-by-step guide to positioning your proposal for global funding opportunities.",
    content: `
      <p>Funding success depends on clarity and alignment.</p>
      <h2>Competitive Proposals</h2>
      <p>Global funders seek impact and feasibility.</p>
    `,
    image: sharedImage,
    category: "Funding",
    author: "Funding Desk",
    date: "10 Jan 2024",
    readTime: "7 mins read",
  },
  {
    id: 11,
    slug: "common-mistakes-in-research-grant-applications",
    title: "Common Mistakes in Research Grant Applications",
    excerpt:
      "Avoid these pitfalls to increase your chances of securing funding.",
    content: `
      <p>Many strong proposals fail due to avoidable errors.</p>
      <h2>What to Avoid</h2>
      <p>Clarity and compliance matter.</p>
    `,
    image: sharedImage,
    category: "Funding",
    author: "Grants Advisory",
    date: "08 Jan 2024",
    readTime: "6 mins read",
  },
  {
    id: 12,
    slug: "funding-opportunities-for-african-researchers-2024",
    title: "Funding Opportunities for African Researchers in 2024",
    excerpt:
      "A curated list of active grants, fellowships, and research funds.",
    content: `
      <p>2024 presents new funding opportunities.</p>
      <h2>Where to Apply</h2>
      <p>Strategic targeting increases success.</p>
    `,
    image: sharedImage,
    category: "Funding",
    author: "NNYOCHA Funding Hub",
    date: "06 Jan 2024",
    readTime: "9 mins read",
  },

  /* ================= LIFESTYLE ================= */
  {
    id: 13,
    slug: "balancing-research-life-and-wellbeing",
    title: "Balancing Research, Life & Wellbeing",
    excerpt:
      "Why productivity without wellbeing is unsustainable in academia.",
    content: `
      <p>Wellbeing is foundational to long-term productivity.</p>
      <h2>Healthy Balance</h2>
      <p>Rest improves research quality.</p>
    `,
    image: sharedImage,
    category: "Lifestyle",
    author: "NNYOCHA Wellness",
    date: "04 Jan 2024",
    readTime: "5 mins read",
  },
  {
    id: 14,
    slug: "managing-burnout-in-high-pressure-research-environments",
    title: "Managing Burnout in High-Pressure Research Environments",
    excerpt:
      "Recognizing the signs of burnout and building healthier work habits.",
    content: `
      <p>Burnout affects performance and health.</p>
      <h2>Early Warning Signs</h2>
      <p>Proactive care prevents collapse.</p>
    `,
    image: sharedImage,
    category: "Lifestyle",
    author: "Wellbeing Desk",
    date: "02 Jan 2024",
    readTime: "6 mins read",
  },
  {
    id: 15,
    slug: "creating-a-healthy-work-rhythm-as-a-scholar",
    title: "Creating a Healthy Work Rhythm as a Scholar",
    excerpt:
      "How routines, rest, and boundaries improve long-term academic output.",
    content: `
      <p>Consistency beats intensity.</p>
      <h2>Sustainable Rhythms</h2>
      <p>Boundaries protect creativity.</p>
    `,
    image: sharedImage,
    category: "Lifestyle",
    author: "NNYOCHA Community",
    date: "30 Dec 2023",
    readTime: "5 mins read",
  },
];
