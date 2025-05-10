import React from 'react';
import { Code, Database, Terminal, Brain, Users, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages and Software Development Methodologies',
      icon: <Code className="w-6 h-6 text-purple-600" />,
      skills: ['Java', 'Python', 'C', 'C++', 'ObjectOriented Programming (OOPs)', 'Data Structures']
    },
     {
      title: 'Web Technologies and Compliance & Testing:',
      icon: <Code className="w-6 h-6 text-purple-600" />,
      skills: ['HTML', 'CSS','JavaScript', 'Risk Assessment', 'Control Testing', 'AML/OFAC Awareness', 'Auditing Concepts']
    },
    {
      title: 'Machine Learning & AI',
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      skills: ['OpenCV', 'YOLO', 'SVM', 'RNN', 'Deep Learning']
    },
    {
      title: 'Development & Tools',
      icon: <Terminal className="w-6 h-6 text-purple-600" />,
      skills: ['VS Code', 'Google Colab', 'NetBeans', ' Eclipse Enterprise IDE', 'Git']
    },
     {
      title: 'Data & Analytics:',
      icon: <Code className="w-6 h-6 text-purple-600" />,
      skills: ['SQL', 'Excel', 'Power BI', 'Data Visualization', 'Dashboarding']
    },
    {
      title: 'Database & Systems',
      icon: <Database className="w-6 h-6 text-purple-600" />,
      skills: ['MySQL', 'SQLWorkbench', 'Windows', 'Linux', 'Unix']
    },
    {
      title: 'Soft Skills',
      icon: <Users className="w-6 h-6 text-purple-600" />,
      skills: ['Leadership', 'Communication', 'Problem Solving', 'Quick Learning','Collaborative', 'Persuasive', 'Meticulous','Prompt', 'Swift grasper', 'Visionary']
    },
    {
      title: 'Performing Arts',
      icon: <Palette className="w-6 h-6 text-purple-600" />,
      skills: ['Bharatanatyam', 'Mohiniyattam', 'Kuchipudi', 'Carnatic Music', 'Veena','Yakshagana']
    }
  ];



  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="gradient-text">Skills & Expertise</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
