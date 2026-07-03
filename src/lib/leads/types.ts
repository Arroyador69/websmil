export type PlanId = "essential" | "professional" | "premium" | "general";

export interface Lead {
  id: string;
  email: string;
  name?: string;
  company?: string;
  message?: string;
  plan: PlanId;
  locale: string;
  createdAt: string;
}

export interface LeadInput {
  email: string;
  name?: string;
  company?: string;
  message?: string;
  plan: PlanId;
  locale: string;
}

const PLAN_IDS: PlanId[] = ["essential", "professional", "premium", "general"];

export function isValidPlan(plan: string): plan is PlanId {
  return PLAN_IDS.includes(plan as PlanId);
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
