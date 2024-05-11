import './App.css'
import OpenedFileBar from './components/OpenedFileBar'
import RecursiveComponent from './components/RecursiveComponent'
import ResizeablePanel from './components/ResizeablePanel'
import { fileTree } from './data/fileTree'


function App() {
  return (
    <>
      <div>
          <div className='flex h-screen'>
            
            <ResizeablePanel leftPanel={<div className='w-64 p-2'>
              <RecursiveComponent fileTree={fileTree}/>
            </div>}
            rightPanel={<OpenedFileBar/>}
            showLeftPanel/>
            
          </div>
      </div>
    </>
  )
}

export default App
