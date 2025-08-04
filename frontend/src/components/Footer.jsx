import React from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import portfolioData from "../data/mock";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { contact } = portfolioData.personal;

  const socialLinks = [
    { icon: Github, href: contact.github, label: "GitHub" },
    { icon: Linkedin, href: contact.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${contact.email}`, label: "Email" },
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                  hamiltonDev
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full-stack developer passionate about creating innovative solutions
                that make a difference. Let's build something amazing together.
              </p>
              <div className="flex items-center text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{contact.location}</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Quick Links</h3>
              <div className="space-y-2">
                {["Home", "Projects", "About", "Contact"].map((link) => (
                  <a
                    key={link}
                    href={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
                    className="block text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Connect Section */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Let's Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-200 group"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    </a>
                  );
                })}
              </div>
              <div className="text-gray-400 text-sm">
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-orange-400 transition-colors duration-200"
                >
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} hamiltonDev. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;