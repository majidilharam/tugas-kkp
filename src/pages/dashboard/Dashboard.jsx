import { Bell, MessageCircle, User } from "lucide-react"
import Notif from "../../components/Notif"
import Card from "../../components/Card"
import Cells from "../../components/Cells"
import { riwayat, notify } from "../../data/dataDummy"
import { jamLembur, maxLembur, presentaseLembur } from "../../utils/lembur"
import dataDummy_card from "../../data/dataDummy_card"
import Badge from "../../components/Badge"
import { statusHeader, daftarKaryawan } from "../../data/dataDummy_employees"
import Header from "@/components/Header"
import  Calendar from "@/components/Calendar"





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


        {/* Card info */}
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
          {dataDummy_card.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              remaining={item.remaining}
              total={item.total}
              icon={item.icon}
            />
          ))}
        </div>
        {/* Card info */}




        {/* Presentase lembur */}
        <div className="w-full rounded-lg bg-white mt-6 p-4">
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
          <div className="w-full rounded-lg bg-white mt-6 p-4 flex flex-col text-center gap-4">

            <h3 className="text-xl">Riwayat cuti dan lembur terbaru</h3>

            <div className="rounded-lg p-2 flex flex-col gap-4 bg-gray-100">
              <Header>{notify.map((label) =>
                <Cells key={label} className="text-white">{label}</Cells>)}</Header>



              <div>
                {riwayat.map((item, index) => (
                  <div key={index} className=" flex flex-col border-b border-old-blue mt-2 p-2">
                    <div className="flex justify-between">
                      <Cells>{item.jenis}</Cells>
                      <Cells>{item.tanggal}</Cells>
                      <Cells><Badge statusValue={item.status} /></Cells>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          { /* log cuti */}

          {/* daftar karyawan */}
          <div className="w-full rounded-lg bg-white mt-6 p-4 text-center">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl">Daftar Karyawan TA tim B</h3>

              <div className="w-full rounded-lg bg-gray-100 p-2">
                <Header> {statusHeader.map((label) =>
                    <Cells className="text-white" key={label}>{label}</Cells>
                  )}</Header>
                 
                
               <div className=" max-h-70 overflow-y-auto scrollbar-none">
                {daftarKaryawan.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="flex justify-between rounded-4xl bg-blue-ice-dark p-2 mt-4  ">
                      <Cells >{item.nama}</Cells>
                      <Cells>{item.departemen}</Cells>
                      <Cells><Badge statusValue={item.status}/></Cells>
                      <Cells>{item.nomorInduk}</Cells>

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