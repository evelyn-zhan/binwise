import { RiImageUploadLine } from "@remixicon/react"

interface Props {
    preview: string | undefined, 
    handlePreviewChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

function ImageUpload({ preview, handlePreviewChange } : Props) {

    return (
    <div className={`h-60 border-2 border-gray-200 border-dashed rounded-xl flex items-end relative`}>
        { preview && <img src={preview} className={`w-full h-full absolute inset-0 object-contain bg-gray-50`} /> }
        <div className={`z-10 bg-background/60 w-full h-fit py-2 flex flex-col items-center rounded-b-xl border-t border-gray-200`}>
            <div className={`flex flex-row justify-center items-center`}>
                <RiImageUploadLine className={`text-secondary size-5`}/>&nbsp;
                <span className={`text-secondary text-sm font-medium flex flex-row items-center gap-x-2`}>
                    Browse your file&nbsp;
                </span>
                <span className={`text-gray-500 text-sm font-medium`}>
                    and upload an image
                </span>
            </div>
            <span className={`text-gray-400 text-xs font-medium`}>
                JPG, JPEG, PNG, or WEBP 
            </span>
        </div>
        <input type='file' className={`w-full h-full absolute opacity-0 cursor-pointer`} accept='.jpg,.jpeg,.png,.webp' title="" onChange={handlePreviewChange}/>
    </div>
)}

export default ImageUpload