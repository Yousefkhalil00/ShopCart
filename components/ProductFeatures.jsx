"use client";

import Image from "next/image";

const features = [
  {
    title: "Curated Excellence",
    description:
      "Every product in our collection undergoes a rigorous quality control process to ensure it meets our high standards.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    badge: "QualityFirst",
  },
  {
    title: "Global Authenticity",
    description:
      "We source directly from manufacturers and authorized dealers to guarantee 100% authentic premium items.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
    badge: "Genuine",
  },
  {
    title: "Ethical Sourcing",
    description:
      "Our commitment to sustainability means we partner only with brands that prioritize environmental and social responsibility.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    badge: "ModernEthics",
  },
];

export default function ProductFeatures() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="container lg:w-[80%] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-blue-600 font-black tracking-widest text-xs uppercase italic">
                Our Core Values
              </span>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight dark:text-white leading-none">
                More Than Just A Store. <br />
                <span className="text-gray-400">A Quality Standard.</span>
              </h2>
            </div>

            <div className="space-y-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-6 group">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center transition-transform group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold dark:text-white">
                        {feature.title}
                      </h3>
                      <span className="text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full font-black uppercase tracking-tighter">
                        {feature.badge}
                      </span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 max-w-md leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex  relative group">
            <div className="absolute inset-0 rounded-[3rem] blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
            <div className="relative bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[3rem] p-4 shadow-2xl flex-1 overflow-hidden aspect-video lg:aspect-square flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              <div className="relative z-10 flex flex-col items-center gap-4 text-center p-8">
                <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center text-5xl shadow-2xl shadow-blue-500/50 mb-4 scale-animation">
                  ✨
                </div>
                <h3 className="text-3xl font-black dark:text-white tracking-tight">
                  The Modern Standard
                </h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-xs">
                  Redefining what you should expect from your everyday shopping
                  experience.
                </p>
                <div className="flex gap-2 mt-4">
                  <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                  <div className="w-4 h-1 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                  <div className="w-4 h-1 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
