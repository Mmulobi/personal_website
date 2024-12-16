import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">Moses Mulobi</div>
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#home" className="hover:text-blue-400">Home</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com" className="hover:text-blue-400">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-400">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-blue-400">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Moses Mulobi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}