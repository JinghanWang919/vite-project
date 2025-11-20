import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './ProjectDetail.css'

// ✅ 你的项目数据
const base = import.meta.env.BASE_URL;
const projectData = [
  {
    id: 1,
    title: '户外露营桌',
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
    desc: '《LUMENA 多区红光理疗产品设计》是基于华尔集团课题，针对居家康复与美容护理场景打造的创新理疗解决方案。该设计以“光至深处，疗愈有度”为核心理念，聚焦注重身体管理与轻疗保健的用户需求，融合医学级红光波段技术与人体工程学模块化设计，推出“露恩环（LUMENA Core）”与“露恩贴（LUMENA Mini）”两大产品形态。其中，露恩环通过柔性可调节光片，实现腰腹、背部、大臂等多区域的深层热疗与舒缓；露恩贴则以便携充电式设计，精准覆盖手腕、小腿等局部部位，满足轻量护理需求。整套产品兼具“高效理疗、多场景适配、操作简洁、便携可持续”的设计目标，凭借仿肤亲柔材质、智能APP调控及Type-C通用接口等细节，重新定义居家美容与康复体验，让用户在日常场景中即可享受专业级的轻疗愈护理仪式。',
    media: [
      { type: 'image', src: `${base}images/red3.png`}, // 注意：我统一加了 / 前缀，防止路径错误
      { type: 'image', src: `${base}images/red.png`},
      { type: 'image', src: `${base}images/red2.png` },
      { type: 'image', src: `${base}images/red3.png` },
      { type: 'image', src: `${base}images/red3.jpg`},
    ],
  },
  {
    id: 3,
    title: '居家守护中枢：独居老人的智能生活管家',
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
  
  // 1. 查找当前项目数据
  const project = projectData.find((p) => p.id === Number(id))

  // 2. 每次进入页面时，自动滚动到最顶部
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  // 3. 错误处理：如果ID不对，显示提示
  if (!project) {
    return (
      <div style={{ padding: '80px', textAlign: 'center', color: '#888' }}>
        <h2>Project Not Found</h2>
        <button className="home-btn" style={{ marginTop: '20px' }} onClick={() => navigate('/')}>
          Return Home
        </button>
      </div>
    )
  }

  // 4. 智能拆分素材
  // 将 media 数组拆分为：首屏封面(第一个) 和 画廊列表(剩下的所有)
  const heroMedia = project.media[0]
  const galleryMedia = project.media.slice(1)

  // 辅助渲染函数：自动判断渲染 Video 还是 Img
  const renderMediaItem = (item, index, isHero = false) => {
    // 如果是视频
    if (item.type === 'video') {
      return (
        <video 
          key={index}
          className="media-item"
          controls // 显示播放条
          autoPlay={isHero} // 只有如果是 Hero 才自动播放
          muted={isHero}    // 自动播放必须静音
          loop 
          playsInline
          src={item.src}
        />
      )
    }
    // 如果是图片
    return (
      <img 
        key={index}
        className="media-item"
        src={item.src} 
        alt={`${project.title} detail ${index}`}
        loading="lazy" // 性能优化：懒加载
      />
    )
  }

  return (
    <div className="detail-page">
      
      {/* 1. 顶部导航 (吸顶) */}
      <nav className="detail-nav">
        <button className="back-btn" onClick={() => navigate('/')}>
          {/* 一个简约的 SVG 箭头 */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Portfolio
        </button>
      </nav>

      <div className="content-wrapper">
        
        {/* 2. Hero Section: 巨大的首屏封面 */}
        {heroMedia && (
          <section className="hero-section">
            <div className="media-container">
              {renderMediaItem(heroMedia, 'hero', true)}
            </div>
          </section>
        )}

        {/* 3. Info Section: 左侧标题，右侧设计说明 */}
        <section className="info-section">
          <div className="info-left">
            <h1>{project.title}</h1>
            <div style={{ marginTop: '10px', color: '#888', fontSize: '0.9rem' }}>
               {/* 这里可以显示项目编号，增加设计感 */}
               PROJECT ID: 0{project.id}
            </div>
          </div>
          
          <div className="info-right">
            <p className="description">{project.desc}</p>
          </div>
        </section>

        {/* 4. Gallery Section: 剩下的图片瀑布流 */}
        {galleryMedia.length > 0 && (
          <section className="gallery-section">
            {galleryMedia.map((item, index) => (
              <div key={index} className="gallery-item-wrapper">
                {/* 图片序号标签 */}
                <span className="gallery-index">
                  DETAIL VIEW {String(index + 1).padStart(2, '0')}
                </span>
                
                <div className="media-container">
                  {renderMediaItem(item, index)}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* 5. 底部结束 */}
        <footer className="project-footer">
          <button className="home-btn" onClick={() => navigate('/')}>
            Back to Homepage
          </button>
        </footer>

      </div>
    </div>
  )
}

export default ProjectDetail