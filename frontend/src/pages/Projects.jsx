import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, ExternalLink, Filter, Search } from "lucide-react";
import portfolioData from "../data/mock";

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Get unique categories
  const categories = ["All", ...new Set(projects.map(project => project.category))];

  // Filter projects based on category and search term
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            My Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, 
            AI integration, and modern web technologies.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="text-gray-400 w-5 h-5" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-orange-500 text-white shadow-lg"
                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700 border border-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Live" 
                      ? "bg-green-500/20 border border-green-500/30 text-green-400"
                      : "bg-blue-500/20 border border-blue-500/30 text-blue-400"
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Quick Actions */}
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-lg text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-lg text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Stack Preview */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-300">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {Object.values(project.techStack).flat().slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
                      >
                        {tech.split(',')[0].trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features Preview */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-300">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.keyFeatures.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-gray-400 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* View Details Button */}
                <div className="pt-4 border-t border-gray-700">
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium transition-colors duration-200"
                  >
                    View Full Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-300">No projects found</h3>
              <p className="text-gray-400">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 rounded-lg hover:bg-orange-500/30 transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;