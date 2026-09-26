

import Cells from "../../components/Cells";
import Header from "../../components/Header";
import LeaveRequestForm from "./leaveform/LeaveRequestForm"
import { useState } from "react";

const PageAjukanCuti = () => {

  const [logLeave, setLogLeave] = useState([]);
  console.log(logLeave)

  const addOnCuti = (cuti) => {
    setLogLeave((prev) => {
      return [...prev, cuti];
    });


  };

  const headerCuti = ["Jenis Cuti", "Alasan Cuti", "Tanggal Cuti","Tangal Selesai", "Status"]



  return (
    <div className="min-h-screen bg-gray-100 rounded-4xl flex flex-col p-6">
      {/* Header */}
      
      <LeaveRequestForm onAdd={addOnCuti} />
      <div className="bg-white mt-4 p-2 rounded-lg">
        <Header>
          {headerCuti.map((label) =>
            <Cells className="text-white" key={label}>{label}</Cells>
          )}
        </Header>
        <div className="flex flex-col gap-4">
          {logLeave.map((item, index) =>
            <div key={index} className="flex justify-between border mt-4 p-2 rounded-4xl">
              <Cells>{item.jenisCuti}</Cells>
              <Cells>{item.alasanCuti}</Cells>
              <Cells>{item.tanggalMulai}</Cells>
              <Cells>{item.tanggalSelesai}</Cells>
              <Cells>{item.status}</Cells>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default PageAjukanCuti