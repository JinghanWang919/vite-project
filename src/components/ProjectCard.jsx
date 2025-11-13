function ProjectCard({ project }) {
  return (
    <div
      onClick={() => (window.location.href = `/project/${project.id}`)}
      style={{
        width: '260px',
        border: '1px solid #ccc',
        borderRadius: '12px',
        padding: '16px',
        cursor: 'pointer',
        transition: '0.3s',
      }}
    >
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
    </div>
  )
}

export default ProjectCard
