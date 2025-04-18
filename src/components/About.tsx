import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/myCV.pdf';
    link.download = 'Moses_Mulobi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-indigo-50 py-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px)] bg-[size:3rem_1px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:1px_3rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ y, opacity }}
          className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-square overflow-hidden rounded-full bg-indigo-50 p-4"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full" />
            <img
              src="/moses.jpg"
              alt="Moses Mulobi"
              className="h-full w-full rounded-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-center md:text-left"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Full Stack Software Developer
            </h2>
            
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-gray-600">
                Hi, I'm Moses Mulobi, a passionate Full Stack Software Developer with a strong foundation in both frontend and backend development. I specialize in building scalable, user-friendly, and impactful web and mobile applications that solve real-world problems.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                With 3+ years of hands-on experience, I've worked on various challenging projects across multiple industries—from educational platforms to AI data training and chat moderation systems. I've built full-fledged applications using Next.js, TypeScript, Supabase, Tailwind CSS, and React Native on the frontend, and Flask, Prisma ORM, and cloud platforms on the backend.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                I'm also deeply passionate about empowering users through intuitive UI/UX and efficient, secure backends. Whether it's crafting an intelligent calorie tracking app, a seamless dating experience for the Kenyan market, or a tutor matchmaking platform, I bring clarity, creativity, and precision to every line of code.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                When I'm not coding, I'm learning new tech, mentoring others, or exploring new ways to leverage AI and open-source tools in development. My goal? To keep building software that makes life easier, smarter, and more connected.
              </p>

              <p className="text-lg leading-relaxed text-gray-600 font-semibold">
                Let's create something amazing together.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-4 md:justify-start"
            >
              <a
                href="#contact"
                className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:bg-indigo-700 hover:shadow-indigo-500/20"
              >
                Get in Touch
              </a>
              <button
                onClick={handleDownloadCV}
                className="rounded-full border-2 border-indigo-600 px-6 py-3 text-sm font-semibold text-indigo-600 transition duration-300 hover:bg-indigo-50"
              >
                Download CV
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}