

import LeaveRequestForm from "../leaverequest/LeaveRequestForm"
import { useState } from "react";


  
const PageAjukanCuti = () => {

  const [logLeave, setLogLeave] = useState([]);

  const addOnCuti = (cuti) => {
    setLogLeave((prev) => {
      return [...prev, cuti];
    });
  };
 

  return (
    <div className="min-h-screen bg-gray-100 rounded-4xl flex flex-col p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-3">Ajukan Cuti</h1>
      <LeaveRequestForm  onAdd={addOnCuti}/>
      <div className="bg-white mt-4 p-2 rounded-lg">
        <div className="flex flex-col gap-4">
          {logLeave.map((item, index) =>
            <div key={index} className="flex flex-col border mt-4 p-2 rounded-4xl">
              <span className="">{item.jenisCuti}</span>
              <span>{item.alasanCuti}</span>
              <span>{item.tanggalMulai}</span>
              <span>{item.tanggalSelesai}</span>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default PageAjukanCuti