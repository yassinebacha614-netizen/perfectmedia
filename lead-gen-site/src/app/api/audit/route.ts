import { NextResponse } from "next/server";
import { submitAuditRequest } from "@/lib/crm";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, website, company, goals } = body;

    if (!name || !email || !website) {
      return NextResponse.json(
        { error: "Name, email, and website are required." },
        { status: 400 }
      );
    }

    const result = await submitAuditRequest({ name, email, website, company, goals });

    if (!result.success) {
      return NextResponse.json(
        { error: "Failed to submit. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: result.id });
  } catch {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
