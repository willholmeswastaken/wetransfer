export default function Uploader({
    onUploadFileSelected,
    maxFileSize
}: { onUploadFileSelected: (file: File) => void; maxFileSize: string | null | undefined }) {
    return <>
        <input
            type="file"
            name='files'
            onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                onUploadFileSelected(file);
            }}
        />
        {maxFileSize}
    </>
}