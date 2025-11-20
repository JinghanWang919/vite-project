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
    // 全部：经典的 UI 灰，冷静、客观
    all: '#f4f4f5', 
    // 毕业设计：工程蓝灰（类似蓝图或阳极氧化铝），代表专业与深度
    graduation: '#dfe6e9', 
    // 课程设计：水泥灰绿（类似清水混凝土），代表探索与生长
    course: '#e9ece5', 
    // 手绘作品：暖陶色/纸张色，代表手作的温度与草图的质感
    sketch: '#f2ebe3', 
    // 其他项目：钛金灰（深一点的中性灰），代表稳重
    other: '#e0e0e0'
  }

  const projects = [
    { id: 1, title: '户外露营桌', desc: '便携设计与结构创新', video: '/videos/eco.mp4', category: 'course' },
    { id: 2, title: 'LUMENA红光理疗仪', desc: '面向轻疗美容人群的多区红光理疗仪', video:'/images/red3.png', category: 'other' },
    { id: 3, title: '银龄智联——居家守护', desc: '智能家居机器人设计', video: '/images/ren4.png', category: 'course' },
    // 你可以继续添加测试数据...
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
    // 👇 核心修改：最外层加了一个 div，背景色由当前状态决定
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