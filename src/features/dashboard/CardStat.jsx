
const CardStat = ({ label = "", label_2 = "",
  value = "",
  unit = "",
  // icon: Icon,
  className = "",

}) => {
  return (
    <div className={`bg-old-blue text-white p-6 rounded-3xl shadow-lg w-fit ${className}`}>
      <div className=" items-center mb-4 ">
        <div className="flex flex-col gap-20">
          <div className="flex gap-4">
          <span className="text-white text-lg font-medium">{label}</span>
          <div className="flex gap-4 items">
         <span className="text-5xl font-extrabold tracking-tight">{value}</span>
         <span className="text-xl font-medium text-blue-100 ">{unit}</span>
         </div>
         </div>

          <span className="text-white text-lg font-medium">{label_2}</span>
        </div>
        
      </div>
      <div className="">

      </div>
    </div>

  )
}

export default CardStat