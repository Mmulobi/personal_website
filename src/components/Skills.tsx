import { SKILLS } from '../utils/constants';
import Container from './common/Container';
import SectionTitle from './common/SectionTitle';
import SkillCard from './skills/SkillCard';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(SKILLS).map(([category, skills], index) => (
            <SkillCard
              key={category}
              category={category}
              skills={skills}
              delay={index * 0.2}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}