import { jamLembur } from "@/utils/lembur";
import {
  Calendar,
  Calendar1,
  CalendarClock,
  RotateCcwClock,
  RotateCcwSquare,
} from "lucide-react";
import CardStat from "./CardStat";

const CardStatData = [
  {
    title: "Sisa Cuti Tahunan",
    value: "8 Hari",
    icon: Calendar,
  },
  {
    title: "Sisa Cuti Besar",
    value: "12 hari",
    icon: Calendar1,
  },
  {
    title: "Jam Lembur",
    value: `${jamLembur} Jam`,
    icon: CalendarClock,
  },
  {
    title: "Cuti Pending",
    value: 0,
    icon: RotateCcwClock,
  },
  {
    title: "Lembur Pending",
    value: 0,
    icon: RotateCcwSquare,
  },
];
const CardStatList = () => {
  return (
    <div className="flex gap-4 justify-between mt-4 ">
      {CardStatData.map((item, index) => (
        <CardStat key={index} {...item} />
      ))}
    </div>
  );
};

export default CardStatList;
