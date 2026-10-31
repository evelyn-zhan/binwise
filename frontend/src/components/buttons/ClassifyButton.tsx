import { RiArrowRightLine, RiSparklingLine } from "@remixicon/react";

interface Props {
    onClick: () => void
}

function ClassifyButton({ onClick }: Props) {

    return (
    <button onClick={onClick} className={`
        bg-primary/90
        flex flex-row justify-center items-center gap-x-2 py-2.5 rounded-xl 
        text-white
        transition hover:bg-primary
        cursor-pointer
    `}>
        <RiSparklingLine className={`size-5`} />
        <span className={`text-sm font-medium`}>Classify Image</span>
        <RiArrowRightLine className={`size-5`} />
    </button>
)}

export default ClassifyButton