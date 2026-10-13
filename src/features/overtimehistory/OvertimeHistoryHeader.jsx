import Card from "@/components/Card";

const OvertimeHistoryHeader = () => {
  return (
    <Card className="p-4">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-800">
            Riwayat Lembur
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Kelola dan pantau riwayat riwayat lembur kamu.
          </p>
        </div>
      </div>
    </Card>
  );
};
export default OvertimeHistoryHeader;
