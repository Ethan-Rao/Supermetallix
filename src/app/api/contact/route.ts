import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  // Instantiate inside the handler so the build never evaluates this
  // with an undefined RESEND_API_KEY during static page-data collection.
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { name, email, company, purpose, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const contactEmailRaw = process.env.CONTACT_EMAIL;
    if (!contactEmailRaw) {
      console.error("CONTACT_EMAIL environment variable is not set");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }
    const contactEmails = contactEmailRaw.split(",").map((e) => e.trim()).filter(Boolean);

    const purposeLabel = purpose || "Not specified";
    const companyLabel = company || "Not provided";

    const fromAddress =
      process.env.RESEND_FROM_EMAIL ?? "SuperMetalix Contact Form <onboarding@resend.dev>";

    await resend.emails.send({
      from: fromAddress,
      to: contactEmails,
      replyTo: email,
      subject: `[SuperMetalix] New ${purposeLabel} from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
          <div style="background: #050810; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <p style="color: #93c5fd; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 8px;">
              SuperMetalix Contact Form
            </p>
            <h1 style="color: #ffffff; font-size: 20px; margin: 0;">
              New ${purposeLabel}
            </h1>
          </div>
          <div style="background: #f9fafb; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px; width: 120px; vertical-align: top;">Name</td>
                <td style="padding: 10px 0; color: #111827; font-size: 14px; font-weight: 600;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Email</td>
                <td style="padding: 10px 0; font-size: 14px;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr style="border-top: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Company</td>
                <td style="padding: 10px 0; color: #111827; font-size: 14px;">${companyLabel}</td>
              </tr>
              <tr style="border-top: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Purpose</td>
                <td style="padding: 10px 0; color: #111827; font-size: 14px;">${purposeLabel}</td>
              </tr>
              <tr style="border-top: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #111827; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                Submitted via supermetalix.com — reply directly to this email to respond to ${name}.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
