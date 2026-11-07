import { RiQrScanAiLine } from "@remixicon/react"
import ClassifyButton from "../buttons/ClassifyButton"
import ImageUpload from "../inputs/ImageUpload"

interface Props {
    preview: string | undefined,
    handlePreviewChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    classify: () => void
}

function UploadCard({ preview, handlePreviewChange, classify }: Props ) {
    return (
    <div className={`bg-white h-fit flex flex-col gap-y-3.5 px-4 py-3 md:px-8 md:py-4 border border-[#E9EAF2] rounded-xl`}>
        <span className={`text-md font-medium`}>Upload a photo</span>
        
        <ImageUpload preview={preview} handlePreviewChange={handlePreviewChange}/>
        <ClassifyButton onClick={classify}/>

        <div className={`w-full flex flex-row justify-center items-center gap-x-2 text-xs text-gray-500 font-medium`}>
            <RiQrScanAiLine className={`size-5`}/>
            <span>For best result, upload a clear image of the trash</span>
        </div>
    </div>
)}

export default UploadCard