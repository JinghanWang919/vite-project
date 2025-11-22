import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Changelog.css'

// ✅ 你的更新记录数据 (倒序排列，新的在上面)
const logs = [
  {
    version: 'v2.1',
    date: '2024.03.15',
    title: '视觉风格重构',
    tags: ['Design', 'Refactor'], // 标签：Design, Fix, Feature
    items: [
      '全站引入 "Editorial Design" 杂志排版风格，增强阅读体验。',
      '重写 Project Detail 页面，采用左右分栏布局 (Split Layout)。',
      '字体栈更新：标题采用 Merriweather，正文采用 Noto Sans SC。',
      '优化了移动端的响应式表现。'
    ]
  },
  {
    version: 'v2.0',
    date: '2024.02.10',
    title: '作品集内容更新',
    tags: ['Content'],
    items: [
      '新增项目 "户外露营桌" 的详细设计说明与渲染图。',
      '更新 "LUMENA" 项目的展示视频。',
      '修复了首页在 Safari 浏览器下滚动卡顿的问题。'
    ]
  },
  {
    version: 'v1.0',
    date: '2023.12.01',
    title: '网站初版上线',
    tags: ['Release'],
    items: [
      '基于 React + Vite 搭建个人作品集网站。',
      '完成首页、关于我、联系页面的基础开发。',
      '集成了基础的路由跳转功能。'
    ]
  }
]

const Changelog = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="changelog-page">
      
      {/* 1. 顶部导航 (保持与 Detail 页一致的风格) */}
      <nav className="changelog-nav">
        <button className="text-link-btn" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </nav>

      <div className="changelog-container">
        {/* 2. 页面标题 */}
        <header className="changelog-header">
          <h1 className="page-title">Changelog</h1>
          <p className="page-subtitle">
            Site updates, design iterations, and maintenance notes.
          </p>
        </header>

        {/* 3. 时间轴列表 */}
        <div className="timeline">
          {logs.map((log, index) => (
            <div key={index} className="timeline-item">
              
              {/* 左侧：日期与版本 */}
              <div className="timeline-left">
                <span className="log-date">{log.date}</span>
                <span className="log-version">{log.version}</span>
              </div>

              {/* 中间：装饰线与圆点 (由 CSS 处理) */}
              <div className="timeline-divider"></div>

              {/* 右侧：具体内容 */}
              <div className="timeline-content">
                <div className="content-header">
                  <h2 className="log-title">{log.title}</h2>
                  <div className="log-tags">
                    {log.tags.map(tag => (
                      <span key={tag} className={`tag tag-${tag.toLowerCase()}`}>{tag}</span>
                    ))}
                  </div>
                </div>
                
                <ul className="log-list">
                  {log.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* 底部结束语 */}
        <footer className="changelog-footer">
          <span>Run by React & Coffee.</span>
        </footer>

      </div>
    </div>
  )
}

export default Changelog