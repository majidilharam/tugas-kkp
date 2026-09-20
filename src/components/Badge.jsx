const Badge = ({ statusValue }) => {
    const statusLower = (statusValue || 'pending').toLowerCase();

    const variantStyle = {
        disetujui: "text-white rounded-full bg-green-400", 
        ditolak: "text-white rounded-full bg-red-400", 
        pending: "text-white rounded-full bg-yellow-400",

        cuti: "text-gray-700 rounded-full bg-gray-200",
        hadir: "text-white rounded-full bg-emerald-500",
        lembur: "text-white rounded-full bg-indigo-500"


    }

    return (
        <span className={`rounded-full px-3 py-1 w-fit text-sm ${variantStyle[statusLower]}`}>{statusValue}</span>
    )
}

export default Badge