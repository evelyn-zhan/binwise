import UploadCard from "./components/cards/UploadCard"
import ResultCard from "./components/cards/ResultCard"
import NavBar from "./navigations/NavBar"
import useImageUpload from "./hooks/useImageUpload"

function App() {
    const { preview, handlePreviewChange, classify, result } = useImageUpload()

    return (
    <main className={`max-w-480 max-h-256 w-screen h-screen flex flex-col`}>
      <NavBar />
      <div className={`h-full flex flex-col gap-y-4 px-6 md:px-20 py-4`}>
        <div className={`flex flex-col gap-y-1`}>
          <h1 className={`text-lg font-semibold`}>Know what goes where.</h1>
          <h2 className={`text-sm text-gray-500`}>Upload a photo to identify your waste.</h2>
        </div>
        <div className={`grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-6 pb-16`}>
          <UploadCard preview={preview} handlePreviewChange={handlePreviewChange} classify={classify}/>
          <ResultCard result={result} />
        </div>
      </div>
    </main>
)}

export default App