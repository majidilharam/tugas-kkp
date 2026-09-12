import { Bell, Calendar, CalendarClock, MessageCircle, User, RotateCwSquare,  RotateCcwClock } from "lucide-react"
import Notif from "../components/Notif"
import Card from "../components/Card"
import Button from "../components/Button"

const Dashboard = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-gray-100 rounded-4xl w-full flex justify-between items-center p-4">
        <div className="flex gap-3 items-center">
          <Notif icon={User} />
          <div className="flex flex-col gap-1">
            <span>Muhammad Nur Majid</span>
            <a href="mailto:muhammadnurmajid160@gmail.com">
              muhammadnurmajid160@gmail.com
            </a>
          </div>
        </div>

        <div className="flex gap-2">
          <Notif icon={MessageCircle} />
          <Notif icon={Bell} />
        </div>
      </div>

      <div className="bg-gray-100 rounded-4xl mt-8 p-6 flex-1 flex flex-col">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl">Dashboard Karyawan</h1>
          <p className="text-gray-500 text-2xl">
            Akses cepat ke seluruh informasi dan kebutuhan kerja Anda dalam satu tempat.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 items-stretch mt-8">
          <Card title="Sisa Cuti Tahunan" remaining="12" total="/ 12 hari" icon={Calendar} />
          <Card title="Sisa Cuti Besar" remaining="20" total="/ 20 hari" icon={Calendar} />
          <Card title="Total Jam Lembur" remaining="16" total="Jam" icon={CalendarClock} />
          <Card title="Cuti Pending" remaining="0" icon={RotateCwSquare}/>
          <Card title="Lembur Menunggu Approval" remaining="0" icon={RotateCcwClock}/>
        </div>
        
        <div className="flex flex-col gap-3 mt-8" >
          <Button variant= "primary">primary</Button>
          <Button variant= "secondary">secondary</Button>
          <Button variant= "tertiary">tertiary</Button>
        
        </div>
      </div>
    </div>
  )
}

export default Dashboard