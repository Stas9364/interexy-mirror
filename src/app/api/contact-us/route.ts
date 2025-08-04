import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const emails = ['foxxx.9364@gmail.com'];

export async function POST(req: NextRequest) {
  const { name, email, phone, industry, budget, country, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    port: 587,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    emails.forEach(async to_email => {
      await transporter.sendMail({
        from: 'mail.sender.199@gmail.com',
        to: to_email,
        subject: `${name} | Lead from Interexy website`,
        text: `Name: ${name}\nPhone: +${phone}\nBudget: ${budget}\nIndustry: ${industry || '-'}\nEmail: ${email}\nCountry: ${country}\n\n${message}`,
      });
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
