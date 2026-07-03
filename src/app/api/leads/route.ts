import { NextResponse } from "next/server";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isValidLocale } from "@/lib/i18n/config";
import { saveLead } from "@/lib/leads";
import { isValidEmail, isValidPlan } from "@/lib/leads/types";
import { sendConfirmationEmail, notifyTeamEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, company, message, plan, locale } = body;

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!plan || !isValidPlan(plan)) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const validLocale = locale && isValidLocale(locale) ? locale : "es";

    const lead = await saveLead({
      email: email.trim().toLowerCase(),
      name: name?.trim() || undefined,
      company: company?.trim() || undefined,
      message: message?.trim() || undefined,
      plan,
      locale: validLocale,
    });

    const dict = getDictionary(validLocale);
    const emailSent = await sendConfirmationEmail(
      lead.email,
      lead.plan,
      validLocale,
      dict,
      lead.name
    );
    await notifyTeamEmail(lead);

    return NextResponse.json({
      success: true,
      emailSent,
      id: lead.id,
    });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
