import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    id: 1,
    title: '测试',
    desc: '测试1',
    img: '/project1.jpg'
  },
  {
    id: 2,
    title: '测试2',
    desc: '测试2',
    img: '/project2.jpg'
  },
  {
    id: 3,
    title: '测试3',
    desc: '测试3',
    img: '/project3.jpg'
  }
]

export default function HomePage() {
  return (
    <div className="projects-grid">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  )
}
