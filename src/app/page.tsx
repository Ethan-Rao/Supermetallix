"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, Atom, DollarSign, Globe, ChevronDown, Play } from "lucide-react";

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

function StatItem({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(value, 2000, inView);
  return (
    <div ref={ref} className="text-center px-6">
      <div className="text-4xl lg:text-5xl font-bold text-white font-display mb-1">
        {count}{suffix}
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
      "Cost-effective synthesis at industrial scale at a fraction of the cost of diamond and CBN while delivering comparable or superior hardness.",
  },
  {
    icon: <Globe className="w-8 h-8 text-amber-400" />,
    title: "Market",
    description:
      "The global cutting tools and superabrasives market exceeds $23B annually. Tetride™ targets the performance tier between tungsten carbide and diamond, a segment with no cost-competitive incumbent.",
  },
];

const teamMembers = [
  { name: "Dr. Richard Kaner", title: "Co-founder & CSO", img: "/images/Richard-Kaner-thumb.jpg" },
  { name: "Jack Kavanaugh",    title: "Co-founder & CEO", img: "/images/Jack-Kavanaugh-thumb.jpg" },
  { name: "Chris Turner",      title: "Team",             img: "/images/Chris-Turner-thumb.jpg" },
  { name: "Kesh Keshavan",     title: "Team",             img: "/images/Kesh-Keshavan-thumb.jpg" },
  { name: "Robert Snukal",     title: "Team",             img: "/images/Robert-Snukal-thumb.jpg" },
];

const galleryItems = [
  { src: "/images/detail.jpg",                      label: "Material Detail" },
  { src: "/images/powders2.jpg",                    label: "Powder Form" },
  { src: "/images/cutting-wheel-and-drill-bits3.png", label: "Cutting Tools" },
  { src: "/images/malcolm-cutting-machine2.jpg",    label: "Industrial Application" },
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

            <motion.p variants={fadeUp} className="text-sm sm:text-base font-semibold tracking-widest uppercase text-blue-400 mb-5">
              Tetride™ by SuperMetallix
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 font-display"
            >
              Engineering the World&rsquo;s{" "}
              <span className="gradient-text">Hardest Materials</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Tetride™ achieves hardness beyond diamond while remaining compatible with standard
              industrial machine tools. The result of 15 years of UCLA research, now ready for
              commercial deployment.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="/research" className="btn-primary text-base px-8 py-4">
                Explore the Science <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact?purpose=investment" className="btn-secondary text-base px-8 py-4">
                Investor Inquiry
              </Link>
            </motion.div>

            {/* Video placeholder */}
            <motion.div variants={fadeUp} className="mt-10 w-full max-w-2xl mx-auto">
              <div className="relative aspect-video rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm flex flex-col items-center justify-center gap-3 cursor-pointer group hover:border-blue-500/40 transition-colors">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
                <p className="text-white/50 text-sm tracking-wider uppercase">Video Coming Soon</p>
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
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-[#1f2937]">
          <StatItem value={15} suffix="+" label="Years of R&D" />
          <div className="flex flex-col items-center px-6">
            <div className="text-4xl lg:text-5xl font-bold text-white font-display mb-1">Patented</div>
            <div className="text-sm text-gray-400 uppercase tracking-widest text-center">Technology</div>
          </div>
          <div className="text-center px-6">
            <div className="text-4xl lg:text-5xl font-bold text-white font-display mb-1">UCLA</div>
            <div className="text-sm text-gray-400 uppercase tracking-widest">Origin</div>
          </div>
          <div className="text-center px-6">
            <div className="text-3xl lg:text-4xl font-bold gradient-text font-display mb-1">$23B+</div>
            <div className="text-sm text-gray-400 uppercase tracking-widest">Market Size</div>
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
            <motion.h2 variants={fadeUp} className="section-heading">Tetride™ in Every Form</motion.h2>
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
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white text-xs font-semibold tracking-wider uppercase">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
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
            <motion.p variants={fadeUp} className="section-label mb-3">Why SuperMetallix</motion.p>
            <motion.h2 variants={fadeUp} className="section-heading">Three Pillars of Value</motion.h2>
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
            <motion.p variants={fadeUp} className="section-label mb-4">The Science</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-white mb-5">
              15+ Years of UCLA Research
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 mb-8 leading-relaxed">
              Dr. Richard Kaner&rsquo;s laboratory at UCLA has spent over 15 years pioneering
              superhard metal borides. Tetride™ is the result, a patented formulation that overcomes
              the brittleness problem that limited earlier materials.
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
          <motion.p variants={fadeUp} className="section-label mb-4">Tetride™</motion.p>
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
            <motion.p variants={fadeUp} className="section-label mb-3">The Team</motion.p>
            <motion.h2 variants={fadeUp} className="section-heading">
              World-Class Scientists &amp; Operators
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
              <motion.div key={member.name} variants={fadeUp} className="flex flex-col items-center gap-3 group">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#1f2937] group-hover:border-blue-500/50 transition-colors">
                  <Image src={member.img} alt={member.name} fill className="object-cover" />
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
          <motion.p variants={fadeUp} className="section-label mb-4">Investor Relations</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to Back the Future of Materials
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 mb-8">
            SuperMetallix is seeking strategic investment partners to accelerate Tetride™ to market.
            Patented technology, proven science, massive addressable market.
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
