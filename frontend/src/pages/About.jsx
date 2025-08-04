import React from "react";
import { Download, MapPin, Calendar, Award, Code, Heart } from "lucide-react";
import portfolioData from "../data/mock";

const About = () => {
  const { personal } = portfolioData;

  const experience = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechInnovate Solutions",
      period: "2022 - Present",
      description: "Led development of scalable web applications using React, Node.js, and cloud technologies. Managed a team of 5 developers and delivered 15+ successful projects."
    },
    {
      title: "Full-Stack Developer",
      company: "StartupFlow",
      period: "2020 - 2022",
      description: "Built end-to-end solutions for early-stage startups. Specialized in rapid prototyping and MVP development using modern JavaScript frameworks."
    },
    {
      title: "Frontend Developer",
      company: "DigitalCraft Agency",
      period: "2019 - 2020",
      description: "Created responsive and interactive user interfaces for client projects. Worked with React, Vue.js, and modern CSS frameworks."
    }
  ];

  const achievements = [
    "Led development of award-winning SaaS platform serving 10,000+ users",
    "Open source contributor with 50+ GitHub repositories",
    "Mentored 20+ junior developers through coding bootcamps",
    "Speaker at 5+ tech conferences and meetups"
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get to know more about my journey, skills, and passion for creating 
            innovative digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Section */}
          <div className="lg:col-span-1 space-y-8">
            {/* Profile Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center">
              <div className="space-y-6">
                {/* Avatar */}
                <div className="relative inline-block">
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-4xl font-bold text-white mx-auto">
                    H
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-800"></div>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-white">
                    {personal.name}
                  </h2>
                  <p className="text-orange-400 font-medium">
                    {personal.title}
                  </p>
                  
                  <div className="flex items-center justify-center text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {personal.contact.location}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">5+</div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">50+</div>
                    <div className="text-gray-400 text-sm">Projects Completed</div>
                  </div>
                </div>

                {/* Download Resume */}
                <button className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-700 transition-all duration-200 transform hover:scale-105">
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

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Bio */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-orange-400" />
                My Story
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
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
                  open source projects, or mentoring aspiring developers. I believe in the power 
                  of technology to solve real-world problems and create meaningful impact.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-orange-400" />
                Experience
              </h3>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Line */}
                    {index !== experience.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-600"></div>
                    )}
                    
                    <div className="flex space-x-4">
                      {/* Timeline Dot */}
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <h4 className="text-lg font-semibold text-white">
                            {exp.title}
                          </h4>
                          <span className="text-orange-400 text-sm font-medium">
                            {exp.period}
                          </span>
                        </div>
                        <h5 className="text-orange-400 font-medium">
                          {exp.company}
                        </h5>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-orange-400" />
                Key Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-gray-700/30 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                What Drives Me
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white">Clean Code</h4>
                  <p className="text-gray-400 text-sm">
                    Writing maintainable, scalable, and efficient code that stands the test of time.
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white">User Experience</h4>
                  <p className="text-gray-400 text-sm">
                    Creating intuitive and delightful experiences that users love and remember.
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white">Innovation</h4>
                  <p className="text-gray-400 text-sm">
                    Staying ahead of the curve with cutting-edge technologies and best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;