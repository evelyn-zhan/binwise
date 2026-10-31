import { RiLightbulbAiLine } from "@remixicon/react";

function TipsCard() {
    return (
    <div className={`bg-accent h-fit flex flex-col gap-y-2 px-4 py-5 rounded-lg`}>
        <div className={`flex flex-row gap-x-2 text-primary items-center`}>
            <RiLightbulbAiLine className={`size-5`} />
            <span className={`text-sm font-semibold`}>General Sorting Tips:</span>
        </div>
        <ul className={`list-disc text-muted-foreground flex flex-col gap-y-1 pl-5.5 text-sm text-gray-600 font-medium`}>
            <li className={`pl-1.5`}>Ensure the item is completely empty and dry.</li>
            <li className={`pl-1.5`}>Compress plastic bottles, aluminum cans, or cardboard boxes before discarding.</li>
            <li className={`pl-1.5`}>Separate mixed materials whenever possible.</li>
        </ul>
    </div>
)}

export default TipsCard;