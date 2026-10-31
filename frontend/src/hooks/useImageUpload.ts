import { useState } from "react"
import { predict } from "../services/predict";

function useImageUpload() {
    const [preview, setPreview] = useState<string|undefined>();
    const [rawImage, setRawImage] = useState<File | undefined>();
    const [result, setResult] = useState<string>();

    const handlePreviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const temp = e.target.files;

        if (temp) {
            const file = temp[0];

            if (preview) URL.revokeObjectURL(preview);
            const img = URL.createObjectURL(file);
            setRawImage(file);
            setPreview(img);
        }
    }

    const classify = async () => {
        if (!rawImage) return;
        const response = await predict(rawImage);

        if (response.isError) console.log(response.message);
        else setResult(response.message);
    }

    return { preview, handlePreviewChange, classify, result }
}

export default useImageUpload