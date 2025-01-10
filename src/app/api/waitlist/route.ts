import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializar Resend con la API key directamente para pruebas
const resend = new Resend('re_GP2JqWcc_9e9LMq98RKNGGHwxnGGPNVbm');

// ID de la audiencia (audience) en Resend - asegúrate de reemplazar esto con tu ID real
const QUESTORIA_AUDIENCE_ID = '9a76ac0e-30a9-4db7-8bb1-7590baca15cb';

export async function POST(request: Request) {
  try {
    const { email, firstName = '', lastName = '' } = await request.json();
    console.log('Attempting to send email to:', email); // Para debugging

    // Primero, enviar el correo electrónico
    const emailData = await resend.emails.send({
      from: 'Questoria <onboarding@resend.dev>',
      to: [email],
      subject: 'Welcome to Questoria Waitlist!',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h1 style="color: #6366f1;">Welcome to Questoria!</h1>
          <p>Thank you for joining our waitlist. We're thrilled to have you on board!</p>
          <p>We'll keep you updated on our progress and let you know as soon as we launch.</p>
          <br/>
          <p>Best regards,</p>
          <p>The Questoria Team</p>
        </div>
      `,
    });
    console.log('Email sent successfully:', emailData); // Para debugging

    // Luego, crear un contacto en Resend
    const contactData = await resend.contacts.create({
      email: email,
      firstName: firstName,
      lastName: lastName,
      unsubscribed: false,
      audienceId: QUESTORIA_AUDIENCE_ID,
    });
    console.log('Contact created successfully:', contactData); // Para debugging

    return NextResponse.json({
      success: true,
      message: 'Successfully joined waitlist',
      emailData,
      contactData
    });
  } catch (error) {
    console.error('Error processing waitlist request:', error); // Para debugging
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to join waitlist',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}