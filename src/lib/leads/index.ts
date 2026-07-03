import type { Lead, LeadInput } from "./types";
import { saveLeadLocal, getLeadsLocal } from "./storage-local";
import { saveLeadPostgres, getLeadsPostgres } from "./storage-postgres";

function isPostgresConfigured(): boolean {
  return Boolean(process.env.POSTGRES_URL);
}

export async function saveLead(input: LeadInput): Promise<Lead> {
  if (isPostgresConfigured()) {
    return saveLeadPostgres(input);
  }
  return saveLeadLocal(input);
}

export async function getLeads(): Promise<Lead[]> {
  if (isPostgresConfigured()) {
    return getLeadsPostgres();
  }
  return getLeadsLocal();
}
