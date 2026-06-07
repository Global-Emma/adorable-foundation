import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, location, reason } = await request.json();

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
      subject: `New Volunteer Request from ${name} from [${location}]`,
      text: `
        Name: ${name}
        Email: ${email}
        Location: ${location}
        
      Aim of Joining:
        ${reason}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #111;">
          <h2>New Volunteer Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <p><strong>Aim of Joining:</strong></p>
          <p style="white-space: pre-wrap;">${reason}</p>
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

