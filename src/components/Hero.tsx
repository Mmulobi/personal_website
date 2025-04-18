import { motion } from 'framer-motion';
import Scene from './3D/Scene';

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-indigo-50 to-white">
      <div className="absolute inset-0">
        <Scene />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-32 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl"
          >
            <span className="block">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Moses Mulobi
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-6 max-w-xl text-lg text-gray-600"
          >
            Software Engineer & Back-end Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <a
              href="#contact"
              className="rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition duration-300 hover:bg-indigo-700 hover:shadow-indigo-500/20"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="rounded-full border-2 border-indigo-600 px-8 py-3 text-base font-semibold text-indigo-600 transition duration-300 hover:bg-indigo-50"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500">Scroll to explore</span>
          <div className="mt-2 h-16 w-8 rounded-full border-2 border-gray-300 p-2">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="h-3 w-3 rounded-full bg-indigo-600"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}