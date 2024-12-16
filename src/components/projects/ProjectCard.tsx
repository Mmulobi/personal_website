import { Github, Link } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
  delay?: number;
}

export function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  image,
  delay = 0
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="aspect-video relative overflow-hidden group">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <a
            href={github}
            className="p-2 bg-white rounded-full hover:bg-blue-50 transition-colors"
            aria-label="View Source Code"
          >
            <Github size={24} className="text-gray-900" />
          </a>
          <a
            href={live}
            className="p-2 bg-white rounded-full hover:bg-blue-50 transition-colors"
            aria-label="View Live Demo"
          >
            <Link size={24} className="text-gray-900" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span
              key={item}
              className="px-2 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}