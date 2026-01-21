import React, { useState, useEffect, useRef } from 'react';

const base = import.meta.env.BASE_URL;
const TOTAL_FRAMES = 79;

// 辅助函数：生成图片路径
const getFramePath = (index) => {
  const frameNum = String(index).padStart(2, '0');
  return `${base}images/luyingzhuo-frame-${frameNum}.png`;
};

// 导出预加载函数，供父组件在页面初始化时调用
export const preloadFrames = () => {
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    const img = new Image();
    img.src = getFramePath(i);
  }
};

const ScrollHero = ({ isMobile }) => {
  const scrollAnimationRef = useRef(null);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(1);
  const [showSkipButton, setShowSkipButton] = useState(false);

  // 滚动监听逻辑
  useEffect(() => {
    // 移动端不需要计算此逻辑
    if (isMobile) return;

    const handleScroll = () => {
      if (!scrollAnimationRef.current) return;

      const container = scrollAnimationRef.current;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const scrollRange = container.offsetHeight + viewportHeight; 
      const scrollPos = viewportHeight - rect.top;

      let progress = Math.min(1, Math.max(0, scrollPos / scrollRange)); 
      const frameIndex = Math.min(TOTAL_FRAMES, Math.floor(progress * TOTAL_FRAMES) + 1);
      
      setCurrentFrameIndex(frameIndex);
      
      // 在动画中间显示跳过按钮
      setShowSkipButton(progress > 0.02 && progress < 0.98);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化计算一次

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // 跳过动画交互
  const handleSkipAnimation = () => {
    if (scrollAnimationRef.current) {
      const container = scrollAnimationRef.current;
      setCurrentFrameIndex(TOTAL_FRAMES); 
      // 滚动到容器底部
      const endPosition = container.offsetTop + container.offsetHeight; 
      window.scrollTo({ top: endPosition, behavior: 'auto' }); 
    }
  };

  return (
    <section ref={scrollAnimationRef} className="scroll-animation-wrapper" style={{ minHeight: '500vh' }}>
      <div className="table-animation-sticky-container">
        <button 
          className={`skip-animation-btn ${showSkipButton ? 'visible' : ''}`} 
          onClick={handleSkipAnimation}
        >
          跳过互动
        </button>
        <img 
          className="table-animation-frame"
          src={getFramePath(currentFrameIndex)} 
          alt="Animation" 
          style={{ width: '100%', height: '100%', objectFit: 'contain', position: 'absolute', top: 0 }} 
        />
        <span className="animation-progress-label">
          交互已进行{Math.round((currentFrameIndex / TOTAL_FRAMES) * 100)}%
        </span>
      </div>
    </section>
  );
};

export default ScrollHero;