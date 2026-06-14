"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const teamMembers = [
  {
    name: "Dr. Richard Kaner",
    title: "Co-founder & Chief Scientific Officer",
    img: "/images/Richard-Kaner-2.jpg",
    bio: "Distinguished Professor at UCLA and world-renowned materials scientist. Dr. Kaner has spent 15+ years pioneering superhard metal boride research at the Kaner Laboratory, laying the scientific foundation for Tetride™.",
  },
  {
    name: "Jack Kavanaugh",
    title: "Co-founder & CEO",
    img: "/images/Jack-Kavanaugh-2.jpg",
    bio: "Serial entrepreneur and technology commercialization specialist. Jack brings executive leadership experience and a track record of taking deep-tech innovations from lab to market.",
  },
  {
    name: "Kesh Keshavan",
    title: "Team",
    img: "/images/Kesh-Keshavan-2.jpg",
    bio: "Experienced operator with expertise in materials science applications and industrial technology deployment. Kesh drives strategic partnerships and market development.",
  },
  {
    name: "Chris Turner",
    title: "Team",
    img: "/images/Chris-Turner-thumb.jpg",
    bio: "Background in advanced manufacturing and materials processing. Chris leads Tetride™ synthesis scale-up and production process development.",
  },
  {
    name: "Robert Snukal",
    title: "Team",
    img: "/images/Robert-Snukal.jpg",
    bio: "Finance and business development professional. Robert manages investor relations, capital strategy, and corporate development for SuperMetallix.",
  },
];

const timeline = [
  { year: "2005", event: "Dr. Kaner begins superhard materials research at UCLA Kaner Laboratory" },
  { year: "2010", event: "Discovery of key metal boride formulations with diamond-approaching hardness" },
  { year: "2015", event: "Breakthrough in composite formulation — solving the brittleness problem" },
  { year: "2018", event: "U.S. patent filings initiated on core Tetride™ technology" },
  { year: "2020", event: "SuperMetallix, Inc. founded to commercialize UCLA research" },
  { year: "2023", event: "Industrial synthesis demonstrated at scale" },
  { year: "2026", event: "Commercial partnerships and investor engagement underway" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#050810]">
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gunmetal.jpg"
            alt="Gunmetal texture"
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
            About Us
          </motion.p>
          <motion.h1 variants={fadeUp} className="section-heading text-5xl lg:text-6xl mb-6">
            Built on 15 Years of Breakthrough Science
          </motion.h1>
          <motion.p variants={fadeUp} className="section-subheading mx-auto text-gray-300">
            SuperMetallix was founded to bring one of the most significant materials science advances
            of the past decade to commercial reality.
          </motion.p>
        </motion.div>
      </section>

      {/* ─── COMPANY STORY ─── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUp} className="section-label mb-4">
              Our Story
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-white mb-8">
              From Lab to Market
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="space-y-5 text-gray-400 leading-relaxed text-lg"
            >
              <p>
                SuperMetallix was born from a question Dr. Richard Kaner&rsquo;s laboratory at UCLA
                has been asking for over 15 years: can we engineer a material as hard as diamond, at
                a fraction of the cost, and synthesized at industrial scale?
              </p>
              <p>
                The answer is Tetride™. A patented superhard metal boride formulation that is harder
                than diamond — and unlike diamond, machinable with standard industry tooling. This
                makes superhard material performance economically viable for mass industrial
                applications for the first time.
              </p>
              <p>
                SuperMetallix, Inc. was established to commercialize this breakthrough, licensing the
                technology from UCLA and building the industrial and commercial infrastructure to
                bring Tetride™ to cutting tools, abrasives, coatings, and beyond.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-20 px-4 bg-[#0d1117]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} className="section-label mb-3">
              History
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-heading">
              Our Journey
            </motion.h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#1f2937]" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              {timeline.map((item) => (
                <motion.div
                  key={item.year}
                  variants={fadeUp}
                  className="flex items-start gap-6 pl-4"
                >
                  <div className="relative flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  <div className="pt-1 pb-4">
                    <span className="text-blue-400 font-bold text-sm tracking-wider">
                      {item.year}
                    </span>
                    <p className="text-gray-300 mt-1">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
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
              Leadership
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-heading">
              The Team
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                className="card overflow-hidden flex flex-col gap-0 p-0"
              >
                {/* Full-width rectangular photo */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 to-transparent" />
                </div>
                {/* Name + title + bio */}
                <div className="p-6 flex flex-col gap-2">
                  <p className="text-white font-bold text-lg leading-tight">{member.name}</p>
                  <p className="text-blue-400 text-sm">{member.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mt-1">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── ADVISORS ─── */}
      <section className="py-16 px-4 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="section-label mb-3">
              Advisory Board
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-heading">
              Scientific Advisors
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex justify-center"
          >
            <motion.div
              variants={fadeUp}
              className="card overflow-hidden flex flex-col gap-0 p-0 max-w-sm w-full"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src="/images/SelimSenkan.png"
                  alt="Prof. Selim Senkan"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 to-transparent" />
              </div>
              <div className="p-6 flex flex-col gap-2">
                <p className="text-white font-bold text-lg">Prof. Selim Senkan</p>
                <p className="text-cyan-400 text-sm">Scientific Advisor</p>
                <p className="text-gray-400 text-sm leading-relaxed mt-1">
                  Distinguished Professor of Chemical Engineering at UCLA. Prof. Senkan brings
                  expertise in catalysis, reaction engineering, and materials processing to the
                  SuperMetallix scientific advisory board.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── INVESTOR CTA ─── */}
      <section className="py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center border border-blue-500/20 rounded-2xl p-12 bg-blue-500/5 glow-blue"
        >
          <motion.p variants={fadeUp} className="section-label mb-4">
            Investors
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-5">
            Seeking Strategic Investment Partners
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 mb-8">
            We are actively engaging with investors who understand deep tech and the industrial
            materials market. If that&rsquo;s you, we&rsquo;d love to connect.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
