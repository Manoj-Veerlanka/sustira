import { Resend } from "resend";
import { contactSchema } from "@/lib/validations/forms";

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const adminEmail = process.env.ADMIN_EMAIL;

    if (!resendApiKey || !fromEmail || !adminEmail) {
      return Response.json(
        { message: "Missing email environment variables" },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const body = await request.json();

const validation = contactSchema.safeParse(body);

if (!validation.success) {
  return Response.json(
    {
      message: validation.error.issues[0]?.message || "Invalid form data",
    },
    { status: 400 }
  );
}

const { fullName, phone, email, city, interest, message } = validation.data;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      replyTo: email,
      subject: `New Contact Enquiry - ${fullName}`,
      html: `
        <h2>New Contact Enquiry</h2>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>City:</b> ${city || "Not provided"}</p>
        <p><b>Interest:</b> ${interest || "Not provided"}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    if (error) {
      return Response.json(
        { message: "Resend failed", error },
        { status: 500 }
      );
    }

    return Response.json(
      { message: "Contact enquiry submitted successfully.", data },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "Contact enquiry failed", error },
      { status: 500 }
    );
  }
}