import type { ContactFormData, AuditFormData } from "./types";

const CRM_WEBHOOK_URL = process.env.CRM_WEBHOOK_URL || "";
const API_KEY = process.env.CRM_API_KEY || "";

interface CRMLead {
  name: string;
  email: string;
  company: string;
  source: "contact_form" | "free_audit";
  service_interest?: string;
  message?: string;
  website?: string;
  goals?: string;
}

async function sendToCRM(lead: CRMLead): Promise<{ success: boolean; id?: string }> {
  if (!CRM_WEBHOOK_URL || !API_KEY) {
    console.warn("CRM not configured — logging lead:", lead.email);
    return { success: true, id: "dev-" + Date.now() };
  }

  try {
    const response = await fetch(CRM_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        properties: {
          firstname: lead.name.split(" ")[0],
          lastname: lead.name.split(" ").slice(1).join(" ") || "",
          email: lead.email,
          company: lead.company,
          lead_source: lead.source,
          service_interest: lead.service_interest || "",
          message: lead.message || "",
          website: lead.website || "",
          goals: lead.goals || "",
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`CRM responded with ${response.status}`);
    }

    const data = await response.json();
    return { success: true, id: data.id };
  } catch (error) {
    console.error("CRM sync failed:", error);
    return { success: false };
  }
}

export async function submitContactForm(data: ContactFormData) {
  return sendToCRM({
    name: data.name,
    email: data.email,
    company: data.company,
    source: "contact_form",
    service_interest: data.service,
    message: data.message,
  });
}

export async function submitAuditRequest(data: AuditFormData) {
  return sendToCRM({
    name: data.name,
    email: data.email,
    company: data.company,
    source: "free_audit",
    website: data.website,
    goals: data.goals,
  });
}
