import React from 'react';
import { Download } from 'lucide-react';

const Navigation = () => {
  const links = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
    { href: '#experience', text: 'Experience' },
    { href: '#certifications', text: 'Certifications' },
    { href: '#education', text: 'Education' },
    { href: '#achievements', text: 'Achievements' },
    { href: '#blog', text: 'Blog' },
    { href: '#contact', text: 'Contact' },
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/tushar-resume.pdf';
    link.download = 'tushar-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-gray-600 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors duration-200"
        >
          {link.text}
        </a>
      ))}
      <button
        onClick={handleDownload}
        className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200"
      >
        Resume <Download className="w-4 h-4 ml-2" />
      </button>
    </nav>
  );
};

export default Navigation;