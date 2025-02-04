import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Microsoft Azure AI Fundamentals',
      specialization: 'Document Intelligence',
      organization: 'Microsoft',
      date: '2023',
      credentialUrl: '#'
    },
    {
      title: 'Microsoft Azure Fundamentals',
      specialization: 'Natural Language Processing',
      organization: 'Microsoft',
      date: '2023',
      credentialUrl: '#'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="gradient-text">Certifications</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start">
                <Award className="w-8 h-8 text-emerald-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-emerald-600 dark:text-emerald-400 mb-1">
                    {cert.specialization}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {cert.organization}
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm mb-4">
                    {cert.date}
                  </p>
                  <a
                    href={cert.credentialUrl}
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
                  >
                    View Credential
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;