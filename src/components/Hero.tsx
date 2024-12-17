import { ArrowRight } from 'lucide-react';
import Container from './common/Container';
import TypewriterText from './common/TypewriterText';
import AnimatedContainer from './common/AnimatedContainer';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white pt-16 md:pt-0">
      <Container className="py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 space-y-4">
              <TypewriterText 
                text="Full Stack Software Developer"
                className="block"
                speed={80}
              />
              <TypewriterText 
                text="& DevOps Engineer"
                className="block text-blue-600"
                delay={1.5}
                speed={80}
              />
            </h1>
            <AnimatedContainer delay={3} className="space-y-8">
              <p className="text-lg text-gray-600">
                Passionate about creating robust and scalable applications with 2 years of hands-on experience in full-stack development and cloud technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Projects
                  <ArrowRight className="ml-2" size={20} />
                </a>
                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </AnimatedContainer>
          </div>
          <AnimatedContainer
            delay={0.5}
            className="relative order-first md:order-last"
          >
            <div className="w-full max-w-md mx-auto aspect-square rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="/src/assets/images/moses.jpg"
                alt="Moses Mulobi"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedContainer>
        </div>
      </Container>
    </section>
  );
}