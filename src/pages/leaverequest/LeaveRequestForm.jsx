import { Calendar, Pencil, ArrowRight } from "lucide-react"
import { useState } from "react"


const inisialFormState = {
    jenisCuti: '',
    alasanCuti: '',
    tanggalMulai: '',
    tanggalSelesai: ''}
    

const AjukanCuti = ({ 
    onAdd = () => {} 
}) => {

  const [formCuti, setFormCuti] = useState(
   inisialFormState
  )

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormCuti((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const isAnyFieldEmpty = Object.values(formCuti).some(value => !value)

    if (isAnyFieldEmpty) {
      alert('Mohon lengkapi semua field terlebih dahulu.');
      return;
    }

    onAdd({ ...formCuti, id: Date.now() });
    alert('Permohonan cuti berhasil dikirim!');

    setFormCuti(
      inisialFormState
    );
  };

  return (
    /* Menggunakan max-w-3xl tanpa mx-auto agar rata kiri */
    <div className="max-w-3xl bg-white rounded-xl border border-[#D8E4EC] shadow-sm p-7 flex flex-col gap-6">

      {/* Header identitas perusahaan */}
      <div className="border-b border-[#E5EBEF] pb-4">
        <p className="text-lg tracking-widest uppercase text-[#0081BF] font-semibold mb-1">
          PT YKK AP Indonesia
        </p>
        <h3 className="text-xl font-bold text-black">
          Formulir Pengajuan Cuti
        </h3>
      </div>

      {/* Jenis Cuti */}
      <div className="flex gap-3.5 items-center">
        <div className="bg-[#EAF6FC] p-2.5 rounded-lg shrink-0">
          <Calendar className="text-[#0081BF]" size={20} />
        </div>
        <div className="flex-1">
          <p className="text-xs text-gray-400 font-medium mb-1">Jenis Cuti</p>
          <select 
            className="w-full outline-none font-semibold text-black bg-transparent border-b border-[#E5EBEF] focus:border-[#0081BF] transition-colors pb-1.5 cursor-pointer text-sm"
            name="jenisCuti"
            value={formCuti.jenisCuti}
            onChange={handleChange}
          >
            <option value="">Pilih jenis cuti</option>
            <option value="Cuti Tahunan">Cuti Tahunan</option>
            <option value="Cuti Besar">Cuti Besar</option>
          </select>
        </div>
      </div>

      {/* Alasan */}
      <div className="flex gap-3.5 items-start">
        <div className="bg-[#EAF6FC] p-2.5 rounded-lg shrink-0 mt-0.5">
          <Pencil className="text-[#0081BF]" size={20} />
        </div>
        <div className="flex-1">
          <p className="text-xs text-gray-500 font-medium mb-1">Alasan</p>
          <textarea
            className="w-full outline-none font-medium text-black text-sm resize-none bg-transparent border-b border-[#E5EBEF] focus:border-[#0081BF] transition-colors pb-1.5"
            placeholder="Tulis alasan cuti..."
            rows={2}
            name="alasanCuti"
            onChange={handleChange}
            value={formCuti.alasanCuti}
          />
        </div>
      </div>

      {/* Dari & Sampai Tanggal */}
      <div className="grid grid-cols-2 gap-6 w-full">
        
        {/* Tanggal Mulai */}
        <div className="flex gap-3.5 items-center min-w-0">
          <div className="bg-[#EAF6FC] p-2.5 rounded-lg">
            <ArrowRight className="text-[#0081BF]" size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-400 font-medium mb-1">Dari</p>
            <input
              type="date" 
              className="w-full outline-none font-medium text-sm text-black bg-transparent border-b border-[#E5EBEF] focus:border-[#0081BF] transition-colors pb-1.5 block cursor-pointer" 
              name="tanggalMulai"
              value={formCuti.tanggalMulai}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Tanggal Selesai */}
        <div className="flex gap-3.5 items-center min-w-0">
          <div className="bg-[#EAF6FC] p-2.5 rounded-lg shrink-0">
            <ArrowRight className="text-[#0081BF]" size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-400 font-medium mb-1">Sampai</p>
            <input 
              type="date" 
              className="w-full outline-none font-medium text-sm text-black bg-transparent border-b border-[#E5EBEF] focus:border-[#0081BF] transition-colors pb-1.5 block cursor-pointer"
              name="tanggalSelesai"
              value={formCuti.tanggalSelesai}
              onChange={handleChange}
            />
          </div>
        </div>

      </div>

      {/* Tombol submit */}
      <button 
        type="button"
        onClick={handleSubmit} 
        className="w-full cursor-pointer bg-[#0081BF] text-white rounded-lg p-3 mt-2 font-semibold text-sm tracking-wide hover:bg-[#00699C] transition-colors shadow-sm"
      >
        Ajukan Cuti
      </button>

    </div>
  );
};

export default AjukanCuti;