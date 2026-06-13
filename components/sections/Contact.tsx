"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  ChevronDown,
  Check,
  MapPin,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { Github, Linkedin } from "lucide-react";
import { toast } from "react-hot-toast";
import SectionLabel from "@/components/ui/SectionLabel";
import ScheduleMeeting from "@/components/ScheduleMeeting";
import { sectionVariants, viewportConfig } from "@/lib/motion";

const quickPrompts = [
  "I need a full-stack engineer for my SaaS",
  "I want to add AI to my product",
  "Let's talk architecture / technical consulting",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const setSubject = (subject: string) => {
    setFormData((prev) => ({ ...prev, subject }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to send");
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3.5 pr-11 bg-[#161616] border rounded-xl text-white placeholder-[#6b6b6b] focus:outline-none transition-colors ${focusedField === field
      ? "border-[#C9F31D]"
      : "border-[#2a2a2a] focus:border-[#C9F31D]/50"
    }`;

  return (
    <motion.section
      id="contact"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="section-padding bg-[#0a0a0a]"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — info */}
          <div className="lg:col-span-5">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mt-2 mb-5">
              Got a product to{" "}
              <span className="text-[#C9F31D]">build?</span>
            </h2>
            <p className="text-[#a1a1a1] text-sm md:text-base leading-relaxed mb-4 max-w-md">
              I&apos;m available for select freelance projects, AI product
              consulting, and founding engineer conversations.
            </p>

            <ul className="space-y-4 mb-6">
              {quickPrompts.map((prompt) => (
                <li key={prompt}>
                  <button
                    type="button"
                    onClick={() => setSubject(prompt)}
                    className="flex items-start gap-3 text-left group w-full"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#C9F31D] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#0a0a0a]" strokeWidth={3} />
                    </span>
                    <span className="text-[#a1a1a1] text-sm group-hover:text-white transition-colors">
                      {prompt}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setScheduleOpen(true)}
              className="w-full p-5 card-glow rounded-xl hover:border-[#C9F31D]/40 transition-all text-left mb-4 group"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-[#C9F31D]/10 flex items-center justify-center text-[#C9F31D] group-hover:bg-[#C9F31D]/20 transition-colors">
                  <Calendar className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-[#C9F31D] font-mono text-xs uppercase tracking-wider mb-1">
                    Book a call
                  </p>
                  <p className="text-white font-display font-bold">
                    Schedule a 15–30 min discussion
                  </p>
                  <p className="text-[#6b6b6b] text-sm mt-0.5">
                    calendly.com/uzairullah397
                  </p>
                </div>
              </div>
            </button>

            <div className="flex items-center lg:flex-row flex-col gap-6">
              <a
                href="mailto:uzairullah397@gmail.com"
                className="flex items-center gap-3 text-[#a1a1a1] hover:text-[#C9F31D] transition-colors text-sm"
              >
                <Mail className="w-4 h-4 shrink-0" />
                uzairullah397@gmail.com
              </a>
              <p className="flex items-center gap-3 text-[#a1a1a1] text-sm">
                <MapPin className="w-4 h-4 shrink-0" />
                Islamabad, Pakistan
              </p>
            </div>


          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={inputClass("name")}
                      placeholder="Your name"
                    />
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b6b] pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={inputClass("email")}
                      placeholder="you@email.com"
                    />
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b6b] pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label className="block text-white text-sm font-medium mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={inputClass("subject")}
                      placeholder="What do you need?"
                    />
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b6b6b] pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  className={`${inputClass("message")} resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="flex items-center justify-between lg:flex-row flex-col gap-6">

                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C9F31D] text-[#0a0a0a] font-semibold rounded-xl hover:brightness-110 transition-all disabled:opacity-60"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="flex flex-wrap gap-3">
                  {[
                    {
                      icon: Linkedin,
                      link: "https://www.linkedin.com/in/uzairlab",
                      label: "LinkedIn",
                    },
                    {
                      icon: Github,
                      link: "https://github.com/theuzairlab",
                      label: "GitHub",
                    },
                  ].map(({ icon: Icon, link, label }) => (
                    <a
                      key={label}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-3 card-glow rounded-xl text-[#a1a1a1] hover:text-[#C9F31D] transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                  <a
                    href="https://www.upwork.com/freelancers/~018fd5ca5b2fb70adc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 card-glow rounded-xl text-[#a1a1a1] hover:text-[#C9F31D] transition-all text-sm font-medium"
                  >
                    Upwork →
                  </a>
                </div>
              </div>


            </form>
          </div>
        </div>
      </div>

      <ScheduleMeeting
        isOpen={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
      />
    </motion.section>
  );
}
