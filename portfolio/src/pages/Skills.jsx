import { useState } from "react";
import { FundoEstrela } from "../Components/FundoEstrela";

export const Skills = () => {
  const [filter, setFilter] = useState("All");

  const skills = [
    { name: "Python", level: 90, category: "Backend" },
    { name: "Machine Learning", level: 90, category: "AI/ML" },
    { name: "Scikit-Learn (Sklearn)", level: 90, category: "AI/ML" },
    { name: "React", level: 70, category: "Frontend" },
    { name: "CSS", level: 72, category: "Frontend" },
    { name: "JavaScript", level: 75, category: "Frontend" },
    { name: "C++", level: 70, category: "Backend" },
    { name: "SQL", level: 85, category: "Backend" },
    { name: "IoT", level: 85, category: "Tools" },
    { name: "Git/GitHub", level: 90, category: "Tools" },
    { name: "English", level: 90, category: "Tools" },
  ];

  const filteredSkills =
    filter === "All"
      ? skills
      : skills.filter((skill) => skill.category === filter);

  const categories = ["All", "Frontend", "Backend", "AI/ML", "Tools"];

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-fundo text-white flex flex-col items-center justify-center py-20 px-6 overflow-hidden"
    >
      <FundoEstrela />

      <h2 className="text-5xl md:text-6xl font-extrabold mb-10 text-center">
        <span className="text-purple-400">Skills</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-5 mb-12 z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all ${
              filter === cat
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full z-10">
        {filteredSkills.map((skill, i) => (
          <div
            key={skill.name}
            className="fade-up bg-gray-900/70 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-semibold mb-4">{skill.name}</h3>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div
                    className="bg-purple-500 h-3 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-base text-gray-400 mt-3 text-right">
                {skill.level}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
