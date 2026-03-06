import React, { useState } from 'react'; // ✅ 引入 useState
import './ResumeSection.css'; 

const ResumeSection = () => {
  // ✅ 新增状态来控制模态框的显示与隐藏
  const [showModal, setShowModal] = useState(false);

  // 基础路径处理，确保图片加载正常
  const base = import.meta.env.BASE_URL;
  const getAssetUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${base}${cleanPath}`;
  };

  // 点击预览按钮的事件处理函数
  const handlePreviewClick = (e) => {
    e.preventDefault(); // 阻止 <a> 标签的默认跳转行为
    setShowModal(true);
  };
  
  // 关闭模态框的事件处理函数
  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <section className="resume-section">
      <div className="resume-container">
        
        {/* 左侧：详细个人信息 (内容保持不变) */}
        <div className="resume-info">
          {/* ... header, body 等内容保持不变 ... */}
          <div className="resume-header">
            <h2 className="resume-name">王昊</h2>
            <p className="resume-title">工业设计 / Industrial Design</p>
            
            <div className="resume-contact">
              <a href="mailto:halewalker@163.com" className="contact-link email">
                halewalker@163.com
              </a>
              <span className="separator">/</span>
              <span className="contact-text">134-3671-6814</span>
            </div>
          </div>

          <div className="resume-body">
            <div className="resume-block">
              <h3 className="block-title">HONORS</h3>
              <div className="block-content">
                <p className="item-company"> 在校期间校企合作实际项目中标4项。</p>
                <p className="item-company"> 在校期间设计类竞赛获得国家级奖项6项、省级17项。</p>
              </div>
            </div>

            <div className="resume-block">
              <h3 className="block-title">ABOUT ME</h3>
              <div className="block-item">
                <p className="item-company"> 我的实践经历覆盖消费电子、康复医疗设备、家居产品等领域，参与过多项企业真实项目，从前期调研、概念推导到外观落地，始终以解决实际问题为核心。</p>
                <p className="item-company"> 在设计表达上，我能够在草图、建模、渲染之间保持连贯的输出，熟练使用Rhino、KeyShot等工具，并能灵活运用ai辅助设计以提升效率。</p>
                <p className="item-company"> 更多详细项目经历您可以查看上面的卡片。</p>
                <p className="item-company"> 当然您也可以点击下方按钮查看我的简历。</p>
              </div>               
            </div>
          </div>

          <div className="resume-action">
            {/* 按钮 1: 下载简历 (保持不变) */}
            <a href={getAssetUrl('files/resume.pdf')} target="_blank" rel="noopener noreferrer" className="download-btn">
              下载简历
              <span className="arrow">↓</span>
            </a>

            {/* ✅ 按钮 2: 预览简历 (修改为点击事件) */}
            <a 
              href="#" /* 可以保留 href="#" */
              onClick={handlePreviewClick} 
              className="download-btn outline-btn"
            >
              在线预览
              <span className="arrow">→</span>
            </a>
          </div>

        </div>

        {/* 右侧：个人照片 (保持不变) */}
        <div className="resume-visual">
          <div className="image-wrapper">
            <img src={getAssetUrl('images/wh.png')} alt="Wang Jinghan" />
          </div>
        </div>

      </div>
      
      {/* ===================================== */}
      {/* ✅ 新增：模态框/Lightbox 结构 */}
      {/* ===================================== */}
      {showModal && (
        <div 
          className="resume-modal-overlay" 
          onClick={handleModalClose} /* 点击背景关闭 */
        >
          <div 
            className="resume-modal-content" 
            onClick={(e) => e.stopPropagation()} /* 阻止点击图片时关闭模态框 */
          >
            <img 
              src={getAssetUrl('images/resume.jpg')} 
              alt="简历图片预览" 
            />
            {/* 关闭按钮 */}
            <button className="close-btn" onClick={handleModalClose}>
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResumeSection;