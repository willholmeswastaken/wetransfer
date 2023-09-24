import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { z } from "zod";
import { utapi } from "uploadthing/server";
import { Resend } from 'resend';
import { env } from "@/env.mjs";



const schema = z.object({
    files: z.any(),
    email: z.string().email(),
    title: z.string(),
    message: z.string(),
});

export const onServerSubmit = async (formData: FormData) => {
    'use server';
    try {
        const parsed = schema.parse({
            files: formData.getAll("files"),
            email: formData.get("email"),
            title: formData.get("title"),
            message: formData.get("message"),
        });

        const files = formData.getAll("files");
        const response = await utapi.uploadFiles(files);
        const resend = new Resend(env.RESEND_API_KEY);

        await resend.emails.send({
            from: 'will@willholmes.dev',
            to: parsed.email,
            subject: parsed.title,
            html: `<p>${parsed.message}</p>`
        });

        console.log("got a response");
        console.log(response);
    } catch {
        return { message: "Failed to create" };
    }
};


export default function UploadForm() {
    return (
        <form action={onServerSubmit} className="mt-10 flex-grow mb-10" >
            <Card className="max-w-2xl mx-auto" >
                <CardHeader >
                    <CardTitle >Send a file</CardTitle>
                    <CardDescription >Enter the information below.</CardDescription>
                </CardHeader>
                <CardContent >
                    <div className="space-y-4" >
                        <div className="self-start justify-self-start space-y-2" >
                            <input
                                type="file"
                                name='files'
                            />
                            4MB
                        </div>
                        <div className="space-y-2" >
                            <Label htmlFor="email">
                                Email To
                            </Label>
                            <Input id="email" name="email" placeholder="johndoe@example.com" required type="email" />
                        </div>
                        <div className="space-y-2" >
                            <Label htmlFor="title">
                                Title
                            </Label>
                            <Input id="title" name="title" required type="text" />
                        </div>
                        <div className="space-y-2" >
                            <Label htmlFor="message">
                                Message
                            </Label>
                            <Input id="message" name="message" required type="password" />
                        </div>
                    </div>
                </CardContent>
                <CardFooter >
                    <Button className="w-full" type="submit">
                        Send File
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}