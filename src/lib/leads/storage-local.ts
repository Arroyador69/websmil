import { promises as fs } from "fs";
import path from "path";
import type { Lead, LeadInput } from "./types";

const DATA_DIR = path.join(process.cwd(), ".data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function readLeadsFile(): Promise<Lead[]> {
  try {
    const content = await fs.readFile(LEADS_FILE, "utf-8");
    return JSON.parse(content) as Lead[];
  } catch {
    return [];
  }
}

async function writeLeadsFile(leads: Lead[]) {
  await ensureDataDir();
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

export async function saveLeadLocal(input: LeadInput): Promise<Lead> {
  const leads = await readLeadsFile();
  const lead: Lead = {
    id: crypto.randomUUID(),
    ...input,
    createdAt: new Date().toISOString(),
  };
  leads.unshift(lead);
  await writeLeadsFile(leads);
  return lead;
}

export async function getLeadsLocal(): Promise<Lead[]> {
  return readLeadsFile();
}
