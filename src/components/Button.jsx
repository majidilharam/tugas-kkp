import cn from "../utils/cn"


const Button = ({ children = "", variant = "primary"}) => {
    const buttonVariant = {

        primary: "bg-blue-500", 
        secondary: "bg-blue-950",
        tertiary: "bg-blue-900",
        
    }

    return (
    <button className={cn("rounded-lg w-fit p-2", buttonVariant[variant])}>{children}</button>

    )
}

export default Button