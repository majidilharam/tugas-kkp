
const Card = ({title = "",
   remaining = "",
   total = "", 
   icon: Icon,
   className = "", 

}) => {
    

    return(
        <div className={`bg-blue-500 text-white p-6 rounded-3xl shadow-lg w-fit ${className}`}>
            <div className="flex gap-4 items-center mb-4">
              <span className="text-white text-lg font-medium">{title}</span>
              <div className="bg-white/20 p-2.5 rounded-2xl backdrop-blur-md">
                <Icon/>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-extrabold tracking-tight">{remaining}</span>
              <span className="text-xl font-medium text-blue-100 ">{total}</span>

            </div>
            </div>

    )
}

export default Card