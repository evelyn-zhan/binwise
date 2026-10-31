import { RiQrScanAiLine } from "@remixicon/react"
import ClassifyButton from "../buttons/ClassifyButton";
import ImageUpload from "../inputs/ImageUpload";

interface Props {
    preview: string | undefined, 
    handlePreviewChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    classify: () => void
}

function PhotoUpload({ preview, handlePreviewChange, classify }: Props ) {


    return (
    <div className={`bg-white h-fit flex flex-col gap-y-3.5 px-8 py-4 border border-[#E9EAF2] rounded-xl`}>
        <span className={`text-md font-medium`}>Upload a photo</span>
        
        <ImageUpload preview={preview} handlePreviewChange={handlePreviewChange}/>
        <ClassifyButton onClick={classify}/>

        <div className={`w-full flex flex-row justify-center items-center gap-x-2 py-1`}>
            <RiQrScanAiLine className={`text-gray-500 size-4.5`}/>
            <span className={`text-gray-500 text-xs font-medium`}>
                For best result, upload a clear image of the trash
            </span>
        </div>
    </div>
)}

export default PhotoUpload