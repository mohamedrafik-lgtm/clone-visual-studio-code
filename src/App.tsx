import './App.css'
import RecursiveComponent from './components/RecursiveComponent'
import { fileTree } from './data/fileTree'


function App() {
  return (
    <>
      <div className='m-5'>
          <RecursiveComponent fileTree={fileTree}/>
      </div>
    </>
  )
}

export default App
