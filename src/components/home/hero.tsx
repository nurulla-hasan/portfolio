import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

import { Button } from "../ui/button";

export default function Hero() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.07),transparent_26%),linear-gradient(135deg,#020409_0%,#050914_42%,#020305_100%)] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_18%,transparent_82%,rgba(255,255,255,0.03))]"
      />
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0 opacity-[0.15]"
      />
      <div
        aria-hidden="true"
        className="hero-grid-neon pointer-events-none absolute inset-0 opacity-[0.72]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/12"
      />

      <section className="relative flex min-h-screen items-center px-6 py-12 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto grid w-full max-w-375 items-center gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.98fr)] lg:gap-8">
          <div className="hero-fade-in relative z-10 max-w-4xl lg:grid lg:grid-cols-[120px_minmax(0,1fr)] lg:gap-8">
            <div className="mb-8 hidden lg:flex lg:flex-col lg:items-start lg:pt-4">
              <span className="text-[0.68rem] font-medium tracking-[0.34em] text-white/34 uppercase">
                Based in
              </span>
              <span className="mt-3 text-sm tracking-[0.18em] text-white/58 uppercase">
                Bangladesh
              </span>
              <div className="mt-8 h-28 w-px bg-linear-to-b from-cyan-300/80 via-white/20 to-transparent shadow-[0_0_20px_rgba(103,232,249,0.25)]" />
            </div>

            <div>
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/3 px-4 py-2 text-[0.68rem] font-medium tracking-[0.28em] text-white/60 uppercase backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-cyan-300/80 shadow-[0_0_14px_rgba(103,232,249,0.75)]" />
                Frontend Developer Portfolio
              </div>

              <div className="mb-6 flex items-center gap-4">
                <div className="h-px w-16 bg-linear-to-r from-cyan-300/80 to-transparent shadow-[0_0_18px_rgba(103,232,249,0.45)]" />
                <p className="text-[0.72rem] font-medium tracking-[0.34em] text-white/45 uppercase">
                  Available for premium frontend work
                </p>
              </div>

              <h1 className="max-w-4xl text-balance">
                <span className="hero-name-outline block text-[clamp(4.15rem,8vw,8.2rem)] leading-[0.84] font-bold tracking-[-0.08em] text-transparent uppercase">
                  Nurulla
                </span>
                <span className="mt-[-0.02em] block text-[clamp(4.4rem,8.4vw,8.85rem)] leading-[0.84] font-bold tracking-[-0.085em] text-white/96 uppercase drop-shadow-[0_16px_45px_rgba(8,15,28,0.55)]">
                  Hasan
                </span>
                <span className="hero-outline mt-5 block max-w-3xl font-heading text-[clamp(2.05rem,4vw,3.75rem)] leading-[0.92] font-semibold tracking-[-0.05em] text-transparent">
                  Frontend-Focused
                </span>
                <span className="mt-4 block text-[clamp(1.02rem,1.35vw,1.28rem)] leading-[1.2] font-sans font-semibold tracking-[0.26em] text-white/60 uppercase">
                  MERN Stack Developer
                </span>
              </h1>

              <div className="hero-copy-rail mt-9 max-w-2xl pl-6">
                <p className="text-base leading-8 text-white/66 sm:text-[1.08rem]">
                  Crafting modern, scalable, and clean web experiences.
                </p>
              </div>

              <div className="mt-11 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="hero-button-primary h-13 rounded-full border border-white/12 px-8 text-[0.98rem] font-semibold text-slate-950 transition duration-300"
                >
                  <Link href="#projects">
                    View Projects
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="hero-button-secondary h-13 rounded-full px-8 text-[0.98rem] font-medium text-white/90 transition duration-300"
                >
                  <a href="/Nurulla-Hasan-CV.pdf" download>
                    Download CV
                    <Download className="size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-168 lg:block">
            <div
              aria-hidden="true"
              className="animate-fog-flow absolute right-[12%] top-[10%] h-80 w-80 rounded-full bg-cyan-400/[0.14] blur-[120px]"
            />
            <div
              aria-hidden="true"
              className="animate-fog-flow-delayed absolute bottom-[14%] right-[16%] h-96 w-[24rem] rounded-full bg-indigo-400/12 blur-[150px]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-y-[18%] right-[24%] w-px rotate-28 bg-linear-to-b from-transparent via-cyan-100/30 to-transparent blur-[0.5px]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-y-[12%] right-[10%] w-px rotate-28 bg-linear-to-b from-transparent via-white/28 to-transparent"
            />

            <div className="animate-hero-drift absolute inset-y-[10%] right-[4%] w-[82%]">
              <div className="absolute inset-x-[4%] bottom-[7%] h-[32%] rounded-[100%] bg-[radial-gradient(circle,rgba(15,23,42,0.16)_0%,rgba(2,6,23,0.72)_56%,transparent_78%)] blur-2xl" />
              <div className="hero-grid-plane absolute bottom-[14%] right-[4%] h-[34%] w-[82%]" />
              <div className="absolute right-[19%] top-[16%] h-64 w-[16rem] rounded-full border border-cyan-200/12 bg-[radial-gradient(circle,rgba(165,243,252,0.2)_0%,rgba(56,189,248,0.08)_30%,transparent_66%)] shadow-[0_0_90px_rgba(34,211,238,0.14)]" />
              <div className="absolute right-[23.5%] top-[20.5%] h-36 w-36 rounded-full border border-white/18 bg-[radial-gradient(circle,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.03)_58%,transparent_76%)] backdrop-blur-sm" />
              <div className="absolute right-[14%] top-[10%] h-112 w-md rounded-full border border-white/6" />
              <div className="absolute right-[9%] top-[6%] h-136 w-136 rounded-full border border-cyan-300/6" />
              <div className="absolute right-[10%] top-[28%] h-44 w-120 rotate-[-18deg] rounded-[2.5rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.01))] shadow-[0_40px_120px_rgba(0,0,0,0.42)] backdrop-blur-xl" />
              <div className="absolute right-[26%] top-[48%] h-32 w-60 rotate-14 rounded-[2rem] border border-white/8 bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.008))] backdrop-blur-xl" />
              <div className="absolute right-[27%] top-[17%] h-40 w-px bg-linear-to-b from-transparent via-cyan-200/50 to-transparent shadow-[0_0_16px_rgba(103,232,249,0.3)]" />
              <div className="absolute right-[22%] top-[40%] h-px w-44 bg-linear-to-r from-transparent via-white/26 to-transparent" />
            </div>

            <div className="absolute right-[6%] top-[16%] w-[78%] rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,12,22,0.94),rgba(5,9,18,0.78))] shadow-[0_35px_110px_rgba(0,0,0,0.42)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                </div>
                <div className="rounded-full border border-white/8 bg-white/3 px-3 py-1 text-[0.64rem] font-medium tracking-[0.24em] text-white/42 uppercase">
                  app/hero.tsx
                </div>
              </div>

              <div className="grid grid-cols-[56px_minmax(0,1fr)]">
                <div className="border-r border-white/6 bg-black/12 px-3 py-5 text-right text-[0.76rem] leading-8 text-white/24">
                  <div>01</div>
                  <div>02</div>
                  <div>03</div>
                  <div>04</div>
                  <div>05</div>
                  <div>06</div>
                  <div>07</div>
                  <div>08</div>
                </div>

                <div className="px-5 py-5 font-mono text-[0.82rem] leading-8">
                  <div className="text-cyan-200/84">
                    <span className="text-fuchsia-200/78">const</span>{" "}
                    <span className="text-white/88">portfolio</span>{" "}
                    <span className="text-white/44">=</span>{" "}
                    <span className="text-cyan-200/84">{"{"}</span>
                  </div>
                  <div className="pl-5 text-white/66">
                    <span className="text-sky-200/74">name</span>
                    <span className="text-white/40">:</span>{" "}
                    <span className="text-emerald-200/76">&quot;Nurulla Hasan&quot;</span>
                    <span className="text-white/40">,</span>
                  </div>
                  <div className="pl-5 text-white/66">
                    <span className="text-sky-200/74">role</span>
                    <span className="text-white/40">:</span>{" "}
                    <span className="text-emerald-200/76">
                      &quot;Frontend-Focused MERN Developer&quot;
                    </span>
                    <span className="text-white/40">,</span>
                  </div>
                  <div className="pl-5 text-white/66">
                    <span className="text-sky-200/74">focus</span>
                    <span className="text-white/40">:</span>{" "}
                    <span className="text-amber-100/72">
                      [&quot;UI&quot;, &quot;DX&quot;, &quot;Motion&quot;]
                    </span>
                    <span className="text-white/40">,</span>
                  </div>
                  <div className="pl-5 text-white/66">
                    <span className="text-sky-200/74">status</span>
                    <span className="text-white/40">:</span>{" "}
                    <span className="text-cyan-200/84">
                      &quot;Building elegant interfaces&quot;
                    </span>
                  </div>
                  <div className="text-cyan-200/84">{"}"}</div>

                  <div className="mt-5 flex items-center gap-3">
                    <span className="inline-flex rounded-full border border-cyan-300/16 bg-cyan-300/8 px-3 py-1 text-[0.68rem] tracking-[0.2em] text-cyan-100/72 uppercase">
                      React
                    </span>
                    <span className="inline-flex rounded-full border border-white/10 bg-white/3 px-3 py-1 text-[0.68rem] tracking-[0.2em] text-white/58 uppercase">
                      Next.js
                    </span>
                    <span className="inline-flex rounded-full border border-white/10 bg-white/3 px-3 py-1 text-[0.68rem] tracking-[0.2em] text-white/58 uppercase">
                      Tailwind
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute bottom-[12%] right-[14%] h-32 w-[56%] rounded-full bg-black/55 blur-[72px]"
            />
          </div>
        </div>
      </section>

      <div
        id="projects"
        className="absolute bottom-0 left-0 h-px w-px opacity-0"
      />
    </main>
  );
}
