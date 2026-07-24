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
    name: "Jack Kavanaugh, MD, MBA",
    title: "Chairman of the Board & CEO",
    img: "/images/Jack-Kavanaugh-2.jpg",
    bio: "Serial entrepreneur and technology commercialization specialist. Jack brings executive leadership experience and a track record of taking deep-tech innovations from lab to market.",
  },
  {
    name: "Richard Kaner, Ph.D.",
    title: "Chief Scientific Advisor & Board of Directors",
    img: "/images/Richard-Kaner-2.jpg",
    bio: "Distinguished Professor at UCLA and world-renowned materials scientist. Dr. Kaner has spent 20+ years pioneering superhard metal boride research at the Kaner Laboratory, laying the scientific foundation for Tetride\u00ae.",
  },
  {
    name: "Chris Turner, Ph.D.",
    title: "Chief Science Officer / Chief Operations Officer",
    img: "/images/Chris-Turner-thumb.jpg",
    bio: "Background in advanced manufacturing and materials processing. Dr. Turner leads Tetride\u00ae synthesis scale-up and production process development.",
  },
  {
    name: "Mahi de Silva",
    title: "Board of Directors",
    img: "/images/mahi-thumbs.jpg",
    bio: "Experienced board member and strategic advisor with deep expertise in industrial technology ventures and commercial scale-up.",
  },
  {
    name: "Robert Snukal",
    title: "Board of Directors",
    img: "/images/Robert-Snukal.jpg",
    bio: "Finance and business development professional. Robert manages investor relations, capital strategy, and corporate development for SuperMetalix.",
  },
  {
    name: "Selim Senkan, Ph.D.",
    title: "Scientific Advisor",
    img: "/images/SelimSenkan.png",
    bio: "Distinguished Professor of Chemical Engineering at UCLA. Prof. Senkan brings expertise in catalysis, reaction engineering, and materials processing to the SuperMetalix scientific advisory board.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#050810]">
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/8B.jpg"
            alt="Crystalline material close-up"
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
            Leadership
          </motion.h1>
          <motion.p variants={fadeUp} className="section-subheading mx-auto text-gray-300">
            SuperMetalix, Inc. brings the next-generation of superhard materials based on scientific
            advances of the past decade to commercial reality.
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
              Who we are
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="space-y-5 text-gray-400 leading-relaxed text-lg"
            >
              <p>
                Through proprietary formulations developed at UCLA, SuperMetalix has created
                cost-efficient, industry-competitive materials. Under the continued scientific
                leadership of Dr. Kaner and Dr. Turner, SuperMetalix has licensed patents from UCLA;
                furthermore, SuperMetalix has a number of patents pending and IP in development that
                will not only maintain its position at the forefront of technological advances, but
                is poised to revolutionize the market — producing cost-efficient superhard metallic
                composites far superior to today&rsquo;s commonly-used hard metals.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── LEADERSHIP & ADVISORS ─── */}
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
              Team
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-heading">
              Leadership &amp; Advisors
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
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 to-transparent" />
                </div>
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
            Get In Touch
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-5">
            Interested in SuperMetalix?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 mb-8">
            We are actively engaging with partners and investors who understand deep tech and the
            industrial materials market.
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
