export const Projects = () => {
  const projects = [
    {
      title: "Portfolio Pessoal",
      desc: "Site com fundo animado e interface moderna, feito com React e Tailwind.",
      link: "https://github.com/Arriatea/Portfolio-CP3",
    },
    {
      title: "Gerenciador de Campeonato",
      desc: "Aplicativo para gestão de torneios de futebol feminino.",
      link: "#",
    },
  ]

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 bg-black/95 text-white relative z-10"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-400 bg-clip-text text-transparent animate-gradient">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/5 border border-purple-600/30 backdrop-blur-md hover:border-purple-500 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2 text-purple-300">{proj.title}</h3>
            <p className="text-gray-400 mb-4">{proj.desc}</p>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Ver no GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
