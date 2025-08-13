"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import bodzImage from "../../images/bodz.jpg";
import movieconImage from "../../images/movie-con.jpg";
import recitoreImage from "../../images/recitore.jpg";
import calculatorImage from "../../images/Calculator.png";
import guessTheWordImage from "../../images/Guess The Word.png";
import matchTheCardImage from "../../images/Matching Card.png";
import AnimatedContent from "../../components/Animations/AnimatedContent";

const Projectpage = () => {
  const { theme } = useTheme();

  const projects = [
    {
      id: 1,
      title: "Best Online Dealz",
      description: "An affiliate marketing website with exclusive deals.",
      image: bodzImage,
      demoLink: "https://best-online-dealz.vercel.app",
      codeLink: "https://github.com/yourusername/best-online-dealz",
      tags: ["React", "Javascript", "CSS", "Vite", "Affiliate Marketing"],
    },
    {
      id: 2,
      title: "Recitore",
      description: "Find and explore recipes with ease.",
      image: recitoreImage,
      demoLink: "https://recitore.vercel.app",
      codeLink: "https://github.com/yourusername/recitore",
      tags: [
        "React",
        "Javascript",
        "MongoDB",
        "Tailwindcss",
        "Next.js",
        "Recipe",
      ],
    },
    {
      id: 3,
      title: "Movie-Con",
      description: "A movie discovery platform with advanced search.",
      image: movieconImage,
      demoLink: "https://movie-con.vercel.app",
      codeLink: "https://github.com/yourusername/movie-con",
      tags: ["Javascript", "Vite", "Css", "TMDB API", "Movie Search"],
    },
    {
      id: 4,
      title: "Calculator",
      description: "A simple yet powerful calculator with modern UI.",
      image: calculatorImage,
      demoLink: "https://calculator-cyan-three.vercel.app/",
      codeLink: "https://github.com/yourusername/calculator",
      tags: ["JavaScript", "CSS", "HTML", "Math Functions"],
    },
    {
      id: 5,
      title: "Guess The Word",
      description: "A fun word-guessing game to test your vocabulary skills.",
      image: guessTheWordImage,
      demoLink: "https://guess-the-word-jade.vercel.app/",
      codeLink: "https://github.com/yourusername/guess-the-word",
      tags: ["JavaScript", "CSS", "HTML", "Game", "Word Challenge"],
    },
    {
      id: 6,
      title: "Match The Card",
      description:
        "A memory card-matching game with different difficulty levels.",
      image: matchTheCardImage,
      demoLink: "https://matching-card-chi.vercel.app/",
      codeLink: "https://github.com/yourusername/match-the-card",
      tags: ["JavaScript", "CSS", "HTML", "Game", "Memory Test"],
    },
  ];

  return (
    <div className="mt-32 px-6">
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        config={{ tension: 100, friction: 25 }}
        initialOpacity={0.1}
        animateOpacity
        scale={1.05}
        threshold={0.15}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-text">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div className="flex flex-col bg-text rounded-3xl" key={project.id}>
              <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                  <div className="mb-5">
                    <Image
                      alt="Project Image"
                      src={project.image}
                      width={300}
                      height={300}
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-medium tracking-tighter text-text lg:text-3xl">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-xl text-gray-500">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-6"></div>
                </div>
              </div>
              <div className="flex px-6 pb-8 sm:px-8">
                <Link
                  aria-describedby="tier-company"
                  href={project.demoLink}
                  className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </AnimatedContent>
    </div>
  );
};

export default Projectpage;
