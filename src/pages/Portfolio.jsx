import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Portfolio() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <SectionHeading title="Projects" />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
