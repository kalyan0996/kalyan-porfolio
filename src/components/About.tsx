import React, { useEffect, useState } from 'react';
import { User, MapPin, Mail, Phone, Calendar, Code, Target, Heart } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              About Me
            </h2>
            <div className={`w-24 h-1 ${
              darkMode ? 'bg-blue-400' : 'bg-blue-600'
            } mx-auto mb-8`}></div>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Passionate about technology and continuous learning
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Personal Info */}
            <div className={`p-8 rounded-xl transition-all duration-300 hover:scale-105 ${
              darkMode 
                ? 'bg-gray-900 border border-gray-700 hover:border-blue-400' 
                : 'bg-gray-50 border border-gray-200 hover:border-blue-400'
            } shadow-lg hover:shadow-xl`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Personal Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    darkMode ? 'bg-blue-600' : 'bg-blue-600'
                  }`}>
                    <User className="text-white" size={20} />
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Role</p>
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Aspiring DevOps Engineer
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    darkMode ? 'bg-blue-600' : 'bg-blue-600'
                  }`}>
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Location</p>
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Hyderabad, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    darkMode ? 'bg-blue-600' : 'bg-blue-600'
                  }`}>
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Email</p>
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      kalyanjarupla2002@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    darkMode ? 'bg-blue-600' : 'bg-blue-600'
                  }`}>
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Phone</p>
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      +91 9391979708
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    darkMode ? 'bg-green-600' : 'bg-green-600'
                  }`}>
                    <Calendar className="text-white" size={20} />
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Status</p>
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Available for opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div className={`p-8 rounded-xl ${
                darkMode 
                  ? 'bg-gray-900 border border-gray-700' 
                  : 'bg-gray-50 border border-gray-200'
              } shadow-lg`}>
                <h3 className={`text-2xl font-bold mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  My Journey
                </h3>
                
                <p className={`text-base mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  I am an aspiring DevOps Engineer with a strong foundation in AWS Cloud fundamentals and a keen 
                  interest in automating workflows, managing cloud infrastructure, and streamlining software delivery 
                  processes.
                </p>
                
                <p className={`text-base mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Skilled in using Linux, Git, CI/CD pipelines, Docker, and basic cloud services like EC2, 
                  S3, and IAM, I aim to build scalable, secure, and efficient systems. My passion lies in 
                  bridging the gap between development and operations.
                </p>
                
                <p className={`text-base leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Currently pursuing my MCA while continuously learning and implementing DevOps best practices 
                  through hands-on projects and industry simulations.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className={`text-center p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
                } shadow-lg hover:shadow-xl`}>
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${
                    darkMode ? 'bg-blue-600' : 'bg-blue-600'
                  }`}>
                    <Code className="text-white" size={24} />
                  </div>
                  <div className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    5+
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Technologies
                  </div>
                </div>
                
                <div className={`text-center p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
                } shadow-lg hover:shadow-xl`}>
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${
                    darkMode ? 'bg-purple-600' : 'bg-purple-600'
                  }`}>
                    <Target className="text-white" size={24} />
                  </div>
                  <div className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                    3+
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Certifications
                  </div>
                </div>
                
                <div className={`text-center p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
                } shadow-lg hover:shadow-xl`}>
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${
                    darkMode ? 'bg-green-600' : 'bg-green-600'
                  }`}>
                    <Heart className="text-white" size={24} />
                  </div>
                  <div className={`text-2xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                    100%
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Passion
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-16">
            <h3 className={`text-2xl font-bold text-center mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Core Values
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Continuous Learning",
                  description: "Always staying updated with the latest technologies and best practices",
                  icon: <Code className="w-6 h-6" />
                },
                {
                  title: "Problem Solving",
                  description: "Finding efficient solutions to complex technical challenges",
                  icon: <Target className="w-6 h-6" />
                },
                {
                  title: "Collaboration",
                  description: "Working effectively with teams to achieve common goals",
                  icon: <Heart className="w-6 h-6" />
                }
              ].map((value, index) => (
                <div
                  key={value.title}
                  className={`p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-900 border border-gray-700 hover:border-blue-400' 
                      : 'bg-white border border-gray-200 hover:border-blue-400'
                  } shadow-lg hover:shadow-xl`}
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                    darkMode ? 'bg-blue-600' : 'bg-blue-600'
                  }`}>
                    <span className="text-white">{value.icon}</span>
                  </div>
                  <h4 className={`text-lg font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {value.title}
                  </h4>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;