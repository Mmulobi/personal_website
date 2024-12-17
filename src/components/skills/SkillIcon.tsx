import { 
    Code,
    Terminal,
    Database,
    FileCode,
    Server,
    Globe,
    Box,
    Cloud,
    GitBranch,
    Monitor,
    Cpu
  } from 'lucide-react';
  
  const SKILL_ICONS: Record<string, any> = {
    'Python': FileCode,
    'Node.js': Server,
    'PHP': Globe,
    'JavaScript': Code,
    'React': Box,
    'HTML/CSS': Monitor,
    'Tailwind CSS': Code,
    'Docker': Box,
    'Kubernetes': Cloud,
    'Git': GitBranch,
    'AWS': Cloud,
    'Azure': Cloud,
    'Linux': Terminal,
    'C': Cpu,
    'SQL': Database,
  };
  
  interface SkillIconProps {
    skill: string;
    className?: string;
  }
  
  export default function SkillIcon({ skill, className = '' }: SkillIconProps) {
    const Icon = SKILL_ICONS[skill] || Code;
    return <Icon className={`w-5 h-5 ${className}`} />;
  }