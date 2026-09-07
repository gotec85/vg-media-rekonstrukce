import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Neplatná data formuláře." }, { status: 400 });
  }

  const { name, email, phone, message } = (body ?? {}) as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json(
      { error: "Vyplňte prosím jméno, e-mail a zprávu." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Zadejte platný e-mail." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY není nastavený — formulář nemůže odeslat e-mail.");
    return NextResponse.json(
      { error: "Formulář teď není dostupný, napište nám prosím přímo na info@vgmedia.cz." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const phoneLine = typeof phone === "string" && phone.trim() ? `\nTelefon: ${phone.trim()}` : "";

    await resend.emails.send({
      from: "VG Media web <onboarding@resend.dev>",
      to: "info@vgmedia.cz",
      replyTo: email,
      subject: `Nová poptávka z webu: ${name}`,
      text: `Jméno: ${name}\nE-mail: ${email}${phoneLine}\n\nZpráva:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Odeslání e-mailu selhalo:", err);
    return NextResponse.json(
      { error: "Odeslání se nepovedlo, zkuste to prosím znovu nebo napište na info@vgmedia.cz." },
      { status: 500 }
    );
  }
}
