import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 ${
          darkMode ? 'bg-blue-600' : 'bg-blue-400'
        } blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 ${
          darkMode ? 'bg-purple-600' : 'bg-purple-400'
        } blur-3xl animate-pulse delay-1000`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`pt-20 md:pt-24 transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          {/* Name and Profile Image */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
            {/* Profile Image */}
            <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 ${
              darkMode ? 'border-blue-400' : 'border-blue-600'
            } shadow-2xl transform hover:scale-105 transition-transform duration-300 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } flex-shrink-0`}>
              <img
                src="/WhatsApp Image 2025-09-23 at 15.04.37_98fdcdff.jpg"
                alt="Profile"
                className={`w-full h-full object-cover ${
                  darkMode ? 'brightness-110 contrast-110' : ''
                }`}
              />
            </div>
            
            {/* Name */}
            <h1 className={`text-5xl md:text-7xl font-bold text-center md:text-left ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="block">Kalyan</span>
              <span className={`block bg-gradient-to-r ${
                darkMode 
                  ? 'from-blue-400 to-purple-400' 
                  : 'from-blue-600 to-purple-600'
              } bg-clip-text text-transparent`}>
                Jarpula
              </span>
            </h1>
          </div>

          <p className={`text-xl md:text-2xl mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Aspiring DevOps Engineer
          </p>

          <p className={`text-lg mb-12 max-w-2xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-400' : 'text-gray-700'
          }`}>
            I am an aspiring DevOps Engineer with a strong foundation in AWS Cloud fundamentals and a keen 
            interest in automating workflows, managing cloud infrastructure, and streamlining software delivery 
            processes. Skilled in using Linux, Git, CI/CD pipelines, Docker, and basic cloud services like EC2, 
            S3, and IAM, I aim to build scalable, secure, and efficient systems.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: 'https://github.com/kalyan0996', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/kalyan018', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:kalyanjarupla2002@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label === 'GitHub' || label === 'LinkedIn' ? '_blank' : undefined}
                rel={label === 'GitHub' || label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white' 
                    : 'bg-white text-gray-700 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl'
                }`}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className={`inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 ${
              darkMode
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
            } shadow-lg hover:shadow-xl`}
          >
            View My Work
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;