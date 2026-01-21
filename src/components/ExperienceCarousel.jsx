// src/components/ExperienceCarousel.jsx
import React from 'react';
// 引入 Swiper React 组件
import { Swiper, SwiperSlide } from 'swiper/react';
// 引入 Swiper 所需的模块：导航（箭头）和自动播放（可选）
import { Navigation, Autoplay } from 'swiper/modules';

// 引入 Swiper 的基础样式
import 'swiper/css';
import 'swiper/css/navigation';

// 引入自定义的杂志风样式
import './ExperienceCarousel.css';

const ExperienceCarousel = () => {
  // 基础路径处理助手函数 (与 ResumeSection 中相同)
  const base = import.meta.env.BASE_URL;
  const getAssetUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${base}${cleanPath}`;
  };

  // ==========================================
  // 轮播数据配置 
  // ==========================================
  const carouselData = [
    {
      id: 1,
      image: 'exp/exp2.jpg',
      title: '产品测绘建模',
      caption: '针对华尔科技微压氧舱产品，进行实地尺寸测绘，根据实测数据完成产品建模渲染，最终的产品宣传视觉方案通过企业评审和采纳。'
    },
    {
      id: 2,
      image: 'exp/exp1.jpg', 
      title: '体验康复医疗牵引床',
      caption: '在翔宇医疗学习期间，深入工厂调研，接触并体验了现有的康复产品，了解和学习了不同康复产品的功能和生产工艺。'
    },
    {
      id: 3,
      image: 'exp/exp3.jpg',
      title: '设计竞赛答辩',
      caption: '在校企合作的设计竞赛中两次进入终审答辩，分别取得优秀奖和二等奖与奖金。'
    },
    {
      id: 4,
      image: 'exp/exp4.png',
      title: '参加专业技能实训',
      caption: '前往郑州沐客产品设计公司学习建模渲染及ai辅助设计，在学习期间被评为“优秀实习生”。'
    },
    {
      id: 5,
      image: 'exp/exp5.jpg',
      title: '活动宣传视觉设计',
      caption: '在校级活动中负责活动视觉物料设计，含易拉宝、宣传海报、背景图、手卡等，形成统一视觉体系，图中在和设计的背景图合影。'
    },
    {
      id: 6,
      image: 'exp/exp6.jpg',
      title: '校级网球比赛获奖',
      caption: '在2023年“经贸杯”网球比赛中获得男子团体第一名。'
    },
    {
      id: 7,
      image: 'exp/exp7.jpg',
      title: '参观农机设备制造工厂',
      caption: '实地考察粮食烘干机的现有样式和运行方式，并对其生产方式有了一定了解，后对该产品进行外观升级。'
    },
    {
      id: 8,
      image: 'exp/exp8.jpg',
      title: '翔宇医疗校企合作项目答辩',
      caption: '经过数轮的提案汇报和项目修改，提出滑轨式可移动屏以及弹簧式阻力机构，结合企业的整体设计风格，解决原有产品造型简陋，科技感不强等问题。'
    },
    {
      id: 9,
      image: 'exp/exp9.jpg',
      title: '手绘技能培训',
      caption: '前往郑州绘友手绘工作室进行为期一个月的工业设计专业手绘学习。'
    },
  ];

  return (
    <section className="experience-carousel-section">
      <div className="carousel-container">
        {/* 杂志风的小标题装饰 */}
        <div className="section-header">
          <h3 className="section-title">PROJECT JOURNEY</h3>
          <div className="title-line"></div>
        </div>
        
        <Swiper
          modules={[Navigation, Autoplay]}
          
          navigation={true} // 开启左右箭头导航
          loop={true} // 开启无限循环
          autoplay={{
            delay: 5000, 
            disableOnInteraction: false, 
          }}
          className="my-magazine-swiper"
          
          // ✅ 最终修正后的：响应式断点配置 (注意闭合括号的位置)
          breakpoints={{
            // 768px 及以上（桌面/平板宽屏）显示 2 张
            768: {
              slidesPerView: 2, // 桌面端显示 2 张
              spaceBetween: 40, // 桌面端间距 40px
            },
            // 0px 到 767px（手机）显示 1 张
            0: {
              slidesPerView: 1, // 手机端显示 1 张
              spaceBetween: 20, // 手机端间距 20px
            }
          }}
        >
          {carouselData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="slide-content">
                {/* 图片区域 */}
                <div className="image-frame">
                  <img src={getAssetUrl(item.image)} alt={item.title} />
                </div>
                {/* 文字区域 */}
                <div className="text-frame">
                  <h4 className="slide-title">{item.title}</h4>
                  <p className="slide-caption">{item.caption}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ExperienceCarousel;