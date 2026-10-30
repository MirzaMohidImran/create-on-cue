import { motion } from "framer-motion";

const projects = [
  { name: "REG PARK", mark: "RP" },
  { name: "DRIVE ON", mark: "DO" },
  { name: "EVERYDAY HERB", mark: "EH" },
  { name: "ZLIANCE", mark: "ZL" },
  { name: "OREA", mark: "OR" },
  { name: "MOVEA", mark: "MV" },
  { name: "REVARCINE", mark: "RV" },
  { name: "TMJAID ROLLER", mark: "TR" },
  { name: "KLESARVEN", mark: "KL" },
  { name: "VITALlifestylez", mark: "VL" },
  { name: "BEARDLEGENDS", mark: "BL" },
  { name: "infinitehvacfilters", mark: "IH" },
  { name: "ODELIA", mark: "OD" },
  { name: "LUMEN", mark: "LU" },
  { name: "SOLENNE", mark: "SO" },
  { name: "GIRL.IN.OSLO", mark: "GO" },
  { name: "JAHANARA", mark: "JA" },
  { name: "EDITION NOBLE", mark: "EN" },
  { name: "APOLLO UNTOLD", mark: "AU" },
];

const wordmarkStyles = [
  "font-display tracking-[-0.04em]",
  "font-serif italic tracking-tight",
  "font-mono tracking-[0.12em]",
];

export function ClientProjectLogos() {
  return (
    <section className="relative overflow-hidden border-b border-bone/10 bg-ink px-6 py-24 text-bone md:px-10 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 select-none font-serif text-[22vw] italic leading-none text-bone/[0.025]"
      >
        projects
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-8">
          <p className="col-span-12 font-mono text-xs uppercase tracking-[0.24em] text-bone/50 md:col-span-3">
            / 05 — Client Projects
          </p>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Project identities,
              <br />
              <span className="font-serif italic text-acid">shipped to the web.</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-bone/55 md:text-base">
              Selected website brands I&apos;ve helped design, engineer, and bring to life.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-bone/10 bg-bone/10 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex min-h-52 flex-col justify-between overflow-hidden bg-ink p-7 transition-colors duration-500 hover:bg-bone hover:text-ink md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-16 w-16 shrink-0 rotate-3 place-items-center rounded-2xl border border-bone/20 font-serif text-xl italic transition-all duration-500 group-hover:-rotate-3 group-hover:border-acid group-hover:bg-acid group-hover:text-ink">
                  {project.mark}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/40 transition-colors group-hover:text-ink/50">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-12">
                <h3
                  className={`break-words text-xl leading-[0.95] md:text-2xl ${wordmarkStyles[index % wordmarkStyles.length]}`}
                >
                  {project.name}
                </h3>
                <div className="mt-4 h-px w-8 bg-acid transition-all duration-500 group-hover:w-full group-hover:bg-flame" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
