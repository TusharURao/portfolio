
// import React from 'react';
// import { Calendar, MapPin, Building } from 'lucide-react';

// const Experience = () => {
//   const experiences = [
//     {
//       title: 'Generative AI Engineer Trainee',
//       company: 'Webexela',
//       location: 'India',
//       period: 'January 2024',
//       description: [
//         'Working on Generative AI solutions and applications',
//         'Developing AI-powered systems and tools',
//         'Contributing to cutting-edge AI projects',
//         'Learning and implementing latest AI technologies'
//       ]
//     },
//     {
//       title: 'Data Analytics & Research Intern',
//       company: 'IKS Division',
//       location: 'India',
//       period: '2023',
//       description: [
//         'Gained practical experience in Data Analytics & Research',
//         'Worked on Indigenous Knowledge Systems & AI integration',
//         'Applied analytical skills to real-world data challenges',
//         'Contributed to research projects combining traditional knowledge with modern technology'
//       ]
//     },
//     {
//       title: 'Cybersecurity Intern',
//       company: 'TCE',
//       location: 'India',
//       period: '2023',
//       description: [
//         'Hands-on experience with network security protocols',
//         'Learned fundamentals of ethical hacking & vulnerability analysis',
//         'Participated in security assessments and threat analysis',
//         'Gained practical knowledge of cybersecurity best practices'
//       ]
//     }
//   ];

//   return (
//     <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
//       <div className="container mx-auto px-4">
//         <h2 className="section-title">
//           <span className="gradient-text">Work Experience</span>
//         </h2>
        
//         <div className="space-y-8">
//           {experiences.map((exp, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
//                 <div>
//                   <h3 className="text-xl font-semibold">{exp.title}</h3>
//                   <p className="text-emerald-600 dark:text-emerald-400">{exp.company}</p>
//                 </div>
//                 <div className="flex flex-col md:items-end mt-2 md:mt-0">
//                   <div className="flex items-center text-gray-600 dark:text-gray-400">
//                     <Calendar className="w-4 h-4 mr-2" />
//                     {exp.period}
//                   </div>
//                   <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
//                     <MapPin className="w-4 h-4 mr-2" />
//                     {exp.location}
//                   </div>
//                 </div>
//               </div>
//               <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
//                 {exp.description.map((item, itemIndex) => (
//                   <li key={itemIndex}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;









import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Intern - 1M1B (IBM Collaboration)',
      company: '1M1B',
      location: 'India',
      period: 'Dec 2025 – Jan 2026',
      description: [
        'Built an Agentic AI-powered RAG system using a local LLM to retrieve and summarize sustainability policies (SDG 11, 12)',
        'Implemented retrieval-augmented workflows and prompt engineering to improve contextual response relevance'
      ]
    },
    {
      title: 'GenAI Intern Trainee',
      company: 'Webxela',
      location: 'India',
      period: 'Jan 2025 – Jul 2025',
      description: [
        'Developed an AI-driven pipeline for multimedia content processing',
        'Implemented timestamp-synchronized speech-to-text transcription',
        'Built LLM-based abstractive summarization with prompt-controlled generation',
        'Analyzed processed data to generate insights and enhance interactive learning experience'
      ]
    },
    {
      title: 'Data Analytics Intern - AICTE (IKS Division, Government of India)',
      company: 'AICTE - IKS Division',
      location: 'India',
      period: 'Dec 2023 – Jan 2024',
      description: [
        'Analyzed multi-source government datasets using SQL and Python to extract actionable insights',
        'Performed data cleaning, validation, and exploratory data analysis (EDA)',
        'Ensured data quality and reliability for decision-making processes'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="gradient-text">Internships & Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-emerald-600 dark:text-emerald-400 mt-1">
                    <Building className="w-4 h-4 mr-2" />
                    {exp.company}
                  </div>
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

              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
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