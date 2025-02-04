import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Tushar U Rao
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4">
              Information Science Student | ML Enthusiast | Performing Artist
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Bridging innovation and tradition through technology and classical arts
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center"
              >
                Get in touch <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-emerald-600 text-emerald-600 dark:text-emerald-400 rounded-lg hover:bg-emerald-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                View my work
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] bg-gradient-to-tr from-emerald-600/10 to-transparent rounded-lg p-3">
              <img
                src="../images/Profile.png"
                alt="Tushar U Rao"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;