import { useState } from "react";
import LeaveRequestForm from "./modal/LeaveRequestForm";
import Badge from "@/components/Badge";
import { CalendarDays } from "lucide-react";
import Button from "@/components/Button";
import Modal from "@/components/Modal";

const LeaveRequest = () => {
  const [logLeave, setLogLeave] = useState([]);
  const [openedModalDelete, setOpenedModalDelete] = useState(false);
  const [openedFormModal, setOpenedFormModal] = useState(false);
  const [selectedLeaveId, setSelectedLeaveId] = useState(null);

  const editingLeave = logLeave.find((leave) => leave.id === selectedLeaveId);

  const openFormModal = () => {
    setSelectedLeaveId(null);
    setOpenedFormModal(true);
  };

  const closeFormModal = () => {
    setOpenedFormModal(false);
  };

  const handleOpenModalDelete = (id) => {
    setSelectedLeaveId(id);
    setOpenedModalDelete(true);
  };

  const handleCloseModal = () => {
    setOpenedModalDelete(false);
    setSelectedLeaveId(null);
  };

  const deleteLog = () => {
    setLogLeave((prev) => prev.filter((item) => item.id !== selectedLeaveId));
    handleCloseModal();
  };

  const onClickEdit = (id) => {
    setSelectedLeaveId(id);
    setOpenedFormModal(true);
  };

  const addOnCuti = (cuti) => {
    setLogLeave((prev) => [...prev, cuti]);
  };

  const editLeave = (editingLeave) => {
    setLogLeave((prev) => {
      const result = prev.map((leave) => {
        if (leave.id === selectedLeaveId) {
          return editingLeave;
        } else {
          return leave;
        }
      });
      return result;
    });
  };

  const headerCuti = [
    "Jenis Cuti",
    "Alasan Cuti",
    "Tanggal Mulai",
    "Tanggal Selesai",
    "Status",
    "Aksi",
  ];

  const formatTanggal = (tanggal) => {
    if (!tanggal) return "-";

    const date = new Date(tanggal);

    if (Number.isNaN(date.getTime())) return "-";

    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "disetujui":
        return "green";
      case "ditolak":
        return "red";
      default:
        return "yellow";
    }
  };
  return (
    <div className="min-h-screen rounded-3xl bg-slate-50 p-4 sm:p-6 lg:p-8">
      {/* Form Pengajuan */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-800">
              Pengajuan Cuti
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Kelola dan pantau riwayat pengajuan cuti kamu.
            </p>
          </div>
          <button
            type="button"
            onClick={openFormModal}
            className="w-fit cursor-pointer bg-[#0081BF] text-white rounded-lg p-3 mt-2 font-semibold text-sm tracking-wide hover:bg-[#00699C] transition-colors shadow-sm"
          >
            Ajukan Cuti
          </button>
        </div>
      </div>

      {/* Tabel Riwayat Cuti */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* Judul Tabel */}
        <div className="flex flex-col gap-1 border-b border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-semibold text-slate-800">Riwayat Pengajuan</h2>

            <p className="text-sm text-slate-500">
              Daftar pengajuan cuti yang telah dicatat.
            </p>
          </div>

          <span className="mt-2 w-fit rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 sm:mt-0">
            {logLeave.length} Pengajuan
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead className="bg-slate-800 text-white">
              <tr>
                {headerCuti.map((label) => (
                  <th
                    key={label}
                    className="px-5 py-4 text-xs font-semibold uppercase tracking-wider"
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {logLeave.length > 0 ? (
                logLeave.map((item, index) => (
                  <tr
                    key={index}
                    className="transition-colors hover:bg-slate-50"
                  >
                    <td className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-slate-800">
                      {item.jenisCuti || "-"}
                    </td>

                    <td className="max-w-xs px-5 py-4 text-sm text-slate-600">
                      <p className="line-clamp-2">{item.alasanCuti || "-"}</p>
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">
                      {formatTanggal(item.tanggalMulai)}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">
                      {formatTanggal(item.tanggalSelesai)}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4">
                      <Badge color={getStatusColor(item.status)}>
                        {item.status || "Menunggu"}
                      </Badge>
                    </td>
                    <div className="flex gap-3 p-4 ">
                      <Button
                        onClick={() => handleOpenModalDelete(item.id)}
                        variant="secondary"
                      >
                        Hapus
                      </Button>
                      <Button onClick={() => onClickEdit(item.id)}>Edit</Button>
                    </div>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={headerCuti.length}
                    className="px-5 py-16 text-center"
                  >
                    <div className="flex flex-col items-center">
                      <div className="flex flex-col items-center">
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                          <CalendarDays
                            size={24}
                            strokeWidth={1.5}
                            className="text-slate-400"
                          />
                        </div>
                      </div>

                      <p className="font-semibold text-slate-700">
                        Belum ada pengajuan cuti
                      </p>

                      <p className="mt-1 text-sm text-slate-400">
                        Pengajuan cuti kamu akan muncul di sini.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-3">
          <p className="text-xs text-slate-500">
            Menampilkan {logLeave.length} data pengajuan cuti
          </p>
        </div>
      </div>

      {openedModalDelete && (
        <Modal>
          Apakah data ini mau dihapus
          <div className="flex gap-3">
            <Button onClick={handleCloseModal} variant="primary">
              Batal
            </Button>
            <Button onClick={deleteLog} variant="secondary">
              Hapus
            </Button>
          </div>
        </Modal>
      )}
      {openedFormModal && (
        <LeaveRequestForm
          onAdd={addOnCuti}
          onClose={closeFormModal}
          defaultValue={editingLeave}
          onEdit={editLeave}
        />
      )}
    </div>
  );
};

export default LeaveRequest;
