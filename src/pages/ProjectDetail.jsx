import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';
import HorizontalCarousel from "../components/HorizontalCarousel"; 
import { projectData } from '../data/projects';
import ScrollHero, { preloadFrames } from '../components/project-parts/ScrollHero';

// ==========================================
// ✨ 组件: 自动渐隐渐现轮播 (用于手绘展示等)
// ==========================================
const AutoFadeCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // 如果只有一张图，不需要轮播
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3秒切换一次

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="mag-fade-carousel">
      {images.map((src, index) => (
        <div key={index} className={`mag-fade-slide ${index === currentIndex ? 'active' : ''}`}>
          <img src={src} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

// ==========================================
// 主组件 ProjectDetail
// ==========================================
const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // 查找当前项目
  const project = projectData.find((p) => p.id === Number(id));
  const isTableProject = project && project.id === 1; 
  
  // 判断是否启用“杂志模式” (LUMENA, 手绘, Ripple等新项目)
  const isMagazineMode = Boolean(project?.sections);

  // ✨ 判断是否为 Ripple 车灯项目 (ID: 4)
  const isRippleProject = project?.id === 4;

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
      
      // ✨✨✨ Ripple Theme Exclusive Components (车灯项目专属) ✨✨✨
      
      // 1. 灵感对比 (Ripple Inspiration)
      case 'ripple-inspiration':
        return (
            <section key={index} className="mag-section">
                <div className="ripple-inspiration-container">
                    <div className="ripple-text-block">
                        <h2 className="section-title">{section.title}</h2>
                        <h3>{section.subtitle}</h3>
                        <p>{section.text}</p>
                    </div>
                    <div className="ripple-compare-stage">
                        {/* Left: Inspiration */}
                        <div className="ripple-orb" onClick={() => setPreviewModal({type:'image', src:section.items[0].src})}>
                            <img src={section.items[0].src} alt="Inspiration" />
                            <div className="ripple-orb-label">{section.items[0].label}</div>
                        </div>
                        {/* Middle: Connector */}
                        <div className="ripple-connector"></div>
                        {/* Right: Product */}
                        <div className="ripple-orb" onClick={() => setPreviewModal({type:'image', src:section.items[1].src})}>
                            <img src={section.items[1].src} alt="Product" />
                            <div className="ripple-orb-label">{section.items[1].label}</div>
                        </div>
                    </div>
                </div>
            </section>
        );

      // 2. 结构展示 (Ripple Structure)
      case 'ripple-structure':
        return (
            <section key={index} className="mag-section">
                <div className="ripple-structure-layout">
                    <h2 className="section-title">{section.title}</h2>
                    <p style={{maxWidth:'600px', textAlign:'center', margin:'20px 0'}}>{section.text}</p>
                    
                    <img 
                        src={section.image} 
                        alt="Structure" 
                        className="ripple-image-glow" 
                        onClick={() => setPreviewModal({type:'image', src:section.image})}
                    />
                    
                    <div className="ripple-tags">
                        {section.features.map(f => <span key={f} className="ripple-tag">{f}</span>)}
                    </div>
                </div>
            </section>
        );

      // 3. 颜色画廊 (Ripple Gallery)
      case 'ripple-gallery':
        return (
            <section key={index} className="mag-section">
                <h2 className="section-title">{section.title}</h2>
                <div className="ripple-gallery-grid">
                    {section.items.map((item, i) => (
                    <div key={i} className="ripple-color-card">
                        <div className="ripple-circle-img" style={{borderColor: item.color}}>
                            <img src={item.src} alt={item.name} />
                        </div>
                        <span className="ripple-color-name">{item.name}</span>
                    </div>
                    ))}
                </div>
            </section>
        );


      // ✨✨✨ Standard Magazine Components ✨✨✨

      // 4. 分栏洞察 (Insight)
     case 'split-insight':
        return (
            <section key={index} className={`mag-section ${section.bgColor || ''}`}>
                <div className="mag-split-layout">
                    <div className="mag-split-left">
                        {section.left.label && <span className="mag-label">{section.left.label}</span>}
                        <h2 className="section-title">{section.left.title}</h2>
                        {section.left.quote && <div className="big-quote">{section.left.quote}</div>}
                        <p className="desc-text">{section.left.text}</p>
                    </div>
                    <div className="mag-split-right">
                        {section.right.images ? (
                            <AutoFadeCarousel images={section.right.images} />
                        ) : (
                            <img 
                                src={section.right.image} 
                                alt="Insight" 
                                onClick={() => setPreviewModal({type:'image', src:section.right.image})} 
                                style={{cursor: 'pointer'}}
                            />
                        )}
                        {section.right.caption && <span className="caption">{section.right.caption}</span>}
                    </div>
                </div>
            </section>
        );

      // 5. Z字形特性 (Feature Z)
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

      // 6. 全宽黑底 (Full Width Dark)
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

      // 7. 全宽生活图 (Full Width Image)
      case 'full-width-image':
        return (
            <div key={index} className="mag-full-image">
                <img src={section.image} alt="Lifestyle" />
                {section.caption && <div className="mag-image-caption">{section.caption}</div>}
            </div>
        );

      // 8. 水平轮播 (Carousel)
      case 'carousel':
        return (
            <section key={index} className={`mag-section ${section.bgColor || ''}`}>
                {section.title && (
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 className="section-title" style={{ fontSize: '1.8rem', color: '#111' }}>
                            {section.title}
                        </h2>
                        {section.text && <p style={{ color: '#666' }}>{section.text}</p>}
                    </div>
                )}
                <div style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)' }}>
                    <HorizontalCarousel media={section.items} />
                </div>
            </section>
        );

      // 9. Centered Stat (居中数据流)
      case 'centered-stat':
        return (
            <section key={index} className="mag-section mag-centered-stat">
                <span className="mag-label">{section.title}</span>
                <p className="mag-stat-main-text">{section.mainText}</p>
                <div className="mag-stat-grid">
                    {section.stats.map((stat, i) => (
                        <div key={i} className="mag-stat-item">
                            <span className="mag-stat-value">{stat.value}</span>
                            <span className="mag-stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>
        );

      // 10. Bento Grid (便当盒网格)
      case 'bento-grid':
        return (
            <section key={index} className="mag-section mag-bento-wrapper">
                <h2 className="section-title" style={{textAlign:'center', marginBottom:'40px'}}>{section.title}</h2>
                <div className="mag-bento-grid">
                    {section.items.map((item, i) => (
                        <div key={i} className={`mag-bento-card ${item.size}`}>
                            {item.images ? (
                                <AutoFadeCarousel images={item.images} />
                            ) : (
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    onClick={() => setPreviewModal({type:'image', src:item.image})} 
                                />
                            )}
                            <div className="mag-bento-info">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );

      // 11. Contained Image (圆角大图)
      case 'contained-image':
        return (
            <section key={index} className="mag-section mag-bento-wrapper">
                {section.title && (
                    <h2 className="section-title" style={{textAlign:'center', marginBottom:'40px'}}>
                        {section.title}
                    </h2>
                )}
                <div style={{ width: '100%', position: 'relative' }}>
                    <img 
                        src={section.image} 
                        alt="Project Board" 
                        onClick={() => setPreviewModal({type:'image', src:section.image})}
                        style={{ 
                            width: '100%', 
                            height: 'auto', 
                            borderRadius: '16px', 
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            display: 'block',
                            cursor: 'zoom-in'
                        }} 
                    />
                    {section.caption && (
                        <p style={{ marginTop: '15px', color: '#888', textAlign: 'center', fontSize: '0.9rem' }}>
                            {section.caption}
                        </p>
                    )}
                </div>
            </section>
        );

      // 12. Sticky Overlay (背景视差)
      case 'sticky-overlay':
        return (
            <div key={index} className="mag-sticky-container">
                <div className="mag-sticky-bg">
                    <img src={section.image} alt="Background" />
                </div>
                <div className="mag-sticky-content">
                    <div className="mag-floating-card">
                        <h2>{section.overlayTitle}</h2>
                        <p>{section.overlayText}</p>
                    </div>
                </div>
            </div>
        );

      // 13. Masonry Gallery (瀑布流画廊)
      case 'masonry-gallery':
        return (
            <section key={index} className="mag-masonry-wrapper">
                {section.title && <h2 className="section-title" style={{textAlign:'center', marginBottom:'40px'}}>{section.title}</h2>}
                <div className="mag-masonry-grid">
                    {section.items.map((item, i) => (
                        <div key={i} className="mag-masonry-item" onClick={() => setPreviewModal({type:'image', src:item.src})}>
                            <img src={item.src} alt={item.caption} loading="lazy" />
                            {item.caption && (
                                <div className="mag-masonry-overlay">
                                    <p>{item.caption}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        );

      // 14. Infinite Marquee (无限滚动)
      case 'infinite-marquee':
        const rawItems = section.items || [];
        if (rawItems.length === 0) return null;

        const generateSeamlessLane = (sources) => {
           let baseList = [];
           while (baseList.length < 30) {
               baseList = [...baseList, ...sources];
           }
           // 这里简单随机，如需完全一致可传入seed
           const shuffled = baseList
              .map(value => ({ value, sort: Math.random() }))
              .sort((a, b) => a.sort - b.sort)
              .map(({ value }) => value);
           return [...shuffled, ...shuffled];
        };

        const { row1, row2, row3 } = useMemo(() => {
            return {
                row1: generateSeamlessLane(rawItems),
                row2: generateSeamlessLane(rawItems),
                row3: generateSeamlessLane(rawItems)
            };
        }, [rawItems]);

        return (
            <section key={index} className="mag-marquee-section">
                <div className="mag-marquee-row">
                    <div className="mag-marquee-track anim-scroll-left-slow">
                        {row1.map((item, i) => (
                            <div key={`r1-${i}`} className="mag-marquee-item" onClick={() => setPreviewModal({type:'image', src:item.src})}>
                                <img src={item.src} alt="" loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mag-marquee-row">
                    <div className="mag-marquee-track anim-scroll-right-med">
                        {row2.map((item, i) => (
                            <div key={`r2-${i}`} className="mag-marquee-item" onClick={() => setPreviewModal({type:'image', src:item.src})}>
                                <img src={item.src} alt="" loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mag-marquee-row">
                    <div className="mag-marquee-track anim-scroll-left-fast">
                         {row3.map((item, i) => (
                            <div key={`r3-${i}`} className="mag-marquee-item" onClick={() => setPreviewModal({type:'image', src:item.src})}>
                                <img src={item.src} alt="" loading="lazy" />
                            </div>
                        ))}
                    </div>
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
    // ✨ 动态添加 'ripple-theme-wrapper' 如果是 ID 4
    <div className={`editorial-layout ${isRippleProject ? 'ripple-theme-wrapper' : ''}`}>
      
      {/* 1. 顶部导航 (通用) */}
      <nav className={`top-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-left">
          <button className="nav-logo text-link-btn" onClick={(e) => handleNavClick("/", e)}>
            王昊 PORTFOLIO
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
          🚀 分支 A: 杂志模式 (Magazine Mode) 
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
                        playsInline 
                        style={{ objectFit: 'cover' }} 
                    />
                ) : (
                    <img className="mag-hero-bg" src={project.hero?.image || project.coverImage} alt="Cover" />
                )}

                <div className="mag-hero-overlay"></div>
                
                <div className={`mag-hero-content ${project.hero?.align === 'bottom-left' ? 'align-bottom-left' : ''}`}>
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
                {project.metadata?.awards && (
                    <div className="mag-meta-item">
                        <h4>Awards</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {project.metadata.awards.map((award, idx) => (
                                <button 
                                    key={idx} 
                                    className="mag-award-btn" 
                                    onClick={() => setPreviewModal({ type: 'image', src: award.cert })}
                                >
                                    {award.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* A3. 核心区块渲染 */}
            <div className="mag-body">
                {project.sections.map((section, idx) => renderMagazineSection(section, idx))}
            </div>

            {/* A4. 底部留白 */}
            <div style={{ height: '100px', backgroundColor: isRippleProject ? 'transparent' : '#f8f8f8' }}></div>
        </div>

      ) : (
        /* =======================================================
           📦 分支 B: 普通模式 (Legacy Mode) 
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