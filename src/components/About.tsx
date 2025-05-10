import React from 'react';
import { User, MapPin, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative group order-2 md:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/images/tushar-dance.jpg"
                alt="Classical Dance Performance"
                className="w-full h-[600px] object-cover transition-all duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-600/20"></div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                <User className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Who am I</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    A final-year B.Tech student in Information Science & Engineering, passionate about technology and classical arts.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                <MapPin className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Location</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Sagar, Shimogga, 577401
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                <GraduationCap className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Education</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Sahyadri College of Engineering and Management
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:shadow-lg">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey combines technology and classical arts. With over 14 years of experience in Bharatanatyam, Mohiniyattam, and Kuchipudi, I bring a unique perspective to my technical work.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm passionate about Machine Learning, Natural Language Processing, and Cybersecurity, Data analytics with a focus on creating impactful AI-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
