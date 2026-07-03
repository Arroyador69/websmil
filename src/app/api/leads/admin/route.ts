import { NextResponse } from "next/server";
import { getLeads } from "@/lib/leads";

export async function GET(request: Request) {
  const adminSecret = process.env.ADMIN_SECRET;
  const authHeader = request.headers.get("authorization");

  if (!adminSecret || authHeader !== `Bearer ${adminSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const leads = await getLeads();
  return NextResponse.json({ leads, total: leads.length });
}
