"use client";
import FadeContent from "@/components/FadeContent";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=arushkewalramani45@gmail.com&su=Contact Form Submission&body=Name: ${encodeURIComponent(
      formData.name
    )}%0AEmail: ${encodeURIComponent(
      formData.email
    )}%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <div className=" mt-42 mb-20 flex items-center justify-center px-6 bg-background">
      <FadeContent
        blur={true}
        duration={500}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="max-w-lg w-full bg-background shadow-xl rounded-3xl p-10 transition-all duration-300 border border-border">
          <h2 className="text-4xl font-extrabold text-center text-text">
            Get in Touch
          </h2>
          <p className="text-center text-muted mt-3">
            Feel free to reach out via email or check my GitHub.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
              <label className="block text-md font-medium text-text">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-4 focus:ring-primary bg-background text-text"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-md font-medium text-text">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-4 focus:ring-primary bg-background text-text"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-md font-medium text-text">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-4 focus:ring-primary bg-background text-text"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="relative group w-full">
              <button
                type="submit"
                className="w-full relative inline-block p-px font-semibold leading-6 text-white bg-button cursor-pointer rounded-2xl shadow transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative z-10 block px-6 py-3 rounded-2xl bg-button">
                  <div className="relative z-10 flex items-center justify-center space-x-2">
                    <span className="transition-all  duration-500 text-white">
                      Send Message
                    </span>
                  </div>
                </span>
              </button>
            </div>
          </form>

          {/* Social Links */}
          <div className="mt-6 flex justify-center gap-6">
            <a
              href="https://github.com/arush789"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-primary transition-all duration-200 transform hover:scale-110"
            >
              <FaGithub size={35} />
            </a>
          </div>
        </div>
      </FadeContent>
    </div>
  );
};

export default ContactPage;
