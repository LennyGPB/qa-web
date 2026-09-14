const API_URL = (process.env.QA_API_URL || "https://qa-api-production-f4bf.up.railway.app").replace(/\/$/, "");

export async function POST(request: Request) {
  let body: { email?: unknown; password?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Saisis ton e-mail et ton mot de passe." }, { status: 400 });
  }

  if (typeof body.email !== "string" || typeof body.password !== "string" || !body.email.trim() || !body.password) {
    return Response.json({ message: "Saisis ton e-mail et ton mot de passe." }, { status: 400 });
  }

  try {
    const login = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: body.email.trim(), password: body.password }),
      cache: "no-store",
    });
    if (!login.ok) {
      return Response.json({ message: login.status === 401 ? "E-mail ou mot de passe incorrect." : "Connexion impossible pour le moment. Réessaie plus tard." }, { status: login.status === 401 ? 401 : 502 });
    }
    const auth: { accessToken?: string } = await login.json();
    if (!auth.accessToken) throw new Error("Missing access token");

    const deletion = await fetch(`${API_URL}/users/me/deletion-request`, {
      method: "POST",
      headers: { Authorization: `Bearer ${auth.accessToken}` },
      cache: "no-store",
    });
    if (!deletion.ok) {
      return Response.json({ message: "La demande n’a pas pu être enregistrée. Réessaie plus tard." }, { status: 502 });
    }
    return Response.json({ message: "Demande enregistrée." });
  } catch {
    return Response.json({ message: "Impossible de contacter le serveur. Réessaie plus tard." }, { status: 502 });
  }
}
