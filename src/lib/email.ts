import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { PlanId } from "@/lib/leads/types";

function getPlanName(dict: Dictionary, plan: PlanId): string {
  if (plan === "general") {
    return dict.form.planOptions.general;
  }
  return dict.pricing.plans[plan].name;
}

export async function sendConfirmationEmail(
  to: string,
  plan: PlanId,
  locale: string,
  dict: Dictionary,
  name?: string
): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "WebsMil <onboarding@resend.dev>";

  if (!apiKey) {
    return false;
  }

  const planName = getPlanName(dict, plan);
  const greeting = name ? `${dict.email.greeting} ${name},` : `${dict.email.greeting},`;

  const html = `
    <div style="font-family: system-ui, sans-serif; max-width: 560px; margin: 0 auto; color: #1e293b;">
      <h1 style="color: #0f766e; font-size: 24px;">WebsMil</h1>
      <p>${greeting}</p>
      <p>${dict.email.body} <strong>${planName}</strong>.</p>
      <p><strong>${dict.email.planLabel}:</strong> ${planName}</p>
      <p>${dict.email.nextSteps}</p>
      <p style="margin-top: 32px;">${dict.email.thanks}</p>
      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;" />
      <p style="font-size: 12px; color: #64748b;">WebsMil — websmil.com</p>
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [to],
        subject: dict.email.subject,
        html,
      }),
    });

    return response.ok;
  } catch {
    return false;
  }
}

export async function notifyTeamEmail(
  lead: { email: string; name?: string; company?: string; message?: string; plan: PlanId; locale: string }
): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const teamEmail = process.env.TEAM_NOTIFICATION_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "WebsMil <onboarding@resend.dev>";

  if (!apiKey || !teamEmail) {
    return false;
  }

  const html = `
    <h2>Nueva solicitud — WebsMil</h2>
    <ul>
      <li><strong>Email:</strong> ${lead.email}</li>
      <li><strong>Nombre:</strong> ${lead.name ?? "—"}</li>
      <li><strong>Empresa:</strong> ${lead.company ?? "—"}</li>
      <li><strong>Plan:</strong> ${lead.plan}</li>
      <li><strong>Idioma:</strong> ${lead.locale}</li>
      <li><strong>Mensaje:</strong> ${lead.message ?? "—"}</li>
    </ul>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [teamEmail],
        subject: `[WebsMil] Nueva solicitud — ${lead.plan}`,
        html,
      }),
    });

    return response.ok;
  } catch {
    return false;
  }
}
