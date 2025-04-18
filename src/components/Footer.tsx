import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/mosesmulumba',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/moses-mulumba',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/mosesmulumba',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:mulobi4@gmail.com',
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white to-indigo-50 py-12">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px)] bg-[size:3rem_1px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:1px_3rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold text-gray-900">Moses Mulobi</h3>
            <p className="mt-2 text-sm text-gray-600">
              Software Engineer & Back-end Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-gray-600 transition-colors hover:text-indigo-600"
              >
                <span className="sr-only">{link.name}</span>
                <link.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-gray-200 pt-8 text-center"
        >
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Moses Mulobi. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}