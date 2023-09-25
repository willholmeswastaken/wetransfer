'use client';
/* eslint-disable */
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { experimental_useFormState as useFormState } from "react-dom";
import { sendFile } from '../app/actions';
import { Alert, AlertTitle } from "./ui/alert";
import { Textarea } from "./ui/textarea";

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button className="w-full" type="submit" aria-disabled={pending} disabled={pending}>
            Send File
        </Button>
    )
}

export default function UploadForm() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const [state, formAction] = useFormState(sendFile, { message: '' });
    return (
        <div className='flex-grow'>
            <form action={formAction} className="my-10 gap-y-4" >
                {state.message.length > 0 && (
                    <Alert className='max-w-2xl mx-auto mb-4'>
                        <AlertTitle>{state.message}</AlertTitle>
                    </Alert>
                )}
                <Card className="max-w-2xl mx-auto" >
                    <CardHeader >
                        <CardTitle>Send a file</CardTitle>
                        <CardDescription >Enter the information below.</CardDescription>
                    </CardHeader>
                    <CardContent >
                        <div className="space-y-4" >
                            <div className="self-start justify-self-start space-y-2 flex flex-col" >
                                <input type="file" name='files' />
                                <span className="text-xs">Max File Size 4MB</span>
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
                                <Input id="title" name="title" required type="text" placeholder="Type your title here." />
                            </div>
                            <div className="space-y-2" >
                                <Label htmlFor="message">
                                    Message
                                </Label>
                                <Textarea id="message" name="message" placeholder="Type your message here." required />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <SubmitButton />
                        <p aria-live='polite' className="sr-only" role="status">
                            {
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                state?.message
                            }
                        </p>
                    </CardFooter>
                </Card>
            </form>
        </div>
    )
}