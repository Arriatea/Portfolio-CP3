import { FundoEstrela } from "../Components/FundoEstrela";
import { NavBar } from "../Components/NavBar";
import { Sobre } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contacts } from "./Contacts";
import { Button } from "../Components/Button";

export const Home = () => {
  return (
    <div className="min-h-screen bg-fundo text-foreground overflow-x-hidden scroll-smooth relative">
      <FundoEstrela />
      <NavBar />

      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
          Hi, I'm <span className="text-purple-400">Marco Aurélio</span>
        </h1>

        <p className="text-2xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
          A Software Engineering student on a focused journey to become a
          Machine Learning Engineer. Constantly exploring new technologies,
          improving my technical depth, and building intelligent systems.
        </p>

        <Button
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-transform hover:scale-105 shadow-md"
        >
          View My Work
        </Button>

        <div className="absolute bottom-10 text-gray-400 animate-pulse">
          <span>Scroll</span>
        </div>
      </section>

      <Sobre />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
};
