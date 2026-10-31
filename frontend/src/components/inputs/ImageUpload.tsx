import { RiImageUploadLine } from "@remixicon/react"

interface Props {
    preview: string | undefined, 
    handlePreviewChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

function ImageUpload({ preview, handlePreviewChange } : Props) {

    return (
    <div className={`h-60 flex items-end border-2 border-gray-200 border-dashed rounded-xl relative`}>
        { preview && <img src={preview} className={`w-full h-full absolute inset-0 object-contain bg-gray-50`} /> }
        <div className={`z-10 bg-background/60 w-full h-fit py-2 flex flex-col items-center rounded-b-xl border-t border-gray-200`}>
            <div className={`flex flex-row gap-x-1 justify-center items-center text-sm text-secondary font-medium`}>
                <RiImageUploadLine className={`size-5`}/>
                <span>Browse your file</span>
                <span className={`text-gray-500`}>and upload an image</span>
            </div>
            <span className={`text-gray-400 text-xs font-medium`}>
                JPG, JPEG, PNG, or WEBP 
            </span>
        </div>
        <input type='file' 
            accept='.jpg,.jpeg,.png,.webp' 
            title=''
            onChange={handlePreviewChange}
            className={`w-full h-full absolute opacity-0 cursor-pointer`} 
        />
    </div>
)}

export default ImageUpload