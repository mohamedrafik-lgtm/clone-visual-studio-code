import './App.css'
import FileComponent from './components/fileComponent'
import FolderComponent from './components/folderComponent'

function App() {
  return (
    <>
      <div className='m-7'>
          <FileComponent fileName='index.tsx'/>
          <FolderComponent folderName='node_modules'/>
      </div>
    </>
  )
}

export default App
