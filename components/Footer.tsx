import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer
        className={`mt-40 w-full text-white py-16 transition-all bg-gradient-to-r from-[#0D0F18] via-[#1E201E] to-[#181B1E]`}
      >
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold">Arush</h2>
            <p className="mt-2 text-gray-400">
              Full-Stack Developer specializing in web and mobile applications.
            </p>
          </div>

          <div className="mt-6 lg:mt-0 lg:w-1/3 flex flex-col space-y-3">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Home
            </a>
            {/* <a href="#" className="text-gray-300 hover:text-white transition">
              Projects
            </a> */}
            <a
              href="/contact"
              className="text-gray-300 hover:text-white transition"
            >
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-6 lg:mt-0 lg:w-1/3 flex space-x-6">
            <a
              href="https://github.com/arush789"
              className="text-gray-300 hover:text-white transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.instagram.com/arushkewalramani"
              className="text-gray-300 hover:text-white transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://x.com/EvilZeus69"
              className="text-gray-300 hover:text-white transition"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-10 text-gray-500">
          © {new Date().getFullYear()} Arush. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
