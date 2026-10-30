import { motion } from "framer-motion";

const companies = [
  { name: "Buildaze", mark: "BZ" },
  { name: "Drioweb", mark: "DW" },
  { name: "Encoders Studio", mark: "ES" },
  { name: "Driogrowth", mark: "DG" },
  { name: "Serptrix", mark: "ST" },
  { name: "Arnex", mark: "AX" },
  { name: "Xylo", mark: "XY" },
  { name: "Blink Devs", mark: "BD" },
];

export function CompanyLogos() {
  return (
    <section className="relative overflow-hidden border-y border-ink/10 bg-bone px-6 py-24 text-ink md:px-10 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 select-none font-serif text-[24vw] italic leading-none text-ink/[0.025]"
      >
        work
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-8">
          <p className="col-span-12 font-mono text-xs uppercase tracking-[0.24em] text-mist md:col-span-3">
            / 04 — Companies
          </p>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Companies I&apos;ve
              <br />
              <span className="font-serif italic text-acid">worked with.</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-mist md:text-base">
              Product studios and engineering teams where I&apos;ve helped ship ecommerce,
              automation, and full-stack products.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {companies.map((company, index) => (
            <motion.article
              key={company.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group flex min-h-52 flex-col justify-between bg-bone p-6 transition-colors duration-500 hover:bg-ink hover:text-bone md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-ink/20 font-serif text-xl italic transition-colors group-hover:border-acid group-hover:bg-acid group-hover:text-ink">
                  {company.mark}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-12">
                <h3 className="font-display text-xl tracking-tight md:text-2xl">{company.name}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
