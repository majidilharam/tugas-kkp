import { jamLembur } from "@/utils/lembur"
import { Calendar, Calendar1, CalendarClock, RotateCcwClock, RotateCcwSquare } from "lucide-react"
import CardStat from "./CardStat"

const CardStatData = [
    {
     label: "Cuti Tahunan",
     label_2: "CUti Besar",
     value: 8, 
     unit: "/ 8 hari",
     icon: Calendar
    },
    {
     label:"Cuti Besar",
     value: 12, 
     unit: "/ 12 hari",
     icon: Calendar1
    }, 
    {
      label: "Total Jam Lembur", 
      value: jamLembur, 
      unit: "Jam",
      icon: CalendarClock
    }, 
    {
      label: "Cuti Pending", 
      value: 0, 
      icon: RotateCcwClock
    },
    {
     label: "Lembur Pending", 
     value: 0,
     icon: RotateCcwSquare
    }
]
const CardStatList = () => {
return (

    <div className="flex justify-between mt-4">
        {CardStatData.map((item, index) => (
         <CardStat key={index} {...item} />
        ))}
    </div>
    
)
}




export default CardStatList