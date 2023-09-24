"use server";
import { z } from "zod";
import { utapi } from "uploadthing/server";

const schema = z.object({
  files: z.any(),
  emailTo: z.string().email(),
  emailFrom: z.string().email(),
  title: z.string(),
  message: z.string(),
});

export const onServerSubmit = async (formData: FormData) => {
  try {
    const parsed = schema.parse({
      files: formData.getAll("files"),
      emailTo: formData.get("emailTo"),
      emailFrom: formData.get("emailFrom"),
      title: formData.get("title"),
      message: formData.get("message"),
    });

    const files = formData.getAll("files");
    const response = await utapi.uploadFiles(files);

    console.log("got a response");
    console.log(response);
  } catch {
    return { message: "Failed to create" };
  }
};
