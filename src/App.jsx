import { useState } from 'react'
import { Routes, Route, useNavigate, Link } from 'react-router-dom' // ✅ 引入 Link
import './App.css'

// 引入页面组件
import ProjectDetail from './pages/ProjectDetail'
import ProjectCard from './components/ProjectCard'
import Changelog from './pages/Changelog' // ✅ 引入更新日志页 (假设你放在 pages 文件夹)

// ✅ 优化后的辅助函数：使用 Vite 环境变量，更智能
const base = import.meta.env.BASE_URL;

const getAssetUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  
  // 移除开头的 / 防止双斜杠
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // 拼接 base_url
  return `${base}${cleanPath}`;
};

function HomePage() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('all')

  // 背景色保持淡雅，配合杂志风
  const categoryColors = {
    all: '#ffffff', 
    graduation: '#f9f9f9', 
    course: '#f4f6f0', 
    sketch: '#faf7f5', 
    other: '#f5f5f5'
  }

  const projects = [
    { 
      id: 1, 
      title: '户外露营桌', 
      desc: '便携设计与结构创新', 
      video: 'videos/eco.mp4', 
      category: 'course',
      year: '2025' // 补充数据
    },
    { 
      id: 2, 
      title: 'LUMENA红光理疗仪', 
      desc: '面向轻疗美容人群的多区红光理疗仪', 
      video: 'images/red3.png', 
      category: 'other',
      year: '2025'
    },
    { 
      id: 3, 
      title: '银龄智联——居家守护', 
      desc: '智能家居机器人设计', 
      video: 'images/ren4.png', 
      category: 'course',
      year: '2025'
    },
  ]

  const navItems = [
    { label: '全部', value: 'all' }, // 英文标签显得更高级
    { label: '毕业设计', value: 'graduation' },
    { label: '课程作业', value: 'course' },
    { label: '手绘草图', value: 'sketch' },
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
        {/* Header: 杂志风格化 */}
        <header className="site-header">
          <div className="header-top-label">PORTFOLIO 2025</div>
          <h1 className="main-title">王景馯</h1>
          <p className="sub-title">工业设计 / 以人为本 / 构想未来</p>
        </header>

        {/* Nav: 简约化 */}
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

        {/* Grid: 保持不变，逻辑正确 */}
        <div className="project-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((p) => (
              <ProjectCard 
                key={p.id} 
                project={{
                    ...p,
                    video: getAssetUrl(p.video) 
                }} 
                onClick={() => navigate(`/project/${p.id}`, { state: p })} 
              />
            ))
          ) : (
            <div className="empty-state">No projects found in this category.</div>
          )}
        </div>

        {/* ✅ Footer: 新增状态栏风格 */}
        <footer className="site-footer">
          
          <div className="footer-contact-row">
            <h3>Let's Connect</h3>
            <div className="contact-links">
              <a href="mailto:halewalker@163.com">halewalker@163.com</a>
              <span>/</span>
              <span>QQ: 413375678</span>
            </div>
          </div>

          {/* 状态栏 (Status Bar) */}
          <div className="status-bar">
            <div className="status-left">
              © 2025 Jinghan Wang. All Rights Reserved.
            </div>
            
            <div className="status-right">
              {/* 指向更新日志的链接 */}
              <Link to="/changelog" className="changelog-link">
                System Status: v3.0 (Stable)
              </Link>
            </div>
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
      {/* ✅ 添加 Changelog 路由 */}
      <Route path="/changelog" element={<Changelog />} />
    </Routes>
  )
}

export default App