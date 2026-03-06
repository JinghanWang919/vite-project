import React, { useEffect, useState } from 'react' // 引入 useState
import { useNavigate } from 'react-router-dom'
import './Changelog.css'

// =================================================================================
// 1. ✅ 更新你的更新记录数据 (增加 snapshotUrl 字段)
// =================================================================================
const logs = [
        {
    version: 'v4.1',
    date: '2026.01.24',
    title: '项目内容更新 部分内容页重新设计',
    tags: ['Design'],
    items: [
      '将ID3和ID4的内容进行了大更新',
      '合并并重新设计了ID9和ID10'
    ],
  },
      {
    version: 'v4.0',
    date: '2026.01.21',
    title: '项目内容更新 部分内容页重新设计',
    tags: ['Design'],
    items: [
      '我回来啦',
      '将ID2和ID6的内容进行了大更新',
      '由传统的图文介绍变成z字形介绍方式'
    ],
  },
      {
    version: 'v3.6',
    date: '2025.12.01',
    title: '项目内容更新 数据与视图分离',
    tags: ['Refactor'],
    items: [
      '将ProjectDetail.jsx拆分成三个部分，分别管理数据、组件和视图逻辑',
      '更新了部分内容的图片'
    ],
  },
    {
    version: 'v3.5',
    date: '2025.12.01',
    title: '简历板块更新 项目页排版优化',
    tags: ['Refactor'],
    items: [
      '项目经历画廊和内容页的图片轮播统一使用了Swiper库，可实现自动播放，拖动换页',
      'ID2项目更新了文本信息，为后续图文穿插做好了准备',
      '修复了轮播图片标题显示无法自定义的问题',
      '修复了分页导航页无法跳转到首页顶端的问题',
      '修复了获奖信息的问题'
    ],
    snapshotUrl: 'public/snapshots/v35.jpeg' 
  },
  {
    version: 'v3.4',
    date: '2025.11.28',
    title: '新增简历板块',
    tags: ['Design'],
    items: [
      '我的那个肖像照也是ai的嗷',
      '新增个人简历的下载和预览',
      '新增项目经历画廊'
    ],
    snapshotUrl: 'public/snapshots/v34.jpg' 
  },
  {
    version: 'v3.3',
    date: '2025.11.27',
    title: '优化内容页',
    tags: ['Design'],
    items: [
      '可以横向滚动查看图片',
      '折叠展板展示和视频展示',
      '新增部分项目，内容页还没做好'
    ],
    // 增加：用于快照预览的图片URL
    snapshotUrl: 'public/snapshots/v33.jpeg' 
  },
  {
    version: 'v3.2',
    date: '2025.11.26',
    title: '增加分页导航栏',
    tags: ['Design'],
    items: [
      '分页加了导航栏',
      '可以直接在分页跳转到首页的具体分类',
      '新增自行车灯项目，内容页还没做好'
    ],
    // 增加：用于快照预览的图片URL
    snapshotUrl: 'public/snapshots/v3-2-screenshot.jpg' // 假设图片路径
  },
  {
    version: 'v3.0',
    date: '2025.11.22',
    title: '视觉风格升级',
    tags: ['Design', 'Refactor'],
    items: [
      '全站设计风格改为杂志排版风格，增强阅读体验',
      '重写Project Detail页面，采用左右分栏布局',
      '字体栈更新：Merriweather、Noto Sans SC',
      'Gemini能不能每天多给我点试用...'
    ],
    // 增加：用于快照预览的图片URL
    snapshotUrl: 'public/snapshots/v3-0-screenshot.jpg' // 假设图片路径
  },
  {
    version: 'v2.0',
    date: '2025.11.20',
    title: '视觉风格重构',
    tags: ['Design', 'Refactor'],
    items: [
      '用Gemini设计了首页UI，其实这个时候我才刚认识css文件，之前GPT时期这个都是空的',
      '重写App页面，新建ProjectCard.css',
      '为作品集添加分类导航，Gemini好聪明，我开始只想到导航栏点击后进入对应分页，Gemini是在同一页面通过显示不同的卡片进行内容分类',
      '加了点小巧思，点击分类导航可以切换背景颜色，用的都是低饱和度颜色',
      '增加Footer，有了联系方式'
    ],
    snapshotUrl: 'public/snapshots/v2-0-screenshot.jpg' // 假设图片路径
  },
  {
    version: 'v1.9',
    date: '2025.11.18',
    title: '不存在的更新',
    tags: ['sleep'],
    items: [
      'Cloudflare出现了大规模全球性故障，G老师下线',
      '都是对作品集进行一些小微调，在研究各个代码都是啥意思',
      '这几天尝试了XD，又去研究了点Figma',
      '没学太会...不太明白如何把做出的视觉效果变成代码',
      '这几天没有更新，在找更简单的UI美化方式',
      'Gemini即将登场...'
    ]
  },
  {
    version: 'v1.2',
    date: '2025.11.13',
    title: '重新UI布局 增加分页',
    tags: ['Refactor'],
    items: [
      '安装React路由 新建页面结构 加了作品的详情页',
      '修改main.jsx让项目支持路由，修改App.jsx让首页和详情页成为两个独立路由页面，修改index.css简单布局样式',
      '新建HomePage.jsx、ProjectCard.jsx、ProjectDetail.jsx',
      '到这我还是没太看懂所有的代码是啥东西，全是GPT的功劳，我只往返修改',
      '一通弄完网站白屏了...',
      '感觉应该是哪里我改错了，直接让GPT给了我所有要修改的文件修改后的，不再是局部的代码',
      '针对视频显示进行了完善'
    ],
    // 增加：用于快照预览的图片URL
    snapshotUrl: 'public/snapshots/v12.jpg' // 假设图片路径
  },
  {
    version: 'v1.0',
    date: '2025.11.12',
    title: '网站初版闪亮登场',
    tags: ['Release'],
    items: [
      '使用Chat GPT 5.1完成基于 React + Vite 个人作品集网站搭建',
      '只做了一个页面，标题叫：“王景馯的作品集”纯图文展示（gpt一点美感都没有...）',
      '摸索怎么加图，直接加了20多个作品',
      '用GPT建网站到不难，推送到GitHub好麻烦...'
    ],
    // 增加：用于快照预览的图片URL
    snapshotUrl: 'public/snapshots/v10.jpg' // 假设图片路径
  },
]


