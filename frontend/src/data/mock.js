// Mock data for Austin Hamilton portfolio

export const portfolioData = {
  personal: {
    name: "Austin Hamilton",
    title: "Full-Stack Developer",
    bio: "Passionate full-stack developer with 3+ years of experience building scalable web applications, mobile apps, and AI-powered solutions. I specialize in React, Node.js, and modern development practices.",
    skills: [
      "React", "TypeScript", "Node.js", "Python", "MongoDB", ".NET", 
      "C / C++", "Docker", "Tailwind", "Version control", "REST APIs", "Testing"
    ],
    contact: {
      email: "austinhamilton17@hotmail.com",
      github: "https://github.com/Austinham",
      linkedin: "https://www.linkedin.com/in/austin-hamilton-592928173/",
      location: "Malmö, Sweden"
    }
  },
  
  projects: [
    {
      id: 1,
      title: "TaskFlow Pro",
      category: "SaaS Application",
      shortDescription: "A comprehensive project management and collaboration platform for modern teams.",
      mainPurpose: "Streamline team collaboration and project management with intuitive tools and real-time updates.",
      currentStructure: [
        "Landing page with feature showcase",
        "User authentication and onboarding",
        "Project dashboard with Kanban boards",
        "Team collaboration tools",
        "Analytics and reporting section",
        "Settings and user management"
      ],
      designSystem: {
        fonts: "Inter for UI, Roboto Mono for code",
        colors: "Primary: #3B82F6, Secondary: #10B981, Neutral: #F8FAFC",
        uiPatterns: "Card-based layouts, modal dialogs, drag-and-drop interfaces"
      },
      userFlow: [
        "Landing page → Sign up/Login",
        "Onboarding → Create first project",
        "Dashboard → Manage tasks and teams",
        "Collaboration → Real-time updates and comments"
      ],
      targetUsers: [
        "Small to medium-sized development teams",
        "Project managers and team leads",
        "Remote-first organizations",
        "Startups scaling their operations"
      ],
      keyFeatures: [
        "Real-time collaboration with WebSocket integration",
        "Drag-and-drop Kanban boards",
        "Advanced filtering and search",
        "Time tracking and productivity analytics",
        "Slack and GitHub integrations",
        "Custom workflow automation"
      ],
      techStack: {
        frontend: "React, TypeScript, Tailwind CSS, Framer Motion",
        backend: "Node.js, Express, Socket.io, MongoDB",
        deployment: "AWS EC2, Docker, Nginx",
        tools: "Git, Jest, Cypress, Figma"
      },
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      demoUrl: "https://taskflow-demo.netlify.app",
      githubUrl: "https://github.com/Austinham/taskflow-pro",
      status: "Live"
    },
    
    {
      id: 2,
      title: "Cafe Pronto",
      category: "Web Application",
      shortDescription: "A modern, responsive cafe shop website built with React and FastAPI, featuring a complete cafe management system.",
      mainPurpose: "Create an engaging online presence for a coffee shop with seamless ordering experience, beautiful design, and robust backend API.",
      currentStructure: [
        "Responsive landing page with hero section",
        "Menu display with categories and pricing",
        "Online ordering system",
        "About section with coffee shop story",
        "Contact information and location",
        "Mobile-friendly navigation"
      ],
      designSystem: {
        fonts: "Modern sans-serif fonts for readability",
        colors: "Warm coffee tones, cream backgrounds, dark accents",
        uiPatterns: "Card-based layouts, smooth animations, intuitive navigation"
      },
      userFlow: [
        "Landing page → Browse menu",
        "Select items → Add to cart",
        "Review order → Checkout process",
        "Order confirmation → Contact information"
      ],
      targetUsers: [
        "Coffee shop customers",
        "Local residents seeking quality coffee",
        "Online food ordering enthusiasts",
        "Mobile users on-the-go"
      ],
      keyFeatures: [
        "Responsive design for all devices",
        "Interactive menu with categories",
        "Smooth scrolling navigation",
        "Modern UI/UX design",
        "Fast loading performance",
        "SEO optimized structure"
      ],
      techStack: {
        frontend: "React 18, Tailwind CSS, Shadcn/ui",
        backend: "FastAPI, MongoDB, Python",
        styling: "Modern CSS with Tailwind utilities",
        deployment: "GitHub Pages, Netlify",
        tools: "Git, VS Code, CRACO"
      },
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop",
      demoUrl: "https://austinham.github.io/-cafe-pronto-demo",
      githubUrl: "https://github.com/Austinham/-cafe-pronto-demo",
      status: "Live"
    },
    
    {
      id: 3,
      title: "ContentForge AI",
      category: "AI Tool",
      shortDescription: "Advanced AI content generation platform for marketers and content creators.",
      mainPurpose: "Empower content creators with AI-driven tools for generating high-quality, SEO-optimized content at scale.",
      currentStructure: [
        "Dashboard with content analytics",
        "AI content generation studio",
        "Template library and customization",
        "SEO optimization tools",
        "Content calendar and scheduling",
        "Team collaboration workspace"
      ],
      designSystem: {
        fonts: "Poppins for headings, Source Sans Pro for body",
        colors: "Primary: #8B5CF6, Secondary: #06D6A0, Neutral: #F1F5F9",
        uiPatterns: "Split-screen layouts, progressive forms, real-time previews"
      },
      userFlow: [
        "Login → Dashboard overview",
        "Select content type → AI generation",
        "Review and edit → SEO optimization",
        "Schedule or publish → Analytics tracking"
      ],
      targetUsers: [
        "Digital marketing agencies",
        "Content creators and bloggers",
        "E-commerce businesses",
        "Social media managers"
      ],
      keyFeatures: [
        "GPT-4 powered content generation",
        "SEO keyword optimization",
        "Multi-language support",
        "Brand voice customization",
        "Plagiarism detection",
        "Content performance analytics"
      ],
      techStack: {
        frontend: "React, Next.js, Tailwind CSS, Zustand",
        backend: "Node.js, NestJS, PostgreSQL, OpenAI API",
        ai: "OpenAI GPT-4, Anthropic Claude, Custom ML models",
        deployment: "Vercel, Supabase, Cloudflare"
      },
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      demoUrl: "https://contentforge-demo.netlify.app",
      githubUrl: "https://github.com/Austinham/contentforge-ai",
      status: "Live"
    },
    
    {
      id: 4,
      title: "DataViz Analytics",
      category: "Data Analytics",
      shortDescription: "Real-time business intelligence dashboard with advanced data visualization.",
      mainPurpose: "Transform complex business data into actionable insights through intuitive visualizations and real-time analytics.",
      currentStructure: [
        "Executive dashboard overview",
        "Custom report builder",
        "Real-time data streaming interface",
        "Interactive chart and graph library",
        "Data source management",
        "Automated alerts and notifications"
      ],
      designSystem: {
        fonts: "IBM Plex Sans, IBM Plex Mono for data",
        colors: "Primary: #0EA5E9, Secondary: #F59E0B, Success: #10B981",
        uiPatterns: "Grid layouts, resizable widgets, contextual menus"
      },
      userFlow: [
        "Login → Dashboard overview",
        "Connect data sources → Configure metrics",
        "Build custom reports → Set up alerts",
        "Share insights → Collaborate with team"
      ],
      targetUsers: [
        "Business analysts and data scientists",
        "C-level executives and managers",
        "Product and marketing teams",
        "Operations and finance departments"
      ],
      keyFeatures: [
        "Real-time data streaming and processing",
        "Drag-and-drop report builder",
        "Advanced filtering and drill-down",
        "Automated insights and anomaly detection",
        "Custom alert system",
        "White-label and embedding options"
      ],
      techStack: {
        frontend: "Vue.js, TypeScript, D3.js, Chart.js",
        backend: "Python, Django, Apache Kafka, ClickHouse",
        data: "Apache Spark, Redis, Elasticsearch",
        deployment: "Kubernetes, AWS, Terraform"
      },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      demoUrl: "https://dataviz-demo.netlify.app",
      githubUrl: "https://github.com/Austinham/dataviz-analytics",
      status: "Live"
    }
  ]
};

export default portfolioData;