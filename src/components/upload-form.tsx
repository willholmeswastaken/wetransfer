import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { onServerSubmit } from "@/app/action";

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
                            <Label htmlFor="emailTo">
                                Email To
                            </Label>
                            <Input id="emailTo" name="emailTo" placeholder="johndoe@example.com" required type="email" />
                        </div>
                        <div className="space-y-2" >
                            <Label htmlFor="emailFrom">
                                Your Email
                            </Label>
                            <Input id="emailFrom" name="emailFrom" placeholder="johndoe@example.com" required type="email" />
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