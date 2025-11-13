import { useParams, useNavigate } from 'react-router-dom'

const projectData = [
  {
    id: 1,
    title: '户外露营桌',
    desc: '本设计以折叠为核心，打造兼具结构理性与生活美学的模块化露营桌。采用轻量化铝合金与仿木纹金属腿，桌面可拼接扩展并嵌入多功能模块。下方双层置物平台提升空间利用率，折叠后轻便易收，满足多场景露营需求。',
    media: [
      { type: 'video', src: '/videos/luyingzhuo.mp4' },
      { type: 'image', src: '/images/luyingzhuo-detail.jpg' },
      { type: 'image', src: '/images/luyingzhuo-detail1.png' },
      { type: 'image', src: '/images/luyingzhuo-detail2.png' },
      { type: 'image', src: '/images/luyingzhuo-detail3.png' },
      { type: 'image', src: '/images/luyingzhuo-detail4.png' },
      { type: 'image', src: '/images/luyingzhuo-detail5.png' },
      { type: 'image', src: '/images/luyingzhuo-detail6.png' },
      { type: 'image', src: '/images/luyingzhuo-detail7.png' },
    ],
  },
  {
    id: 2,
    title: 'LUMENA',
    desc: '《LUMENA 多区红光理疗产品设计》是基于华尔集团课题，针对居家康复与美容护理场景打造的创新理疗解决方案。该设计以“光至深处，疗愈有度”为核心理念，聚焦注重身体管理与轻疗保健的用户需求，融合医学级红光波段技术与人体工程学模块化设计，推出“露恩环（LUMENA Core）”与“露恩贴（LUMENA Mini）”两大产品形态。其中，露恩环通过柔性可调节光片，实现腰腹、背部、大臂等多区域的深层热疗与舒缓；露恩贴则以便携充电式设计，精准覆盖手腕、小腿等局部部位，满足轻量护理需求。整套产品兼具“高效理疗、多场景适配、操作简洁、便携可持续”的设计目标，凭借仿肤亲柔材质、智能APP调控及Type-C通用接口等细节，重新定义居家美容与康复体验，让用户在日常场景中即可享受专业级的轻疗愈护理仪式。',
    media: [
      { type: 'image', src: '/images/red.png' },
      { type: 'image', src: '/images/red2.png' },
      { type: 'image', src: '/images/red3.png' },
      { type: 'image', src: '/images/red3.jpg' },
    ],
  },
  {
    id: 3,
    title: '居家守护中枢：独居老人的智能生活管家',
    desc: '针对独居老人的安全保障、生活辅助与情感陪伴需求，本设计打造了一款适老化智能中枢产品。它集成视觉感知、语音控制与设备联动能力，可实现健康预警、生活服务及情感交互的全场景覆盖。产品通过多传感器架构监测老人生命体征与行为状态，配备多模态交互方式降低操作门槛，更融入情感化设计，能识别并响应老人情绪。同时，电动储物、地形适配及政务服务集成等功能，从日常起居到社会连接维度，为独居老人构建安全、便捷且有温度的智能生活生态，让科技成为守护银发群体的温情桥梁。',
    media: [
      { type: 'image', src: '/images/ren.png' },
      { type: 'image', src: '/images/ren2.png' },
      { type: 'image', src: '/images/ren3.png' },
    ],
  },
]

function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projectData.find((p) => p.id === Number(id))

  if (!project) {
    return <p style={{ textAlign: 'center' }}>未找到项目信息</p>
  }

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2>{project.title}</h2>
      <p style={{ maxWidth: '600px', margin: '20px auto', lineHeight: 1.6 }}>
        {project.desc}
      </p>

      {/* ✅ 渲染视频和图片 */}
      <div style={{ marginTop: '20px' }}>
        {project.media.map((item, index) => {
          if (item.type === 'video') {
            return (
              <video key={index} width="640" controls style={{ margin: '20px 0' }}>
                <source src={item.src} type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            )
          } else if (item.type === 'image') {
            return (
              <img
                key={index}
                src={item.src}
                alt={`${project.title}-${index}`}
                style={{
                  width: '640px',
                  margin: '20px 0',
                  borderRadius: '12px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                }}
              />
            )
          }
          return null
        })}
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => navigate('/')}>返回首页</button>
      </div>
    </div>
  )
}

export default ProjectDetail
