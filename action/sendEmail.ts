"use server";
import { revalidatePath } from "next/cache";
import { Resend } from "resend";

export async function sendEmail(formdata: FormData) {
  console.log(formdata.get);

  const resend = new Resend(process.env.RESEND);

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "shohagmiah2100@gmail.com",
    subject: "CONTACT ",
    html: ` <div>
    <h2>name: ${formdata.get("name")}</h2>
    <h3>email: ${formdata.get("email")}</h3>
    <p>message: ${formdata.get("message")}</p>
  </div>`,
  });
}
