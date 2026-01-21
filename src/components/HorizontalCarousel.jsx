import React, { useState } from "react";
// 引入 Swiper React 组件和核心模块
import { Swiper, SwiperSlide } from 'swiper/react';
// 引入所需的模块
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

// 引入 Swiper 的基础样式
import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 

// 导入你的自定义样式
import "./HorizontalCarousel.css"; 

/**
 * 使用 Swiper 库重构的水平轮播组件
 * 包含针对移动端的自适应高度和观察者优化
 */
const HorizontalCarousel = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex); 
  };

  const renderMedia = (item, i) => {
    if (item.type === "video") {
      return (
        <video
          key={i}
          className="carousel-media"
          src={item.src}
          muted
          loop
          playsInline // ⚠️ 关键：防止 iOS 自动全屏播放
          controls // 允许用户手动控制
          style={{ width: '100%', height: 'auto', display: 'block' }} // 确保宽度撑满
        />
      );
    }
    return (
      <img
        key={i}
        className="carousel-media"
        src={item.src}
        alt="carousel item"
        style={{ width: '100%', height: 'auto', display: 'block' }} // 确保图片按比例缩放
      />
    );
  };

  return (
    <div className="carousel-wrapper">
      <Swiper
        // 挂载模块
        modules={[Navigation, Autoplay, Pagination]}
        
        // 基础配置
        loop={true} 
        autoplay={{
          delay: 4000, 
          disableOnInteraction: false, 
        }}
        navigation={false} // 禁用箭头
        pagination={{ clickable: true }}
        
        // ------------------------------------------------
        // 📱 移动端/窄屏 核心优化配置
        // ------------------------------------------------
        
        // 1. 自适应高度：容器高度随当前图片高度变化，避免矮图下出现大片空白
        autoHeight={true} 
        
        // 2. DOM 观察者：应对移动端地址栏伸缩导致的视口变化
        observer={true}
        observeParents={true}

        // 3. 抓手光标：在桌面端模拟触摸手感，提升体验
        grabCursor={true}

        // 4. 布局配置
        slidesPerView={1}
        spaceBetween={0} 
        
        // 事件监听
        onSlideChange={handleSlideChange}
        
        // 类名
        className="common-swiper"
      >
        {media.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="carousel-slide">
              {renderMedia(item, i)}
              
              {/* Caption 文字区域 */}
              {item.caption && (
                <span className="caption">{item.caption}</span>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};

export default HorizontalCarousel;