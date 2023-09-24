import UploadForm from "@/components/upload-form"

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
            <UploadForm />
            <footer className="bg-gray-800 p-4 text-center text-white" data-id="50">
                <p data-id="51">© 2023 Company Name. All rights reserved.</p>
            </footer>
        </div>
    )
}