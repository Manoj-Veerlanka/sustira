import { Resend } from "resend";
import { bookDemoSchema } from "@/lib/validations/forms";
import { executeD1Query } from "@/lib/d1";

export async function POST(request: Request) {
  try {
    console.log("API route reached");

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL;
    const adminEmail = process.env.ADMIN_EMAIL;

    if (!resendApiKey || !fromEmail || !adminEmail) {
      console.log("Missing env:", {
        hasResendApiKey: Boolean(resendApiKey),
        fromEmail,
        adminEmail,
      });

      return Response.json(
        { message: "Missing email environment variables" },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const body = await request.json();
console.log("Request body:", body);

const validation = bookDemoSchema.safeParse(body);

if (!validation.success) {
  return Response.json(
    {
      message: validation.error.issues[0]?.message || "Invalid form data",
    },
    { status: 400 }
  );
}

const { name, email, phone, course, city, message } = validation.data;

await executeD1Query(
  `
    INSERT INTO leads 
    (form_type, name, email, phone, course, city, message)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `,
  ["book_demo", name, email, phone, course, city || null, message || null]
);

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      replyTo: email,
      subject: `New Demo Request - ${course}`,
      html: `
        <h2>New Demo Booking Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Course:</b> ${course}</p>
        <p><b>City:</b> ${city || "Not provided"}</p>
        <p><b>Message:</b> ${message || "No message provided"}</p>
      `,
    });

    if (error) {
      console.log("Resend error:", error);
      return Response.json(
        { message: "Resend failed", error },
        { status: 500 }
      );
    }

    console.log("Email sent:", data);

    return Response.json(
      { message: "Demo request submitted successfully.", data },
      { status: 200 }
    );
  } catch (error) {
    console.log("API error:", error);

    return Response.json(
      { message: "Email failed", error },
      { status: 500 }
    );
  }
}