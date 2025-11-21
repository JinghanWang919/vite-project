import React from 'react';
import './ProjectCard.css'; // 引入上面的 CSS

const base = import.meta.env.BASE_URL;
const ProjectCard = ({ project, onClick }) => {
  // 简单的逻辑：判断文件后缀是不是 mp4
  const isVideo = project.video && project.video.endsWith('.mp4');

  return (
    <div className="card-container" onClick={onClick}>
      
      {/* 媒体区域：如果是视频就静音播放，如果是图就显示图 */}
      <div className="media-wrapper">
        {isVideo ? (
          <video 
            src={project.video} 
            muted 
            loop 
            playsInline // 手机上不全屏
            onMouseOver={e => e.target.play()} // 鼠标放上去才播(可选)
            onMouseOut={e => e.target.pause()} // 移开暂停(可选)
          />
        ) : (
          <img src={project.video} alt={project.title} />
        )}
      </div>

      {/* 文字区域 */}
      <div className="text-content">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
      </div>

    </div>
  );
};

export default ProjectCard;