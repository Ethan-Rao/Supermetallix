import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t border-[#1f2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & tagline */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <Image
                src="/images/SuperMetalix-Logo-Main-white.png"
                alt="SuperMetallix"
                width={160}
                height={50}
                className="h-8 w-auto mb-4"
              />
            </Link>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Engineering the world&rsquo;s hardest materials. Tetride™ — patented superhard metal
              boride formulations commercializing 15+ years of UCLA Kaner Laboratory research.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-widest uppercase">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[#1f2937] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 SuperMetallix, Inc. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Los Angeles, CA &nbsp;·&nbsp; info@supermetallix.com
          </p>
        </div>
      </div>
    </footer>
  );
}
