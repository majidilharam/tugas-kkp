import { Bell, Calendar, CalendarClock, MessageCircle, User, RotateCwSquare,  RotateCcwClock } from "lucide-react"
import Notif from "../components/Notif"
import Card from "../components/Card"

const Dashboard = () => {
const jamLembur = 20
const maxLembur = 40

const presentaseLembur =  jamLembur / maxLembur * 100


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

      <div className="bg-gray-100 rounded-4xl mt-4 p-6 flex-1 flex flex-col">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl">Dashboard Karyawan</h1>
          <p className="text-gray-500 text-2xl">
            Akses cepat ke seluruh informasi dan kebutuhan kerja Anda dalam satu tempat.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 items-stretch mt-6">
          <Card title="Sisa Cuti Tahunan" remaining="12" total="/ 12 hari" icon={Calendar} />
          <Card title="Sisa Cuti Besar" remaining="20" total="/ 20 hari" icon={Calendar} />
          <Card title="Total Jam Lembur" remaining="16" total="Jam" icon={CalendarClock} />
          <Card title="Cuti Pending" remaining="0" icon={RotateCwSquare}/>
          <Card title="Lembur Menunggu Approval" remaining="0" icon={RotateCcwClock}/>
        </div>


  
        
        <div className="w-full rounded-lg bg-white mt-6 p-4">
          <div className="flex items-start justify-between mb-4">
          <div>
          <h3 className="text-xl">Presentase Lembur Bulanan</h3>
          <p className="text-gray-400" >Dihitung dari batas maksimal 40 jam per bulan</p>
          </div>
          <input className="rounded-lg bg-gray-200 p-2 outline-none" type="date" name="" id="" />
          

          
        </div>
        <div className="text-4xl font-extrabold text-gray-900 mb-3">
                {presentaseLembur + "%"}
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 ">
         <div className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-in-out
         " style={{width:`${presentaseLembur }%`}}>

         </div>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            {jamLembur}.0 dari {maxLembur} jam terpakai
          </p>
      
      </div>
      </div>




      
    </div>
  )
}

export default Dashboard 