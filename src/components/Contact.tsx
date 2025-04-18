import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

const FormInput = ({ 
  label, 
  type, 
  id, 
  value, 
  onChange, 
  required = true,
  rows = undefined 
}: { 
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const Component = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div className="relative">
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          y: isFocused || value ? -24 : 0,
          scale: isFocused || value ? 0.85 : 1,
          color: isFocused ? '#4f46e5' : '#6b7280',
        }}
        className="absolute left-3 top-3 origin-left cursor-text transition-colors"
      >
        {label}
      </motion.label>
      <Component
        id={id}
        type={type}
        value={value}
        rows={rows}
        onChange={onChange}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`peer mt-1 block w-full rounded-lg border-2 bg-transparent px-3 pb-2 pt-4 transition-all duration-200 
          ${isFocused 
            ? 'border-indigo-600 shadow-sm shadow-indigo-100' 
            : 'border-gray-300'
          }
          focus:border-indigo-600 focus:outline-none focus:ring-0 focus:shadow-sm focus:shadow-indigo-100`}
      />
      <motion.div
        initial={false}
        animate={{
          width: isFocused ? '100%' : '0%',
        }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 h-0.5 bg-indigo-600"
      />
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative min-h-screen w-full bg-gradient-to-b from-indigo-50 to-white py-20"
    >
      <div className="absolute inset-0">
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
            className="space-y-6 text-center md:text-left"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Have a project in mind or want to collaborate? Feel free to reach out!
              I'm always open to discussing new opportunities and ideas.
            </p>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center justify-center space-x-2 md:justify-start"
              >
                <span className="text-indigo-600">📧</span>
                <span className="text-gray-600">mulobi4@gmail.com</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center justify-center space-x-2 md:justify-start"
              >
                <span className="text-indigo-600">📱</span>
                <span className="text-gray-600">+254 (0)7 41 451 612</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center justify-center space-x-2 md:justify-start"
              >
                <span className="text-indigo-600">📍</span>
                <span className="text-gray-600">Roysambu, Nairobi County</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl" />
            <form
              onSubmit={handleSubmit}
              className="relative space-y-8 rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg"
            >
              <FormInput
                label="Name"
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <FormInput
                label="Email"
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <FormInput
                label="Message"
                type="textarea"
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
              />

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full overflow-hidden rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:bg-indigo-700 hover:shadow-indigo-500/20 disabled:opacity-50"
              >
                <motion.div
                  initial={false}
                  animate={{
                    x: isSubmitting ? '0%' : '-100%',
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"
                />
                <span className="relative">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg bg-green-50 p-4 text-sm text-green-700"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg bg-red-50 p-4 text-sm text-red-700"
                >
                  Something went wrong. Please try again later.
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}