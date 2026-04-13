// import React from 'react';
// import { Award, ExternalLink } from 'lucide-react';

// const Certifications = () => {
//   const certifications = [
//     {
//       title: 'Microsoft Azure AI Fundamentals',
//       specialization: 'Document Intelligence',
//       organization: 'Microsoft',
//       date: '2023',
//       credentialUrl: '#'
//     },
//     {
//       title: 'Microsoft Azure Fundamentals',
//       specialization: 'Natural Language Processing',
//       organization: 'Microsoft',
//       date: '2023',
//       credentialUrl: '#'
//     }
//   ];

//   return (
//     <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <h2 className="section-title">
//           <span className="gradient-text">Certifications</span>
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {certifications.map((cert, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="flex items-start">
//                 <Award className="w-8 h-8 text-emerald-600 mr-4 flex-shrink-0" />
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
//                   <p className="text-emerald-600 dark:text-emerald-400 mb-1">
//                     {cert.specialization}
//                   </p>
//                   <p className="text-gray-600 dark:text-gray-400 mb-2">
//                     {cert.organization}
//                   </p>
//                   <p className="text-gray-500 dark:text-gray-500 text-sm mb-4">
//                     {cert.date}
//                   </p>
//                   <a
//                     href={cert.credentialUrl}
//                     className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
//                   >
//                     View Credential
//                     <ExternalLink className="w-4 h-4 ml-1" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;









import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Microsoft Certified Fabric Data Engineer Associate',
      organization: 'Microsoft',
      date: '19 Dec 2025',
      status: 'Completed',
      credentialUrl: 'https://learn.microsoft.com/en-in/users/tusharu-4783/credentials/935f2f9e79efa742'
    },
    {
      title: 'IBM DevOps, Cloud, and Agile Foundations Specialization',
      organization: 'IBM',
      date: 'Ongoing',
      status: 'In Progress',
      credentialUrl: '#'
    },
    {
      title: 'Google Professional Generative AI Leader',
      organization: 'Google',
      date: 'Ongoing',
      status: 'In Progress',
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
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start">
                <Award className="w-8 h-8 text-emerald-600 mr-4 flex-shrink-0" />

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    {cert.title}
                  </h3>

                  <p className="text-emerald-600 dark:text-emerald-400 text-sm mb-1">
                    {cert.organization}
                  </p>

                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                    {cert.date}
                  </p>

                  <span
                    className={`inline-block px-2 py-1 text-xs rounded-full mb-3 ${
                      cert.status === 'Completed'
                        ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300'
                        : 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300'
                    }`}
                  >
                    {cert.status}
                  </span>

                  {cert.credentialUrl !== '#' && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 text-sm"
                    >
                      View Credential
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
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