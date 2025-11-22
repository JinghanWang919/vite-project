import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Changelog.css'

// ✅ 你的更新记录数据 (倒序排列，新的在上面)
const logs = [
{
    version: 'v3.0',
    date: '2025.11.22',
    title: '史诗级视觉风格升级',
    tags: ['Design', 'Refactor'], // 标签：Design, Fix, Feature
    items: [
      '全站引入"Editorial Design"杂志排版风格，增强阅读体验',
      '重写Project Detail页面，采用左右分栏布局',
      '字体栈更新：Merriweather、Noto Sans SC',
      '优化了移动端的响应式表现',
      'Gemini能不能每天多给我点试用...'
    ]
 },
{
    version: 'v2.0',
    date: '2025.11.20',
    title: '视觉风格重构',
    tags: ['Design', 'Refactor'], // 标签：Design, Fix, Feature
    items: [
      '用Gemini设计了首页UI，其实这个时候我才刚认识css文件，之前GPT时期这个都是空的',
      '重写App页面，新建ProjectCard.css',
      '为作品集添加分类导航，Gemini好聪明，我开始只想到导航栏点击后进入对应分页，Gemini是在同一页面通过显示不同的卡片进行内容分类',
      '加了点小巧思，点击分类导航可以切换背景颜色，用的都是低饱和度颜色',
      '增加Footer，有了联系方式'
    ]
  },
  {
    version: 'v1.9',
    date: '2025.11.18',
    title: '不存在的更新',
    tags: [ 'sleep'], // 标签：Design, Fix, Feature
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
      '到这我还是没太看懂所有的代码是啥东西，全是GPT的功劳，我只是说想法，预览，推送，有错了往返修改',
      '一通弄完网站白屏了...',
      'GPT告诉我‘Vite在开发环境中，项目根目录就是服务器根目录，不需要再写/vite-project/。’，修改了index.html',
      '依旧白屏...不过页面标题有我的名字了：jinghanwangportfolio',
      'GPT说：‘React代码仍未渲染成功。’，让我去浏览器控制台 “Console” 面板找错（说真的，这时候GPT很像一个真的老师在教我，他会让我先尝试‘显示“Hello Jinghan”’缩小问题范围）',
      '搞半天本地还是白屏，感觉应该是哪里我改错了，直接让GPT给了我所有要修改的文件修改后的，不再是局部的代码',
      'ok成了...之后针对视频显示进行了完善'
    ]
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
    ]
  }
]

const Changelog = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="changelog-page">
      
      {/* 1. 顶部导航 (保持与 Detail 页一致的风格) */}
      <nav className="changelog-nav">
        <button className="text-link-btn" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </nav>

      <div className="changelog-container">
        {/* 2. 页面标题 */}
        <header className="changelog-header">
          <h1 className="page-title">Changelog</h1>
          <p className="page-subtitle">
            Site updates, design iterations, and maintenance notes.
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
              </div>
            </div>
          ))}
        </div>

        {/* 底部结束语 */}
        <footer className="changelog-footer">
          <span>GPT & Gemini won MVP</span>
        </footer>

      </div>
    </div>
  )
}

export default Changelog