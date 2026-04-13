// import React from 'react';
// import { Leaf, Bird, Music } from 'lucide-react';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'AgriDiagnose',
//       description: 'AI-powered agricultural platform using Machine Learning, NLP, and Image Processing to assist farmers with disease diagnosis and support in Kannada language.',
//       image: '../images/agri.jpeg',
//       technologies: ['Python', 'NLP', 'Deep Learning', 'Image Recognition'],
//       icon: <Leaf className="w-6 h-6 text-emerald-600" />
//     },
//     {
//       title: 'Automated Chick Counter',
//       description: 'AI-powered object detection system using YOLO for real-time counting of chicks in poultry farms, improving efficiency and reducing manual errors.',
//       image: '../images/chick.jpg',
//       technologies: ['Python', 'OpenCV', 'YOLO', 'Object Detection'],
//       icon: <Bird className="w-6 h-6 text-emerald-600" />
//     },
//     {
//       title: 'Dance Workshop Management',
//       description: 'Web-based platform for managing dance workshops with secure registration, automated scheduling, and administrative features.',
//       image: 'public/images/bharata.jpeg',
//       technologies: ['PHP', 'MySQL', 'Web Development'],
//       icon: <Music className="w-6 h-6 text-emerald-600" />
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <h2 className="section-title">
//           <span className="gradient-text">Featured Projects</span>
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="relative">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
//                   loading="lazy"
//                 />
//                 <div className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-900 rounded-full shadow-lg">
//                   {project.icon}
//                 </div>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{project.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.technologies.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 rounded-full text-sm"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;




import React from 'react';
import { Brain, Activity, Leaf } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Agentic RAG-Powered Job Market Analytics',
      description:
        'Built a production-grade end-to-end data and ML pipeline with automated ingestion, validation, and feature engineering across Bronze–Silver–Gold layers. Leveraged transformer models, O*NET mappings, and graph analytics to extract job market trends and generate ML-ready features with high reliability.',
      image: '/images/rag.jpg',
      technologies: [
        'Python',
        'Airflow',
        'Docker',
        'Great Expectations',
        'Feast',
        'Transformers',
        'RAG',
        'Graph Analytics'
      ],
      icon: <Brain className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Cancer Detection using Mitotic Image Processing',
      description:
        'Developed GPU-accelerated deep learning models for mitosis detection and segmentation using a hybrid YOLOv11 + U-Net architecture. Applied preprocessing, augmentation, and statistical evaluation to ensure accuracy, robustness, and generalization.',
      image: '/images/cancer.jpg',
      technologies: [
        'Python',
        'YOLOv11',
        'U-Net',
        'Deep Learning',
        'Computer Vision',
        'GPU Training'
      ],
      icon: <Activity className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Agri-Diagnose: NLP + ML Agriculture Support',
      description:
        'Built an end-to-end NLP system for Kannada farmer query automation using transformer-based intent detection and cocoa disease classification. Integrated ML-based image classification with human-in-the-loop escalation for reliable multimodal support.',
      image: '/images/agri.jpg',
      technologies: [
        'Python',
        'NLP',
        'Transformers',
        'Deep Learning',
        'Image Classification',
        'Multimodal AI'
      ],
      icon: <Leaf className="w-6 h-6 text-emerald-600" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="gradient-text">Featured Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-900 rounded-full shadow-lg">
                  {project.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;