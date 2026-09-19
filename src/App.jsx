import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Sidebar from "./components/Sidebar"
import LeaveRequest from "./pages/LeaveRequest"
import OvertimeHistory from "./pages/OvertimeHistory"
import LeaveRequestHistory from "./pages/LeaveRequestHistory"

const App = () => {
  return (
    <div className="flex gap-4 p-4 h-screen w-full overflow-y-auto ">
      <Sidebar />

      
      <div className="flex-1 w-full overflow-y-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leave-request" element={<LeaveRequest />} />
          <Route path="/overtime" element={<OvertimeHistory/>}/>
          <Route path="/leave-history" element={<LeaveRequestHistory/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App