import React from 'react';
import { Clock, ArrowRight, BookOpen, Music, Camera } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'Integrating Machine Learning in Agricultural Solutions',
      excerpt: 'Research paper exploring innovative approaches to agricultural challenges through machine learning solutions...',
      date: 'Mar 2024',
      readTime: '10 min read',
      link: '#',
      icon: <BookOpen className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Exploring HaLegannada in Modern Music',
      excerpt: 'A deep dive into the fusion of traditional Kannada music elements with contemporary compositions...',
      date: 'Feb 2024',
      readTime: '8 min read',
      link: '#',
      icon: <Music className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Challenges & Opportunities in AI-Powered Image Recognition',
      excerpt: 'Technical paper discussing the implementation and findings from the automated chick counting project...',
      date: 'Jan 2024',
      readTime: '12 min read',
      link: '#',
      icon: <Camera className="w-6 h-6 text-emerald-600" />
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="gradient-text">Research & Insights</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                {post.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {post.excerpt}
              </p>
              <a
                href={post.link}
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
              >
                Read More
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;