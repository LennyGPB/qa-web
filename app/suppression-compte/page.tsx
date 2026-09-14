"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

export default function AccountDeletionPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!confirmed || submitting) return;
    setError("");
    setSubmitting(true);
    try {
      const response = await fetch("/api/account-deletion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password }),
      });
      const result: { message?: string } = await response.json();
      if (!response.ok) throw new Error(result.message || "La demande n’a pas pu être envoyée.");
      setPassword("");
      setSuccess(true);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Une erreur est survenue. Réessaie plus tard.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="YuMan, accueil">Yu<span>Man</span></Link>
        <span className="header-note">Gestion de ton compte</span>
      </header>
      <main className="page-shell">
        <div className="page-grid">
          <section className="hero" aria-labelledby="page-title">
            <div className="brand-shape" aria-hidden="true">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M8 10h18M12 10V7h10v3m-12 0 1 18h12l1-18M14 15v8m6-8v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h1 id="page-title">Supprimer ton <em>compte.</em></h1>
            <p>Tu peux demander la suppression de ton compte YuMan ici. Prends un instant pour vérifier ce que cela implique avant de confirmer.</p>
            <div className="timeline" aria-label="Déroulement de la suppression">
              <div className="timeline-row"><span className="timeline-number">1</span><div><strong>Confirme ton identité</strong><p>Connecte-toi avec l’e-mail et le mot de passe de ton compte.</p></div></div>
              <div className="timeline-row"><span className="timeline-number">2</span><div><strong>Un délai de 30 jours commence</strong><p>Ton compte et tes contenus seront supprimés après ce délai.</p></div></div>
              <div className="timeline-row"><span className="timeline-number">3</span><div><strong>Tu peux encore changer d’avis</strong><p>Une reconnexion avant la fin des 30 jours annule la suppression.</p></div></div>
            </div>
          </section>
          <section className="form-panel" aria-labelledby="form-title">
            {success ? (
              <div className="success" role="status">
                <div className="success-icon" aria-hidden="true"><svg width="31" height="31" viewBox="0 0 31 31" fill="none"><path d="m7 15.5 5.5 5.5L24 9.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                <h2 id="form-title">Demande enregistrée</h2>
                <p>La suppression de ton compte est programmée dans 30 jours. Si tu te reconnectes avant cette date, elle sera annulée.</p>
              </div>
            ) : (
              <>
                <h2 id="form-title">Faire la demande</h2>
                <p className="form-intro">Saisis les identifiants de ton compte pour continuer.</p>
                <form onSubmit={submit}>
                  <div className="field"><label htmlFor="email">Adresse e-mail</label><input id="email" name="email" type="email" autoComplete="email" placeholder="ton@email.com" value={email} onChange={(event) => setEmail(event.target.value)} required disabled={submitting}/></div>
                  <div className="field"><label htmlFor="password">Mot de passe</label><input id="password" name="password" type="password" autoComplete="current-password" placeholder="Ton mot de passe" value={password} onChange={(event) => setPassword(event.target.value)} required disabled={submitting}/></div>
                  <div className="notice"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><circle cx="9" cy="9" r="7.5" stroke="currentColor"/><path d="M9 8v4m0-7h.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg><span>Ton compte et tes contenus seront supprimés dans 30 jours, sauf si tu te reconnectes entre-temps.</span></div>
                  <label className="confirm"><input type="checkbox" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} disabled={submitting}/><span>Je comprends que la suppression de mon compte et de mes contenus sera programmée.</span></label>
                  {error && <p className="feedback" role="alert">{error}</p>}
                  <button className="submit" type="submit" disabled={!confirmed || submitting}>{submitting ? "Envoi en cours…" : "Demander la suppression"}</button>
                </form>
                <p className="form-foot"><strong>Compte créé avec Google ?</strong><br/>Ouvre l’app YuMan, puis va dans Profil → Modifier le profil → Paramètres → Supprimer mon compte.</p>
              </>
            )}
          </section>
        </div>
      </main>
      <footer className="site-footer">© YuMan · <Link href="/mentions-legales">Mentions légales</Link> · <Link href="/cgu">CGU</Link> · <Link href="/politique-confidentialite">Confidentialité</Link></footer>
    </>
  );
}
