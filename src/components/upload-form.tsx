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
            {
                pending && (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                )
            }
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