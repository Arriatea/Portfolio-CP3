import hidroguardImg from "../assets/imgs/projeto-hidroguard.png";
import passaBolaImg from "../assets/imgs/projeto-passabola.png";
import adaptaiImg from "../assets/imgs/projeto-adaptai.png";
import coffeConnectImg from "../assets/imgs/projeto-coffeeconnect.png";

export const Projects = () => {
  const projects = [
    {
      title: "Flood Monitoring System",
      desc: "Developed by HidroGuard as a FIAP project, this system monitors flood levels in real time and alerts users to risk situations, detecting people in flooded areas to enable quick rescue actions.",
      tech: ["Arduino", "Sensors", "LCD 16x2", "Wokwi"],
      img: hidroguardImg,
      link: "https://github.com/Arriatea/GsEdge_Computing",
      details: [
        "Uses ultrasonic and presence sensors for dual-layer flood detection.",
        "Built with Arduino UNO and visual indicators for risk levels.",
        "Simulated and validated through Wokwi for real-time accuracy.",
        "Designed to assist emergency teams with early flood warnings.",
      ],
    },
    {
      title: "IoT Goal Monitoring System",
      desc: "Created by Nova Tech Global for FIAP, this system tracks goals and kick speed using IoT sensors and real-time dashboards for validation and playback.",
      tech: ["Node-RED", "MQTT", "IoT", "Cameras", "Sensors"],
      img: passaBolaImg,
      link: "https://github.com/Arriatea/Sprint-3-Edge-Computing",
      details: [
        "Employs infrared and motion sensors for instant goal detection.",
        "Node-RED dashboard built for monitoring events in real time.",
        "MQTT protocol ensures fast and reliable device communication.",
        "Integrates replay capture and validation for match analytics.",
      ],
    },
    {
      title: "AdaptAI (In Progress)",
      desc: "Winner of the Google Gen Ai Hackathon 2025, AdaptAI is an intelligent accessibility platform hosted on Google Cloud. It leverages AI to adapt websites dynamically for users with different accessibility needs, promoting inclusion through real-time interface personalization.",
      tech: [
        "Google Cloud",
        "Vertex AI",
        "Firebase",
        "Firestore",
        "VertexAi",
        "DialogFlow"
      ],
      img: adaptaiImg,
      link: "https://www.linkedin.com/posts/marco-aur%C3%A9lio-souza-arriate-667a25355_1%C2%BA-lugar-no-hackathon-da-google-utilizando-activity-7386055273896906753-O9Jh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFibT28BJCep6f6uYinHm5oAKnhdkJwh8QM",
      details: [
        "Built entirely within Google Cloud’s ecosystem for scalability.",
        "Vertex AI and TensorFlow used for model training and interface adaptation.",
        "Firestore manages real-time user data and interaction preferences.",
        "Integrates OpenAI API for natural language understanding and user feedback.",
        "Ongoing production development focused on accessibility and UX testing.",
      ],
    },
    {
      title: "Coffe Conect",
      desc: "CoffeeConnect is an IoT-based system designed to monitor employee break times in real time within corporate environments. Built with ESP32, MQTT, and Node-RED, the solution tracks when users start or end a break through a physical button, visualizes the data on a live dashboard, and provides clear visual feedback using an RGB LED.",
      tech: [
       "Node-RED",
        "MQTT",
        "IoT",
        "Sensors"
      ],
      img: coffeConnectImg,
      link: "https://github.com/Arriatea/GS-2-Edge_Computing",
      details: [
        "ESP32 publishes real-time break state updates to an MQTT broker.",
        "Physical button works in toggle mode to start or end a break.",
        "RGB LED provides immediate visual feedback for active and break states.",
        "Node-RED processes MQTT messages and displays live counters and charts.",
        "Dashboard updates instantly with the number of people currently on break.",
        "System includes safeguards to prevent invalid states, such as negative counts.",
        "Entire flow was simulated and tested using Wokwi before deployment."
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 bg-black/95 text-white relative z-10"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-400 bg-clip-text text-transparent animate-gradient">
        Projects
      </h2>

      <p className="text-gray-400 mb-12 max-w-xl text-center">
        Some of my main projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white/5 border border-purple-600/30 backdrop-blur-md hover:border-purple-500 transition-all duration-300 overflow-hidden"
          >
            <img
              src={proj.img}
              className="w-full h-48 object-cover border-b border-purple-500/20"
            />

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {proj.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-sm px-3 py-1 bg-purple-500/10 border border-purple-400/20 rounded-full text-purple-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-semibold mb-2 text-purple-300">
                {proj.title}
              </h3>

              <p className="text-gray-400 mb-4">{proj.desc}</p>

              {proj.details && (
                <ul className="text-gray-400 mb-4 list-disc list-inside space-y-1 text-sm">
                  {proj.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}

              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>

      <a
        href="https://github.com/Arriatea"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-14 px-6 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full text-white font-medium hover:opacity-90 transition"
      >
        Check my GitHub →
      </a>
    </section>
  );
};
