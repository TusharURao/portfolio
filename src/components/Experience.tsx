
import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Generative AI Engineer Trainee',
      company: 'Webexela',
      location: 'India',
      period: 'January 2024',
      description: [
        'Working on Generative AI solutions and applications',
        'Developing AI-powered systems and tools',
        'Contributing to cutting-edge AI projects',
        'Learning and implementing latest AI technologies'
      ]
    },
    {
      title: 'Data Analytics & Research Intern',
      company: 'IKS Division',
      location: 'India',
      period: '2023',
      description: [
        'Gained practical experience in Data Analytics & Research',
        'Worked on Indigenous Knowledge Systems & AI integration',
        'Applied analytical skills to real-world data challenges',
        'Contributed to research projects combining traditional knowledge with modern technology'
      ]
    },
    {
      title: 'Cybersecurity Intern',
      company: 'TCE',
      location: 'India',
      period: '2023',
      description: [
        'Hands-on experience with network security protocols',
        'Learned fundamentals of ethical hacking & vulnerability analysis',
        'Participated in security assessments and threat analysis',
        'Gained practical knowledge of cybersecurity best practices'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="gradient-text">Work Experience</span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-emerald-600 dark:text-emerald-400">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
                    <MapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
