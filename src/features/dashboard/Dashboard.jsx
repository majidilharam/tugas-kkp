// import { Bell, MessageCircle, User } from "lucide-react"
// import Cells from "@/components/TableCell"
// import { riwayat, notify } from "@/data/dataDummy"
// import { jamLembur, maxLembur, presentaseLembur } from "@/utils/lembur"
// import Badge from "@/components/Badge"
// import { statusHeader, daftarKaryawan } from "@/data/dataDummy_employees"
// import TableRowHeader from "@/components/TableRowHeader"
// import  Calendar from "@/components/Calendar"
// import IconInfo from "@/components/IconInfo"
// import CardStat from "./CardStat"
// import TableCell from "@/components/TableCell"

import IconInfo from "@/components/IconInfo"
import { Bell, MessageCircle, User } from "lucide-react"
import { Calendar } from "@heroui/react"
import { jamLembur, maxLembur, presentaseLembur } from "@/utils/lembur"
import TableRowHeader from "@/components/TableRowHeader"
import TableCell from "@/components/TableCell"
import Badge from "@/components/Badge"
import { daftarKaryawan, statusHeader } from "@/data/dataDummy_employees"
import CardStatList from "./CardStatList"
import HistoryTable from "./HistoryTable"





const Dashboard = () => {







  return (
    <div className="flex flex-col h-full">
      <div className="bg-gray-100 rounded-4xl w-full flex justify-between items-center p-4">
        <div className="flex gap-3 items-center">
          <IconInfo icon={User} />
          <div className="flex flex-col gap-1">
            <span>Muhammad Nur Majid</span>
            <a href="mailto:muhammadnurmajid160@gmail.com">
              muhammadnurmajid160@gmail.com
            </a>
          </div>
        </div>


        {/* Card info */}
        <div className="flex gap-2">
          <IconInfo icon={MessageCircle} />
          <IconInfo icon={Bell} />
        </div>
      </div>

      <div className="bg-gray-100 rounded-4xl mt-4 p-6 flex-1 flex flex-col">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl">Dashboard Karyawan</h1>
          <p className="text-gray-500 text-2xl">
            Akses cepat ke seluruh informasi dan kebutuhan kerja Anda dalam satu tempat.
          </p>
        </div>
        <CardStatList/>
        {/* Card info */}




        {/* Presentase lembur */}
        <div className="w-full rounded-lg shadow-xl bg-white mt-6 p-4">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl">Presentase Lembur Bulanan</h3>
              <p className="text-gray-400" >Dihitung dari batas maksimal 40 jam per bulan</p>
            </div>
            <Calendar />



          </div>
          <div className="text-4xl font-extrabold text-gray-900 mb-3">
            {presentaseLembur + "%"}
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 ">
            <div className="h-full bg-old-blue rounded-full transition-all duration-500 ease-in-out
         " style={{ width: `${presentaseLembur}%` }}>

            </div>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            {jamLembur}.0 dari {maxLembur} jam terpakai
          </p>
        </div>
        {/* Presentase lembur */}

        {/* log cuti */}
        <div className="flex gap-2">
          <div className="w-full rounded-lg bg-white mt-6 flex flex-col py-6 gap-6">
            <h3 className="text-xl pl-10 font-bold">Riwayat cuti dan lembur terbaru</h3>
            <HistoryTable/>
          </div>
          { /* log cuti */}

          {/* daftar karyawan */}
          <div className="w-full rounded-lg bg-white mt-6 p-4 text-center">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl">Daftar Karyawan TA tim B</h3>

              <div className="w-full rounded-lg bg-gray-50 p-2">
                <TableRowHeader> {statusHeader.map((label) =>
                    <TableCell className="text-white" key={label}>{label}</TableCell>
                  )}</TableRowHeader>
                 
                
               <div className=" max-h-70 overflow-y-auto scrollbar-none">
                {daftarKaryawan.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="flex justify-between rounded-4xl bg-blue-ice-dark p-2 mt-4  ">
                      <TableCell >{item.nama}</TableCell>
                      <TableCell>{item.departemen}</TableCell>
                      <TableCell><Badge statusValue={item.status}/></TableCell>
                      <TableCell>{item.nomorInduk}</TableCell>

                    </div>
                  </div>
                ))}
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* daftar karyawan */}


      </div>
    </div>
  )
}

export default Dashboard 