import { FundoEstrela } from "../Components/FundoEstrela";
import { Mail, Linkedin, Instagram, Github } from "lucide-react";

export const Contacts = () => {
  return (
    <section
      id="contacts"
      className="relative min-h-screen bg-fundo text-white flex items-center justify-center text-center py-20 px-6 overflow-hidden"
    >
      <FundoEstrela />

      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-5xl font-extrabold text-purple-400 mb-8">
          Talk to me
        </h2>

        <p className="text-lg text-gray-300">
          Feel free to reach out for collaborations, project discussions, or just to connect.
        </p>

        <div className="flex flex-wrap justify-center gap-10 mt-10">
          <a
            href="mailto:marcoas.arriate@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-purple-400 transition-all"
          >
            <Mail className="w-6 h-6" />
            <span className="text-lg">marcoas.arriate@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/marco-aur%C3%A9lio-souza-arriate-667a25355/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-purple-400 transition-all"
          >
            <Linkedin className="w-6 h-6" />
            <span className="text-lg">LinkedIn</span>
          </a>

          <a
            href="https://github.com/Arriatea"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-purple-400 transition-all"
          >
            <Github className="w-6 h-6" />
            <span className="text-lg">GitHub</span>
          </a>

          <a
            href="https://instagram.com/souzaarriate"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-purple-400 transition-all"
          >
            <Instagram className="w-6 h-6" />
            <span className="text-lg">@souzaarriate</span>
          </a>
        </div>
      </div>
    </section>
  );
};
