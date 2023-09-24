import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Uploader from "@/components/uploader"

export default function Main() {
    return (
        <div className="flex flex-col h-screen" data-id="1">
            <nav className="bg-gray-800 p-4" data-id="2">
                <div className="container mx-auto flex justify-between items-center" data-id="3">
                    <div className="text-white font-bold text-xl" data-id="4">
                        WeTransfer
                    </div>
                </div>
            </nav>
            <div className="mt-10 flex-grow mb-10" data-id="18">
                <Card className="max-w-2xl mx-auto" data-id="19">
                    <CardHeader data-id="20">
                        <CardTitle data-id="21">Send a file</CardTitle>
                        <CardDescription data-id="22">Enter the information below.</CardDescription>
                    </CardHeader>
                    <CardContent data-id="23">
                        <div className="space-y-4" data-id="24">
                            <div className="self-start justify-self-start space-y-2" data-id="25">

                                <Uploader />
                            </div>
                            <div className="space-y-2" data-id="32">
                                <Label data-id="33" htmlFor="email">
                                    Email To
                                </Label>
                                <Input data-id="34" id="email" placeholder="johndoe@example.com" required type="email" />
                            </div>
                            <div className="space-y-2" data-id="32">
                                <Label data-id="33" htmlFor="email">
                                    Your Email
                                </Label>
                                <Input data-id="34" id="email" placeholder="johndoe@example.com" required type="email" />
                            </div>
                            <div className="space-y-2" data-id="35">
                                <Label data-id="36" htmlFor="password">
                                    Title
                                </Label>
                                <Input data-id="37" id="password" required type="password" />
                            </div>
                            <div className="space-y-2" data-id="35">
                                <Label data-id="36" htmlFor="password">
                                    Message
                                </Label>
                                <Input data-id="37" id="password" required type="password" />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter data-id="48">
                        <Button className="w-full" data-id="49" type="submit">
                            Send File
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <footer className="bg-gray-800 p-4 text-center text-white" data-id="50">
                <p data-id="51">© 2023 Company Name. All rights reserved.</p>
            </footer>
        </div>
    )
}