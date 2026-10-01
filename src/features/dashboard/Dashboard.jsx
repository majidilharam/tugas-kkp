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
import HistoryTable from "../../components/HistoryTable"
import HistoryLeave from "@/data/dataDummyLeave"
import HistoryOvertime from "@/data/dataDummyOvertime"





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
        <CardStatList />
        {/* Card info */}




        {/* Presentase lembur */}
        <div className="flex gap-4">
          <div className="w-full rounded-lg shadow-xl bg-white mt-6 p-4">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold">Persentase Lembur Bulanan</h3>
                <p className="text-gray-400 text-sm">Dihitung dari batas maksimal 40 jam per bulan</p>
              </div>
              <Calendar />
            </div>

            {/* Kontainer Utama Grafik Bulat */}
            <div className="flex flex-col items-center justify-center p-2">
              <div className="relative flex items-center justify-center w-40 h-40">
                {/* Struktur SVG untuk Lingkaran */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Lingkaran Background (Abu-abu) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-gray-200"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  {/* Lingkaran Progress (Warna Utama/Old-Blue) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-old-blue transition-all duration-500 ease-in-out"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 * Math.min(presentaseLembur, 100)) / 100}
                    strokeLinecap="round"
                  />
                </svg>

                {/* Angka Persentase di Tengah Lingkaran */}
                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-extrabold text-gray-900">
                    {presentaseLembur}%
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mt-0.5">
                    Terpakai
                  </span>
                </div>
              </div>
              {/* Keterangan Jam di Bawah */}
              <p className="mt-4 text-sm font-medium text-gray-600 bg-gray-50 px-4 py-1.5 rounded-full border border-gray-100">
                <span className="font-bold text-gray-900">{jamLembur}.0</span> dari{" "}
                <span className="font-bold text-gray-900">{maxLembur} jam</span> terpakai
              </p>

            </div>
          </div>

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

        {/* log cuti */}
        <div className="flex gap-6">
          <div className="w-full rounded-lg bg-white mt-6 flex flex-col py-6 gap-6">
            <h3 className="text-xl pl-10 font-bold">Riwayat cuti terbaru</h3>
            <HistoryTable children={HistoryLeave} />
          </div>
          <div className="w-full rounded-lg bg-white mt-6 flex flex-col py-6 gap-6">
            <h3 className="text-xl pl-10 font-bold">Riwayat lembur terbaru</h3>
            <HistoryTable children={HistoryOvertime} />
          </div>
          


        </div>




      </div>
    </div>
  )
}

export default Dashboard 