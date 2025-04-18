import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    title: 'Cloud Desk',
    description: 'A modern web application that connects SMEs with professional virtual administrative support services. Features include virtual assistant support, customer service management, bookkeeping, and project coordination.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js'],
    image: '/clouddesk.png',
    link: 'https://cloud-desk-kappa.vercel.app',
    github: 'https://github.com/Mmulobi/cloud_desk',
  },
  {
    title: 'Smart Learning Platform',
    description: 'A cutting-edge tutoring platform connecting students with tutors. Features include role-based dashboards, real-time chat, video conferencing, session scheduling, and progress tracking.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebRTC', 'Tailwind CSS'],
    image: '/smart-learning.jpg',
    link: 'https://smart-learning-iota.vercel.app',
    github: 'https://github.com/Mmulobi/smart_learning',
  },
  {
    title: 'Personal Tracker',
    description: 'A modern task and habit management application featuring a sleek dashboard interface with real-time progress tracking, customizable categories, and interactive data visualization. Built with a focus on user experience, it includes features like drag-and-drop task organization, priority-based sorting, and a minimalist design that helps users stay focused on their goals.',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'LocalStorage', 'Chart.js', 'Framer Motion'],
    image: '/tracker.jpg',
    link: 'https://personal-tracker-ashy.vercel.app',
    github: 'https://github.com/Mmulobi/personal_Tracker',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent card click if clicking on GitHub or Live Demo buttons
    if ((e.target as HTMLElement).closest('a')) {
      return;
    }
    window.open(project.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl cursor-pointer"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick(e as any);
        }
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          <p className="mt-2 text-gray-600">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-6 flex gap-4" onClick={(e) => e.stopPropagation()}>
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:bg-indigo-700 hover:shadow-indigo-500/20"
            >
              Live Demo
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center rounded-full border-2 border-indigo-600 px-6 py-3 text-sm font-semibold text-indigo-600 transition duration-300 hover:bg-indigo-50"
            >
              GitHub
              <svg
                className="ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-gradient-to-b from-white to-indigo-50 py-20"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px)] bg-[size:3rem_1px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:1px_3rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}