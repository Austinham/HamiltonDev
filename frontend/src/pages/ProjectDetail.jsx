import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Users, Target, Workflow, Zap, Code, Palette } from "lucide-react";
import portfolioData from "../data/mock";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = portfolioData.projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project not found</h1>
          <Link to="/projects" className="text-orange-400 hover:text-orange-300">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const sectionData = [
    {
      title: "Main Purpose",
      icon: Target,
      content: project.mainPurpose,
      type: "text"
    },
    {
      title: "Current Structure",
      icon: Workflow,
      content: project.currentStructure,
      type: "list"
    },
    {
      title: "Design System",
      icon: Palette,
      content: project.designSystem,
      type: "object"
    },
    {
      title: "User Flow",
      icon: Users,
      content: project.userFlow,
      type: "list"
    },
    {
      title: "Target Users",
      icon: Users,
      content: project.targetUsers,
      type: "list"
    },
    {
      title: "Key Features",
      icon: Zap,
      content: project.keyFeatures,
      type: "list"
    },
    {
      title: "Tech Stack",
      icon: Code,
      content: project.techStack,
      type: "object"
    }
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-2xl mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            
            {/* Project Status & Category */}
            <div className="absolute top-6 left-6 flex space-x-3">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                project.status === "Live" 
                  ? "bg-green-500/20 border border-green-500/30 text-green-400"
                  : "bg-blue-500/20 border border-blue-500/30 text-blue-400"
              }`}>
                {project.status}
              </span>
              <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium">
                {project.category}
              </span>
            </div>

            {/* Quick Actions */}
            <div className="absolute top-6 right-6 flex space-x-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900/80 backdrop-blur-sm rounded-xl text-gray-300 hover:text-orange-400 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900/80 backdrop-blur-sm rounded-xl text-gray-300 hover:text-orange-400 transition-colors duration-200"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {project.shortDescription}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-700 transition-all duration-200 transform hover:scale-105"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-orange-500/30 text-orange-400 font-semibold rounded-xl hover:bg-orange-500/10 transition-all duration-200"
              >
                <Github className="w-4 h-4 mr-2" />
                View Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sectionData.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-semibold text-white">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-3">
                  {section.type === "text" && (
                    <p className="text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  )}

                  {section.type === "list" && (
                    <ul className="space-y-2">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.type === "object" && (
                    <div className="space-y-3">
                      {Object.entries(section.content).map(([key, value]) => (
                        <div key={key} className="space-y-1">
                          <h4 className="text-orange-400 font-medium capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                          </h4>
                          {Array.isArray(value) ? (
                            <div className="flex flex-wrap gap-2">
                              {value.map((item, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-md"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <p className="text-gray-300 text-sm">{value}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Related Projects */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-8">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.projects
              .filter(p => p.id !== project.id)
              .slice(0, 2)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  to={`/project/${relatedProject.id}`}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  </div>
                  
                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors duration-200">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {relatedProject.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;