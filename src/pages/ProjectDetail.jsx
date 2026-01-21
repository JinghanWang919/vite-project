import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';
import HorizontalCarousel from "../components/HorizontalCarousel"; 
import { projectData } from '../data/projects';
import ScrollHero, { preloadFrames } from '../components/project-parts/ScrollHero';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // 查找当前项目
  const project = projectData.find((p) => p.id === Number(id));
  const isTableProject = project && project.id === 1; 
  
  // 判断是否启用“杂志模式” (LUMENA 等新项目)
  const isMagazineMode = Boolean(project?.sections);

  // --- 状态管理 ---
  const [previewModal, setPreviewModal] = useState(null); 
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); 
  const [isMobile, setIsMobile] = useState(false); 
  
  // --- 生命周期 ---
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 880);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.scrollTo(0, 0); 
    
    if (isTableProject && !isMobile) {
      preloadFrames(); 
    }
    return () => window.removeEventListener('resize', checkMobile);
  }, [id, isTableProject, isMobile]);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- 事件处理 ---
  const handleNavClick = (path, e) => {
    e.preventDefault(); 
    window.scrollTo(0, 0); 
    navigate(path);
  };
  
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!project) return <div>Project Not Found</div>

  // ==========================================
  // 渲染逻辑分支
  // ==========================================

  // --- 渲染器 A: 普通模式内容块 (Legacy) ---
  const renderLegacyContentBlock = (block, index) => {
    if (block.type === 'text') {
      return <p key={index} className="project-paragraph">{block.value}</p>;
    }
    if (block.type === 'image') {
      return (
        <div key={index} className="gallery-item-inline">
          <img 
            src={block.src} 
            alt={block.caption || 'Detail'} 
            className="media-content-inline"
            onClick={() => setPreviewModal({ type: 'image', src: block.src })} 
          />
          {block.caption && <span className="caption-inline">{block.caption}</span>}
        </div>
      );
    }
    return null;
  };

  // --- 渲染器 B: 杂志模式区块 (New Magazine Sections) ---
  const renderMagazineSection = (section, index) => {
    switch (section.type) {
      // 1. 分栏洞察 (Insight)
      case 'split-insight':
        return (
            <section key={index} className={`mag-section ${section.bgColor || ''}`}>
                <div className="mag-split-layout">
                    <div className="mag-split-left">
                        <h2 className="section-title">{section.left.title}</h2>
                        <div className="big-quote">{section.left.quote}</div>
                        <p className="desc-text">{section.left.text}</p>
                    </div>
                    <div className="mag-split-right">
                        <img src={section.right.image} alt="Insight" onClick={() => setPreviewModal({type:'image', src:section.right.image})} />
                    </div>
                </div>
            </section>
        );

      // 2. Z字形特性 (Feature Z)
      case 'feature-z':
        return (
            <section key={index} className={`mag-section ${section.bgColor || ''}`}>
                <div className={`mag-feature-z ${section.layout === 'image-text' ? 'reverse' : ''}`}>
                    <div className="mag-z-text">
                        <h2>{section.title}</h2>
                        <p>{section.text}</p>
                    </div>
                    <div className="mag-z-media">
                        <img src={section.image} alt={section.title} onClick={() => setPreviewModal({type:'image', src:section.image})} />
                    </div>
                </div>
            </section>
        );

      // 3. 全宽黑底 (Full Width Dark)
      case 'full-width-dark':
        return (
            <div key={index} className="mag-full-dark">
                <div className="mag-dark-content">
                    <h2>{section.title}</h2>
                    <p>{section.text}</p>
                    <img src={section.image} alt="Tech" onClick={() => setPreviewModal({type:'image', src:section.image})} />
                </div>
            </div>
        );

      // 4. 全宽生活图 (Full Width Image)
      case 'full-width-image':
        return (
            <div key={index} className="mag-full-image">
                <img src={section.image} alt="Lifestyle" />
                {section.caption && <div className="mag-image-caption">{section.caption}</div>}
            </div>
        );
case 'carousel':
        return (
            <section key={index} className={`mag-section ${section.bgColor || ''}`}>
                {/* 如果有标题，显示标题 */}
                {section.title && (
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 className="section-title" style={{ fontSize: '1.8rem', color: '#111' }}>
                            {section.title}
                        </h2>
                        {section.text && <p style={{ color: '#666' }}>{section.text}</p>}
                    </div>
                )}
                
                {/* 调用已有的轮播组件 */}
                <div style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)' }}>
                    <HorizontalCarousel media={section.items} />
                </div>
            </section>
        );
      default:
        return null;
    }
  };

  // ==========================================
  // 主视图 (Main View)
  // ==========================================
  return (
    <div className="editorial-layout">
      
      {/* 1. 顶部导航 (通用) */}
      <nav className={`top-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-left">
          <button className="nav-logo text-link-btn" onClick={(e) => handleNavClick("/", e)}>
            王景馯 PORTFOLIO
          </button>
        </div>
        <div className="nav-links">
          {['graduation', 'course', 'sketch', 'other'].map(tab => (
             <button key={tab} className="text-link-btn" onClick={(e) => handleNavClick(`/?tab=${tab}`, e)}>
               {tab === 'graduation' ? '毕业设计' : tab === 'course' ? '课程作业' : tab === 'sketch' ? '手绘草图' : '其他项目'}
             </button>
          ))}
        </div>
      </nav>

      <button className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`} onClick={handleBackToTop}>↑</button>

      {/* =======================================================
          🚀 分支 A: 杂志模式 (Magazine Mode - for LUMENA etc.) 
         ======================================================= */}
      {isMagazineMode ? (
        <div className="magazine-container">
            {/* A1. 全屏 Hero */}
            <div className="mag-hero">
               {project.hero?.video ? (
        <video 
            className="mag-hero-bg" 
            src={project.hero.video} 
            autoPlay 
            muted 
            loop 
            playsInline // 必须加，否则手机上会自动全屏弹窗
            style={{ objectFit: 'cover' }} // 确保填满屏幕
        />
    ) : (
        <img className="mag-hero-bg" src={project.hero?.image || project.coverImage} alt="Cover" />
    )}

    <div className="mag-hero-overlay"></div>
                <div className="mag-hero-content">
                  <h1 className="mag-hero-title">{project.hero?.title || project.title}</h1>
               <div className="mag-hero-subtitle">
           {project.hero?.subtitle.split('|').map((part, index) => (
            <React.Fragment key={index}>
                {index > 0 && <br className="mobile-break" />}
                {part.trim()}
            </React.Fragment>
            ))}
    </div>
                  {project.hero?.tags && (
                        <div className="mag-hero-tags">
                            {project.hero.tags.map(tag => <span key={tag} className="mag-tag">{tag}</span>)}
                        </div>
                    )}
                </div>
            </div>

            {/* A2. 信息条 (Metadata) */}
            <div className="mag-meta-bar">
                <div className="mag-meta-item">
                    <h4>Year</h4>
                    <p>{project.year}</p>
                </div>
                <div className="mag-meta-item">
                    <h4>Category</h4>
                    <p>{project.category}</p>
                </div>
                {project.metadata?.role && (
                    <div className="mag-meta-item">
                        <h4>Role</h4>
                        <p>{project.metadata.role}</p>
                    </div>
                )}
                {/* ▼▼▼ 修改这里: 将原来的 map 部分替换为下面的代码 ▼▼▼ */}
                {project.metadata?.awards && (
                    <div className="mag-meta-item">
                        <h4>Awards</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {project.metadata.awards.map((award, idx) => (
                                <button 
                                    key={idx} 
                                    className="mag-award-btn" // 新增一个类名用于写样式
                                    onClick={() => setPreviewModal({ type: 'image', src: award.cert })}
                                >
                                    {award.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                {/* ▲▲▲ 修改结束 ▲▲▲ */}
            </div>

            {/* A3. 核心区块渲染 */}
            <div className="mag-body">
                {project.sections.map((section, idx) => renderMagazineSection(section, idx))}
            </div>

            {/* A4. 底部留白 */}
            <div style={{ height: '100px', backgroundColor: '#f8f8f8' }}></div>
        </div>

      ) : (
        /* =======================================================
           📦 分支 B: 普通模式 (Legacy Mode - 侧边栏布局) 
           ======================================================= */
        <>
            <div className="back-nav-container">
                <button className="text-link-btn" onClick={(e) => handleNavClick("/", e)}>← Back to Portfolio</button>
            </div>

            <header className="project-header">
                <span className="project-label">PROJECT</span>
                <h1 className="project-title">{project.title}</h1>
                <p className="project-subtitle">
                    {project.subtitle || 'Project Work'}
                </p>
            </header>

            {/* Hero 渲染 (ID 1 特殊处理) */}
            {isTableProject ? (
                isMobile ? (
                    <section className="hero-wrapper" style={{ height: 'auto' }}>
                        <video className="media-content" src={project.mobileHeroVideo} autoPlay muted loop playsInline />
                    </section>
                ) : <ScrollHero isMobile={isMobile} />
            ) : (
                (project.coverImage || (project.media?.[0]?.src)) && (
                <section className="hero-wrapper">
                    <img 
                        className="media-content" 
                        src={project.coverImage || project.media[0].src} 
                        alt="hero" 
                        style={{ borderRadius: 0, width: '100%', height: 'auto', display: 'block' }} 
                    />
                </section>
                )
            )}

            <div className="content-body">
                {/* 侧边栏 */}
                <aside className="sticky-sidebar">
                    <div className="category-box">
                        <span className="category-label">{project.enTitle}</span>
                        <h3 className="category-name">{project.title}</h3>
                    </div>
                    <div className="meta-info">
                        <div className="meta-item"><span className="label">Year:</span><span className="value">{project.year}</span></div>
                        <div className="meta-item"><span className="label">Category:</span><span className="value">{project.category}</span></div>
                        {project.awards?.length > 0 && (
                        <div className="meta-item">
                            <span className="label">Awards:</span>
                            <div className="awards-list">
                            {project.awards.map((award, idx) => (
                                <button key={idx} className="award-link-btn" onClick={() => setPreviewModal({ type: 'image', src: award.cert })}>
                                {award.name}
                                </button>
                            ))}
                            </div>
                        </div>
                        )}
                        {project.resources?.length > 0 && (
                        <div className="meta-item">
                            <span className="label">Resources:</span>
                            <div className="awards-list">
                            {project.resources.map((res, idx) => (
                                <button key={idx} className="award-link-btn" onClick={() => setPreviewModal({ type: res.type, src: res.src })}>
                                {res.name}
                                </button>
                            ))}
                            </div>
                        </div>
                        )}
                    </div>
                </aside>

                {/* 右侧主内容 */}
                <main className="main-scroll-content">
                    {project.carouselItems && project.carouselItems.length > 0 && (
                        <div style={{ marginBottom: '60px' }}>
                            <HorizontalCarousel media={project.carouselItems} />
                        </div>
                    )}

                    <div className="text-block">
                        <h2 className="section-title">PROJECT INTRODUCTION</h2>
                        {project.contentBlocks ? (
                            project.contentBlocks.map((block, index) => renderLegacyContentBlock(block, index))
                        ) : Array.isArray(project.desc) ? (
                            project.desc.map((p, i) => <p key={i} className="project-paragraph">{p}</p>)
                        ) : (
                            <p className="project-paragraph" style={{whiteSpace: 'pre-wrap'}}>{project.desc}</p>
                        )}
                    </div>
                    
                    {/* 旧版画廊 */}
                    {project.media && project.media.length > 0 && !project.carouselItems && (
                        <div className="vertical-gallery">
                            {project.media.slice(isTableProject ? 0 : 1).map((item, index) => (
                                <div key={index} className="gallery-item">
                                    <img 
                                        className="media-content" 
                                        src={item.src} 
                                        alt="detail" 
                                        style={{width:'100%', borderRadius:'4px', cursor: 'pointer'}} 
                                        onClick={() => setPreviewModal({ type: 'image', src: item.src })} 
                                    />
                                    <span className="caption">Fig. {index + 1} — {item.caption || 'Detail View'}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </>
      )}

      {/* 通用 Modal 弹窗 */}
      {previewModal && (
        <div className="cert-modal-overlay" onClick={() => setPreviewModal(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setPreviewModal(null)}>×</button>
            {previewModal.type === 'video' ? (
                <video src={previewModal.src} controls autoPlay className="modal-video-content" />
            ) : (
                <img src={previewModal.src} alt="Preview" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectDetail;