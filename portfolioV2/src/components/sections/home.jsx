import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { RevealOnScroll } from "../RevealOnScroll";
import animeImage from "../../../public/anime.jpg";

export const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Desenvolvedor de Software.",
      "Desenvolvedor Front-End.",
      "Desenvolvedor Back-End.",
    ],
    loop: true,
    typeSpeed: 35,
    deleteSpeed: 35,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 md:px-20 relative"
    >
      <RevealOnScroll>
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          {/* Lado esquerdo - Texto */}
          <div className="flex-1 flex flex-col gap-2 text-left md:text-center mt-8 sm:mt-16">
            {/* Ajuste de margem para mover o texto mais para cima */}
            <h4 className="font-mono text-xl text-gray-400 mt-0 sm:mt-0">
              BEM-VINDO AO MEU MUNDO
            </h4>
            <h1 className="font-mono text-5xl md:text-6xl text-white">
              Olá, me chamo <br />
              <span className="font-mono font-bold text-designColor capitalize">
                Eduardo Caetano
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              <span className="text-red-600">{text}</span>
              <Cursor
                cursorBlinking={false}
                cursorStyle="|"
                cursorColor="#dc2626"
              />
            </h2>
            <p className="text-base font-bodyFont leading-6 tracking-wide text-gray-300">
              Desenvolvedor de Software apaixonado por tecnologia e inovação.
              Transformo ideias em soluções digitais inteligentes, com foco em
              performance, usabilidade e qualidade de código. Atuo desde o
              planejamento até a entrega final, sempre buscando criar
              experiências que realmente façam a diferença.
            </p>

            {/* Botões */}
            <div className="flex space-x-4 mt-6 flex-wrap justify-center">
              <a
                href="#projects"
                className="bg-gray-600 text-white py-3 px-6 rounded font-medium transition-all hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Ver projetos
              </a>
              <a
                href="#contact"
                className="border border-gray-400/50 text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-gray-500/10"
              >
                Entrar em contato
              </a>
            </div>
          </div>

          {/* Lado direito - Imagem com quadro redondo */}
          <div className="flex-1 flex justify-center md:justify-center">
            <div className="relative w-[300px] h-[300px] sm:w-[370px] sm:h-[370px] md:w-[500px] md:h-[500px] p-2 border-8 border-gray-700 rounded-full shadow-xl overflow-hidden">
              <img
                src={animeImage}
                alt="Eduardo Caetano"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
