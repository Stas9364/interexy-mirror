import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const emails = ['foxxx.9364@gmail.com'];

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, industry, budget, country, message } = await req.json();

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not found');
      return NextResponse.json(
        { success: false, error: 'SMTP configuration missing' },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    for (const to_email of emails) {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: to_email,
        subject: `${name} | Lead from Interexy website`,
        text: `Name: ${name}\nPhone: +${phone}\nBudget: ${budget}\nIndustry: ${industry || '-'}\nEmail: ${email}\nCountry: ${country}\n\n${message}`,
        html: `
          <h3>New Lead from Interexy Website</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> +${phone}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Industry:</strong> ${industry || '-'}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
    }

    console.log('Emails sent successfully');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);

    const message = error instanceof Error ? error.message : String(error);

    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
