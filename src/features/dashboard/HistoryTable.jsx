import cn from "@/utils/cn"

const HistoryTable = () => {

    const historyHeader = ["Jenis", "Tanggal", "Status"]

    const History = [
        {
            jenis: "Cuti Tahunan", tanggal: "12 Sep 2026", status: "Disetujui"
        },
        {
            jenis: "Cuti Besar", tanggal: "16 Sep 2026", status: "Pending"
        },
        {
            jenis: "Lembur", tanggal: "12 Sep 2026", status: "Ditolak"
        },
        {
            jenis: "Lembur", tanggal: "14 Sep 2026", status: "Disetujui"
        },
        {
            jenis: "Cuti Tahunan", tanggal: "15 Sep 2026", status: "Disetujui"
        },
    ]

    return (
        <div>
            <div className="rounded-lg">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b">
                            {historyHeader.map((label, i) => (
                                <th
                                    key={label}
                                    className={cn("p-2 text-left font-semibold", i == 0 && "pl-10")}
                                >
                                    {label}
                                </th>
                            ))}
                        </tr> 
                    </thead>

                    <tbody>
                        {History.map(({ jenis, tanggal, status }, index) => (
                            <tr key={index} className="border-b">
                                <td className="pl-10 py-4 ">{jenis}</td>
                                <td className="px-2 py-4 ">{tanggal}</td>
                                <td className="px-2 py-4 ">{status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )

}

export default HistoryTable

