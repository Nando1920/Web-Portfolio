import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();
  const myEmail = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: myEmail,
      pass: password,
    },
  });

  try {
    const resp = await transporter.sendMail({
      from: myEmail,
      to: myEmail,
      replyTo: email,
      subject: `${name} wants to get in touch!`,
      html: `
        <p>Name: ${name} </p>
        <p>Email: ${email} </p>
        <p>${message} </p>
        `,
    });

    if (resp.accepted.includes(email)) {
      await transporter.sendMail({
        from: myEmail,
        to: email,
        subject: `Contact confirmaton`,
        html: `
          <p>Thanks ${name} </p>
          `,
      });
    }

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "COULD NOT SEND MESSAGE" },
      { status: 500 }
    );
  }
}
