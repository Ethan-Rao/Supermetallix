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

const applications = [
  {
    icon: <Drill className="w-8 h-8 text-blue-400" />,
    title: "Cutting Tools & Lathe Inserts",
    description:
      "Tetride® composite inserts may dramatically extend tool life in precision machining, hard turning, and oil & gas applications.",
    img: "/images/Cutting-Tools.jpg",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-cyan-400" />,
    title: "Abrasive & Polishing Media",
    description:
      "Superhard Tetride® particles enable precision polishing and grinding of ceramics, composites, and hardened metals where conventional abrasives fall short.",
    img: "/images/8B.jpg",
  },
  {
    icon: <Layers className="w-8 h-8 text-amber-400" />,
    title: "Wear-Resistant Surfaces",
    description:
      "High-wear surfaces for industrial components — extending the service life of bearings, dies, and wear surfaces in demanding environments.",
    img: "/images/Wear-Resistance.jpg",
  },
  {
    icon: <Shield className="w-8 h-8 text-purple-400" />,
    title: "Radiation Shielding",
    description:
      "Refractory formulations containing natural abundance (or enriched \u00b9\u2070B) providing phenomenal neutron attenuation as a contender for next-generation shielding applications.",
    img: "/images/Neutron.jpg",
  },
  {
    icon: <Atom className="w-8 h-8 text-green-400" />,
    title: "Ultra-High Temperature Composites",
    description:
      "Densification of ultra-high temperature materials has been difficult due to the inherent stability of the composition. Tetride® as an additive may lower the necessary processing temperature.",
    img: "/images/UHTC.jpg",
  },
  {
    icon: <Wrench className="w-8 h-8 text-red-400" />,
    title: "3D Printing & Cladding",
    description:
      "Proprietary binder formulations allow for 3D metal printing (SLS) and laser cladding of the material to produce complex geometries and wear-resistant surfaces.",
    img: "/images/powders3.jpg",
  },
];

const properties = [
  { label: "Form Factor",          value: "Powders and Blanks (Billet Composites)",              highlight: false },
  { label: "Hardness",             value: "Particles: > 44 GPa  |  Composites: > 17 GPa",       highlight: true  },
  { label: "Melting Point",        value: "> 2200 \u00b0C \u2014 Refractory Material",           highlight: false },
  { label: "Oxidation Resistance", value: "450 \u00b0C in air, formulation dependent",           highlight: false },
  { label: "Machinability",        value: "Electrical Discharge Machining and Surface Grinding", highlight: false },
  { label: "Scalability",          value: "Tonnage production capable",                          highlight: false },
];

export default function ProductsPage() {
  return (
    <div className="bg-[#050810]">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[340px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Products-BG.jpg"
            alt="Tetride powder particles"
            fill
            className="object-cover"
            style={{ objectPosition: "center 50%" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/70 via-[#050810]/60 to-[#050810]" />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto text-center px-4 pt-24 pb-16"
        >
          <motion.p variants={fadeUp} className="section-label mb-4">
            Products
          </motion.p>
          <motion.h1 variants={fadeUp} className="section-heading text-5xl lg:text-6xl mb-6">
            Next-Generation Superhard Materials
            <span className="block gradient-text">Tetride&reg;</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="section-subheading mx-auto text-gray-300">
            Novel metal boride formulations with hardness approaching diamond. Patented. Scalable.
            Ready for industrial deployment.
          </motion.p>
        </motion.div>
      </section>

      {/* ─── PRODUCTS / APPLICATIONS ─── */}
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
              Products
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-heading">
              Where Tetride&reg; Excels
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
                <div className="relative h-36 -mx-6 -mt-6 mb-5 overflow-hidden">
                  <Image src={app.img} alt={app.title} fill className="object-cover" />
                </div>
                <div className="mb-3 p-2.5 rounded-lg bg-white/5 w-fit">{app.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{app.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{app.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SPECS + COMPARISON ─── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">

            {/* Left — Hardness Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="text-center mb-6 w-full">
                <p className="section-label mb-2">Materials Comparison</p>
                <h2 className="text-2xl font-bold text-white">
                  Tetride&reg; vs. Industry&rsquo;s Best
                </h2>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white p-6 shadow-lg w-full">
                {/* TODO: Replace with updated comparison chart image when provided */}
                <Image
                  src="/images/Hardness-Comparison.png"
                  alt="Tetride® vs. industry hardness comparison"
                  width={900}
                  height={500}
                  className="w-full h-auto"
                />
                <p className="text-gray-500 text-sm text-center mt-3">
                  Tetride&reg; Composites and Formulations compared against conventional
                  cutting tool materials and superhard synthetics.
                </p>
              </div>
            </motion.div>

            {/* Right — Key Properties Table */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col items-center"
            >
              <motion.div variants={fadeUp} className="text-center mb-6 w-full">
                <p className="section-label mb-2">Specifications</p>
                <h2 className="text-2xl font-bold text-white">Key Properties</h2>
              </motion.div>
              <motion.div variants={fadeUp} className="rounded-2xl border border-[#1f2937] overflow-hidden w-full">
                <div className="bg-[#111827] px-6 py-4 border-b border-[#1f2937]">
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest text-center">
                    Tetride&reg; Material Data
                  </h4>
                </div>
                <div className="divide-y divide-[#1f2937]">
                  {properties.map((prop) => (
                    <div
                      key={prop.label}
                      className="flex items-center justify-between px-6 py-4 bg-[#0d1117] hover:bg-[#111827] transition-colors"
                    >
                      <span className="text-gray-400 text-sm">{prop.label}</span>
                      <span className={`font-semibold text-sm text-right max-w-[55%] ${
                        prop.highlight ? "gradient-text" : "text-white"
                      }`}>
                        {prop.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

          </div>
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
              Inquire About Tetride&reg;
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 mb-8">
              If anything above has piqued your interest — we&rsquo;d like to hear from you!
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
