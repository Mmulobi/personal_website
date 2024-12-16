import { ProjectList } from './projects/ProjectList';
import Container from './common/Container';
import SectionTitle from './common/SectionTitle';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <Container>
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectList />
      </Container>
    </section>
  );
}