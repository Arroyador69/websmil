import { sql } from "@vercel/postgres";
import type { Lead, LeadInput } from "./types";

export async function initLeadsTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS leads (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email TEXT NOT NULL,
      name TEXT,
      company TEXT,
      message TEXT,
      plan TEXT NOT NULL,
      locale TEXT NOT NULL DEFAULT 'es',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
}

export async function saveLeadPostgres(input: LeadInput): Promise<Lead> {
  await initLeadsTable();

  const result = await sql`
    INSERT INTO leads (email, name, company, message, plan, locale)
    VALUES (${input.email}, ${input.name ?? null}, ${input.company ?? null}, ${input.message ?? null}, ${input.plan}, ${input.locale})
    RETURNING id, email, name, company, message, plan, locale, created_at
  `;

  const row = result.rows[0];
  return {
    id: row.id as string,
    email: row.email as string,
    name: (row.name as string) ?? undefined,
    company: (row.company as string) ?? undefined,
    message: (row.message as string) ?? undefined,
    plan: row.plan as Lead["plan"],
    locale: row.locale as string,
    createdAt: (row.created_at as Date).toISOString(),
  };
}

export async function getLeadsPostgres(): Promise<Lead[]> {
  await initLeadsTable();

  const result = await sql`
    SELECT id, email, name, company, message, plan, locale, created_at
    FROM leads
    ORDER BY created_at DESC
  `;

  return result.rows.map((row) => ({
    id: row.id as string,
    email: row.email as string,
    name: (row.name as string) ?? undefined,
    company: (row.company as string) ?? undefined,
    message: (row.message as string) ?? undefined,
    plan: row.plan as Lead["plan"],
    locale: row.locale as string,
    createdAt: (row.created_at as Date).toISOString(),
  }));
}
