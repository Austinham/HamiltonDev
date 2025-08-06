import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Zap, Github, ExternalLink } from "lucide-react";
import portfolioData from "../data/mock";

const Home = () => {
  const { personal, projects } = portfolioData;
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            {/* Hero Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Available for new projects
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                <span className="block text-white">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                  {personal.name}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                {personal.title}
              </p>
              
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {personal.bio}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-orange-500/30 text-orange-400 font-semibold rounded-xl hover:bg-orange-500/10 transition-all duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                What I Do Best
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                I specialize in building modern, scalable applications using cutting-edge technologies
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300 group">
                <div className="space-y-4 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 mx-auto">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Full-Stack Development
                  </h3>
                  <p className="text-gray-400">
                    Building end-to-end solutions with React, Node.js, and modern databases
                  </p>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300 group">
                <div className="space-y-4 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 mx-auto">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    UI/UX Design
                  </h3>
                  <p className="text-gray-400">
                    Creating intuitive and beautiful user experiences that users love
                  </p>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300 group">
                <div className="space-y-4 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 mx-auto">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    AI Integration
                  </h3>
                  <p className="text-gray-400">
                    Implementing AI-powered features to enhance user experiences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Featured Projects
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and experience
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-3">
                        {project.shortDescription}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <Link
                        to={`/project/${project.id}`}
                        className="text-orange-400 hover:text-orange-300 font-medium text-sm flex items-center"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      
                      <div className="flex space-x-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-orange-400 transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-orange-400 transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Projects */}
            <div className="text-center">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 border border-orange-500/30 text-orange-400 font-semibold rounded-xl hover:bg-orange-500/10 transition-all duration-200"
              >
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;