// Mock data for hamiltonDev portfolio

export const portfolioData = {
  personal: {
    name: "hamiltonDev",
    title: "Full-Stack Developer",
    bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications, mobile apps, and AI-powered solutions. I specialize in React, Node.js, and modern development practices.",
    skills: [
      "React", "TypeScript", "Node.js", "Python", "MongoDB", "PostgreSQL", 
      "AWS", "Docker", "Kubernetes", "GraphQL", "REST APIs", "Machine Learning"
    ],
    contact: {
      email: "austinhamilton17@hotmail.com",
      github: "https://github.com/Austinham",
      linkedin: "https://www.linkedin.com/in/austin-hamilton-592928173/",
      location: "San Francisco, CA"
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
      demoUrl: "https://taskflow-demo.hamiltondev.com",
      githubUrl: "https://github.com/hamiltondev/taskflow-pro",
      status: "Live"
    },
    
    {
      id: 2,
      title: "ShopSmart Mobile",
      category: "Mobile Application",
      shortDescription: "AI-powered mobile shopping assistant with personalized recommendations.",
      mainPurpose: "Revolutionize mobile shopping experience with AI-driven product discovery and smart recommendations.",
      currentStructure: [
        "Onboarding and user preferences setup",
        "AI-powered product discovery feed",
        "Advanced search with visual filters",
        "Personalized recommendation engine",
        "Shopping cart and checkout flow",
        "Order tracking and user profile"
      ],
      designSystem: {
        fonts: "SF Pro Display, SF Pro Text",
        colors: "Primary: #FF6B6B, Secondary: #4ECDC4, Accent: #45B7D1",
        uiPatterns: "Bottom navigation, card carousels, progressive disclosure"
      },
      userFlow: [
        "App launch → Personalization setup",
        "Browse → AI recommendations",
        "Product discovery → Add to cart",
        "Checkout → Order confirmation and tracking"
      ],
      targetUsers: [
        "Mobile-first shoppers aged 18-45",
        "Fashion and lifestyle enthusiasts",
        "Busy professionals seeking convenience",
        "Tech-savvy consumers"
      ],
      keyFeatures: [
        "AI-powered product recommendations",
        "Visual search using camera",
        "Price comparison across retailers",
        "Social shopping and reviews",
        "Wishlist and favorites management",
        "Push notifications for deals"
      ],
      techStack: {
        frontend: "React Native, TypeScript, React Navigation",
        backend: "Python, FastAPI, PostgreSQL, Redis",
        ai: "TensorFlow, OpenAI GPT-4, Computer Vision APIs",
        deployment: "Google Cloud Platform, Firebase"
      },
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      demoUrl: "https://apps.apple.com/app/shopsmart-demo",
      githubUrl: "https://github.com/hamiltondev/shopsmart-mobile",
      status: "Beta"
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
      demoUrl: "https://contentforge-demo.hamiltondev.com",
      githubUrl: "https://github.com/hamiltondev/contentforge-ai",
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
      demoUrl: "https://dataviz-demo.hamiltondev.com",
      githubUrl: "https://github.com/hamiltondev/dataviz-analytics",
      status: "Live"
    }
  ]
};

export default portfolioData;