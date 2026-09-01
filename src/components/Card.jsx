import { Calendar } from "lucide-react"

const Card = ({title= "", remaining
    = "", total = ""
}) => {
    

    return(
        <div className="bg-blue-500 text-white p-6 rounded-3xl shadow-lg w-fit">
            <div className="flex gap-4 items-center mb-4">
              <span className="text-blue-100 text-sm font-medium">{title}</span>
              <div className="bg-white/20 p-2.5 rounded-2xl backdrop-blur-md">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-extrabold tracking-tight">{remaining}</span>
              <span className="text-xl font-medium text-blue-100">/ {total} Hari</span>
            </div>
            </div>

    )
}

export default Card