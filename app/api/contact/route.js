import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();
  const { firstName, lastName, email, company, topic, message } = body;

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // Log the submission (replace with email/CRM integration later)
  console.log('\n── New Contact Submission ──────────────────');
  console.log(`  Name:    ${firstName} ${lastName}`);
  console.log(`  Email:   ${email}`);
  console.log(`  Company: ${company || '—'}`);
  console.log(`  Topic:   ${topic || '—'}`);
  console.log(`  Message: ${message}`);
  console.log('────────────────────────────────────────────\n');

  return NextResponse.json({ success: true });
}
