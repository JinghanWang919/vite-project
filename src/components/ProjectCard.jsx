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
      
      {/* 媒体区域 */}
      <div 
        className="card-media-wrapper"
        // ...
      >
        {/* 临时调试代码 👇 */}
        {project.video ? (
          // 如果 video 路径存在，执行正常的判断
          isVideo ? (
            <video 
              // ...
            />
          ) : (
            <img 
              src={project.video} 
              alt={project.title} 
              className="card-media"
              loading="lazy"
            />
          )
        ) : (
           // 否则，显示一个标记，证明路径丢失
           <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
              Media Path Missing!
           </div>
        )}
        {/* 临时调试代码 👆 */}
        
        {/* ... (media-overlay 保持不变) ... */}
        <div className="media-overlay"></div>
      </div>

      {/* ... (文字区域) ... */}
    </article>
  );
};

export default ProjectCard;