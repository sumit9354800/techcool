import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, phone, service, message } = body;
    const submittedAt = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    if (!name || !phone || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        {
          status: 400,
        },
      );
    }

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",

      to: "sumit9354800@gmail.com",

      subject: `New Service Request - ${service}`,

      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
</head>

<body style="margin:0;padding:0;background:#f8fafc;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
<tr>
<td align="center">

<table
width="650"
cellpadding="0"
cellspacing="0"
style="
background:#ffffff;
border-radius:16px;
overflow:hidden;
border:1px solid #e2e8f0;
">

<!-- Header -->

<tr>
<td
style="
background:#2563eb;
padding:32px;
text-align:center;
">

<h1
style="
margin:0;
color:white;
font-size:30px;
">
MRTECHYCOOL
</h1>

<p
style="
margin-top:10px;
font-size:15px;
color:#dbeafe;
">
New Service Request
</p>

</td>
</tr>

<!-- Body -->

<tr>
<td style="padding:35px;">

<h2
style="
margin-top:0;
color:#0f172a;
">
Customer Details
</h2>

<table
width="100%"
cellpadding="12"
cellspacing="0"
style="
border-collapse:collapse;
margin-top:20px;
">

<tr>
<td style="font-weight:bold;width:170px;">Name</td>
<td>${name}</td>
</tr>

<tr>
<td style="font-weight:bold;">Phone</td>
<td>
<a
href="tel:${phone}"
style="
color:#2563eb;
text-decoration:none;
">
${phone}
</a>
</td>
</tr>

<tr>
<td style="font-weight:bold;">Service</td>
<td>${service}</td>
</tr>

<tr>
<td style="font-weight:bold;">Submitted</td>
<td>${submittedAt}</td>
</tr>

<tr>
<td style="font-weight:bold;">Status</td>

<td>

<span
style="
background:#dcfce7;
color:#166534;
padding:6px 12px;
border-radius:999px;
font-size:13px;
font-weight:bold;
">
New Booking
</span>

</td>

</tr>

</table>

<div
style="
margin-top:35px;
">

<h3
style="
margin-bottom:12px;
color:#0f172a;
">
Customer Issue
</h3>

<div
style="
background:#f8fafc;
border-left:4px solid #2563eb;
padding:18px;
border-radius:8px;
line-height:1.8;
">

${message}

</div>

</div>

<div
style="
margin-top:35px;
">

<h3
style="
margin-bottom:15px;
color:#0f172a;
">
Quick Actions
</h3>

<a
href="tel:${phone}"
style="
display:inline-block;
background:#2563eb;
color:white;
text-decoration:none;
padding:12px 20px;
border-radius:8px;
font-weight:bold;
margin-right:12px;
">
📞 Call Customer
</a>

<a
href="https://wa.me/91${phone}"
style="
display:inline-block;
background:#16a34a;
color:white;
text-decoration:none;
padding:12px 20px;
border-radius:8px;
font-weight:bold;
">
💬 WhatsApp Customer
</a>

</div>

</td>
</tr>

<!-- Footer -->

<tr>

<td
style="
background:#0f172a;
padding:30px;
text-align:center;
">

<h3
style="
margin:0;
color:white;
">
MRTECHYCOOL
</h3>

<p
style="
margin-top:10px;
color:#cbd5e1;
line-height:1.7;
">
Professional AC & LED Repair Services
</p>

<p
style="
margin-top:20px;
color:#94a3b8;
font-size:13px;
">
This email was automatically generated from the MRTECHYCOOL website.
</p>

</td>

</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
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
        },
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
      },
    );
  }
}
