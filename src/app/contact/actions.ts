"use server";

export type ContactFormState = {
  success: boolean;
  message: string;
} | null;

export async function sendMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const subject = formData.get("subject") as string | null;
  const message = formData.get("message") as string | null;

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return { success: false, message: "All fields are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  try {
    // TODO: Wire up email delivery (e.g. Resend, Nodemailer)
    // await resend.emails.send({
    //   from: "Contact Form <noreply@hsco.pk>",
    //   to: "technologies@hsco.pk",
    //   subject: `[Contact] ${subject}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    // });

    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      success: true,
      message: "Thank you! Your message has been received. We'll get back to you shortly.",
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong. Please try again or email us directly.",
    };
  }
}
