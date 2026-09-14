import Link from "next/link";
import type { ReactNode } from "react";

const links = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/cgu", label: "CGU" },
  { href: "/politique-confidentialite", label: "Confidentialité" },
  { href: "/suppression-compte", label: "Supprimer un compte" },
];

export function LegalLayout({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="YuMan, accueil">Yu<span>Man</span></Link>
        <span className="header-note">Informations juridiques</span>
      </header>
      <main className="legal-shell">
        <div className="legal-wrap">
          <nav className="legal-nav" aria-label="Pages juridiques">
            {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          </nav>
          <article className="legal-article">
            <h1>{title}</h1>
            <p className="legal-intro">{intro}</p>
            {children}
          </article>
        </div>
      </main>
      <footer className="site-footer">© YuMan · <Link href="/mentions-legales">Mentions légales</Link> · <Link href="/cgu">CGU</Link> · <Link href="/politique-confidentialite">Confidentialité</Link></footer>
    </>
  );
}

export function ToComplete({ children }: { children: ReactNode }) {
  return <span className="legal-to-complete">{children}</span>;
}
