"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Layers, Shield, Wrench, Zap, BookOpen, Gem } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const researchAreas = [
  {
    icon: <FlaskConical className="w-6 h-6 text-blue-400" />,
    title: "Superhard Borides",
    description:
      "Investigation of transition metal borides as viable alternatives to diamond and cubic boron nitride, with a focus on atomic-level hardness mechanisms.",
  },
  {
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    title: "Synthesis Methods",
    description:
      "Development of scalable, cost-effective synthetic routes for metal borides, whether superhard or ultrahigh temperature ceramics, enabling industrial-scale production.",
  },
  {
    icon: <Layers className="w-6 h-6 text-amber-400" />,
    title: "Composite Formulations",
    description:
      "Engineering Tetride® composite formulations that optimize hardness, toughness, and thermal stability for specific application requirements.",
  },
  {
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    title: "Radiation Shielding",
    description:
      "Exploring metal boride structures for radiation attenuation applications in nuclear and medical applications.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-green-400" />,
    title: "Wear Resistance",
    description:
      "Characterizing tribological properties and wear performance of Tetride® under industrial cutting and abrasion conditions.",
  },
  {
    icon: <Gem className="w-6 h-6 text-pink-400" />,
    title: "Abrasive Grit",
    description:
      "Developing large grain and particle sizes under ambient pressure to produce a lower-cost alternative superhard abrasive material.",
  },
];

