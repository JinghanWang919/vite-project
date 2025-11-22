import React, { useRef } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
  const videoRef = useRef(null);
  
  // 判断逻辑保持不变
  const isVideo = project.video && project.video.endsWith('.mp4');

  // 更稳健的播放控制
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        // 防止用户快速划过时，浏览器报错 "The play() request was interrupted"
        console.log("Video play interrupted", error);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      // 可选：移开时重置进度到开头
      // videoRef.current.currentTime = 0; 
    }
  };

  return (
    <article className="editorial-card" onClick={onClick}>
      
      {/* 1. 媒体区域 */}
      <div 
        className="card-media-wrapper"
        onMouseEnter={isVideo ? handleMouseEnter : null}
        onMouseLeave={isVideo ? handleMouseLeave : null}
      >
        {isVideo ? (
          <video 
            ref={videoRef}
            src={project.video} 
            className="card-media"
            muted 
            loop 
            playsInline
            preload="metadata" // 预加载元数据，防止黑屏
          />
        ) : (
          <img 
            src={project.video} // 你的数据源里图片也叫 video，保持不变
            alt={project.title} 
            className="card-media"
            loading="lazy"
          />
        )}
        
        {/* 可选：加上一个半透明遮罩，hover时变亮 */}
        <div className="media-overlay"></div>
      </div>

      {/* 2. 文字区域 */}
      <div className="card-content">
        
        {/* 顶部标签 (模拟杂志分类) */}
        <div className="card-meta">
          <span className="card-category">Product Design</span>
          <span className="card-year">2024</span>
        </div>

        <h3 className="card-title">{project.title}</h3>
        
        {/* 简介限制行数，防止参差不齐 */}
        <p className="card-desc">{project.desc}</p>
        
        <div className="card-footer">
          <span className="read-more">View Project →</span>
        </div>
      </div>

    </article>
  );
};

export default ProjectCard;