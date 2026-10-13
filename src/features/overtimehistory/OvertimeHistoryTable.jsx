import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Table from "@/components/Table";

const OvertimeHistoryTable = ({ listHistory, onDelete = () => {} }) => {
  const statusColors = {
    disetujui: "green",
    ditolak: "red",
    pending: "yellow",
  };

  const columns = [
    {
      header: "Alasan lembur",
      key: "alasanLembur",
      cell: (value) => value,
    },
    {
      header: "Jam Mulai",
      key: "jamMulai",
      cell: (value) => value,
    },
    {
      header: "Jam Selesai",
      key: "jamSelesai",
      cell: (value) => value,
    },
    {
      header: "Status",
      key: "status",
      cell: (value) => (
        <Badge color={statusColors[value?.toLowerCase()]}>{value}</Badge>
      ),
    },
    {
      key: "aksi",
      header: "Aksi",
      cell: (_, item) => (
        <div className="flex gap-2">
          <Button onClick={() => onDelete(item)} variant="secondary">
            Hapus
          </Button>
        </div>
      ),
    },
  ];

  return <Table columns={columns} data={listHistory} />;
};

export default OvertimeHistoryTable;
