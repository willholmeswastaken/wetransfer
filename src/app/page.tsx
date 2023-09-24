
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Uploader from "@/components/uploader"

export default function Main() {
    return (
        <div className="flex flex-col h-screen" data-id="1">
            <nav className="bg-gray-800 p-4" data-id="2">
                <div className="container mx-auto flex justify-between items-center" data-id="3">
                    <div className="text-white font-bold text-xl" data-id="4">
                        Company Logo
                    </div>
                    <div className="flex space-x-4" data-id="5">
                        <Link data-id="6" href="#">
                            <svg
                                className=" h-4 w-4"
                                data-id="8"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect height="9" rx="1" width="7" x="3" y="3" />
                                <rect height="5" rx="1" width="7" x="14" y="3" />
                                <rect height="9" rx="1" width="7" x="14" y="12" />
                                <rect height="5" rx="1" width="7" x="3" y="16" />
                            </svg>
                            <span className="sr-only" data-id="9">
                                Dashboard
                            </span>
                        </Link>
                        <Link data-id="10" href="#">
                            <svg
                                className=" h-4 w-4"
                                data-id="12"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            <span className="sr-only" data-id="13">
                                Users
                            </span>
                        </Link>
                        <Link data-id="14" href="#">
                            <svg
                                className=" h-4 w-4"
                                data-id="16"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            <span className="sr-only" data-id="17">
                                Settings
                            </span>
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="mt-10 flex-grow mb-10" data-id="18">
                <Card className="max-w-2xl mx-auto" data-id="19">
                    <CardHeader data-id="20">
                        <CardTitle data-id="21">Admin User Management</CardTitle>
                        <CardDescription data-id="22">Enter user details to create a new user</CardDescription>
                    </CardHeader>
                    <CardContent data-id="23">
                        <div className="space-y-4" data-id="24">
                            <div className="grid grid-cols-2 gap-4" data-id="25">
                                <div className="space-y-2" data-id="26">
                                    <Label data-id="27" htmlFor="first-name">
                                        First name
                                    </Label>
                                    <Input data-id="28" id="first-name" placeholder="John" required />
                                </div>
                                <div className="space-y-2" data-id="29">
                                    <Label data-id="30" htmlFor="last-name">
                                        Last name
                                    </Label>
                                    <Input data-id="31" id="last-name" placeholder="Doe" required />
                                </div>
                            </div>
                            <div className="space-y-2" data-id="32">
                                <Label data-id="33" htmlFor="email">
                                    Email
                                </Label>
                                <Input data-id="34" id="email" placeholder="johndoe@example.com" required type="email" />
                            </div>
                            <div className="space-y-2" data-id="35">
                                <Label data-id="36" htmlFor="password">
                                    Password
                                </Label>
                                <Input data-id="37" id="password" required type="password" />
                            </div>
                            <div className="space-y-2" data-id="38">
                                <Label data-id="39" htmlFor="role">
                                    Role
                                </Label>
                                <Select data-id="40" id="role" required>
                                    <SelectTrigger data-id="41">
                                        <SelectValue data-id="42" placeholder="Select a role" />
                                    </SelectTrigger>
                                    <SelectContent data-id="43">
                                        <SelectGroup data-id="44">
                                            <SelectLabel data-id="45">Roles</SelectLabel>
                                            <SelectItem data-id="46" value="admin">
                                                Admin
                                            </SelectItem>
                                            <SelectItem data-id="47" value="user">
                                                User
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter data-id="48">
                        <Uploader />
                        <Button className="w-full" data-id="49" type="submit">
                            Create User
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