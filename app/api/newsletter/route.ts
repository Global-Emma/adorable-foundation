import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // 1. Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Configure the email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      replyTo: email, // Allows you to hit "Reply" in your inbox to email the client back directly
      subject: `New Newsletter Subscription Request for  ${email}`,
      text: `
        Email: ${email}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #111;">
          <h2>I Want ASACADA to send me news and updates</h2>
          <br />
          <p><strong>Email:</strong> ${email}</p>
        </div>
      `,
    };

    // 3. Send the email transmission
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return NextResponse.json({ message: 'Failed to transmit email package' }, { status: 500 });
  }
}

