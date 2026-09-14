import type { Metadata } from "next";
import { LegalLayout } from "../legal-layout";

export const metadata: Metadata = {
  title: "Protection des mineurs contre l’exploitation et les abus sexuels | YuMan",
  description: "Les règles de YuMan contre l’exploitation et les abus sexuels sur mineurs, et la marche à suivre pour signaler un contenu ou un comportement préoccupant.",
};

export default function ChildSafetyPolicy() {
  return <LegalLayout
    title="Protection des mineurs"
    intro="YuMan interdit toute exploitation et tout abus sexuel sur mineurs. Cette politique explique ce qui est interdit, comment le signaler et comment nous réagissons."
  >
    <section>
      <h2>Notre règle</h2>
      <p>Sur YuMan, aucun contenu ni comportement qui exploite, abuse sexuellement ou met sexuellement en danger une personne mineure n’est autorisé. Cette interdiction s’applique aux questions, réponses, profils et à toute autre utilisation du service, même si le contenu est présenté comme fictif, généré ou partagé « pour rire ».</p>
      <p>Sont notamment interdits les images ou vidéos d’abus sexuels sur mineurs, leur création, leur partage ou leur sollicitation ; les propositions sexuelles adressées à un mineur ; la manipulation d’un mineur à des fins sexuelles ; le chantage à l’image intime ; et la promotion ou l’organisation de l’exploitation sexuelle de mineurs.</p>
    </section>
    <section>
      <h2>Signaler un contenu ou un compte</h2>
      <p>Dans l’application YuMan, utilisez l’option <strong>Signaler</strong> sur la question, la réponse ou le profil concerné. Choisissez le motif le plus adapté et ajoutez, si possible, des détails utiles à l’examen. Vous pouvez aussi écrire à notre point de contact pour la sécurité des mineurs : <a href="mailto:gleam-pro@proton.me?subject=Signalement%20s%C3%A9curit%C3%A9%20des%20mineurs%20YuMan">gleam-pro@proton.me</a>. Un signalement peut être envoyé même si vous n’avez pas de compte.</p>
      <p>Indiquez le lien ou le nom du profil concerné et décrivez les faits. <strong>Ne téléchargez pas, ne transférez pas et ne joignez pas d’images ou de vidéos d’abus sexuels sur mineurs.</strong></p>
    </section>
    <section>
      <h2>Traitement des signalements</h2>
      <p>Les signalements sont examinés afin d’identifier les contenus et comportements contraires à cette politique. Selon la situation, YuMan peut retirer un contenu, restreindre ou suspendre un compte, et prendre les mesures nécessaires conformément au droit applicable, notamment en signalant les faits aux autorités compétentes. La gravité d’un risque pour un mineur est prise en compte dans la priorité de traitement.</p>
      <p>Des vérifications automatisées peuvent aider à repérer certains contenus publiés, mais elles ne remplacent pas les signalements des utilisateurs ni l’examen des cas préoccupants.</p>
    </section>
    <section>
      <h2>En cas de danger immédiat</h2>
      <p>Si un enfant est en danger immédiat en France, contactez la police ou la gendarmerie au <strong>17</strong>, ou le <strong>112</strong>. Pour signaler un enfant en danger ou demander conseil, appelez le <strong>119</strong>. Vous pouvez également signaler un contenu illégal en ligne sur <a href="https://www.internet-signalement.gouv.fr/" target="_blank" rel="noreferrer">PHAROS</a>. Ces démarches peuvent être faites en parallèle d’un signalement à YuMan.</p>
    </section>
  </LegalLayout>;
}
