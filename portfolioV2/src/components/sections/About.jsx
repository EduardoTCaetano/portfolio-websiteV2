import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Angullar",
    "React",
    "TailwindCSS",
  ];

  const backendSkills = ["C#", ".Net Core", "Node.JS", "MySQL", "Docker"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-white mb-8 text-center">
            {" "}
            Sobre mim
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Desenvolvedor apaixonado com expertise na construção de aplicações
              web escaláveis e na criação de soluções inovadoras.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                      hover:bg-blue-500/20 hover:text-white 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] 
                      transition cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                      hover:bg-blue-500/20 hover:text-white 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] 
                      transition cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Educação </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Técnico em Desenvolvimento de Sistemas </strong> -
                  FATEC Taquaritinga - SP (2023 -2024)
                </li>
                <li>
                  <strong> Técnico em Desenvolvimento de Sistemas </strong> -
                  Escola Técnica Estadual Doutor Adail Nunes da Silva
                  (2020-2022)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                {" "}
                💼 Experiência Profissional{" "}
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    <li>
                      {" "}
                      <strong>
                        Técnico de Apoio ao Usuário Informática (04/2025   -
                        Atualmente){" "}
                      </strong>
                    </li>
                  </h4>
                  <p>Fundação Padre Albino.</p>
                  <h4 className="font-semibold">
                    <li>
                      {" "}
                      <strong>Dev Bootcamp (04/2024 - 11/2024) </strong>
                    </li>
                  </h4>
                  <p>Programmers Beyond IT.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
