export default function Portfolio() {
  const projects = [
    {
      title: "GloSeed 发光种子",
      description: "环保教育玩具，探索自然与光能互动。",
      image: "/images/gloseed.jpg",
    },
    {
      title: "Didi 滴滴",
      description: "儿童水循环教育玩具，培养生态意识。",
      image: "/images/didi.jpg",
    },
    {
      title: "仓旋大师",
      description: "智能高效平仓翻粮作业车，面向农业现代化。",
      image: "/images/cangxuan.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 text-gray-800">
      <header className="p-6 text-center border-b border-gray-200">
        <h1 className="text-3xl font-bold tracking-tight">王景馯 · Industrial Design Portfolio</h1>
        <p className="text-sm text-gray-500 mt-1">Selected Works 2023–2025</p>
      </header>

      <section className="max-w-5xl mx-auto py-12 px-4 grid gap-10 md:grid-cols-3">
        {projects.map((p) => (
          <div key={p.title} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md bg-white transition">
            <img src={p.image} alt={p.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{p.description}</p>
            </div>
          </div>
        ))}
      </section>

      <footer className="text-center text-sm text-gray-500 py-8 border-t border-gray-200">
        <p>© 2025 王景馯 · Industrial Designer</p>
        <p className="mt-1">Contact: <a href="mailto:example@email.com" className="underline">example@email.com</a></p>
      </footer>
    </main>
  );
}
