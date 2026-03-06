const base = import.meta.env.BASE_URL;

export const projectData = [
  // --- ID 1: 户外露营桌 ---
  {
    id: 1,
    title: '户外露营桌',
    enTitle: 'Outdoor Camping Table',
    category: 'course',
    year: '2025',
    desc: '本设计以折叠为核心，打造兼具结构理性与生活美学的模块化露营桌。采用轻量化铝合金与仿木纹金属腿，桌面可拼接扩展并嵌入多功能模块。下方双层置物平台提升空间利用率，折叠后轻便易收，满足多场景露营需求。',
    mobileHeroVideo: `videos/video.mp4`,
    subtitle: '独立工业设计作品',
    resources: [
      { name: '播放视频', type: 'video', src: `${base}videos/eco.mp4` },
      { name: '查看展板', type: 'image', src: `${base}images/luyingzhuo-detail.jpg` }
    ],
    media: [
      { type: 'image', src: `${base}images/luyingzhuo-detail4.png`, caption: '人机尺寸关系' },
      { type: 'image', src: `${base}images/luyingzhuo-detail5.png`, caption: '产品尺寸图' },
      { type: 'image', src: `${base}images/luyingzhuo-detail6.png`, caption: '产品部件图' },
      { type: 'image', src: `${base}images/luyingzhuo-detail7.png`, caption: '效果图' },
    ],
  },

  // --- ID 2: LUMENA红光理疗仪 ---
  {
    id: 2,
    title: 'LUMENA —— 居家红光理疗的去医疗化探索',
    enTitle: 'LUMENA Red Light Therapy',
    category: 'course',
    year: '2025',
    coverImage: `images/red3.png`,

    hero: {
      image: `images/red3.png`,
      title: 'LUMENA',
      subtitle: 'Healing as a Routine | 治愈，即是日常',
      tags: ['Product Design', 'Wellness', 'Soft Goods']
    },

    metadata: {
      designer: '王昊',
      role: '工业设计师',
      tools: ['Rhino', 'Keyshot', 'Photoshop'],
      awards: [
        { name: '东方创意之星 铜奖', cert: 'awards/dfcyzxhnsyaodai3.jpg' },
        { name: '东方设计奖 一等奖', cert: 'awards/dfsjhns1.jpg' }
      ]
    },

    sections: [
      {
        type: 'split-insight',
        bgColor: 'bg-white',
        left: {
          title: '被忽视的躯干',
          quote: '“为什么我们的脸部护理如此精致，身体的疼痛却只能依靠笨重的器械？”',
          text: '现代人的面部护理极其精细，但对身体疼痛的缓解却往往简单粗暴。市场调研显示，现有的理疗设备要么像冰冷的“医疗器械”，要么像廉价的“加热垫”。我思考的是：如何让设备像衣物一样亲切？'
        },
        right: {
          image: `${base}images/red.png`,
          caption: '用户调研与痛点分析'
        }
      },
      {
        type: 'feature-z',
        layout: 'text-image',
        bgColor: 'bg-gray-50',
        title: 'LUMENA Core: 像拥抱一样的佩戴',
        text: '针对腰腹大面积区域，Core 采用了环绕式设计。利用高弹力织物提供适度的加压感，既固定了红光模组，又提供了物理支撑。创新的外置移动电源设计，彻底解决了续航焦虑。',
        image: `${base}images/红光1.png`
      },
      {
        type: 'feature-z',
        layout: 'image-text',
        bgColor: 'bg-gray-50',
        title: 'LUMENA Mini: 适应每一次弯曲',
        text: '针对关节部位，Mini 专注于“贴合”。内置柔性电路板与点阵式光源，使其能够像护具一样包裹住膝盖或手肘，即使在轻微活动中也能保持光疗效果。',
        image: `${base}images/红光2.png`
      },
      {
        type: 'full-width-dark',
        bgColor: 'bg-black',
        textColor: 'text-white',
        title: '隐形科技 Invisible Tech',
        text: '630nm 红光 + 850nm 近红外光的黄金组合，被封装在不到 5mm 厚的柔性结构中。平衡了散热性能与佩戴舒适度，通过打孔透气结构实现了长时间佩戴无闷热感。',
        image: `${base}images/红光3.png`
      },
      {
        type: 'full-width-image',
        image: `${base}images/红光场景.png`,
        caption: '从办公桌前的午休，到健身后的放松，LUMENA 是生活的一部分。'
      }
    ],
    desc: '居家红光理疗的去医疗化探索',
    subtitle: '一套通过“柔性材料”与“模块化设计”的方案',
    media: [],
  },

  // --- ID 3: AVO 居家守护中枢 ---
  {
    id: 3,
    title: 'AVO',
    enTitle: 'Smart Home Hub',
    category: 'product',
    year: '2025',
    desc: '智能家居不应是老人的迷宫。AVO 是一款“长了腿”的智能中枢，它通过主动移动和拟人化交互，将复杂的全屋控制简化为一次温情的陪伴。',
    coverImage: `images/ren4.png`,

    hero: {
      image: `images/ren4.png`,
      title: 'AVO',
      subtitle: 'The Wandering Interface | 会行走的智能开关',
      tags: ['Service Robot', 'Aging Care', 'Smart Home'],
      align: 'bottom-left'
    },

    metadata: {
      role: '产品定义 / 交互逻辑 / 外观设计',
      tools: ['Rhino', 'Keyshot', 'HMI Logic'],
      awards: [
        { name: 'iF Design Talent', cert: `${base}images/cert-if.jpg` },
        { name: 'Red Dot Concept', cert: `${base}images/cert-reddot.jpg` }
      ]
    },

    sections: [
      {
        type: 'centered-stat',
        bgColor: 'bg-white',
        title: 'From Maze to Companion',
        mainText: '对于年轻人，智能家居是便利；对于老人，它是一座充满未知的“数字迷宫”。AVO 的设计初衷是打破这种隔阂：如果老人找不到开关，那么开关就应该走过来找老人。',
        stats: [
          { value: '12h', label: 'Active Runtime' },
          { value: '99%', label: 'Fall Detection' },
          { value: '360°', label: 'Environment Scan' }
        ]
      },
      {
        type: 'bento-grid',
        bgColor: 'bg-gray-50',
        title: 'Anatomy of Empathy',
        items: [
          {
            size: 'large',
            images: [
              `${base}images/ren/detail_head1.png`,
              `${base}images/ren/detail_head2.png`,
              `${base}images/ren/detail_head3.png`
            ],
            title: 'Digital Eyes & Sensors',
            desc: '头部显示器不仅是UI界面，更是拟人化的“眼睛”。它能通过眼神变化与老人建立情感连接，消除机器的冷冰感。'
          },
          {
            size: 'small',
            image: `${base}images/ren/detail_drawer.png`,
            title: 'Haptic Console',
            desc: '摒弃了易损坏的机械部件，采用线性马达驱动的“虚拟触感”按键。'
          },
          {
            size: 'small',
            image: `${base}images/ren/detail_base.png`,
            title: 'Active Mobility',
            desc: '它不是静止的家电。AVO 能够识别老人的语音呼唤或日常习惯，主动移动到沙发旁或床边。'
          }
        ]
      },
{
        type: 'contained-image',
        title: 'System Overview', // 可选：如果你不需要标题，可以删掉这一行
        image: `${base}images/ren.png`,
        caption: 'Guardian in the Background: Integrated Health Monitoring System' // 可选：图片下方的说明
      }
    ]
  },

// --- ID 4: RIPPLE涟漪自行车尾灯 (重构版) ---
  {


    id: 4,
    title: 'RIPPLE',
    enTitle: 'Bicycle Taillight',
    category: 'product',
    year: '2024',
    // 标记这个项目强制使用暗色主题
    theme: 'dark', 
    coverImage: `images/车灯/黄色.png`,
    hero: {
      // 建议这里放一段车灯在黑暗中闪烁的渲染视频
      video: null, // 如果有视频填这里
      image: `${base}images/车灯/cd1.png`, // 暂用效果图
      title: 'RIPPLE',
      subtitle: 'Safety in Flow | 流动的安全感',
      tags: ['Cycling Safety', 'Bio-mimicry', 'Lighting Design'],
      align: 'center'
    },
    
    // 这是一个特殊的 Magazine 结构
    sections: [
      // 1. 核心灵感来源 (最重要的部分)
      {
        type: 'ripple-inspiration',
        title: 'Form Follows Nature',
        subtitle: '从自然界的瞬态，到工业产品的恒态',
        text: '设计的原点源于雨滴落入水面的一瞬间。涟漪扩散的同心圆结构，不仅具有极致的几何美感，更天然契合光学透镜的菲涅尔原理。我们将这一转瞬即逝的自然现象，固化为守护骑行者安全的警示光环。',
        items: [
          { 
            label: 'Inspiration', 
            // ⚠️【待补充】请在这里放入水滴/涟漪的摄影图
            src: `${base}images/placeholder_water_ripple.jpg`, 
            desc: 'Nature: The spreading energy' 
          },
          { 
            label: 'Translation', 
            // ⚠️ 这里放车灯的正视图或顶视图
            src: `${base}images/车灯/cd2.png`, 
            desc: 'Product: The warning signal' 
          }
        ]
      },

      // 2. 爆炸图与结构 (深海悬浮风格)
      {
        type: 'ripple-structure',
        title: 'Anatomy of Light',
        text: '在紧凑的防水壳体中，通过多层透镜堆叠实现光效的最大化扩散。',
        image: `${base}images/车灯/bzt.png`,
        features: ['IPX6 Waterproof', 'Type-C Charging', 'Quick Release']
      },

      // 3. 颜色展示 (星球轨迹风格)
      {
        type: 'ripple-gallery',
        title: 'Color Waves',
        items: [
          { name: 'Moon White', src: `${base}images/车灯/白色.png`, color: '#e0e0e0' },
          { name: 'Deep Ocean', src: `${base}images/车灯/黑色.png`, color: '#2b2b2b' },
          { name: 'Sunset Orange', src: `${base}images/车灯/黄色.png`, color: '#ff9d00' },
          { name: 'Neon Purple', src: `${base}images/车灯/紫色.png`, color: '#a600ff' },
        ]
      },

      // 4. 场景大图
      {
        type: 'full-width-image',
        image: `${base}images/车灯/cd3.png`, // 魔术贴或其他场景图
        caption: 'Adaptable mounting for any seatpost.'
      }
    ],

    // 保留旧数据以防万一
    desc: '本设计为骑行安全而生...',
    metadata: {
      role: 'Industrial Designer',
      tools: ['Rhino', 'Keyshot'],
    },
    media: [],
  },

  // --- ID 5: 地面震动监测仪 ---
  {
    id: 5,
    title: '地面震动监测仪',
    enTitle: 'Ground Vibration Monitor',
    desc: '测量和记录震动的仪器',
    category: 'other',
    year: '2024',
    coverImage: `videos/地震仪.jpg`,
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
    desc: '采用创新的顶装式维护架构与水电分离设计，重新定义机房设备的维护体验与专业美学。',
    coverImage: '/images/water/cover_tech.png',

    hero: {
      video: `${base}videos/nexus_hero.mp4`,
      image: `${base}images/startup.1407.png`,
      title: 'NEXUS',
      subtitle: 'The Brain of Water Quality | 泳池的智慧大脑',
      tags: ['Industrial Design', 'Smart Home', 'Infrastructure']
    },

    sections: [
      {
        type: 'split-insight',
        bgColor: 'bg-white',
        left: {
          title: 'Deconstructing the "Sandwich"',
          quote: '“为什么更换一个耗材，需要拆毁整个大脑？”',
          text: '市场调研发现，现有的铜银离子净水器普遍采用“电路盒-铜片-壳体”的三明治层叠结构。这意味着，每次例行检查或更换铜片耗材时，用户被迫先拆卸精密的电路盒。这不仅繁琐，更增加了电路受潮损坏的风险。'
        },
        right: {
          image: `${base}images/water/problem_sketch.png`,
          caption: 'Pain Point: Coupled Maintenance Structure'
        }
      },
      {
        type: 'feature-z',
        layout: 'image-text',
        bgColor: 'bg-gray-50',
        title: 'Vertical Decoupling',
        text: 'NEXUS 彻底重构了堆叠逻辑。采用顶装式架构，将铜片耗材从顶部垂直插入铸造壳体。这一改变实现了“维护解耦”：更换铜片时，正面的电路盒无需任何拆卸。',
        image: `${base}images/water/top_loading.png`
      },
      {
        type: 'feature-z',
        layout: 'text-image',
        bgColor: 'bg-white',
        title: 'Dry Swap & Safety Lock',
        text: '得益于顶部开口设计，更换铜片时管路中的存水不会溢出，保持机房干燥。同时，前置电路盒设计将“用户维护区”与“电子元件区”在物理上完全隔离。',
        image: `${base}images/water/safety_structure.png`
      },
      {
        type: 'full-width-dark',
        bgColor: 'bg-black',
        textColor: 'text-white',
        title: 'Unibody Casting',
        text: '主体采用一体化铸造工艺，两端集成标准工业法兰接口，确保在高水压下的绝对密封性与结构强度。这是一个为长期服役而生的基础设施。',
        image: `${base}images/water/exploded_structure.png`
      },
      {
        type: 'carousel',
        bgColor: 'bg-gray-50',
        title: 'Versatility in Every Detail',
        text: '多种配色方案与灵活的安装姿势，完美融入各种机房环境。',
        items: [
          { type: 'image', src: `${base}images/water/color_white.png`, caption: 'Classic White | 经典白' },
          { type: 'image', src: `${base}images/water/color_black.png`, caption: 'Stealth Black | 隐形黑' },
          { type: 'image', src: `${base}images/water/install_v.png`, caption: 'Vertical Mount | 垂直安装' },
          { type: 'image', src: `${base}images/water/install_h.png`, caption: 'Horizontal Mount | 水平安装' },
          { type: 'image', src: `${base}images/water/install_corner.png`, caption: 'Compact Fit | 紧凑角落' }
        ]
      },
      {
        type: 'full-width-image',
        image: `${base}images/water/lifestyle_pool.jpg`,
        caption: 'Effortless maintenance, invisible protection.'
      }
    ]
  },

  // --- ID 7 & 8 ---
  {
    id: 7,
    title: '三防平板外观设计',
    enTitle: 'Rugged Tablet Design',
    desc: '硬表面设计',
    category: 'other', year: '2024',
    coverImage: `videos/平板.png`
  },
  {
    id: 8,
    title: 'InnoDesk智能书桌',
    enTitle: 'InnoDesk Smart Desk',
    desc: '高效舒适的学习体验',
    category: 'other',
    year: '2024',
    coverImage: `videos/inno.png`
  },

  // --- ID 9: 手绘与快题综合展示 (合并版) ---
  {
    id: 9,
    title: 'Design Sketching',
    enTitle: 'Thinking with Hands',
    category: 'sketch',
    year: '2024',
    coverImage: `images/手绘/8.jpg`,

    hero: {
      image: `images/手绘/8.jpg`,
      title: 'SKETCHING',
      subtitle: 'From Delicate Rendering to Rapid Logic\n从精细渲染到极限推演',
      tags: ['Ideation', 'Marker Rendering', 'Rapid Design']
    },

    metadata: {
      role: 'Independent Work',
      tools: ['Marker', 'Ballpoint Pen', 'Photoshop'],
    },

    sections: [
      // --- Part 1: 日常手绘 (右侧图片轮播) ---
      {
        type: 'split-insight',
        bgColor: 'bg-white',
        left: {
          label: 'Part 1',
          title: 'The Art of Form',
          quote: '“材质与光影的对话。”',
          text: '在日常练习中，我专注于通过马克笔捕捉产品的质感与结构。这不仅是表现技法，更是对形态推敲的深度思考。'
        },
        right: {
          // ⚠️ 关键点：使用 images 数组触发轮播
          images: [
            `${base}images/手绘/6.jpg`, // 上色练习
            `${base}images/手绘/5.jpg`, // 电熨斗
            `${base}images/手绘/3.jpg`, // 休息亭
            `${base}images/手绘/8.jpg`, // 绿色渲染
          ],
          caption: 'Material & Structure Studies'
        }
      },

      // --- 瀑布流 1 (3列居中) ---
      {
        type: 'masonry-gallery',
        title: 'Daily Rendering Collection',
        items: [
          { src: `${base}images/手绘/8.jpg`, caption: 'Advanced Rendering' },
          { src: `${base}images/手绘/3.jpg`, caption: 'Public Facility' },
          { src: `${base}images/手绘/10.jpg`, caption: 'Architectural Sketch' },
          { src: `${base}images/手绘/5.jpg`, caption: 'Product Structure' },
          { src: `${base}images/手绘/6.jpg`, caption: 'Material Study' },
          { src: `${base}images/手绘/2.jpg`, caption: 'Concept Sketch' }, // 补一张图保证布局饱满
        ]
      },

      // --- Part 2: 快题设计 (去除黑底，改为浅灰，右侧轮播) ---
      {
        type: 'split-insight',
        bgColor: 'bg-gray-50', // 修正：浅灰底，去除了黑底
        left: {
          label: 'Part 2',
          title: 'Logic under Pressure',
          text: '快题（Rapid Design）是对设计师综合素质的极限考验。在 3 小时内，完成从痛点分析、方案推演到最终表达的全过程。这里不仅仅是画图，更是逻辑的视觉化。'
        },
        right: {
          // ⚠️ 关键点：使用 images 数组触发轮播
          images: [
            `${base}images/手绘/9.jpg`, // 吸尘器
            `${base}images/手绘/1.jpg`, // 仿生
            `${base}images/手绘/2.jpg`, // 咖啡机
            `${base}images/手绘/4.jpg`, // 花盆
          ],
          caption: '3-Hour Design Challenges'
        }
      },

      // --- 瀑布流 2 (3列居中) ---
      {
        type: 'masonry-gallery',
        title: '3-Hour Challenge Archive',
        items: [
          { src: `${base}images/手绘/1.jpg`, caption: 'Bionic Concept' },
          { src: `${base}images/手绘/2.jpg`, caption: 'Coffee Machine' },
          { src: `${base}images/手绘/7.jpg`, caption: 'Smart Planter A' },
          { src: `${base}images/手绘/4.jpg`, caption: 'Smart Planter B' },
          { src: `${base}images/手绘/9.jpg`, caption: 'Handheld Vacuum' },
          { src: `${base}images/手绘/7.jpg`, caption: 'System Design' }, // 补一张图
        ]
      },

      // --- 结尾：无限滚动 (配合CSS实现三轨模糊) ---
      {
        type: 'infinite-marquee',
        items: [
          { src: `${base}images/手绘/5.jpg` },
          { src: `${base}images/手绘/3.jpg` },
          { src: `${base}images/手绘/9.jpg` },
          { src: `${base}images/手绘/2.jpg` },
          { src: `${base}images/手绘/6.jpg` },
          { src: `${base}images/手绘/1.jpg` },
          { src: `${base}images/手绘/8.jpg` },
          { src: `${base}images/手绘/4.jpg` },
        ]
      }
    ]
  },
];