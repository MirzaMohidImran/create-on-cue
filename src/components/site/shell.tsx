import type { ReactNode } from "react";
import { SiteNav } from "./nav";
import { SiteFooter } from "./footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-ink text-bone antialiased selection:bg-acid selection:text-ink">
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-ink py-6">
      <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-16 whitespace-nowrap font-serif text-3xl italic text-bone/60 md:text-5xl">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-16">
            <span>{t}</span>
            <span aria-hidden className="text-acid">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-33.333%);} }`}</style>
    </div>
  );
}