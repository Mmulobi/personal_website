import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'Personal Budget Tracker',
    description: 'A comprehensive budget management application built with React and Node.js. Features expense tracking, budget planning, and financial analytics with interactive charts.',
    tech: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Express'],
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Video Sharing Platform',
    description: 'A YouTube-inspired video sharing platform with features like video upload, streaming, user authentication, and real-time comments using WebSocket.',
    tech: ['React', 'Node.js', 'FFmpeg', 'Socket.io', 'AWS S3'],
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Personal Management System',
    description: 'An all-in-one personal management solution featuring task management, calendar scheduling, and note-taking with real-time sync.',
    tech: ['React', 'Firebase', 'Redux', 'Material-UI'],
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
  }
];

export function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          {...project}
          delay={index * 0.2}
        />
      ))}
    </div>
  );
}