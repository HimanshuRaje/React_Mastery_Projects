import './App.css'
import { AppBar } from './component/AppBar'
import { VideoGrid } from './component/VideoGrid'
import { Sidebar } from './component/Sidebar'

function App() {
  return (
    <div>
      <AppBar/>
      <div className="flex">
         <Sidebar/>
         <VideoGrid/>
      </div>
    </div>
  )
}

export default App
