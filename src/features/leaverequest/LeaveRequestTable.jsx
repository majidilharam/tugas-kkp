import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Table from "@/components/Table";
import { CalendarDays } from "lucide-react";

const LeaveRequestTable = ({ onEdit, onDelete, leaveList }) => {
  const statusColors = {
    disetujui: "green",
    ditolak: "red",
    pending: "yellow",
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return "-";

    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const columns = [
    {
      key: "jenisCuti",
      header: "Jenis Cuti",
      cell: (value) => value || "-",
    },

    {
      key: "alasanCuti",
      header: "Alasan Cuti",
      cell: (value) => <p className="line-clamp-2">{value || "-"}</p>,
    },

    {
      key: "tanggalMulai",
      header: "Tanggal Mulai",
      cell: (tanggalMulai) => formatDate(tanggalMulai),
    },
    {
      key: "tanggalSelesai",
      header: "Tanggal Selesai",
      cell: (tanggalSelesai) => formatDate(tanggalSelesai),
    },

    {
      key: "status",
      header: "Status",
      cell: (value) => (
        <Badge color={statusColors[value?.toLowerCase() || "yellow"]}>
          {value || "Menunggu"}
        </Badge>
      ),
    },

    {
      key: "aksi",
      header: "Aksi",
      cell: (_, item) => (
        <div className="flex gap-2">
          <Button onClick={() => onEdit?.(item.id)}>Edit</Button>
          <Button onClick={() => onDelete?.(item.id)} variant="secondary">
            Hapus
          </Button>
        </div>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      data={leaveList}
      emptyState={
        <tr>
          <td className="px-5 py-16" colSpan={columns.length}>
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
      }
    />
  );
};

export default LeaveRequestTable;
