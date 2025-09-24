import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-8 ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    } border-t`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className={`flex items-center space-x-2 text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <span>Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>by Kalyan Jarpula</span>
          </div>

          <div className={`mt-4 md:mt-0 text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © 2024 Kalyan Jarpula. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className={`mt-4 md:mt-0 p-2 rounded-full transition-all duration-300 hover:scale-110 ${
              darkMode 
                ? 'bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white'
            }`}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;