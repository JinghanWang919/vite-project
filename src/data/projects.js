// src/data/projects.js

const base = import.meta.env.BASE_URL;

export const projectData = [
  // --- ID 1: 户外露营桌 ---
  {
    id: 1,
    title: '户外露营桌',
    enTitle: 'Outdoor Camping Table',
    category: 'course',
    year: '2025',
    // 旧版纯文本描述
    desc: '本设计以折叠为核心，打造兼具结构理性与生活美学的模块化露营桌。采用轻量化铝合金与仿木纹金属腿，桌面可拼接扩展并嵌入多功能模块。下方双层置物平台提升空间利用率，折叠后轻便易收，满足多场景露营需求。',
    mobileHeroVideo: `videos/video.mp4`, 
    subtitle: '独立工业设计作品',
    resources: [
        { name: '播放视频', type: 'video', src: `${base}videos/eco.mp4` },
        { name: '查看展板', type: 'image', src: `${base}images/luyingzhuo-detail.jpg` } 
    ],
    // ID 1 依然使用 media 数组来展示垂直列表图片
    media: [
      { type: 'image', src:`${base}images/luyingzhuo-detail4.png`, caption: '人机尺寸关系' },
      { type: 'image', src:`${base}images/luyingzhuo-detail5.png`, caption: '产品尺寸图' },
      { type: 'image', src:`${base}images/luyingzhuo-detail6.png`, caption: '产品部件图' },
      { type: 'image', src:`${base}images/luyingzhuo-detail7.png`, caption: '效果图' },
    ],
  },

// --- ID 2: LUMENA红光理疗仪 (✨ 杂志级排版重构版) ---
  {
    id: 2,
    title: 'LUMENA —— 居家红光理疗的去医疗化探索',
    enTitle: 'LUMENA Red Light Therapy',
    category: 'course',
    year: '2025',
    // 封面图（首页列表用）
    coverImage: `images/red3.png`, 
    
    // 顶部 Hero 区域配置
      hero: {
        image: `images/red3.png`,
        title: 'LUMENA',
        subtitle: 'Healing as a Routine | 治愈，即是日常', 
        tags: ['Product Design', 'Wellness', 'Soft Goods']
    },

    // 侧边栏信息 (Sticky Sidebar)
       metadata: {
        designer: '王景馯',
        role: '工业设计师',
        tools: ['Rhino', 'Keyshot', 'Photoshop'],
        awards: [
            { name: '东方创意之星 铜奖', cert: 'awards/dfcyzxhnsyaodai3.jpg' }, // 假设你的证书图片叫这个名字，请按实际修改
            { name: '东方设计奖 一等奖', cert: 'awards/dfsjhns1.jpg' }   // 请按实际修改
        ]
    },

    // ✨ 核心：杂志级布局区块数组
    sections: [
        // --- 区块 1: 洞察 (左文右图) ---
        {
            type: 'split-insight', // 自定义类型：分栏布局
            bgColor: 'bg-white',
            left: {
                title: '被忽视的躯干',
                quote: '“为什么我们的脸部护理如此精致，身体的疼痛却只能依靠笨重的器械？”',
                text: '现代人的面部护理极其精细，但对身体疼痛的缓解却往往简单粗暴。市场调研显示，现有的理疗设备要么像冰冷的“医疗器械”，要么像廉价的“加热垫”。我思考的是：如何让设备像衣物一样亲切？'
            },
            right: {
                image: `${base}images/red.png`, // 这里先用展板图代替调研拼贴，后续可换
                caption: '用户调研与痛点分析'
            }
        },

        // --- 区块 2: 产品 Core (Z字形 - 左文右图) ---
        {
            type: 'feature-z', // 自定义类型：Z字形
            layout: 'text-image', // 文字在左，图在右
            bgColor: 'bg-gray-50', // 微微的灰底
            title: 'LUMENA Core: 像拥抱一样的佩戴',
            text: '针对腰腹大面积区域，Core 采用了环绕式设计。利用高弹力织物提供适度的加压感，既固定了红光模组，又提供了物理支撑。创新的外置移动电源设计，彻底解决了续航焦虑。',
            image: `${base}images/红光1.png`
        },

        // --- 区块 3: 产品 Mini (Z字形 - 左图右文) ---
        {
            type: 'feature-z',
            layout: 'image-text', // 图在左，文字在右
            bgColor: 'bg-gray-50',
            title: 'LUMENA Mini: 适应每一次弯曲',
            text: '针对关节部位，Mini 专注于“贴合”。内置柔性电路板与点阵式光源，使其能够像护具一样包裹住膝盖或手肘，即使在轻微活动中也能保持光疗效果。',
            image: `${base}images/红光2.png` // 用那张黑底白字的图，或者其他展示Mini的图
        },

        // --- 区块 4: 核心科技 (沉浸式黑底) ---
        {
            type: 'full-width-dark', // 自定义类型：全宽黑底
            bgColor: 'bg-black',
            textColor: 'text-white',
            title: '隐形科技 Invisible Tech',
            text: '630nm 红光 + 850nm 近红外光的黄金组合，被封装在不到 5mm 厚的柔性结构中。平衡了散热性能与佩戴舒适度，通过打孔透气结构实现了长时间佩戴无闷热感。',
            image: `${base}images/红光3.png` // 那张很有质感的黑底点阵图
        },

        // --- 区块 5: 生活场景 (全宽大图) ---
        {
            type: 'full-width-image',
            image: `${base}images/红光场景.png`,
            caption: '从办公桌前的午休，到健身后的放松，LUMENA 是生活的一部分。'
        }
    ],
    
    // 兼容旧逻辑（如果列表页还需要用到这些字段）
    desc: '居家红光理疗的去医疗化探索',
    subtitle: '一套通过“柔性材料”与“模块化设计”的方案',
    media: [], // 置空
  },

  // --- ID 3: 居家守护中枢 (保持不变) ---
  {
    id: 3,
    title: '居家守护中枢',
    enTitle: 'Home Guardian Hub',
    category: 'course',
    year: '2025',
    desc: '针对独居老人的安全保障、生活辅助与情感陪伴需求，本设计打造了一款适老化智能中枢产品',
    coverImage: `images/ren4.png`,
    subtitle: '校级竞赛获奖概念设计',
    awards: [
      { name: 'iF Design Award 2025', cert: `${base}images/cert-if.jpg` },
      { name: 'Red Dot Concept', cert: `${base}images/cert-reddot.jpg` }
    ],
    resources: [ { name: '作品展板', type: 'image', src: `${base}images/ren.png` } ],
    media: [
      { type: 'image', src:`${base}images/renfengmian.png`},
      { type: 'image', src: `${base}images/ren2.png`},
      { type: 'image', src:`${base}images/ren3.png` },
    ],
  },
  // --- ID 4: RIPPLE涟漪自行车尾灯 (新增) ---
  {
    id: 4,
    title: '涟漪自行车尾灯',
    enTitle: 'Bicycle Taillight',
    category: 'other',
    year: '2024',
    desc: '本设计为骑行安全而生，以“涟漪”为设计语言，创造独特的视觉警示效果', 
    subtitle: '独立工业设计作品',
    // 使用 App.jsx 中的 video 路径作为封面
    coverImage: `videos/zixingchefengmian.mp4`, 
    carouselItems: [
      { type: 'image', src: `${base}images/车灯/白色.png`, caption: '白月光' },
      { type: 'image', src: `${base}images/车灯/黑色.png`, caption: '深海蓝' },
      { type: 'image', src: `${base}images/车灯/黄色.png`, caption: '麦浪橙' },
      { type: 'image', src: `${base}images/车灯/紫色.png`, caption: '霞光紫' },
    ],
    contentBlocks: [
        { type: 'text', value: '为骑行安全设计。详情内容待补充...' },
        { type: 'image', src: `${base}images/车灯/cd1.png`, caption: '效果展示' },
        { type: 'text', value: '为骑行安全设计。详情内容待补充...' },
        { type: 'image', src: `${base}images/车灯/bzt.png`, caption: '结构爆炸图' },
        { type: 'text', value: '为骑行安全设计。详情内容待补充...' },
        { type: 'image', src: `${base}images/车灯/cd2.png`, caption: '车灯主视图' },
        { type: 'text', value: '为骑行安全设计。详情内容待补充...' },
        { type: 'image', src: `${base}images/车灯/chaixie.png`, caption: '固定部件' },
        { type: 'image', src: `${base}images/车灯/cd3.png`, caption: '魔术贴' },
        { type: 'text', value: '为骑行安全设计。详情内容待补充...' },
    ],
    awards: [],
    resources: [],
    media: [],
  },
  
  { id: 5, title: '地面震动监测仪', 
    enTitle: 'Ground Vibration Monitor', 
    desc: '测量和记录震动的仪器', 
    category: 'other',
    year: '2024', 
    coverImage: `videos/地震仪.jpg` ,
    contentBlocks: [
        { type: 'text', value: '为骑行安全设计。详情内容待补充...' },
        { type: 'image', src: `${base}images/dizhenyi/fangan.png`, caption: '地震仪内部堆叠方案设计' },
        { type: 'text', value: '为骑行安全设计。详情内容待补充...' },
        { type: 'image', src: `${base}images/dizhenyi/dzy2.png`, caption: '初代设计' },
        { type: 'text', value: '为骑行安全设计。详情内容待补充...' },
        { type: 'image', src: `${base}images/dizhenyi/dzy3.png`, caption: '主效果图' },
        { type: 'text', value: '为骑行安全设计。详情内容待补充...' },
        { type: 'image', src: `${base}images/dizhenyi/dzy1.png`, caption: '探针细节图' },
        { type: 'image', src: `${base}images/dizhenyi/dzy4.png`, caption: '色彩方案' },
        { type: 'text', value: '为骑行安全设计。详情内容待补充...' },
            ],
  },
 // --- ID 6: NEXUS 铜银离子净水器 ---
  {
    id: 6,
    title: 'NEXUS 铜银离子净水器',
    enTitle: 'Smart Ion System',
    category: 'product',
    year: '2024',
    
    // ✨ 修复1：添加首页卡片文字介绍
    desc: '采用创新的顶装式维护架构与水电分离设计，重新定义机房设备的维护体验与专业美学。',
    
    // ✨ 修复2：修正图片路径 (确保 startup.1407.png 在 public/images/ 文件夹里)
coverImage: '/images/1.png',

    // --- Magazine Mode 详情页配置 ---
    hero: {
      video: `${base}videos/nexus_hero.mp4`, 
      image: `${base}images/startup.1407.png`, // 视频加载失败时的备用图
      title: 'NEXUS',
      subtitle: 'The Brain of Water Quality | 泳池的智慧大脑',
      tags: ['Industrial Design', 'Smart Home', 'Infrastructure']
    },

    sections: [
        // --- Section 1: 痛点洞察 ---
        {
            type: 'split-insight',
            bgColor: 'bg-white',
            left: {
                title: 'Deconstructing the "Sandwich"',
                quote: '“为什么更换一个耗材，需要拆毁整个大脑？”',
                text: '市场调研发现，现有的铜银离子净水器普遍采用“电路盒-铜片-壳体”的三明治层叠结构。这意味着，每次例行检查或更换铜片耗材时，用户被迫先拆卸精密的电路盒。这不仅繁琐，更增加了电路受潮损坏的风险。'
            },
            right: {
                // 确保这张图在 public/images/water/ 下，如果没有，请改成你有的图片路径
                image: `${base}images/water/problem_sketch.png`,
                caption: 'Pain Point: Coupled Maintenance Structure | 痛点：耦合的维护结构'
            }
        },

        // --- Section 2: 核心创新 (顶装式架构) ---
        {
            type: 'feature-z', 
            layout: 'image-text',
            bgColor: 'bg-gray-50',
            title: 'Vertical Decoupling',
            text: 'NEXUS 彻底重构了堆叠逻辑。采用顶装式架构，将铜片耗材从顶部垂直插入铸造壳体。这一改变实现了“维护解耦”：更换铜片时，正面的电路盒无需任何拆卸。',
            // 确保这张图在 public/images/water/ 下
            image: `${base}images/water/top_loading.png`
        },

        // --- Section 3: 细节体验 (防溢水 & 安全) ---
        {
            type: 'feature-z',
            layout: 'text-image',
            bgColor: 'bg-white',
            title: 'Dry Swap & Safety Lock',
            text: '得益于顶部开口设计，更换铜片时管路中的存水不会溢出，保持机房干燥。同时，前置电路盒设计将“用户维护区”与“电子元件区”在物理上完全隔离，有效防止非专业人员误开电路盒造成的安全隐患。',
            // 确保这张图在 public/images/water/ 下
            image: `${base}images/water/safety_structure.png`
        },

        // --- Section 4: 工业制造 (铸造壳体) ---
        {
            type: 'full-width-dark',
            bgColor: 'bg-black',
            textColor: 'text-white',
            title: 'Unibody Casting',
            text: '主体采用一体化铸造工艺，两端集成标准工业法兰接口，确保在高水压下的绝对密封性与结构强度。这是一个为长期服役而生的基础设施。',
            // 确保这张图在 public/images/water/ 下
            image: `${base}images/water/exploded_structure.png`
        },

        // --- Section 5: 配色与安装 (水平轮播) ---
        {
            type: 'carousel',
            bgColor: 'bg-gray-50',
            title: 'Versatility in Every Detail',
            text: '多种配色方案与灵活的安装姿势，完美融入各种机房环境。',
            items: [
                { 
                    type: 'image', 
                    src: `${base}images/startup.1343.png`, 
                    caption: 'Classic White | 经典白 (Standard Edition)' 
                },
                { 
                    type: 'image', 
                    src: `${base}images/startup.1407.png`, 
                    caption: 'Stealth Black | 隐形黑 (Pro Edition)' 
                },
                { 
                    type: 'image', 
                    src: `${base}images/water/install_v.png`, 
                    caption: 'Vertical Mount | 垂直管路安装' 
                },
                { 
                    type: 'image', 
                    src: `${base}images/water/install_h.png`, 
                    caption: 'Horizontal Mount | 水平管路安装' 
                },
                { 
                    type: 'image', 
                    src: `${base}images/water/install_corner.png`, 
                    caption: 'Compact Fit | 紧凑角落适配' 
                }
            ]
        },

        // --- Section 6: 最终场景 ---
        {
            type: 'full-width-image',
            // 确保这张图在 public/images/water/ 下
            image: `${base}images/water/lifestyle_pool.png`,
            caption: 'Effortless maintenance, invisible protection.'
        }
    ]
  },

  { id: 7, 
    title: '三防平板外观设计', 
    enTitle: 'Rugged Tablet Design', 
    desc: '硬表面设计', 
    category: 'other', year: '2024', 
    coverImage: `videos/平板.png` 
  },
  { id: 8, 
    title: 'InnoDesk智能书桌', 
    enTitle: 'InnoDesk Smart Desk', 
    desc: '高效舒适的学习体验', 
    category: 'other', 
    year: '2024', 
    coverImage: `videos/inno.png`
   },
     { id: 9, 
    title: '产品手绘', 
    enTitle: '手绘系列作品', 
    desc: '工业设计手绘', 
    category: 'sketch', 
    year: '2024', 
    coverImage: `images/手绘/8.jpg`,
    contentBlocks: [ 
        { type: 'image', src: `${base}images/手绘/3.jpg`, caption: '休息亭设计' },
        { type: 'image', src: `${base}images/手绘/10.jpg`, caption: '休息亭设计' },
        { type: 'image', src: `${base}images/手绘/5.jpg`, caption: '电熨斗练习' },
        { type: 'image', src: `${base}images/手绘/6.jpg`, caption: '上色练习' },
        { type: 'image', src: `${base}images/手绘/8.jpg`, caption: '上色练习' },
            ],
   },
        { id: 10, 
    title: '快题作品', 
    enTitle: '手绘系列作品', 
    desc: '工业设计手绘', 
    category: 'sketch', 
    year: '2024', 
    coverImage: `images/手绘/2.jpg`,
    contentBlocks: [ 
        { type: 'image', src: `${base}images/手绘/1.jpg`, caption: '仿生快题' },
        { type: 'image', src: `${base}images/手绘/2.jpg`, caption: '智能咖啡机快题' },
        { type: 'image', src: `${base}images/手绘/7.jpg`, caption: '智能花盆快题A' },
        { type: 'image', src: `${base}images/手绘/4.jpg`, caption: '智能花盆快题B' },
        { type: 'image', src: `${base}images/手绘/9.jpg`, caption: '手持吸尘器快题' },
            ],
   },
];