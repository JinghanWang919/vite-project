// src/App.jsx

import ResumeSection from "./components/ResumeSection";
import ExperienceCarousel from "./components/ExperienceCarousel";
import { useState, useEffect } from 'react' 
import { Routes, Route, useNavigate, Link, useSearchParams } from 'react-router-dom' 
import './App.css'

// 引入页面组件
import ProjectDetail from './pages/ProjectDetail'
import ProjectCard from './components/ProjectCard'
import Changelog from './pages/Changelog' 

// ✅ 引入新的数据源
import { projectData as allProjects } from './data/projects'; 

const base = import.meta.env.BASE_URL;

const getAssetUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return `${base}${cleanPath}`;
};

function HomePage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams(); 
  
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    
    if (tabParam) {
      const validCategories = ['all', 'graduation', 'course', 'sketch', 'other'];
      if (validCategories.includes(tabParam)) {
        setActiveCategory(tabParam);
      } else {
        setActiveCategory('all');
      }
    } else {
      setActiveCategory('all');
    }
  }, [searchParams]);

  const categoryColors = {
    all: '#ffffff', 
    graduation: '#f9f9f9', 
    course: '#f4f6f0', 
    sketch: '#faf7f5', 
    other: '#f5f5f5'
  }

  // ⚠️ 删除了硬编码的 projects 数组，现在从 allProjects (projectData) 获取。
  // 注意：ProjectCard 组件需要 title, desc, video, category, year 这些字段。
 const projects = allProjects.map(p => {
    // 媒体源：优先使用 coverImage，然后是 mobileHeroVideo
    const cardMediaSrc = p.coverImage || p.mobileHeroVideo;
    
    // 如果上面两个都没有，尝试使用 media 数组的第一个元素
    const finalMediaSrc = cardMediaSrc || 
                          (p.media && p.media.length > 0 ? p.media[0].src : '') || 
                          ''; // 确保最终不会是 undefined 或 null

    return {
        id: p.id,
        title: p.title,
        desc: p.desc || p.subtitle, 
        // 确保传递给 ProjectCard 的 'video' 字段是最终的路径
        video: finalMediaSrc, 
        category: p.category,
        year: p.year
    }
});


  const navItems = [
    { label: '全部', value: 'all' }, 
    { label: '毕业设计', value: 'graduation' },
    { label: '课程作业', value: 'course' },
    { label: '手绘草图', value: 'sketch' },
    { label: '其他项目', value: 'other' },
  ]

  // 过滤逻辑依赖于 activeCategory 状态
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    // ... (其余 JSX 保持不变)
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
      // ⚠️ 检查：getAssetUrl(p.video) 这里的 p.video 应该是一个路径字符串，而不是 null/undefined
      video: getAssetUrl(p.video) 
  }} 
  onClick={() => navigate(`/project/${p.id}`, { state: p })} 
/>
            ))
          ) : (
            <div className="empty-state">No projects found in this category.</div>
          )}
        </div>


        <ResumeSection />

      <ExperienceCarousel />

        {/* Footer: 修改后的部分 */}
        <footer className="site-footer">
          
          <div className="status-bar">
            <div className="status-left">
              © 2025 Jinghan Wang. All Rights Reserved.
            </div>
            
            <div className="status-right">
              <Link to="/changelog" className="changelog-link">
                System Status: v3.6 (Stable)
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
      <Route path="/changelog" element={<Changelog />} />
    </Routes>
  )
}

export default App