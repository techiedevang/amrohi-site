import { useParams, Link } from 'react-router-dom'
import { projects } from '../components/ProjectsGrid'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <section className="px-6 md:px-14 py-32 text-center">
        <p className="text-bone-dim">Project not found.</p>
        <Link to="/projects" className="text-brass-light underline">Back to Projects</Link>
      </section>
    )
  }

  return (
    <section className="px-6 md:px-14 py-16 md:py-24">
      <Link to="/projects" className="text-xs uppercase tracking-widest text-bone-dim hover:text-brass-light">
        ← All Projects
      </Link>

      <div
        className="mt-8 aspect-[16/9] rounded-sm"
        style={{
          backgroundImage: `linear-gradient(135deg, ${project.tone[0]}, ${project.tone[1]} 75%)`,
        }}
      />

      <div className="mt-10 max-w-2xl">
        <span className="text-[11px] tracking-[0.16em] uppercase text-brass-light">{project.tag}</span>
        <h1 className="font-display font-medium text-[36px] md:text-[48px] mt-3 mb-3">{project.name}</h1>
        <p className="text-bone-dim">{project.place}</p>
      </div>
    </section>
  )
}
