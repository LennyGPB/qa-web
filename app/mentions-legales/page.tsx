import type { Metadata } from "next";
import { LegalLayout } from "../legal-layout";

export const metadata: Metadata = { title: "Mentions légales | YuMan", description: "Identification de l’éditeur et de l’hébergement de YuMan." };

export default function LegalNotices() {
  return <LegalLayout title="Mentions légales" intro="Les informations relatives à l’éditeur du service YuMan et à son hébergement.">
    <section><h2>Éditeur</h2><p>YuMan est édité par <strong>Lenny GOMES</strong>, auto-entrepreneur. Le directeur de la publication est Lenny GOMES.</p><dl><dt>Statut</dt><dd>Auto-entrepreneur (micro-entreprise)</dd><dt>SIRET</dt><dd>938 832 987 00011</dd><dt>Contact</dt><dd><a href="mailto:gleam-pro@proton.me">gleam-pro@proton.me</a></dd></dl></section>
    <section><h2>Hébergement</h2><p>Le site est hébergé par :</p><dl><dt>Vercel Inc.</dt><dd>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — <a href="https://vercel.com" target="_blank" rel="noreferrer">vercel.com</a></dd></dl><p>Les prestataires techniques utilisés par l’application sont détaillés dans la <a href="/politique-confidentialite">politique de confidentialité</a>.</p></section>
    <section><h2>Propriété intellectuelle</h2><p>Le nom YuMan, les éléments graphiques et les contenus créés par l’éditeur sont protégés par les droits qui leur sont applicables. Les questions, réponses et images publiées par les utilisateurs restent soumises aux droits de leurs auteurs, dans les conditions précisées dans les <a href="/cgu">CGU</a>.</p></section>
    <section><h2>Données personnelles</h2><p>Les traitements de données et les modalités d’exercice des droits sont décrits dans la <a href="/politique-confidentialite">politique de confidentialité</a>. Pour toute question, écrivez à <a href="mailto:gleam-pro@proton.me">gleam-pro@proton.me</a>.</p></section>
  </LegalLayout>;
}
