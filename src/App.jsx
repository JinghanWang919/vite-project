import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import ProjectDetail from './pages/ProjectDetail'
import ProjectCard from './components/ProjectCard'

function HomePage() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('all')

  // 🎨 工业理性色盘定义
  const categoryColors = {
    all: '#f4f4f5', 
    graduation: '#dfe6e9', 
    course: '#e9ece5', 
    sketch: '#f2ebe3', 
    other: '#e0e0e0'
  }

  // 🔴 核心修复：不再依赖自动识别，直接写死仓库名
  // 只要你的 GitHub 仓库叫 vite-project，这一行能保证 100% 找到资源
  // 注意：字符串前后都要有斜杠
  const base = '/vite-project/'; 

  const projects = [
    // 👇 注意：文件名开头不要加斜杠，避免拼出 //videos
    { id: 1, title: '户外露营桌', desc: '便携设计与结构创新', video: `${base}videos/eco.mp4`, category: 'course' },
    { id: 2, title: 'LUMENA红光理疗仪', desc: '面向轻疗美容人群的多区红光理疗仪', video: `${base}images/red3.png`, category: 'other' },
    { id: 3, title: '银龄智联——居家守护', desc: '智能家居机器人设计', video: `${base}images/ren4.png`, category: 'course' },
    // ...
  ]

  const navItems = [
    { label: '全部', value: 'all' },
    { label: '毕业设计', value: 'graduation' },
    { label: '课程设计', value: 'course' },
    { label: '手绘作品', value: 'sketch' },
    { label: '其他项目', value: 'other' },
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <div 
      className="page-background" 
      style={{ backgroundColor: categoryColors[activeCategory] }}
    >
      <div className="container">
        
        <header className="site-header">
          <h1>王景馯 · Portfolio</h1>
          <p>产品设计 / 交互体验 / 创新原型</p>
        </header>

        <nav className="nav-bar">
          {navItems.map((item) => (
            <button 
              key={item.value}
              className={`nav-item ${activeCategory === item.value ? 'active' : ''}`}
              onClick={() => setActiveCategory(item.value)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="project-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((p) => (
              <ProjectCard 
                key={p.id} 
                project={p} 
                onClick={() => navigate(`/project/${p.id}`, { state: p })} 
              />
            ))
          ) : (
            <div className="empty-state">此分类下暂无项目</div>
          )}
        </div>

        <footer className="site-footer">
          <div className="footer-contact">
            <span>Contact Me</span>
            <span className="separator">/</span>
            <a href="mailto:halewalker@163.com" className="footer-link">Email: halewalker@163.com</a>
            <span className="separator">/</span>
            <span>QQ: 413375678</span>
          </div>
        </footer>
        
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