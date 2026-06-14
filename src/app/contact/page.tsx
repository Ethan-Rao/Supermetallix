"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, MapPin, CheckCircle, Send } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

type FormData = {
  name: string;
  email: string;
  company: string;
  purpose: string;
  message: string;
};

function ContactForm() {
  const searchParams = useSearchParams();
  const defaultPurpose = searchParams.get("purpose") === "investment" ? "investment" : "general";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    defaultValues: { purpose: defaultPurpose },
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (data: FormData) => {
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSuccess(true);
      reset();
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <div className="bg-[#050810] min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="section-label mb-4">
            Contact
          </motion.p>
          <motion.h1 variants={fadeUp} className="section-heading text-5xl lg:text-6xl mb-5">
            Get in Touch
          </motion.h1>
          <motion.p variants={fadeUp} className="section-subheading mx-auto text-gray-300">
            Interested in licensing, partnership, or investment? We&rsquo;d love to hear from you.
          </motion.p>
        </motion.div>
      </section>

      {/* ─── SPLIT LAYOUT ─── */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">
          {/* Left panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-2 space-y-8"
          >
            {/* Logo */}
            <motion.div variants={fadeUp}>
              <Image
                src="/images/SuperMetalix-Logo-Main-white.png"
                alt="SuperMetallix"
                width={160}
                height={50}
                className="h-8 w-auto mb-6"
              />
              <p className="text-gray-400 leading-relaxed">
                Interested in licensing, partnership, or investment in Tetride™ superhard materials?
                We&rsquo;re ready to talk.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-0.5">Email</p>
                  <a
                    href="mailto:info@supermetallix.com"
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    info@supermetallix.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-0.5">Location</p>
                  <p className="text-gray-400 text-sm">Los Angeles, CA</p>
                </div>
              </div>
            </motion.div>

            {/* Info cards */}
            <motion.div variants={fadeUp} className="space-y-4">
              {[
                { title: "Investment Inquiry", desc: "Discuss Series A and strategic investment opportunities in Tetride™." },
                { title: "Licensing", desc: "License Tetride™ technology for your cutting tools, abrasives, or coatings application." },
                { title: "Partnership", desc: "Explore R&D collaboration, joint development, or supply agreements." },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl border border-[#1f2937] bg-[#111827]">
                  <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right panel — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-[#0d1117] border border-[#1f2937] rounded-2xl p-8">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 gap-4"
                >
                  <CheckCircle className="w-16 h-16 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">Message Sent</h3>
                  <p className="text-gray-400">
                    We&rsquo;ll be in touch shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 text-blue-400 hover:text-blue-300 text-sm underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        className="w-full bg-[#111827] border border-[#1f2937] focus:border-blue-500 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 text-sm outline-none transition-colors"
                        placeholder="Jane Smith"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                        })}
                        type="email"
                        className="w-full bg-[#111827] border border-[#1f2937] focus:border-blue-500 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 text-sm outline-none transition-colors"
                        placeholder="jane@fund.vc"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      {...register("company")}
                      className="w-full bg-[#111827] border border-[#1f2937] focus:border-blue-500 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 text-sm outline-none transition-colors"
                      placeholder="Acme Ventures"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Purpose <span className="text-red-400">*</span>
                    </label>
                    <select
                      {...register("purpose", { required: "Please select a purpose" })}
                      className="w-full bg-[#111827] border border-[#1f2937] focus:border-blue-500 rounded-lg px-4 py-2.5 text-white text-sm outline-none transition-colors"
                    >
                      <option value="investment">Investment Inquiry</option>
                      <option value="licensing">Licensing</option>
                      <option value="partnership">Partnership</option>
                      <option value="general">General</option>
                    </select>
                    {errors.purpose && (
                      <p className="text-red-400 text-xs mt-1">{errors.purpose.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      {...register("message", { required: "Message is required" })}
                      rows={5}
                      className="w-full bg-[#111827] border border-[#1f2937] focus:border-blue-500 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 text-sm outline-none transition-colors resize-none"
                      placeholder="Tell us about your interest in SuperMetallix..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin border-2 border-white/30 border-t-white rounded-full w-4 h-4" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="bg-[#050810] min-h-screen" />}>
      <ContactForm />
    </Suspense>
  );
}
