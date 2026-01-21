import React, { useRef, useState, useEffect } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
  const videoRef = useRef(null);
  const [imgError, setImgError] = useState(false);
  
  // ✅ 关键修复 1: 使用正则判断，支持大小写 (.MP4) 和更多格式
  // 如果路径为空，直接视为非视频
  const isVideo = project.video && /\.(mp4|webm|ogg|mov)$/i.test(project.video);

  const handleMouseEnter = () => {
    // 只有视频才需要播放
    if (isVideo && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // 忽略用户快速滑过导致的打断错误
          // console.log("Auto-play prevented");
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (isVideo && videoRef.current) {
      videoRef.current.pause();
      // 可选：鼠标移开重置进度
      // videoRef.current.currentTime = 0; 
    }
  };

  return (
    <article className="editorial-card" onClick={onClick}>
      
      {/* 1. 媒体区域 */}
      <div 
        className="card-media-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isVideo ? (
          <video 
            ref={videoRef}
            src={project.video} 
            className="card-media video-content" // 加个专用类名方便调试
            muted 
            loop 
            playsInline
            preload="metadata"
            style={{ objectFit: 'cover', width: '100%', height: '100%', display: 'block' }}
          />
        ) : (
          <img 
            // ✅ 关键修复 2: 如果图片加载失败 (imgError为true)，显示默认占位图或颜色
            src={imgError ? "https://placehold.co/600x400?text=No+Image" : project.video} 
            alt={project.title} 
            className="card-media image-content"
            loading="lazy"
            onError={() => setImgError(true)} // 捕获 404 错误
            style={{ 
              objectFit: 'cover', 
              width: '100%', 
              height: '100%', 
              display: 'block', // 防止图片下方产生空隙
              backgroundColor: '#f0f0f0' // 图片未加载时的背景色
            }}
          />
        )}
        
        {/* 半透明遮罩 */}
        <div className="media-overlay"></div>
      </div>

      {/* 2. 文字区域 */}
      <div className="card-content">
        <div className="card-meta">
          {/* 优先显示 project 里的真实分类和年份 */}
          <span className="card-category">{project.category || 'Design'}</span>
          <span className="card-year">{project.year || '2025'}</span>
        </div>

        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.desc}</p>
        
        <div className="card-footer">
          <span className="read-more">View Project →</span>
        </div>
      </div>

    </article>
  );
};

export default ProjectCard;