import { Bell, MessageCircle, User } from "lucide-react"
import Notif from "../components/Notif"
import Card from "../components/Card"

const Dashboard = () => {

  return (
    <div className="flex flex-col gap-3 h-full ">
      <div className="bg-gray-100 rounded-4xl w-full flex justify-between">
        <div className="flex flex-col gap-2 p-4">
          <div className="flex gap-3 ">
            <Notif icon={User} />
            <div className="flex flex-col gap-2">
              <span>Muhammad Nur Majid</span>
              <a href="">muhammadnurmajid160@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="p-4 flex gap-2">
            <Notif icon={MessageCircle} />
            <Notif icon={Bell} />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 rounded-4xl h-screen p-6">
        <h1 className="text-4xl">Dashboard Karyawan</h1>


        <div className="mt-4">
          <div className="flex gap-4 items-center mb-4">

            <Card title="Sisa Cuti Tahunan" remaining="12" total="12"/>
            <Card title="Sisa Cuti Besar" remaining="20" total="12"/>

          </div>
        </div>
      </div>
    </div>


  )
}



export default Dashboard