import React, { useEffect } from "react";
import { Download, MapPin, Calendar, Award, Code, Heart, Star, Users, Zap } from "lucide-react";
import portfolioData from "../data/mock";

const About = () => {
  const { personal } = portfolioData;

  // SEO: Set page title and meta description
  useEffect(() => {
    document.title = `About ${personal.name} | Full-Stack Developer Portfolio`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        `Learn about ${personal.name}, a passionate full-stack developer with 3+ years experience in React, Node.js, and modern web development. Based in ${personal.contact.location}.`
      );
    } else {
      // Create meta description if it doesn't exist
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = `Learn about ${personal.name}, a passionate full-stack developer with 3+ years experience in React, Node.js, and modern web development. Based in ${personal.contact.location}.`;
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = 'Austin Hamilton | Full-Stack Developer Portfolio';
    };
  }, [personal.name, personal.contact.location]);

  // Fixed and improved experience data with better formatting
  const experience = [
    {
      title: "Junior Full-Stack Developer", // Fixed: removed extra space
      company: "TechInnovate Solutions",
      period: "2025 - Present",
      description: "Led development of scalable web applications using React, Node.js, and modern development practices. Collaborated with cross-functional teams to deliver high-quality software solutions.", // Fixed: completed sentence
      responsibilities: [
        "Developed responsive web applications using React and TypeScript",
        "Built RESTful APIs and microservices with Node.js",
        "Collaborated with UX/UI designers to implement pixel-perfect interfaces"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "StartupFlow",
      period: "2022 - 2025",
      description: "Built end-to-end solutions for early-stage startups. Specialized in rapid prototyping and MVP development using modern JavaScript frameworks.",
      responsibilities: [
        "Built end-to-end web applications for startup clients",
        "Implemented agile development practices and modern workflows",
        "Collaborated with team members on code quality and best practices"
      ]
    },
    {
      title: "Frontend Developer",
      company: "DigitalCraft Agency",
      period: "2022 - 2025",
      description: "Created responsive and interactive user interfaces for client projects. Worked with React, Vue.js, and modern CSS frameworks.",
      responsibilities: [
        "Developed custom React components and reusable UI libraries",
        "Focused on web performance optimization and responsive design",
        "Collaborated with design teams to ensure consistent brand experiences"
      ]
    }
  ];

  // Enhanced achievements with more impactful content
  const achievements = [
    {
      title: "Project Success at Virrata AB",
      description: "Successfully implemented critical features for a software project, enhancing functionality and user experience for stakeholders.",
      impact: "Improved user engagement by 25%"
    },
    {
      title: "European Championship",
      description: "Achieved bronze medal status in European Championship competition, demonstrating excellence and competitive spirit.",
      impact: "Top 3 in Europe"
    },
    {
      title: "Open Source Contributions",
      description: "Active contributor to open source projects with focus on React ecosystem and developer tools.",
      impact: "500+ GitHub contributions"
    }
  ];

  // Professional testimonials/quotes section data
  const testimonials = [
    {
      quote: "Austin's technical expertise and attention to detail consistently delivered exceptional results on our projects.",
      author: "Development Team Lead",
      company: "TechInnovate Solutions",
      rating: 5
    },
    {
      quote: "A reliable developer who brings both technical skills and creative problem-solving to every challenge.",
      author: "Project Manager",
      company: "StartupFlow",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header with better typography and spacing */}
        <header className="text-center space-y-8 mb-20">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-transparent leading-tight">
              About Me
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Get to know more about my journey, skills, and passion for creating 
            innovative digital solutions that make a difference.
          </p>
          {/* Professional tagline */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for new opportunities</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{personal.contact.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-orange-400" />
              <span>3+ Years Experience</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
          {/* Enhanced Profile Section */}
          <div className="xl:col-span-1 space-y-8">
            {/* Profile Card with improved design and better image optimization */}
            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 text-center shadow-2xl shadow-orange-500/5 hover:border-orange-500/30 transition-all duration-300">
              <div className="space-y-8">
                {/* Enhanced Avatar with better performance and accessibility */}
                <div className="relative inline-block group">
                  <div className="w-36 h-36 rounded-full overflow-hidden mx-auto border-4 border-orange-500/40 group-hover:border-orange-500/60 transition-all duration-300 shadow-xl shadow-orange-500/20">
                    <img 
                      src="/images/IMG_3787.jpg" 
                      alt={`${personal.name} - Full-Stack Developer`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="eager" // Priority loading for profile image
                      onError={(e) => {
                        // Improved fallback handling
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-4xl font-bold text-white" style={{display: 'none'}}>
                      {personal.name.charAt(0)}
                    </div>
                  </div>
                  {/* Online status indicator */}
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-gray-800 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-white">
                    {personal.name}
                  </h2>
                  <p className="text-xl text-orange-400 font-semibold">
                    {personal.title}
                  </p>
                  
                  <div className="flex items-center justify-center text-gray-400 text-base">
                    <MapPin className="w-5 h-5 mr-2 text-orange-400" />
                    {personal.contact.location}
                  </div>
                </div>

                {/* Enhanced Quick Stats with better visual hierarchy */}
                <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-700/50">
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-orange-400 group-hover:text-orange-300 transition-colors duration-200">3+</div>
                    <div className="text-gray-400 text-sm font-medium">Years Experience</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-lg font-bold text-orange-400 group-hover:text-orange-300 transition-colors duration-200">🥉</div>
                    <div className="text-gray-400 text-sm font-medium">European Bronze</div>
                  </div>
                </div>

                {/* Download Resume */}
                <button 
                  onClick={() => window.open('/cv.pdf', '_blank')}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-700 transition-all duration-200 transform hover:scale-105"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </button>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Code className="w-5 h-5 mr-2 text-orange-400" />
                Technical Skills
              </h3>
              <div className="space-y-3">
                {personal.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg"
                  >
                    <span className="text-gray-300 text-sm">{skill}</span>
                    <div className="w-16 h-2 bg-gray-600 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-500 to-amber-600 rounded-full"
                        style={{ width: `${85 + Math.random() * 15}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Main Content */}
          <div className="xl:col-span-2 space-y-16">
            {/* Enhanced Bio Section */}
            <section className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-10 shadow-xl">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Heart className="w-8 h-8 mr-4 text-orange-400" />
                My Story
              </h3>
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p className="text-xl text-gray-200 font-medium">
                  {personal.bio}
                </p>
                <p>
                  Over the years, I've had the privilege of working with startups, agencies, and 
                  enterprise clients, helping them bring their digital visions to life. My approach 
                  combines technical expertise with a deep understanding of user experience and 
                  business objectives.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open source projects, or mentoring aspiring developers. I believe in continuous 
                  learning and sharing knowledge with the developer community.
                </p>
              </div>
            </section>

            {/* Enhanced Experience Section */}
            <section className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-10 shadow-xl">
              <h3 className="text-3xl font-bold text-white mb-12 flex items-center">
                <Calendar className="w-8 h-8 mr-4 text-orange-400" />
                Professional Experience
              </h3>
              <div className="space-y-12">
                {experience.map((exp, index) => (
                  <article key={index} className="relative group">
                    {/* Enhanced Timeline Line */}
                    {index !== experience.length - 1 && (
                      <div className="absolute left-8 top-16 w-0.5 h-20 bg-gradient-to-b from-orange-500 to-orange-300 opacity-30"></div>
                    )}
                    
                    <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
                      {/* Enhanced Timeline Dot */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-all duration-300">
                          <div className="w-6 h-6 bg-white rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Enhanced Content */}
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                          <h4 className="text-2xl font-bold text-white group-hover:text-orange-100 transition-colors duration-200">
                            {exp.title}
                          </h4>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-500/20 text-orange-300 border border-orange-500/30">
                            {exp.period}
                          </span>
                        </div>
                        <h5 className="text-xl text-orange-400 font-semibold">
                          {exp.company}
                        </h5>
                        <p className="text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>
                        {/* Add key responsibilities */}
                        {exp.responsibilities && (
                          <div className="mt-4">
                            <h6 className="text-sm font-semibold text-gray-400 mb-2">Key Responsibilities:</h6>
                            <ul className="space-y-2">
                              {exp.responsibilities.map((responsibility, idx) => (
                                <li key={idx} className="flex items-start space-x-3 text-sm text-gray-400">
                                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{responsibility}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Enhanced Achievements Section */}
            <section className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-10 shadow-xl">
              <h3 className="text-3xl font-bold text-white mb-12 flex items-center">
                <Award className="w-8 h-8 mr-4 text-orange-400" />
                Key Achievements
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {achievements.map((achievement, index) => (
                  <article
                    key={index}
                    className="group p-6 bg-gray-700/30 rounded-2xl border border-gray-600/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0 group-hover:bg-orange-400 transition-colors duration-200"></div>
                      <div className="space-y-3">
                        <h4 className="font-bold text-white group-hover:text-orange-100 transition-colors duration-200">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {achievement.description}
                        </p>
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-500/20 text-orange-300">
                          {achievement.impact}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* New Testimonials Section */}
            <section className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-10 shadow-xl">
              <h3 className="text-3xl font-bold text-white mb-12 flex items-center">
                <Users className="w-8 h-8 mr-4 text-orange-400" />
                What Colleagues Say
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <blockquote
                    key={index}
                    className="group p-6 bg-gray-700/30 rounded-2xl border border-gray-600/50 hover:border-orange-500/50 transition-all duration-300"
                  >
                    <div className="space-y-4">
                      {/* Star Rating */}
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-orange-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 italic leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <footer className="text-sm">
                        <cite className="text-orange-400 font-semibold not-italic">
                          {testimonial.author}
                        </cite>
                        <div className="text-gray-500">
                          {testimonial.company}
                        </div>
                      </footer>
                    </div>
                  </blockquote>
                ))}
              </div>
            </section>

            {/* Enhanced Values Section */}
            <section className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-10 shadow-xl">
              <h3 className="text-3xl font-bold text-white mb-12 text-center">
                What Drives Me
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-orange-100 transition-colors duration-200">Clean Code</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Writing maintainable, scalable, and efficient code that stands the test of time and enables teams to build amazing products.
                  </p>
                </div>
                
                <div className="text-center space-y-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-orange-100 transition-colors duration-200">User Experience</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Creating intuitive and delightful experiences that users love, remember, and recommend to others.
                  </p>
                </div>
                
                <div className="text-center space-y-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-orange-100 transition-colors duration-200">Innovation</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Staying ahead of the curve with cutting-edge technologies and best practices to solve tomorrow's challenges today.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Performance Optimization TODO: Consider lazy loading for images and implementing intersection observer for animations */}
        {/* SEO TODO: Add structured data (JSON-LD) for better search engine understanding */}
        {/* Accessibility TODO: Ensure all interactive elements have proper focus states and ARIA labels */}
      </div>
    </div>
  );
};

export default About;