"use client";
import { motion } from "framer-motion";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiPostgresql } from "react-icons/si";

const services = [
  {
    title: "Web Development",
    description:
      "I specialize in building modern, scalable, and high-performance web applications using React, Next.js, and Node.js. From interactive UI to powerful backend integration, I ensure seamless digital experiences.",
    icon: <FaReact className="service-icon text-primary" />,
  },
  {
    title: "Mobile App Development",
    description:
      "Crafting high-quality mobile applications with React Native, delivering smooth, responsive, and engaging experiences on both iOS and Android platforms.",
    icon: <FaReact className="service-icon text-secondary" />,
  },
  {
    title: "Backend Development",
    description:
      "Developing secure, scalable, and efficient APIs using Node.js and Express.js. I integrate with SQL & NoSQL databases like PostgreSQL and MongoDB for seamless data management.",
    icon: <FaNodeJs className="service-icon text-accent" />,
  },
  {
    title: "Database Management",
    description:
      "Ensuring efficient data storage and retrieval with SQL & NoSQL databases. I specialize in optimizing database performance, designing schemas, and securing data for scalable applications.",
    icon: <SiPostgresql className="service-icon text-muted" />,
  },
  {
    title: "Full-Stack Solutions",
    description:
      "Handling both frontend and backend seamlessly. I architect full-stack applications using Next.js, React, Node.js, and databases to provide complete end-to-end solutions.",
    icon: <SiNextdotjs className="service-icon text-primary" />,
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing web and mobile applications for speed, efficiency, and smooth user experience. I analyze performance bottlenecks and implement best practices for superior performance.",
    icon: <SiExpress className="service-icon text-secondary" />,
  },
];

const WhatIdo = () => {
  return (
    <div className="py-16 overflow-hidden">
      {" "}
      <motion.h2
        className="text-5xl font-bold text-center mb-12 "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        What I Do
      </motion.h2>
      <div className="flex flex-col w-full max-w-6xl mx-auto gap-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="w-full max-w-full p-6 rounded-lg "
            initial={{
              opacity: 0,
              translateX: index % 2 === 0 ? "-50%" : "50%",
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              translateX: "0%",
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 text-5xl">
              {service.icon}
              <motion.h3 className="text-3xl font-semibold text-text">
                {service.title}
              </motion.h3>
            </div>
            <p className="text-muted text-lg mt-4 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatIdo;
