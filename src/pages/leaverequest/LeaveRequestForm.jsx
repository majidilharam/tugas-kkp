import { Calendar, Pencil, ArrowRight } from "lucide-react"
import { useState } from "react"

const AjukanCuti = ({ 
    onAdd = () => {} 


}) => {

  const [formCuti, setFormCuti] = useState({
    jenisCuti: 'Cuti Tahunan',
    alasanCuti: '',
    tanggalMulai: '',
    tanggalSelesai: ''
  });


     const handleChange = (e) => {
    const { name, value } = e.target;
    setFormCuti((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Data Cuti yang Diajukan:', formCuti);
    alert('Permohonan cuti berhasil dikirim!');
    onAdd({...formCuti, id: Date.now()})
  }


return (

    <>

        {/* Form Card */}
        <div className="bg-white rounded-lg p-6 flex flex-col gap-4">

            {/*  Jenis Cuti */}
            <div className="flex gap-3 items-start">
                <div className="bg-blue-100 p-2 rounded-lg">
                    <Calendar className="text-blue-500" size={20} />
                </div>
                <div className="flex-1">
                    <p className="text-xs text-gray-400">Jenis Cuti</p>
                    <select className="w-full outline-none font-medium resize-none  appearance-none text-gray-400"
                    name="jenisCuti"
                    value={formCuti.jenisCuti}
                    onChange={handleChange}
                    >
                        <option>Cuti Tahunan</option>
                        <option>Cuti Besar</option>
                    </select>

                </div>
            </div>


            {/*  Alasan */}
            <div className="flex gap-3 items-start">
                <div className="bg-blue-100 p-2 rounded-lg">
                    <Pencil className="text-blue-500" size={20} />
                </div>
                <div className="flex-1">
                    <p className="text-xs text-gray-400">Alasan</p>
                    <textarea
                        className="w-full outline-none font-medium resize-none"
                        placeholder="Tulis alasan cuti..."
                        rows={2}
                        name="alasanCuti"
                        onChange={handleChange}
                        value={formCuti.alasan}
                    />
                </div>
            </div>

            {/*  Dari Tanggal */}
            <div className="flex gap-3 items-start">
                <div className="bg-blue-100 p-2 rounded-lg">
                    <ArrowRight className="text-blue-500" size={20} />
                </div>
                <div className="flex-1">
                    <p className="text-xs text-gray-400">Dari</p>
                    <input
                        type="date" className="w-full outline-none font-medium" 
                        name="tanggalMulai"
                        value={formCuti.tanggalMulai}
                        onChange={handleChange}
                        />
                </div>
            </div>

            {/* Sampai Tanggal */}
            <div className="flex gap-3 items-start">
                <div className="bg-blue-100 p-2 rounded-lg">
                    <ArrowRight className="text-blue-500" size={20} />
                </div>
                <div className="flex-1">
                    <p className="text-xs text-gray-400">Sampai</p>
                    <input type="date" className="w-full outline-none font-medium"
                    name="tanggalSelesai"
                    value={formCuti.tanggalSelesai}
                    onChange={handleChange}
                    />
                </div>
            </div>

            {/* Tombol submit */}
            <button onClick={handleSubmit} className="w-full cursor-pointer bg-blue-500 text-white rounded-lg p-3 mt-2 font-medium hover:bg-blue-950">
                Ajukan Cuti
            </button>

        </div>
    </>
)
}


export default AjukanCuti