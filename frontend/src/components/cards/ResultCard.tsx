import { RiInformation2Line } from "@remixicon/react"
import TipsCard from "./TipsCard"

interface Props {
    result: string | undefined
}

function ResultCard({ result }: Props) {
    return (
    <div className={`bg-white flex flex-col gap-y-3.5 px-4 py-3 md:px-8 md:py-4 border border-[#E9EAF2] rounded-xl`}>
        <span className={`text-md font-medium`}>Result</span>
        <div className={`h-full flex flex-col justify-between`}>
            <div className={`flex flex-col gap-y-1.5`}>
                <span className={`uppercase text-xs font-medium text-gray-500`}>Predicted Category</span>
                <span className={`text-xl font-semibold`}>{ result }</span>
            </div>
            <TipsCard />
            <div className={`flex flex-row gap-x-2 items-center justify-center text-xs text-gray-400`}>
                <RiInformation2Line className={`size-5`}/>
                <span>AI can make mistakes. Please double-check to ensure proper sorting.</span>
            </div>
        </div>   
    </div>
)}

export default ResultCard