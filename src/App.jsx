import { Routes, Route, useNavigate } from 'react-router-dom'
import ProjectDetail from './pages/ProjectDetail'
import ProjectCard from './components/ProjectCard'

function HomePage() {
  const navigate = useNavigate()
  const projects = [
    { id: 1, title: '户外露营桌', desc: '便携设计', video: '/videos/eco.mp4' },
    { id: 2, title: 'LUMENA红光理疗仪', desc: '面向轻疗美容人群的多区红光理疗仪产品设计', video: '/images/didi-detail.jpg' },
    { id: 3, title: '银龄智联——居家守护中枢', desc: '智能家居机器人设计', video: '/videos/gloseed.mp4' },
  ]

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>王景馯 · Portfolio</h1>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {projects.map((p) => (
          <div key={p.id} onClick={() => navigate(`/project/${p.id}`, { state: p })}>
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  )
}

export default App
