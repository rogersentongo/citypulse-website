import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = contactSchema.parse(body);

    // Initialize Mailgun
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY || '',
    });

    // Format email content
    const emailContent = `
Contact Form Inquiry - CityPulse NYC
====================================

Name: ${validatedData.name}
Email: ${validatedData.email}
Subject: ${validatedData.subject}

Message:
${validatedData.message}

---
Submitted: ${new Date().toLocaleString('en-US', {
  timeZone: 'America/New_York',
  dateStyle: 'full',
  timeStyle: 'short'
})} EST
    `.trim();

    // Send email via Mailgun
    await mg.messages.create(process.env.MAILGUN_DOMAIN || '', {
      from: process.env.MAILGUN_FROM_EMAIL || 'CityPulse NYC <noreply@citypulse.com>',
      to: [process.env.RECIPIENT_EMAIL || 'rogersentongo@gmail.com'],
      subject: `Contact Form: ${validatedData.subject}`,
      text: emailContent,
      'h:Reply-To': validatedData.email, // Allow easy reply to the sender
    });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
