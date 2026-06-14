"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Drill, Sparkles, Shield, Atom, Layers, Wrench } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const properties = [
  { label: "Hardness (Vickers)", value: "~100 GPa", highlight: true },
  { label: "Melting Point", value: "Very high (refractory)", highlight: false },
  { label: "Cost vs. Diamond", value: "Significantly lower", highlight: false },
  { label: "Scalability", value: "Industrial synthesis ready", highlight: false },
  { label: "Origin", value: "UCLA Kaner Lab patented", highlight: false },
  { label: "Form Factor", value: "Powder, composite, coating", highlight: false },
];

const applications = [
  {
    icon: <Drill className="w-8 h-8 text-blue-400" />,
    title: "Cutting Tools & Drill Bits",
    description:
      "Tetride™ hard inserts and coatings dramatically extend tool life in oil & gas drilling, precision machining, and high-speed metal cutting applications.",
    img: "/images/cutting-wheel-and-drill-bits3.png",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-cyan-400" />,
    title: "Abrasive & Polishing Media",
    description:
      "Superhard Tetride™ particles enable precision polishing and grinding of ceramics, composites, and hardened metals where conventional abrasives fall short.",
    img: "/images/powders2.jpg",
  },
  {
    icon: <Layers className="w-8 h-8 text-amber-400" />,
    title: "Wear-Resistant Coatings",
    description:
      "Thin-film and thick coatings for industrial components — extending service life of bearings, dies, and high-wear surfaces in demanding environments.",
    img: "/images/detail.jpg",
  },
  {
    icon: <Shield className="w-8 h-8 text-purple-400" />,
    title: "Radiation Shielding",
    description:
      "Metal boride crystal structures offer favorable neutron absorption properties, making Tetride™ a candidate for next-generation shielding applications.",
    img: null,
  },
  {
    icon: <Atom className="w-8 h-8 text-green-400" />,
    title: "Scratch-Resistant Surfaces",
    description:
      "Consumer electronics, optical components, and high-value substrates benefit from Tetride™ surface treatments that resist scratching at the atomic level.",
    img: null,
  },
  {
    icon: <Wrench className="w-8 h-8 text-red-400" />,
    title: "Composites & Structural Materials",
    description:
      "Tetride™ as a reinforcing phase in metal and ceramic matrix composites — improving hardness, strength, and thermal stability of structural components.",
    img: null,
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-[#050810]">
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/diamond-hero.jpg"
            alt="Diamond material"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/60 via-[#050810]/60 to-[#050810]" />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="section-label mb-4">
            Products
          </motion.p>
          <motion.h1 variants={fadeUp} className="section-heading text-5xl lg:text-6xl mb-6">
            Tetride™ — Next-Generation Superhard Materials
          </motion.h1>
          <motion.p variants={fadeUp} className="section-subheading mx-auto text-gray-300">
            Novel metal boride formulations with hardness approaching diamond. Patented. Scalable.
            Ready for industrial deployment.
          </motion.p>
        </motion.div>
      </section>

      {/* ─── WHAT IS TETRIDE ─── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUp} className="section-label mb-4">
              The Material
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-white mb-6">
              What is Tetride™?
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Tetride™ is SuperMetallix&rsquo;s proprietary line of superhard metal boride
                formulations, developed through 15+ years of research at UCLA. The material achieves
                Vickers hardness approaching 100 GPa — comparable to diamond — while being
                synthesized through scalable, cost-effective processes.
              </p>
              <p>
                Unlike natural diamond or CVD synthetic diamond, Tetride™ can be manufactured at
                scale, in complex geometries, and at a fraction of the cost — making superhard
                material performance economically viable for mass industrial applications.
              </p>
            </motion.div>
          </motion.div>

          {/* Properties table */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="rounded-2xl border border-[#1f2937] overflow-hidden">
              <div className="bg-[#111827] px-6 py-4 border-b border-[#1f2937]">
                <h3 className="text-white font-bold">Key Properties</h3>
              </div>
              <div className="divide-y divide-[#1f2937]">
                {properties.map((prop) => (
                  <div
                    key={prop.label}
                    className="flex items-center justify-between px-6 py-4 bg-[#0d1117] hover:bg-[#111827] transition-colors"
                  >
                    <span className="text-gray-400 text-sm">{prop.label}</span>
                    <span
                      className={`font-semibold text-sm ${
                        prop.highlight ? "gradient-text text-lg" : "text-white"
                      }`}
                    >
                      {prop.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── APPLICATIONS ─── */}
      <section className="py-20 px-4 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} className="section-label mb-3">
              Applications
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-heading">
              Where Tetride™ Excels
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {applications.map((app) => (
              <motion.div key={app.title} variants={fadeUp} className="card overflow-hidden">
                {app.img && (
                  <div className="relative h-36 -mx-6 -mt-6 mb-5 overflow-hidden">
                    <Image src={app.img} alt={app.title} fill className="object-cover opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111827]" />
                  </div>
                )}
                <div className="mb-3 p-2.5 rounded-lg bg-white/5 w-fit">{app.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{app.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{app.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── HARDNESS COMPARISON ─── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10"
          >
            <motion.p variants={fadeUp} className="section-label mb-3">
              Performance Data
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-heading">
              Hardness Comparison Chart
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-[#1f2937] p-6 bg-[#111827]"
          >
            <Image
              src="/images/hardness-chart.png"
              alt="Hardness comparison"
              width={900}
              height={500}
              className="w-full h-auto"
            />
            <p className="text-gray-500 text-sm text-center mt-3">
              Tetride™ vs. diamond, cubic boron nitride, tungsten carbide, and conventional tool
              steels — Vickers hardness scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 px-4 bg-[#0d1117]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUp} className="section-label mb-4">
              Get Started
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-5">
              Inquire About Tetride™
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 mb-8">
              Whether you&rsquo;re exploring licensing, a material supply agreement, or an investment
              partnership — we&rsquo;d like to hear from you.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
