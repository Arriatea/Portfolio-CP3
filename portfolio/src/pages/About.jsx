import { FundoEstrela } from "../Components/FundoEstrela"
import fotoPerfil from "../assets/imgs/fotodeperfil.png"

export const Sobre = () => {
  return (
    <section id="about"
     className="relative min-h-screen bg-fundo text-white flex items-center justify-center text-center py-20 px-6 overflow-hidden">

      <FundoEstrela />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">

        <div className="flex justify-center">
          <img 
            src={fotoPerfil}
            alt="Profile"
            className="rounded-full w-96 h-96 md:w-[28rem] md:h-[28rem] object-cover shadow-2xl"
          />
        </div>

        <div className="space-y-6 text-lg leading-relaxed md:text-left text-gray-300">
          <h2 className="text-5xl font-extrabold mb-4 text-purple-400 text-center md:text-left">About Me</h2>

          <p>
            I'm a Software Engineering student at <span className="text-white font-medium">FIAP</span>, with a technical background in 
            <span className="text-white font-medium"> Internet of Things (IoT)</span> from <span className="text-white font-medium">Senac Nações Unidas</span>. 
            I’m passionate about technology, software development, and artificial intelligence.
          </p>

          <p>
            I’m currently taking the course <span className="text-white font-medium">“Artificial Intelligence with Real Applications”</span> by 
            <span className="text-white font-medium"> ESPX/Harvard</span>, while also completing programs at  
            <span className="text-white font-medium"> FIAP </span>and  
            <span className="text-white font-medium"> Alura</span>, focused on Machine Learning.
          </p>

          <p>
            I’m looking for an internship opportunity in the field of technology, where I can grow, learn, and contribute to 
            impactful projects that use innovation to make a difference.
          </p>
        </div>

      </div>
    </section>
  )
}
