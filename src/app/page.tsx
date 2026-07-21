"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, DollarSign, Globe, ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const PARTICLES = [
  { w: 2, h: 2, l: 15, t: 22, d: 6,   dur: 5.2 },
  { w: 3, h: 3, l: 33, t: 45, d: 1,   dur: 4.1 },
  { w: 2, h: 2, l: 58, t: 12, d: 3,   dur: 6.3 },
  { w: 1, h: 1, l: 74, t: 67, d: 0,   dur: 3.8 },
  { w: 3, h: 3, l: 82, t: 38, d: 2,   dur: 5.7 },
  { w: 2, h: 2, l: 7,  t: 80, d: 4,   dur: 4.5 },
  { w: 1, h: 1, l: 44, t: 55, d: 1.5, dur: 7.1 },
  { w: 2, h: 2, l: 91, t: 28, d: 2.5, dur: 3.4 },
  { w: 3, h: 3, l: 26, t: 72, d: 0.5, dur: 6.8 },
  { w: 1, h: 1, l: 63, t: 90, d: 3.5, dur: 4.9 },
];

const pillars = [
  {
    icon: <DollarSign className="w-8 h-8 text-cyan-400" />,
    title: "Scalability",
    description:
      "Tetride® and composites are synthesized at ambient pressure with industrial scalability. Hardnesses bridging the gap between hard materials and the synthetic superhard materials with the manufacturing ease of conventional tungsten carbide.",
  },
  {
    icon: <Globe className="w-8 h-8 text-amber-400" />,
    title: "Applicable Markets",
    description:
      "Tetride® seeks to bridge the gap between conventional tungsten carbide and the superhard synthetics, polycrystalline diamond and cubic boron nitride. The total addressable markets for cutting tools, superabrasives, wear resistant components, and radiation shielding exceeds $50B with CAGRs above ~5%.",
  },
];

const galleryItems = [
  { src: "/images/Tetride-Composites.jpg",  label: "Tetride® Composites" },
  { src: "/images/Black-Powders.png",        label: "Tetride® Powder" },
  { src: "/images/Cutting-Tools.jpg",        label: "Cutting Tool Inserts" },
  { src: "/images/Neutron-Shielding.jpg",    label: "Neutron Shielding" },
];

export default function LandingPage() {
  return (
    <div className="bg-[#050810]">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[78vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/christopher-burns-8KfCR12oeUM-unsplash.jpg"
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/60 via-[#050810]/40 to-[#050810]" />
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {PARTICLES.map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-400/20"
              style={{
                width: `${p.w}px`,
                height: `${p.h}px`,
                left: `${p.l}%`,
                top: `${p.t}%`,
                animation: `float ${p.dur}s ease-in-out infinite`,
                animationDelay: `${p.d}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 pt-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 font-display"
            >
              Commercializing the world&rsquo;s hardest metal &ndash;{" "}
              <span className="block gradient-text">Tetride&reg;</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              SuperMetalix has created a material hard enough to scratch diamond, the culmination of
              over 15 years of UCLA superhard materials research.
            </motion.p>

            <motion.div variants={fadeUp} className="flex justify-center">
              <Link href="/research" className="btn-primary text-base px-8 py-4">
                Explore the Research <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* YouTube embed */}
            <motion.div variants={fadeUp} className="mt-10 w-full max-w-2xl mx-auto">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/BA9n4pZrodo"
                  title="SuperMetalix — Tetride Superhard Materials"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>

          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-6 h-6 text-gray-500 animate-bounce" />
        </motion.div>
      </section>

      {/* ─── KEY STATS BAR ─── */}
      <section className="bg-[#0d1117] border-y border-[#1f2937] py-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-3 gap-0">
          <div className="text-center px-6 border-r border-[#1f2937]">
            <div className="text-4xl lg:text-5xl font-bold text-white font-display mb-1">15+</div>
            <div className="text-sm text-gray-400 uppercase tracking-widest">Years of Superhard Research</div>
          </div>
          <div className="text-center px-6 border-r border-[#1f2937]">
            <div className="text-2xl lg:text-3xl font-bold text-white font-display mb-1 leading-snug">
              Globally Patented
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-widest">Technology</div>
          </div>
          <div className="text-center px-6">
            <div className="text-4xl lg:text-5xl font-bold gradient-text font-display mb-1">$50B+</div>
            <div className="text-sm text-gray-400 uppercase tracking-widest">Global Markets</div>
          </div>
        </div>
      </section>

      {/* ─── MATERIALS GALLERY ─── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10"
          >
            <motion.p variants={fadeUp} className="section-label mb-3">The Material</motion.p>
            <motion.h2 variants={fadeUp} className="section-heading">Tetride&reg; in Every Form</motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3"
          >
            {galleryItems.map((item) => (
              <motion.div
                key={item.src}
                variants={fadeUp}
                className="relative aspect-square rounded-xl overflow-hidden group"
              >
                <Link href="/products" className="absolute inset-0 z-10" aria-label={item.label} />
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white text-xs font-semibold tracking-wider uppercase z-20">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TWO PILLARS ─── */}
      <section className="py-16 px-4 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} className="section-label mb-3">Why SuperMetalix</motion.p>
            <motion.h2 variants={fadeUp} className="section-heading">Two Pillars of Value</motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {pillars.map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="card group">
                <div className="mb-4 p-3 rounded-lg bg-white/5 w-fit">{p.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-gray-400 leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
