'use client';

import { UploadButton } from "@/lib/uploadthing";

export default function Uploader() {
    return <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
        }}
    />
}