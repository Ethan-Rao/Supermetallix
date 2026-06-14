"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Layers, Shield, Wrench, Zap } from "lucide-react";

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
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden border border-[#1f2937]">
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
              Vickers hardness scale positioning Tetride™ against leading industrial abrasives and
              superhard materials.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-[#1f2937] p-6 bg-[#111827]"
          >
            <Image
              src="/images/hardness-chart.png"
              alt="Hardness comparison chart"
              width={900}
              height={500}
              className="w-full h-auto"
            />
            <p className="text-gray-500 text-sm text-center mt-4">
              Tetride™ achieves ~100 GPa Vickers hardness — approaching diamond, far exceeding
              cubic boron nitride and tungsten carbide.
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

      {/* ─── PUBLICATIONS & IP ─── */}
      <section className="py-20 px-4 bg-[#0d1117]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="section-label mb-3">
              Intellectual Property
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-heading">
              Publications & Patents
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-amber-500/30 rounded-2xl p-8 bg-amber-500/5"
          >
            <div className="flex items-start gap-4">
              <div className="text-amber-400 text-3xl">⚡</div>
              <div>
                <h3 className="text-white font-bold text-xl mb-3">Patented Technology</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  SuperMetallix holds multiple issued U.S. and international patents covering
                  Tetride™ formulations, synthesis methods, and applications. The patent portfolio
                  provides broad protection for the core technology and key use cases.
                </p>
                <p className="text-gray-500 text-sm italic">
                  Peer-reviewed publications from the UCLA Kaner Laboratory document the scientific
                  foundation. Contact us for a full IP summary and publication list.
                </p>
              </div>
            </div>
          </motion.div>
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
