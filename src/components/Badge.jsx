const Badge = ({ statusValue }) => {
    const statusLower = statusValue.toLowerCase()

    const variantStyle = {
        disetujui: "text-white rounded-full bg-green-400", 
        ditolak: "text-white rounded-full bg-red-400", 
        pending: "text-white rounded-full bg-yellow-400"
    }

    return (
        <span className={`rounded-full px-3 py-1 w-fit text-sm ${variantStyle[statusLower]}`}>{statusValue}</span>
    )
}

export default Badge