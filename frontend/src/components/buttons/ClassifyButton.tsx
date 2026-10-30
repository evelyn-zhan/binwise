import { RiArrowRightLine, RiSparklingLine } from "@remixicon/react";

function ClassifyButton() {
    return (
    <button className={`
        flex flex-row justify-center items-center gap-x-2
        py-2.5 rounded-xl 
        transition bg-primary/90 hover:bg-primary
        text-white
        cursor-pointer
    `}>
        <RiSparklingLine className={`size-5`} />
        <span className={`text-sm font-medium`}>Classify Image</span>
        <RiArrowRightLine className={`size-5`} />
    </button>
)}

export default ClassifyButton