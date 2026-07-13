import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, phone, service, message } = body;

    if (!name || !phone || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",

      to: "sumit9354800@gmail.com",

      subject: `New Service Request - ${service}`,

      html: `
        <h2>New Booking Received</h2>

        <hr/>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Service:</strong> ${service}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}