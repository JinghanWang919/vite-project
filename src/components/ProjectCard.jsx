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

      {/* 1. 媒体区域 (保持不变) */}
      <div
        className="card-media-wrapper"
        onMouseEnter={isVideo ? handleMouseEnter : null}
        onMouseLeave={isVideo ? handleMouseLeave : null}
      >
        {/* ... (省略媒体代码，保持不变) ... */}
      </div>

      {/* 2. 文字区域 */}
      <div className="card-content">

        {/* ✅ 修改这里：顶部标签 */}
        <div className="card-meta">
          {/* 之前是写死的 <span className="card-category">Product Design</span> */}
          {/* 现在改为读取数据: */}
          <span className="card-category">{project.displayCategory}</span>

          {/* 之前是写死的 <span className="card-year">2024</span> */}
          {/* 现在改为读取数据 (如果有些老项目没有年份，可以用 || 提供个默认值): */}
          <span className="card-year">{project.year || '202X'}</span>
        </div>

        <h3 className="card-title">{project.title}</h3>

        {/* 简介 */}
        <p className="card-desc">{project.desc}</p>

        <div className="card-footer">
          <span className="read-more">View Project →</span>
        </div>
      </div>

    </article>
  );
};

export default ProjectCard;