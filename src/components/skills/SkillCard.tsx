import AnimatedContainer from '../common/AnimatedContainer';
import SkillIcon from './SkillIcon';

interface SkillCardProps {
  category: string;
  skills: string[];
  delay?: number;
}

export default function SkillCard({ category, skills, delay = 0 }: SkillCardProps) {
  return (
    <AnimatedContainer
      delay={delay}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-semibold mb-4 text-blue-600">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm group hover:bg-blue-100 transition-colors"
          >
            <SkillIcon skill={skill} className="text-blue-600 group-hover:scale-110 transition-transform" />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </AnimatedContainer>
  );
}