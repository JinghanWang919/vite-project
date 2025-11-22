import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './ProjectDetail.css'

// ✅ 你的项目数据 (保持不变)
const base = import.meta.env.BASE_URL;
const projectData = [
  {
    id: 1,
    title: '户外露营桌',
    category: 'Industrial Design', // 新增模拟数据
    year: '2023', // 新增模拟数据
    desc: '本设计以折叠为核心，打造兼具结构理性与生活美学的模块化露营桌。采用轻量化铝合金与仿木纹金属腿，桌面可拼接扩展并嵌入多功能模块。下方双层置物平台提升空间利用率，折叠后轻便易收，满足多场景露营需求。',
    media: [
      { type: 'video', src:`${base}videos/eco.mp4`},
      { type: 'image', src:`${base}images/luyingzhuo-detail.jpg`},
      { type: 'image', src:`${base}images/luyingzhuo-detail1.png`},
      { type: 'image', src:`${base}images/luyingzhuo-detail2.png`},
      { type: 'image', src:`${base}images/luyingzhuo-detail3.png` },
      { type: 'image', src:`${base}images/luyingzhuo-detail4.png`},
      { type: 'image', src:`${base}images/luyingzhuo-detail5.png`},
      { type: 'image', src:`${base}images/luyingzhuo-detail6.png`},
      { type: 'image', src:`${base}images/luyingzhuo-detail7.png`},
    ],
  },
  {
    id: 2,
    title: 'LUMENA红光理疗仪',
    category: 'Medical Device',
    year: '2024',
    desc: '《LUMENA 多区红光理疗产品设计》是基于华尔集团课题，针对居家康复与美容护理场景打造的创新理疗解决方案。该设计以“光至深处，疗愈有度”为核心理念，聚焦注重身体管理与轻疗保健的用户需求，融合医学级红光波段技术与人体工程学模块化设计，推出“露恩环（LUMENA Core）”与“露恩贴（LUMENA Mini）”两大产品形态。其中，露恩环通过柔性可调节光片，实现腰腹、背部、大臂等多区域的深层热疗与舒缓；露恩贴则以便携充电式设计，精准覆盖手腕、小腿等局部部位，满足轻量护理需求。整套产品兼具“高效理疗、多场景适配、操作简洁、便携可持续”的设计目标，凭借仿肤亲柔材质、智能APP调控及Type-C通用接口等细节，重新定义居家美容与康复体验，让用户在日常场景中即可享受专业级的轻疗愈护理仪式。',
    media: [
      { type: 'image', src: `${base}images/red3.png`},
      { type: 'image', src: `${base}images/red.png`},
      { type: 'image', src: `${base}images/red2.png` },
      { type: 'image', src: `${base}images/red3.png` },
      { type: 'image', src: `${base}images/red3.jpg`},
    ],
  },
  {
    id: 3,
    title: '居家守护中枢',
    category: 'Smart Home',
    year: '2024',
    desc: '针对独居老人的安全保障、生活辅助与情感陪伴需求，本设计打造了一款适老化智能中枢产品。它集成视觉感知、语音控制与设备联动能力，可实现健康预警、生活服务及情感交互的全场景覆盖。产品通过多传感器架构监测老人生命体征与行为状态，配备多模态交互方式降低操作门槛，更融入情感化设计，能识别并响应老人情绪。同时，电动储物、地形适配及政务服务集成等功能，从日常起居到社会连接维度，为独居老人构建安全、便捷且有温度的智能生活生态，让科技成为守护银发群体的温情桥梁。',
    media: [
      { type: 'image', src:`${base}images/ren3.png`},
      { type: 'image', src:`${base}images/ren.png`},
      { type: 'image', src: `${base}images/ren2.png`},
      { type: 'image', src:`${base}images/ren3.png` },
    ],
  },
]

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const project = projectData.find((p) => p.id === Number(id))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) return <div>Project Not Found</div>

  // 拆分素材：Hero 是第一个，Gallery 是剩下的
  const heroMedia = project.media[0]
  const galleryMedia = project.media.slice(1)

  const renderMediaItem = (item, index, isHero = false) => {
    if (item.type === 'video') {
      return (
        <video 
          key={index} className="media-content"
          controls autoPlay={isHero} muted={isHero} loop playsInline src={item.src}
        />
      )
    }
    return (
      <img 
        key={index} className="media-content"
        src={item.src} alt={`${project.title} detail`} loading="lazy"
      />
    )
  }

  return (
    <div className="editorial-layout">
      
      {/* 1. 极简导航 (仿截图右上角的 clean feel) */}
      <div className="back-nav-container">
        <button className="text-link-btn" onClick={() => navigate('/')}>
          ← Back to Portfolio
        </button>
      </div>

      {/* 2. 顶部标题区 (Centered Header) */}
      <header className="project-header">
        <span className="project-label">PROJECT</span>
        <h1 className="project-title">{project.title}</h1>
        <p className="project-subtitle">Project Work in cooperation with Mentors</p>
      </header>

      {/* 3. Hero Section (全宽首图/视频) */}
      {heroMedia && (
        <section className="hero-wrapper">
          {renderMediaItem(heroMedia, 'hero', true)}
        </section>
      )}

      {/* 4. 核心布局：左侧固定信息栏 + 右侧滚动内容 */}
      <div className="content-body">
        
        {/* LEFT: Sticky Sidebar */}
        <aside className="sticky-sidebar">
          {/* 那个紫红色的方块 */}
          <div className="category-box">
            <span className="category-label">Institute</span>
            <h3 className="category-name">Industrial Design</h3>
          </div>

          {/* 项目元数据 */}
          <div className="meta-info">
            <div className="meta-item">
              <span className="label">Project:</span>
              <span className="value">Project work {project.year || '2024'}</span>
            </div>
            <div className="meta-item">
              <span className="label">Design:</span>
              <span className="value">Jan Meschan (You)</span>
            </div>
             <div className="meta-item">
              <span className="label">Category:</span>
              <span className="value">{project.category || 'Product Design'}</span>
            </div>
          </div>
        </aside>

        {/* RIGHT: Scrollable Content (Desc + Gallery) */}
        <main className="main-scroll-content">
          
          {/* 文本描述 (仿截图的排版，第一段稍微大一点或斜体) */}
          <div className="text-block">
            <p className="intro-text">
              In this project work, we are developing the {project.title}, a design aimed to solve real-world problems through structural rationality.
            </p>
            <p className="body-text">
              {project.desc}
            </p>
          </div>

          {/* 剩下的图片瀑布流 (直接接在文字下面) */}
          <div className="vertical-gallery">
            {galleryMedia.map((item, index) => (
              <div key={index} className="gallery-item">
                {renderMediaItem(item, index)}
                <span className="caption">Fig. {index + 1} — Detail View</span>
              </div>
            ))}
          </div>

        </main>
      </div>
      
      {/* 简单的底部留白 */}
      <div style={{ height: '100px' }}></div>
    </div>
  )
}

export default ProjectDetail