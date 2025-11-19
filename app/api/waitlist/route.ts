import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const waitlistSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = waitlistSchema.parse(body);

    // Initialize Mailgun
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY || '',
    });

    // Format email content
    const emailContent = `
New Waitlist Signup - CityPulse NYC
====================================

Name: ${validatedData.name}
Email: ${validatedData.email}
${validatedData.message ? `\nMessage:\n${validatedData.message}` : ''}

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
      subject: 'New Waitlist Signup - CityPulse NYC',
      text: emailContent,
    });

    return NextResponse.json(
      { message: 'Successfully joined waitlist' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist submission error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to process request. Please try again.' },
      { status: 500 }
    );
  }
}
