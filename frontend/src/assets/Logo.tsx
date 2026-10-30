function Logo() {
    return(
    <div className={`flex flex-row items-center gap-x-3`}>
        <div className={`bg-primary w-fit h-fit p-1 rounded-lg`}>
            <img src='recycle-fill-white.svg' className={`size-6`}/>
        </div>
        <h1 className={`text-xl font-medium`}>binwise</h1>
    </div>
)}

export default Logo