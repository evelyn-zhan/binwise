import { RiImageUploadLine } from "@remixicon/react"

interface Props {
    preview: string | undefined, 
    handlePreviewChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

function ImageUpload({ preview, handlePreviewChange } : Props) {

    return (
    <div className={`h-60 flex items-end border-2 border-gray-200 border-dashed rounded-xl relative`}>
        { preview && <img src={preview} className={`bg-gray-50 w-full h-full inset-0 object-contain absolute`} /> }
        <div className={`${preview && 'z-10'} bg-background/70 w-full h-fit flex flex-col items-center gap-y-0.5 py-2 border-t border-gray-200 rounded-b-xl`}>
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
            className={`w-full h-full opacity-0 absolute cursor-pointer`} 
        />
    </div>
)}

export default ImageUpload