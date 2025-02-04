import React from 'react';
import { Trophy, Award, Code } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'II Rank in Vidwat Exam',
      category: 'Performing Arts',
      organization: 'Bharatanatyam - 2022',
      description: 'Achieved second rank in the prestigious Vidwat examination, demonstrating mastery in classical dance.',
      icon: <Award className="w-8 h-8 text-emerald-600" />
    },
    {
      title: 'Hackathon Success',
      category: 'Technology',
      organization: 'Multiple Events',
      description: 'Finalist and active participant in various hackathons, showcasing problem-solving and innovation skills.',
      icon: <Code className="w-8 h-8 text-emerald-600" />
    },
    {
      title: 'AI Project Portfolio',
      category: 'Research & Development',
      organization: 'Academic Projects',
      description: 'Successfully completed three major AI-driven projects, demonstrating practical application of machine learning concepts.',
      icon: <Trophy className="w-8 h-8 text-emerald-600" />
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="gradient-text">Achievements</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-start">
                <div className="mb-4">
                  {achievement.icon}
                </div>
                <div>
                  <span className="text-sm text-emerald-600 dark:text-emerald-400 mb-2 block">
                    {achievement.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-emerald-600 dark:text-emerald-400 text-sm mb-3">
                    {achievement.organization}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {achievement.description}
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

export default Achievements;