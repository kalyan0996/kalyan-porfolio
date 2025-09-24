import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

interface EducationItem {
  id: number;
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  gpa: string;
  description: string;
  highlights: string[];
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const educationRef = useRef<HTMLElement>(null);

  const educationData: EducationItem[] = [
    {
      id: 1,
      degree: 'Master of Computer Applications (MCA)',
      field: 'Computer Science & Informatics',
      institution: 'Mahatma Gandhi University',
      location: 'Nalgonda, India',
      duration: '2024 – 2026',
      gpa: '8.4',
      description: 'Pursuing advanced studies in computer applications with focus on software development, system administration, and emerging technologies.',
      highlights: [
        'Strong foundation in programming and software engineering',
        'Specialized coursework in cloud computing and DevOps practices',
        'Research focus on cybersecurity and system automation',
        'Active participation in technical workshops and seminars'
      ]
    },
    {
      id: 2,
      degree: 'Bachelor of Commerce',
      field: 'Computer Application & Accounting',
      institution: 'Karthikey Degree College',
      location: 'India',
      duration: '2021 – 2024',
      gpa: '8.4',
      description: 'Comprehensive undergraduate program combining business fundamentals with computer applications and accounting principles.',
      highlights: [
        'Solid foundation in business processes and accounting',
        'Introduction to programming and database management',
        'Understanding of business-technology integration',
        'Development of analytical and problem-solving skills'
      ]
    }
  ];

  const certifications = [
    {
      name: 'IBM Python for Data Science',
      issuer: 'IBM',
      type: 'Professional Certificate'
    },
    {
      name: 'AWS Solutions Architect',
      issuer: 'AWS (Job Simulation)',
      type: 'Simulation Program'
    },
    {
      name: 'Cloud Platform',
      issuer: 'Verizon Communication Inc.',
      type: 'Simulation Program'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={educationRef} id="education" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Education
            </h2>
            <div className={`w-24 h-1 ${
              darkMode ? 'bg-blue-400' : 'bg-blue-600'
            } mx-auto mb-8`}></div>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              My academic journey and continuous learning path
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-12">
            {educationData.map((education, index) => (
              <div
                key={education.id}
                className={`relative ${
                  index !== educationData.length - 1 ? 'pb-12' : ''
                }`}
              >
                {/* Timeline Line */}
                {index !== educationData.length - 1 && (
                  <div className={`absolute left-6 top-16 w-0.5 h-full ${
                    darkMode ? 'bg-gray-600' : 'bg-gray-300'
                  }`}></div>
                )}

                <div className="flex items-start space-x-6">
                  {/* Timeline Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    darkMode ? 'bg-blue-600' : 'bg-blue-600'
                  } shadow-lg`}>
                    <GraduationCap className="text-white" size={24} />
                  </div>

                  {/* Education Content */}
                  <div className={`flex-1 rounded-xl p-8 transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-900 border border-gray-700 hover:border-blue-400' 
                      : 'bg-gray-50 border border-gray-200 hover:border-blue-400'
                  } shadow-lg hover:shadow-xl`}>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold mb-2 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {education.degree}
                        </h3>
                        <p className={`text-lg mb-2 ${
                          darkMode ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          {education.field}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <MapPin className={`${
                              darkMode ? 'text-gray-400' : 'text-gray-500'
                            }`} size={16} />
                            <span className={`text-sm ${
                              darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {education.institution}, {education.location}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className={`${
                              darkMode ? 'text-gray-400' : 'text-gray-500'
                            }`} size={16} />
                            <span className={`text-sm ${
                              darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {education.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                        darkMode ? 'bg-green-600' : 'bg-green-600'
                      } text-white`}>
                        <Award size={16} />
                        <span className="font-semibold">GPA: {education.gpa}</span>
                      </div>
                    </div>

                    <p className={`text-base mb-6 leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {education.description}
                    </p>

                    <div>
                      <h4 className={`text-lg font-semibold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Key Highlights
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {education.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              darkMode ? 'bg-blue-400' : 'bg-blue-600'
                            }`}></div>
                            <span className={`text-sm ${
                              darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="mt-16">
            <h3 className={`text-2xl font-bold text-center mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Certifications & Training
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-900 border border-gray-700 hover:border-blue-400' 
                      : 'bg-white border border-gray-200 hover:border-blue-400'
                  } shadow-lg hover:shadow-xl`}
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center ${
                    darkMode ? 'bg-blue-600' : 'bg-blue-600'
                  }`}>
                    <Award className="text-white" size={24} />
                  </div>
                  <h4 className={`text-lg font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {cert.name}
                  </h4>
                  <p className={`text-sm mb-2 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {cert.issuer}
                  </p>
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {cert.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;