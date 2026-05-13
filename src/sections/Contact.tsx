"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="glass rounded-[2rem] md:rounded-[3rem] border border-white/5 overflow-hidden p-6 md:p-16 relative">
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-[80px] md:blur-[100px]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-primary font-medium tracking-wider uppercase mb-2 text-[10px] md:text-sm"
              >
                Get In Touch
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-6xl font-bold font-display mb-6 md:mb-8"
              >
                Let's Build Something <br /> <span className="text-primary">Extraordinary</span>
              </motion.h2>
              
              <p className="text-base md:text-lg text-foreground/60 mb-8 md:mb-12 max-w-md">
                Have a project in mind or just want to chat? Feel free to reach out. I'm always open to new opportunities and collaborations.
              </p>
              
              <div className="space-y-4 md:space-y-6">
                <a href="mailto:hello@example.com" className="flex items-center gap-4 group">
                  <div className="p-3 md:p-4 glass rounded-2xl group-hover:bg-primary transition-all shrink-0">
                    <Mail className="group-hover:text-white transition-colors" size={20} />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] md:text-sm text-foreground/40">Email me at</p>
                    <p className="text-lg md:text-xl font-bold truncate">hello@portfolio.com</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-4 group">
                  <div className="p-3 md:p-4 glass rounded-2xl group-hover:bg-primary transition-all shrink-0">
                    <MessageSquare className="group-hover:text-white transition-colors" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-sm text-foreground/40">Connect on LinkedIn</p>
                    <p className="text-lg md:text-xl font-bold flex items-center gap-1">Ritik Singh <ArrowUpRight size={18} /></p>
                  </div>
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 backdrop-blur-xl"
            >
              <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-medium ml-1">Name</label>
                    <input
                      type="text"
                      className="w-full px-5 py-3 md:px-6 md:py-4 glass border border-white/10 rounded-xl md:rounded-2xl focus:outline-none focus:border-primary/50 transition-all font-sans text-sm md:text-base outline-none"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-medium ml-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-5 py-3 md:px-6 md:py-4 glass border border-white/10 rounded-xl md:rounded-2xl focus:outline-none focus:border-primary/50 transition-all font-sans text-sm md:text-base outline-none"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-medium ml-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-5 py-3 md:px-6 md:py-4 glass border border-white/10 rounded-xl md:rounded-2xl focus:outline-none focus:border-primary/50 transition-all font-sans resize-none text-sm md:text-base outline-none"
                    placeholder="Tell me more..."
                  />
                </div>
                <button className="w-full py-4 md:py-5 bg-primary text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group">
                  Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
