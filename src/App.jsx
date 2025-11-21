import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import ProjectDetail from './pages/ProjectDetail'
import ProjectCard from './components/ProjectCard'

// ✅ 辅助函数：专门处理路径拼接，防止双斜杠问题
const getAssetUrl = (path) => {
  // 1. 设定基础路径 (仓库名)
  const repoName = '/vite-project';
  
  // 2. 确保 path 是字符串
  if (!path) return '';

  // 3. 如果 path 已经是 http 开头的网络图片，直接返回
  if (path.startsWith('http')) return path;

  // 4. 移除 path 开头的斜杠 (如果有)，避免拼成 /vite-project//images...
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // 5. 返回完整路径
  return `${repoName}/${cleanPath}`;
};

function HomePage() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('all')

  const categoryColors = {
    all: '#f4f4f5', 
    graduation: '#dfe6e9', 
    course: '#e9ece5', 
    sketch: '#f2ebe3', 
    other: '#e0e0e0'
  }

  // ✅ 修改数据源：只写文件名和文件夹，不要自己加前缀，交给 getAssetUrl 处理
  const projects = [
    { 
      id: 1, 
      title: '户外露营桌', 
      desc: '便携设计与结构创新', 
      // 这里的路径不要加 / 开头
      video: 'videos/eco.mp4', 
      category: 'course' 
    },
    { 
      id: 2, 
      title: 'LUMENA红光理疗仪', 
      desc: '面向轻疗美容人群的多区红光理疗仪', 
      video: 'images/red3.png', 
      category: 'other' 
    },
    { 
      id: 3, 
      title: '银龄智联——居家守护', 
      desc: '智能家居机器人设计', 
      video: 'images/ren4.png', 
      category: 'course' 
    },
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
                // ✅ 这里需要把处理过的 project 对象传下去，或者在 ProjectCard 内部处理
                // 为了简单起见，我们在这里修改一下传下去的数据
                project={{
                    ...p,
                    video: getAssetUrl(p.video) // 👈 关键：在这里调用函数转换路径
                }} 
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