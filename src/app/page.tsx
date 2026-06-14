"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, Atom, DollarSign, Globe, ChevronDown } from "lucide-react";

// Fade-up animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

// Stagger container
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// Animated counter hook
function useCountUp(target: number, duration = 2000, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
}

function StatItem({
  value,
  label,
  suffix = "",
  prefix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(value, 2000, inView);
  return (
    <div ref={ref} className="text-center px-6">
      <div className="text-4xl lg:text-5xl font-bold text-white font-display mb-1">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-sm text-gray-400 uppercase tracking-widest">{label}</div>
    </div>
  );
}

const pillars = [
  {
    icon: <Atom className="w-8 h-8 text-blue-400" />,
    title: "Science",
    description:
      "15+ years of breakthrough research at UCLA's Kaner Laboratory, pioneering superhard metal boride formulations that redefine material limits.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-cyan-400" />,
    title: "Commercialization",
    description:
      "Cost-effective synthesis at industrial scale — a fraction of the cost of diamond and CBN while delivering comparable or superior hardness.",
  },
  {
    icon: <Globe className="w-8 h-8 text-amber-400" />,
    title: "Market",
    description:
      "Targeting high-value markets: precision cutting tools, industrial abrasives, wear-resistant coatings, and radiation shielding.",
  },
];

const teamMembers = [
  { name: "Dr. Richard Kaner", title: "Co-founder & CSO", img: "/images/Richard-Kaner-thumb.jpg" },
  { name: "Jack Kavanaugh", title: "Co-founder & CEO", img: "/images/Jack-Kavanaugh-thumb.jpg" },
  { name: "Chris Turner", title: "Team", img: "/images/Chris-Turner-thumb.jpg" },
  { name: "Kesh Keshavan", title: "Team", img: "/images/Kesh-Keshavan-thumb.jpg" },
  { name: "Robert Snukal", title: "Team", img: "/images/Robert-Snukal-thumb.jpg" },
];

export default function LandingPage() {
  return (
    <div className="bg-[#050810]">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
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

        {/* Particle dots */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-400/20"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Logo */}
            <motion.div variants={fadeUp} className="flex justify-center mb-8">
              <Image
                src="/images/SuperMetalix-Logo-Main-white.png"
                alt="SuperMetallix"
                width={260}
                height={80}
                className="h-14 w-auto"
                priority
              />
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 font-display"
            >
              Engineering the World&rsquo;s{" "}
              <span className="gradient-text">Hardest Materials</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Tetride™ — patented superhard metal boride formulations with hardness approaching
              diamond.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="#mission" className="btn-primary text-base px-8 py-4">
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="btn-secondary text-base px-8 py-4">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
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
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-[#1f2937]">
          <StatItem value={15} suffix="+" label="Years of R&D" />
          <div className="text-center px-6">
            <div className="text-4xl lg:text-5xl font-bold text-white font-display mb-1">
              Patented
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-widest">Technology</div>
          </div>
          <div className="text-center px-6">
            <div className="text-4xl lg:text-5xl font-bold text-white font-display mb-1">UCLA</div>
            <div className="text-sm text-gray-400 uppercase tracking-widest">Origin</div>
          </div>
          <div className="text-center px-6">
            <div className="text-4xl lg:text-5xl font-bold gradient-text font-display mb-1">
              ~100 GPa
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-widest">Hardness</div>
          </div>
        </div>
      </section>

      {/* ─── MISSION STATEMENT ─── */}
      <section id="mission" className="py-24 px-4 text-center max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="section-label mb-6">
            Our Mission
          </motion.p>
          <motion.blockquote
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 font-display"
          >
            &ldquo;We have created a material hard enough to scratch a diamond.&rdquo;
          </motion.blockquote>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed">
            Tetride™ represents a fundamental advance in materials science — a superhard metal
            boride formulation that opens the door to a new class of industrial materials. Developed
            at UCLA over 15+ years, it&rsquo;s now ready for commercial scale. SuperMetallix is the
            company bringing it to market.
          </motion.p>
        </motion.div>
      </section>

      {/* ─── THREE PILLARS ─── */}
      <section className="py-16 px-4 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} className="section-label mb-3">
              Why SuperMetallix
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-heading">
              Three Pillars of Value
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
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

      {/* ─── RESEARCH TEASER ─── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-[#1f2937]">
          <div className="relative h-64 lg:h-auto min-h-[320px]">
            <Image
              src="/images/isis-franca-hsPFuudRg5I-unsplash.jpg"
              alt="Research laboratory"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050810]/50 lg:to-[#050810]/80" />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-[#0d1117] p-10 lg:p-14 flex flex-col justify-center"
          >
            <motion.p variants={fadeUp} className="section-label mb-4">
              The Science
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-white mb-5">
              15+ Years of UCLA Research
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 mb-8 leading-relaxed">
              Dr. Richard Kaner&rsquo;s laboratory at UCLA has spent over 15 years pioneering
              superhard metal borides. Tetride™ is the result — a patented formulation that
              overcomes the brittleness problem that limited earlier materials.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/research" className="btn-primary w-fit">
                Explore Research <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── PRODUCTS TEASER ─── */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/superhard-hero.jpg"
            alt="Superhard material"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/70 to-[#050810]/50" />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative z-10 text-center max-w-3xl mx-auto"
        >
          <motion.p variants={fadeUp} className="section-label mb-4">
            Tetride™
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-heading mb-6">
            Next-Generation Superhard Materials
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-300 text-lg mb-10">
            Industrial-grade hardness. Cost-effective synthesis. Scalable production. Tetride™ is
            ready for the cutting tools, abrasives, and wear-resistance markets.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/products" className="btn-primary text-base px-8 py-4">
              View Products <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── TEAM TEASER ─── */}
      <section className="py-20 px-4 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="section-label mb-3">
              The Team
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-heading">
              World-Class Scientists & Operators
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#1f2937] group-hover:border-blue-500/50 transition-colors">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold text-sm">{member.name}</p>
                  <p className="text-gray-500 text-xs">{member.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link href="/about" className="btn-secondary">
              Meet the Full Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
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
            Investor Relations
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to Back the Future of Materials
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 mb-8">
            SuperMetallix is seeking strategic investment partners to accelerate
            Tetride™&rsquo;s path to market. Patented technology, proven science, massive
            addressable market.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/contact?purpose=investment" className="btn-primary text-base px-8 py-4">
              Start a Conversation <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
