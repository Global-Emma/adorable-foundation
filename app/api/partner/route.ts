import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { fullName,
      organization,
      email,
      phone,
      tierIntent,
      message } = await request.json();

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
      subject: `New Partnership Request from ${fullName} from [${organization}]`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Organization: ${organization}
        
      Aim of Partnership:
        ${message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #111;">
          <h2>New Partnership Request</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Organization:</strong> ${organization}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <p><strong>Tier Intent:</strong></p>
          <p style="white-space: pre-wrap;">${tierIntent}</p>
          <p><strong>Aim of Partnership:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
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

