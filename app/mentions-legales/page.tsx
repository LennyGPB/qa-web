import type { Metadata } from "next";
import { LegalLayout, ToComplete } from "../legal-layout";

export const metadata: Metadata = { title: "Mentions légales | YuMan", description: "Identification de l’éditeur et de l’hébergement de YuMan." };

export default function LegalNotices() {
  return <LegalLayout title="Mentions légales" intro="Les informations relatives à l’éditeur du service YuMan et à ses prestataires d’hébergement.">
    <aside className="legal-draft">Document à compléter avant publication : adresse professionnelle, numéro SIREN/SIRET, téléphone professionnel et coordonnées exactes des hébergeurs.</aside>
    <section><h2>Éditeur</h2><p>YuMan est édité par <strong>Lenny GOMES</strong>, entrepreneur individuel exerçant sous le régime de la micro-entreprise. Le directeur de la publication est Lenny GOMES.</p><dl><dt>Adresse professionnelle</dt><dd><ToComplete>À compléter</ToComplete></dd><dt>Numéro SIREN/SIRET</dt><dd><ToComplete>À compléter</ToComplete></dd><dt>Téléphone professionnel</dt><dd><ToComplete>À compléter</ToComplete></dd><dt>Contact</dt><dd><a href="mailto:gleam-pro@proton.me">gleam-pro@proton.me</a></dd></dl></section>
    <section><h2>Hébergement</h2><p>Le site web est hébergé par <strong>Vercel</strong> et la base de données par <strong>Neon</strong>, selon les informations communiquées par l’éditeur. Les coordonnées légales et adresses de ces hébergeurs restent à renseigner.</p><dl><dt>Vercel</dt><dd><ToComplete>Raison sociale, adresse et téléphone à compléter</ToComplete></dd><dt>Neon</dt><dd><ToComplete>Raison sociale, adresse et téléphone à compléter</ToComplete></dd></dl><p>Le code du service utilise également un stockage d’images compatible Cloudflare R2. L’hébergement de l’API et le statut de ce stockage doivent être confirmés avant publication.</p></section>
    <section><h2>Propriété intellectuelle</h2><p>Le nom YuMan, les éléments graphiques et les contenus créés par l’éditeur sont protégés par les droits qui leur sont applicables. Les questions, réponses et images publiées par les utilisateurs restent soumises aux droits de leurs auteurs, dans les conditions précisées dans les <a href="/cgu">CGU</a>.</p></section>
    <section><h2>Données personnelles</h2><p>Les traitements de données et les modalités d’exercice des droits sont décrits dans la <a href="/politique-confidentialite">politique de confidentialité</a>. Pour toute question, écrivez à <a href="mailto:gleam-pro@proton.me">gleam-pro@proton.me</a>.</p></section>
  </LegalLayout>;
}
