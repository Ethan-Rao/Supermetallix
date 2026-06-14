"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Layers, Shield, Wrench, Zap, BookOpen } from "lucide-react";

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
      "Investigation of transition metal borides as alternatives to diamond and cubic boron nitride, focusing on hardness mechanisms at the atomic level.",
  },
  {
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    title: "Synthesis Methods",
    description:
      "Development of scalable, cost-effective synthesis routes for metal boride compounds, enabling industrial-scale production.",
  },
  {
    icon: <Layers className="w-6 h-6 text-amber-400" />,
    title: "Composite Formulations",
    description:
      "Engineering Tetride™ composite formulations that optimize hardness, toughness, and thermal stability for specific application requirements.",
  },
  {
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    title: "Radiation Shielding",
    description:
      "Exploring metal boride structures for radiation attenuation applications in nuclear and medical settings.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-green-400" />,
    title: "Wear Resistance",
    description:
      "Characterizing tribological properties and wear performance of Tetride™ under industrial cutting and abrasion conditions.",
  },
];

export default function ResearchPage() {
  return (
    <div className="bg-[#050810]">
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/research.jpg"
            alt="Research laboratory"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/70 via-[#050810]/60 to-[#050810]" />
        </div>
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
            The Science Behind Tetride™
          </motion.h1>
          <motion.p variants={fadeUp} className="section-subheading mx-auto text-gray-300">
            Over 15 years of breakthrough research at UCLA&rsquo;s Kaner Laboratory has produced a
            novel class of superhard materials that could transform industrial manufacturing.
          </motion.p>
        </motion.div>
      </section>

      {/* ─── ORIGIN STORY ─── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUp} className="section-label mb-4">
              Origin Story
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-white mb-6">
              UCLA Kaner Laboratory
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Dr. Richard Kaner&rsquo;s research group at UCLA began exploring transition metal
                borides as superhard materials more than 15 years ago. The central insight: certain
                metal borides form covalent bonds dense enough to resist deformation at the atomic
                level — producing extreme hardness comparable to diamond.
              </p>
              <p>
                Early work identified osmium diboride and related compounds as superhard, but
                brittle. The Tetride™ formulation overcomes this limitation through proprietary
                composite engineering — delivering both hardness and the toughness required for
                real-world industrial applications.
              </p>
              <p>
                The result is a patented material system that can be synthesized at scale, at costs
                far below natural diamond or CVD alternatives, and with hardness approaching 100 GPa
                on the Vickers scale.
              </p>
            </motion.div>
          </motion.div>

          {/* Right column: Kaner photo + lab photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <div className="relative h-80 rounded-2xl overflow-hidden border border-[#1f2937]">
              <Image
                src="/images/Richard-Kaner-2.jpg"
                alt="Dr. Richard Kaner"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-bold text-lg">Dr. Richard Kaner</p>
                <p className="text-blue-400 text-sm">UCLA Professor & Co-founder, CSO</p>
              </div>
            </div>

            {/* Secondary lab image */}
            <div className="relative h-52 rounded-2xl overflow-hidden border border-[#1f2937]">
              <Image
                src="/images/research2.jpg"
                alt="Kaner Laboratory research"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white/70 text-xs uppercase tracking-wider">
                  Kaner Laboratory, UCLA
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── HARDNESS COMPARISON ─── */}
      <section className="py-20 px-4 bg-[#0d1117]">
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
              How Tetride™ stacks up against the materials currently used in industrial cutting
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
              src="/images/hardness-chart.png"
              alt="Hardness comparison chart"
              width={900}
              height={500}
              className="w-full h-auto"
            />
            <p className="text-gray-600 text-sm text-center mt-4">
              Tetride™ fills the performance gap between today&rsquo;s tungsten carbide cutting
              tools and diamond — while remaining machinable with standard industry equipment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── RESEARCH AREAS ─── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} className="section-label mb-3">
              Research Program
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

      {/* ─── PATENTS & PUBLICATIONS ─── */}
      <section className="py-20 px-4 bg-[#0d1117]">
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
              Patents & Publications
            </motion.h2>
            <motion.p variants={fadeUp} className="section-subheading mx-auto mt-4">
              15+ years of peer-reviewed research and a growing international patent portfolio
              protect the core Tetride™ technology.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Patents Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-amber-500/10">
                  <Shield className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-white font-bold text-xl">Patent Portfolio</h3>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                SuperMetallix holds exclusive licensing rights to UCLA&rsquo;s issued and pending
                patents covering Tetride™ formulations, synthesis processes, and commercial
                applications. The portfolio provides broad protection across the core technology and
                key markets.
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Superhard Metal Boride Formulations",
                    sub: "U.S. Patent — Core Tetride™ composition claims",
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
                Full patent numbers and filing details available upon request under NDA.
              </p>
            </motion.div>

            {/* Publications Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-blue-500/10">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-white font-bold text-xl">Key Publications</h3>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                The scientific foundation for Tetride™ is documented in peer-reviewed journals
                including <em>Science</em>, <em>PNAS</em>, and the{" "}
                <em>Journal of the American Chemical Society</em>.
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
                    desc: "Landmark paper on ambient-pressure synthesis of superhard ReB₂.",
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
                  <div
                    key={pub.title}
                    className="p-3 rounded-lg bg-white/5 border border-white/5"
                  >
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
          </div>
        </div>
      </section>

      {/* ─── VIDEO ─── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10"
          >
            <motion.p variants={fadeUp} className="section-label mb-3">
              Watch
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-heading">
              Tetride™ in Action
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden border border-[#1f2937] aspect-video"
          >
            <iframe
              src="https://www.youtube.com/embed/BA9n4pZrodo"
              title="Tetride Superhard Materials"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 px-4 bg-[#0d1117]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
            Interested in the Science?
          </h2>
          <p className="text-gray-400 mb-8">
            Reach out to discuss licensing, research collaboration, or investment opportunities.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
