import { Routes, Route, BrowserRouter } from "react-router-dom"
import Dashboard from "./pages/dashboard/Dashboard"

import LeaveRequestPage from "./pages/leaverequest/LeaveRequestPage"
import OvertimeHistory from "./pages/OvertimeHistory"
import ReportMatrial from "./pages/ReportMatrial"
import Layout from "./components/layout"


const App = () => {
  return (
    <BrowserRouter>

        <Routes>
          <Route element={<Layout/>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leave-request" element={<LeaveRequestPage/>} />
          <Route path="/overtime" element={<OvertimeHistory/>}/>
          <Route path="/report-matrial" element={<ReportMatrial/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App