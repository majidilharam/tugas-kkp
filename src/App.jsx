import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Sidebar from "./components/Sidebar"
import LeaveRequest from "./pages/LeaveRequest"
import OvertimeHistory from "./pages/OvertimeHistory"

const App = () => {
  return (
    <div className="flex gap-4 p-4 h-screen w-full overflow-y-auto ">
      <Sidebar />

      
      <div className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leave-request" element={<LeaveRequest />} />
          <Route path="/overtime" element={<OvertimeHistory/>}/>
          <Route index element= {<p>concert</p>}/>
          <Route path= ":city" element={<span>jakarta</span>}/>
          <Route path= "jakarta" element={<span>persija</span>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App