import { useSelector } from 'react-redux'
import './App.css'
import Preview from './components/Preview'
import RecursiveComponent from './components/RecursiveComponent'
import { fileTree } from './data/fileTree'
import { RootState } from './app/store'
import WelcomeTab from './components/WelcomeTab'
import ResizablePanel from './components/ResizablePanel'


function App() {
  const {openedFile} = useSelector(({tree}:RootState) => tree) 
  return (
    <>
      <div>
          <div className='flex h-screen'>
            
            <ResizablePanel leftPanel={<div className='w-64 p-2'>
              <RecursiveComponent fileTree={fileTree}/>
            </div>}
            rightPanel={openedFile.length? <Preview/> : <WelcomeTab/>}
            showLeftPanel/>
            
          </div>
      </div>
    </>
  )
}

export default App
