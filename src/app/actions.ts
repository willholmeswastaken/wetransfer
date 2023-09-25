"use server";

import { z } from "zod";
import { utapi } from "uploadthing/server";
import { Resend } from "resend";
import { env } from "@/env.mjs";
import { revalidatePath } from "next/cache";

const schema = z.object({
  files: z.any(),
  email: z.string().email(),
  title: z.string(),
  message: z.string(),
});

export const sendFile = async (_prevState: unknown, formData: FormData) => {
  try {
    const parsed = schema.parse({
      files: formData.getAll("files"),
      email: formData.get("email"),
      title: formData.get("title"),
      message: formData.get("message"),
    });

    const files = formData.getAll("files");
    console.log("Uploading to uploadthing");
    const fileResponse = await utapi.uploadFiles(files);
    console.log("Uploaded file to uploadthing");

    const resend = new Resend(env.RESEND_API_KEY);
    console.log(`Sending email to ${parsed.email}`);
    const emailResponse = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: parsed.email,
      subject: parsed.title,
      html: `<h1>File from: ${parsed.email}</h2> <br /> <p>${parsed.message}</p> <br /> <p>Click <a href='${fileResponse[0]?.data?.url}'>Here</a> to download.`,
    });

    console.log(
      `Sent email to ${parsed.email} with resend id: ${emailResponse.id}`,
    );

    revalidatePath("/");
    return { message: `File sent to ${parsed.email}` };
  } catch (e) {
    console.error(e);
    return { message: "Failed to create" };
  }
};