// =================================================================================
// 2. ✅ 新增快照预览组件 (Modal)
// =================================================================================
const SnapshotModal = ({ isOpen, snapshotUrl, onClose }) => {
  if (!isOpen) return null

  // 模态框点击背景关闭的逻辑
  const handleOverlayClick = (e) => {
    if (e.target.className === 'snapshot-modal-overlay') {
      onClose()
    }
  }

  return (
    // 使用一个全屏覆盖层来做模态框背景
    <div className="snapshot-modal-overlay" onClick={handleOverlayClick}>
      <div className="snapshot-modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <img
          src={snapshotUrl}
          alt="网站快照预览"
          className="snapshot-image"
          // 可选：添加加载失败时的占位符
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/1200x800?text=Snapshot+Loading+Failed"
          }}
        />
      </div>
    </div>
  )
}


const Changelog = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // =================================================================================
  // 3. ✅ 状态管理
  // =================================================================================
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentSnapshotUrl, setCurrentSnapshotUrl] = useState('')

  // =================================================================================
  // 4. ✅ Modal 控制函数
  // =================================================================================
  const openModal = (url) => {
    setCurrentSnapshotUrl(url)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentSnapshotUrl('')
  }


  return (
    <div className="changelog-page">
      
      {/* 1. 顶部导航 */}
      <nav className="changelog-nav">
        <button className="text-link-btn" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </nav>

      <div className="changelog-container">
        {/* 2. 页面标题 */}
        <header className="changelog-header">
          <h1 className="page-title">更新日志</h1>
          <p className="page-subtitle">
            记录日常更新的内容，主要使用Gemini3.0Pro进行更新维护
          </p>
        </header>

        {/* 3. 时间轴列表 */}
        <div className="timeline">
          {logs.map((log, index) => (
            <div key={index} className="timeline-item">
              
              {/* 左侧：日期与版本 */}
              <div className="timeline-left">
                <span className="log-date">{log.date}</span>
                <span className="log-version">{log.version}</span>
              </div>

              {/* 中间：装饰线与圆点 (由 CSS 处理) */}
              <div className="timeline-divider"></div>

              {/* 右侧：具体内容 */}
              <div className="timeline-content">
                <div className="content-header">
                  <h2 className="log-title">{log.title}</h2>
                  <div className="log-tags">
                    {log.tags.map(tag => (
                      <span key={tag} className={`tag tag-${tag.toLowerCase()}`}>{tag}</span>
                    ))}
                  </div>
                </div>
                
                <ul className="log-list">
                  {log.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {/* =================================================================================
                    5. ✅ 渲染快照按钮 (只有当 log.snapshotUrl 存在时才显示)
                    ================================================================================= */}
                {log.snapshotUrl && (
                  <button
                    className="snapshot-preview-btn"
                    onClick={() => openModal(log.snapshotUrl)}
                  >
                    关键网页快照
                  </button>
                )}

              </div>
            </div>
          ))}
        </div>

        {/* 底部结束语 */}
        <footer className="changelog-footer">
          <span>GPT & Gemini won MVP</span>
        </footer>

      </div>

      {/* =================================================================================
          6. ✅ 渲染快照模态框
          ================================================================================= */}
      <SnapshotModal
        isOpen={isModalOpen}
        snapshotUrl={currentSnapshotUrl}
        onClose={closeModal}
      />
    </div>
  )
}

export default Changelog