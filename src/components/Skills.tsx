import React, { useState, useEffect } from 'react';
import { Code, Database, Shield, Cloud, Terminal, GitBranch, Server, Lock } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming & Scripting",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 85 },
        { name: "Shell Scripting", level: 80 },
        { name: "Linux", level: 90 },
        { name: "GitHub", level: 75 }
      ]
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="w-6 h-6" />,
      skills: [
        { name: "Risk Assessment", level: 85 },
        { name: "Vulnerability Analysis", level: 80 },
        { name: "Incident Response", level: 75 },
        { name: "Security Auditing", level: 80 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS", level: 70 },
        { name: "CI/CD Pipelines", level: 65 },
        { name: "Infrastructure as Code", level: 60 },
        { name: "System Automation", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Technical Skills
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Strong foundation in AWS Cloud fundamentals, automation tools, and infrastructure management
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg transform transition-all duration-500 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white mr-4">
                  {category.icon}
                </div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className={`text-2xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Additional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "AWS EKS", icon: <GitBranch className="w-4 h-4" /> },
              { name: "AWS ECS", icon: <Terminal className="w-4 h-4" /> },
              { name: "CloudWatch", icon: <Server className="w-4 h-4" /> },
              { name: "Auto-scaling", icon: <Lock className="w-4 h-4" /> },
              { name: "Route53", icon: <GitBranch className="w-4 h-4" /> },
              { name: "RDS", icon: <Terminal className="w-4 h-4" /> }
            ].map((skill, index) => (
              <div
                key={skill.name}
                className={`flex items-center px-4 py-2 rounded-full ${
                  darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'
                } shadow-md transform transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
                style={{ transitionDelay: `${800 + (index * 100)}ms` }}
              >
                <span className="mr-2 text-blue-500">{skill.icon}</span>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;