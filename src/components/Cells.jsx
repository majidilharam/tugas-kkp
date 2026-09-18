

const Cells = ({ children, variant= ""}) => {

const variantLower = variant.toLowerCase()

const variantStyle = { 
    default: "text-white",
    warning: "text-red-400", 
    pending: "text-yellow-400",
    succes: "text-green-400"

}


    return (
        <p className={`flex-1 text-center ${variantStyle[variantLower]}`}>{children}</p>
    )
}

export default Cells