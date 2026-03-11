"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";

const footerLinks = [
  {
    title: "Shop",
    links: [
      { name: "All Products", href: "/products" },
      { name: "Smartphones", href: "/products?category=smartphones" },
      { name: "Laptops", href: "/products?category=laptops" },
      { name: "Fragrances", href: "/products?category=fragrances" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="container lg:w-[80%] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
          <div className="space-y-6 ">
            <Link
              href="/"
              className="flex items-center gap-2 text-3xl font-bold bg-linear-to-br from-green-700/90 to-green-400/90 bg-clip-text text-transparent italic"
            >
              <Image src={logo} alt="Logo" width={48} height={24} />
              ShopCart
            </Link>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
              Experience the future of shopping with our curated collections of
              premium quality products. Secure, fast, and always modern.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-6">
              <h3 className="font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} ShopCart Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              it&apos;s just a test project
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
