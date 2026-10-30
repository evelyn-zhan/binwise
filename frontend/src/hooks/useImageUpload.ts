import { useState } from "react"

function useImageUpload() {
    const [preview, setPreview] = useState<string|undefined>();
    // const [result, setResult] = useState<string>();

    const handlePreviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const temp = e.target.files;

        if (temp) {
            if (preview) URL.revokeObjectURL(preview);
            const img = URL.createObjectURL(temp[0]);
            setPreview(img);
        }
    }

    // const classify = () => {}

    return { preview, handlePreviewChange }
}

export default useImageUpload