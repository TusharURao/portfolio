import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Information Science Engineering',
      institution: 'Sahyadri College of Engineering and Management',
      period: '2021 - Present',
      description: 'Currently in IV Year'
    },
    {
      degree: 'Class XII',
      institution: 'Government Pre-University College, Sagar',
      period: '2021',
      description: 'Pre-University Education'
    },
    {
      degree: 'Class X',
      institution: 'Sri Ramakrishna Vidyalaya, Sagar',
      period: '2019',
      description: 'Secondary Education'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="gradient-text">Education</span>
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start">
                <GraduationCap className="w-8 h-8 text-emerald-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-emerald-600 dark:text-emerald-400 mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {edu.period}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;