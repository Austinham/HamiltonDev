import React, { useState } from "react";
import { Mail, MapPin, Clock, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import portfolioData from "../data/mock";

const Contact = () => {
  const { contact } = portfolioData.personal;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: contact.email,
      link: `mailto:${contact.email}`
    },
    {
      icon: MapPin,
      title: "Location",
      details: contact.location,
      link: null
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      link: contact.github,
      username: "@hamiltondev"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      link: contact.linkedin,
      username: "hamiltondev"
    }
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Let's Work Together
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? 
            I'd love to hear from you and explore how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Details */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Get In Touch
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium text-white">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-gray-400">{info.details}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Connect With Me
              </h2>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-200">
                        <Icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white group-hover:text-orange-400 transition-colors duration-200">
                          {social.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{social.username}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-orange-500/10 to-amber-600/10 border border-orange-500/20 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-lg font-semibold text-white">
                  Currently Available
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                I'm currently accepting new projects and collaboration opportunities. 
                Let's discuss how I can help bring your vision to life.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Send Me A Message
              </h2>

              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 resize-none"
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* FAQ */}
            <div className="mt-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-orange-400">
                    What's your typical project timeline?
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Project timelines vary based on scope and complexity. A simple website 
                    might take 2-4 weeks, while a complex web application could take 2-6 months.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-orange-400">
                    Do you work with remote teams?
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Absolutely! I've worked with distributed teams across different time zones 
                    and am comfortable with remote collaboration tools and methodologies.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-orange-400">
                    What technologies do you specialize in?
                  </h4>
                  <p className="text-gray-300 text-sm">
                    I specialize in React, Node.js, TypeScript, Python, and modern cloud platforms. 
                    I'm always learning new technologies to stay current with industry trends.
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

export default Contact;