export default function ResearchPage() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed background — stays in place as content scrolls (desktop only) */}
      <div className="hidden sm:block fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/images/WB4-Single-Crystals.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        {/* Dark vignette — darkens edges more than center */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050810]/80 via-[#050810]/50 to-[#050810]/80" />
      </div>
      {/* Mobile fallback plain background */}
      <div className="sm:hidden fixed inset-0 z-0 bg-[#050810]" aria-hidden="true" />

      {/* Scrolling content */}
      <div className="relative z-10">

        {/* ─── HERO ─── */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-[#050810]/90">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 max-w-4xl mx-auto text-center"
          >
            <motion.p variants={fadeUp} className="section-label mb-4">
              Research & Science
            </motion.p>
            <motion.h1 variants={fadeUp} className="section-heading text-5xl lg:text-6xl mb-6">
              The Science Behind Tetride&reg;
            </motion.h1>
            <motion.p variants={fadeUp} className="section-subheading mx-auto text-gray-300">
              Over 15 years of breakthrough research at UCLA&rsquo;s Kaner Laboratory has produced a
              novel class of superhard materials that could transform industrial manufacturing.
            </motion.p>
          </motion.div>
        </section>

        {/* ─── WHAT IS TETRIDE ─── */}
        <section className="py-20 px-4 bg-[#050810]/90">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeUp} className="section-label mb-4">
                The Material
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-white mb-8">
                What is Tetride&reg;?
              </motion.h2>
              <motion.div variants={fadeUp} className="text-gray-300 leading-relaxed text-lg space-y-5">
                <p>
                  Tetride&reg; is SuperMetalix&rsquo;s proprietary novel, superhard metal boride
                  formulation — the culmination of materials research at UCLA. The material is capable
                  of scratching diamond, which means in at least one crystallographic orientation it
                  is as hard as diamond.
                </p>
                <p>
                  However, unlike diamond (and cubic boron nitride) it does not require high pressures
                  to synthesize, thereby increasing cost-effective scalability. Facile synthesis on
                  par with tungsten carbide, with mechanochemical properties approaching those of
                  diamond and cubic boron nitride, allows for complex geometries at a fraction of the
                  cost — making a new generation of superhard materials economically viable.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ─── ORIGIN STORY ─── */}
        <section className="py-20 px-4 bg-[#0d1117]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeUp} className="section-label mb-4">
                Research past to present
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-white mb-6">
                UCLA Kaner Laboratory
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Dr. Richard Kaner&rsquo;s research group at UCLA began exploring transition metal
                  borides as superhard materials over two decades ago. Initial work centered on osmium
                  diboride (OsB&#8322;), demonstrating that dense metal-boron covalent networks could
                  produce extreme hardness — a discovery published in the{" "}
                  <em>Journal of the American Chemical Society</em> and <em>Science</em> that
                  established the metal boride class as viable superhard candidates.
                </p>
                <p>
                  Research progressed to rhenium diboride (ReB&#8322;), which achieved
                  superhard-class hardness under ambient synthesis conditions — a breakthrough
                  published in <em>Science</em> (2007) that opened the door to industrial-scale
                  production without the ultra-high pressures required for diamond or cubic boron
                  nitride synthesis.
                </p>
                <p>
                  Through four generations of formulation experiments, the Kaner Laboratory identified
                  and optimized the composition that became Tetride&reg;. Combining Tetride&reg; with
                  other metals and ceramics overcomes the brittleness that pure metal borides exhibit,
                  while delivering the hardness and fracture toughness required for real-world cutting
                  tool and abrasive applications — and doing so through synthesis routes compatible
                  with standard industrial equipment.
                </p>
              </motion.div>
            </motion.div>

            {/* Right column — Incompressibility video */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#1f2937] shadow-xl">
                {/* TODO: Replace VIDEO_ID below with the correct YouTube video ID
                    for the "Incompressibility Explained" video from the old SuperMetalix site.
                    The current main video (BA9n4pZrodo) is the SMX intro — this should be a
                    different video. Confirm the correct ID with the client before publishing. */}
                <iframe
                  src="https://www.youtube.com/embed/INCOMPRESSIBILITY_VIDEO_ID_PLACEHOLDER"
                  title="Incompressibility Explained — SuperMetalix"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <p className="text-gray-500 text-xs text-center mt-3">
                Incompressibility and superhard materials — explained by the Kaner Laboratory.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── HARDNESS COMPARISON ─── */}
        <section className="py-20 px-4 bg-[#050810]/90">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.p variants={fadeUp} className="section-label mb-3">
                Material Properties
              </motion.p>
              <motion.h2 variants={fadeUp} className="section-heading mb-5">
                Hardness Comparison
              </motion.h2>
              <motion.p variants={fadeUp} className="section-subheading mx-auto">
                How Tetride&reg; stacks up against the materials currently used in industrial cutting
                tools and abrasives.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden border border-gray-200 p-6 bg-white shadow-lg"
            >
              <Image
                src="/images/Hardness-Comparison.png"
                alt="Hardness comparison — Tetride® Composites and Formulations vs. industry materials"
                width={900}
                height={500}
                className="w-full h-auto"
              />
              <p className="text-gray-600 text-sm text-center mt-4">
                Tetride&reg; Composites (17–30 GPa) and Tetride&reg; Formulations (40–55 GPa) compared
                against tool steel, cemented carbides, tungsten carbide, c-BN, and diamond.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── RESEARCH AREAS ─── */}
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
                Research Programs
              </motion.p>
              <motion.h2 variants={fadeUp} className="section-heading">
                Active Research Areas
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {researchAreas.map((area) => (
                <motion.div key={area.title} variants={fadeUp} className="card">
                  <div className="mb-4 p-3 rounded-lg bg-white/5 w-fit">{area.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-2">{area.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{area.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── PUBLICATIONS & PATENTS ─── */}
        <section className="py-20 px-4 bg-[#050810]/90">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-14"
            >
              <motion.p variants={fadeUp} className="section-label mb-3">
                Intellectual Property
              </motion.p>
              <motion.h2 variants={fadeUp} className="section-heading">
                Publications & Patents
              </motion.h2>
              <motion.p variants={fadeUp} className="section-subheading mx-auto mt-4">
                25+ years of peer-reviewed research and a growing international patent portfolio for
                all Tetride&reg; technologies.
              </motion.p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Publications Column — LEFT */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-lg bg-blue-500/10">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl">Key Publications</h3>
                </div>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  The scientific foundation for Tetride&reg; is documented in peer-reviewed journals
                  including <em>Science</em>, <em>PNAS</em>, and the{" "}
                  <em>Journal of the American Chemical Society</em>. The list below highlights a few
                  key publications.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Designing Superhard Materials",
                      journal: "Science, 2005 — Kaner et al.",
                      desc: "Foundational framework for engineering hardness at the atomic level.",
                    },
                    {
                      title: "Osmium Diboride, An Ultra-Incompressible, Hard Material",
                      journal: "J. Am. Chem. Soc., 2005 — Cumberland et al.",
                      desc: "First demonstration of transition metal borides as superhard materials.",
                    },
                    {
                      title:
                        "Synthesis of Ultra-Incompressible Superhard Rhenium Diboride at Ambient Pressure",
                      journal: "Science, 2007 — Chung et al.",
                      desc: "Landmark paper on ambient-pressure synthesis of superhard ReB\u2082.",
                    },
                    {
                      title: "Tungsten Tetraboride, an Inexpensive Superhard Material",
                      journal: "PNAS, 2011 — Mohammadi et al.",
                      desc: "Identified low-cost superhard boride compound with exceptional properties.",
                    },
                    {
                      title: "Rediscovering the Crystal Chemistry of Borides",
                      journal: "Advanced Materials, 2017 — Akopov et al.",
                      desc: "Comprehensive review of boride crystal structures for superhard applications.",
                    },
                  ].map((pub) => (
                    <div key={pub.title} className="p-3 rounded-lg bg-white/5 border border-white/5">
                      <p className="text-white text-sm font-semibold leading-snug">{pub.title}</p>
                      <p className="text-blue-400 text-xs mt-1">{pub.journal}</p>
                      <p className="text-gray-500 text-xs mt-1">{pub.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 text-xs mt-5 italic">
                  30+ peer-reviewed publications from the UCLA Kaner Laboratory. Full list available
                  upon request.
                </p>
              </motion.div>

              {/* Patents Column — RIGHT */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-lg bg-amber-500/10">
                    <Shield className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl">Patent Portfolio</h3>
                </div>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  SuperMetalix holds exclusive licensing rights to UCLA&rsquo;s issued and pending
                  patents covering Tetride&reg; compositions, synthesis processes, and commercial
                  applications. The portfolio includes multiple issued U.S. patents and international
                  PCT filings, protecting both the core chemistry and key industrial use cases.
                  Additional patents are actively pending as the technology continues to evolve.
                </p>
                <div className="space-y-3">
                  {[
                    {
                      title: "Superhard Metal Boride Formulations",
                      sub: "U.S. Patent — Core Tetride® composition claims",
                    },
                    {
                      title: "Synthesis & Processing Methods",
                      sub: "U.S. Patent — Scalable industrial production routes",
                    },
                    {
                      title: "Cutting Tool & Abrasive Applications",
                      sub: "U.S. Patent — Industrial use claims",
                    },
                    {
                      title: "International Patent Portfolio",
                      sub: "PCT applications — key international markets",
                    },
                  ].map((p) => (
                    <div key={p.title} className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                      <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-white text-sm font-semibold">{p.title}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{p.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 text-xs mt-5 italic">
                  Full patent numbers and filing details available upon request.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-16 px-4 bg-[#0d1117]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
              Interested in the Science?
            </h2>
            <p className="text-gray-400 mb-8">Reach out to learn more or discuss the technology!</p>
            <Link href="/contact" className="btn-primary">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
