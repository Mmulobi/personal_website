import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Three.js', level: 75 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 80 },
      { name: 'GraphQL', level: 70 },
    ],
  },
  {
    category: 'DevOps',
    items: [
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 70 },
      { name: 'AWS', level: 75 },
      { name: 'CI/CD', level: 85 },
      { name: 'Linux', level: 80 },
    ],
  },
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        <h3 className="mb-4 text-xl font-bold text-gray-900">{skill.category}</h3>
        <div className="space-y-4">
          {skill.items.map((item, itemIndex) => (
            <div key={item.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">
                  {item.name}
                </span>
                <span className="text-sm font-medium text-indigo-600">
                  {item.level}%
                </span>
              </div>
              <motion.div
                className="h-2 overflow-hidden rounded-full bg-gray-100"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + itemIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  style={{ width: `${item.level}%` }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen w-full bg-gradient-to-b from-indigo-50 to-white py-20"
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
            Skills & Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <SkillCard key={skill.category} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}