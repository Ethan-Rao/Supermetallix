import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t border-[#1f2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 — Logo + tagline + contact */}
          <div className="space-y-5">
            <Link href="/">
              <Image
                src="/images/SuperMetalix-Logo-Main-white.png"
                alt="SuperMetalix"
                width={160}
                height={50}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm font-semibold text-white tracking-wide">
              Commercializing the world&rsquo;s Hardest Metals
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              SuperMetalix is scaling up novel superhard materials for various industrial
              applications, the product of over 15+ years of superhard materials research.
            </p>
            <div>
              <a
                href="mailto:info@supermetalix.com"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@supermetalix.com
              </a>
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-widest uppercase">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
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

          {/* Column 3 — Mission */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-widest uppercase">
              Mission
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are bringing the world&rsquo;s hardest materials to market. Tetride&reg; fills the
              performance gap between today&rsquo;s tungsten carbide and diamond at a cost and scale
              that unlocks entirely new industrial applications.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1f2937] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2026 SuperMetalix, Inc. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Tetride&reg; is a registered trademark of SuperMetalix, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
