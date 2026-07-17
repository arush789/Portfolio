"use client";
import FadeContent from "@/components/Animations/FadeContent";
import { useState } from "react";
import { FaGithub, FaEnvelope, FaSpinner, FaCheckCircle, FaExclamationCircle, FaArrowRight } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey || accessKey === "your_access_key_here") {
      setStatus("error");
      setErrorMessage("Web3Forms Access Key is missing. Please set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY inside your .env.local file.");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: "Portfolio Contact Form",
          subject: `New Portfolio Message from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Failed to send message.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please check your network connection and try again.");
    }
  };

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center px-6 py-20 bg-background overflow-hidden select-none">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

      <FadeContent
        blur={true}
        duration={600}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="max-w-5xl w-full bg-white/80 dark:bg-neutral-900/40 backdrop-blur-md border border-slate-200/60 dark:border-neutral-800/80 rounded-[36px] p-8 md:p-12 shadow-2xl relative">
          
          {status === "success" ? (
            <div className="text-center py-12 flex flex-col items-center">
              <FaCheckCircle className="text-emerald-500 text-6xl mb-6 animate-bounce" />
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
                Message Sent!
              </h2>
              <p className="text-slate-650 dark:text-neutral-355 max-w-sm leading-relaxed mb-8 font-medium">
                Thank you for reaching out. I have received your email and will get back to you shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-md hover:from-blue-500 hover:to-cyan-400 cursor-pointer active:scale-95 transition-all duration-300"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-stretch">
              
              {/* Left Column: Direct Info */}
              <div className="md:col-span-5 flex flex-col justify-between space-y-8 pr-0 md:pr-6 border-b md:border-b-0 md:border-r border-slate-200/50 dark:border-neutral-800/60 pb-8 md:pb-0">
                <div className="space-y-4">
                  <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    Let&apos;s build <br className="hidden md:inline" /> something great.
                  </h2>
                  <p className="text-slate-600 dark:text-neutral-400 font-medium leading-relaxed">
                    Have an idea, need a developer, or just want to chat? Drop me a message and I&apos;ll get back to you within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-col space-y-1">
                    <span className="text-xs font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-widest">
                      Email Me Directly
                    </span>
                    <a 
                      href="mailto:arushkewalramani45@gmail.com"
                      className="text-base font-semibold text-slate-800 dark:text-neutral-250 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      arushkewalramani45@gmail.com
                    </a>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <span className="text-xs font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-widest">
                      Follow & Connect
                    </span>
                    <div className="flex gap-3">
                      <a
                        href="https://github.com/arush789"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub Profile"
                        className="p-3 rounded-xl border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-neutral-300 bg-slate-50/50 dark:bg-neutral-950/30 hover:bg-slate-100 dark:hover:bg-neutral-800 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300"
                      >
                        <FaGithub size={18} />
                      </a>
                      <a
                        href="mailto:arushkewalramani45@gmail.com"
                        title="Send Email Directly"
                        className="p-3 rounded-xl border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-neutral-300 bg-slate-50/50 dark:bg-neutral-950/30 hover:bg-slate-100 dark:hover:bg-neutral-800 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300"
                      >
                        <FaEnvelope size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="md:col-span-7 flex flex-col justify-center">
                {status === "error" && (
                  <div className="mb-6 p-4 rounded-2xl border border-red-500/20 bg-red-500/5 text-red-500 dark:text-red-400 flex items-start gap-3 animate-fade-in">
                    <FaExclamationCircle className="text-lg shrink-0 mt-0.5" />
                    <div className="text-xs font-semibold leading-relaxed">
                      {errorMessage}
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-800 dark:text-neutral-300 uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full p-3.5 border border-slate-200 dark:border-neutral-800 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 dark:focus:border-blue-400 bg-white/50 dark:bg-neutral-950/60 text-slate-900 dark:text-white transition-all duration-300 shadow-2xs placeholder:text-slate-400 dark:placeholder:text-neutral-600 font-medium text-sm"
                        required
                        disabled={status === "loading"}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-800 dark:text-neutral-300 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full p-3.5 border border-slate-200 dark:border-neutral-800 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 dark:focus:border-blue-400 bg-white/50 dark:bg-neutral-950/60 text-slate-900 dark:text-white transition-all duration-300 shadow-2xs placeholder:text-slate-400 dark:placeholder:text-neutral-600 font-medium text-sm"
                        required
                        disabled={status === "loading"}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 dark:text-neutral-300 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      className="w-full p-3.5 border border-slate-200 dark:border-neutral-800 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 dark:focus:border-blue-400 bg-white/50 dark:bg-neutral-950/60 text-slate-900 dark:text-white transition-all duration-300 shadow-2xs placeholder:text-slate-400 dark:placeholder:text-neutral-600 font-medium text-sm"
                      rows={4}
                      required
                      disabled={status === "loading"}
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full relative flex items-center justify-center p-px font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 cursor-pointer rounded-xl shadow-md transition-all duration-300 hover:scale-101 active:scale-99 disabled:opacity-75 disabled:cursor-not-allowed hover:shadow-lg"
                    >
                      <span className="relative z-10 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl">
                        {status === "loading" ? (
                          <>
                            <FaSpinner className="animate-spin text-sm" />
                            <span className="text-sm">Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <span className="text-sm">Send Message</span>
                            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </form>
              </div>

            </div>
          )}

        </div>
      </FadeContent>
    </div>
  );
};

export default ContactPage;
