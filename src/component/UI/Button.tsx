const Button = ({title,className,onClick})=>{

return <button className={"px-4 py-2 rounded-md"+className} onClick={onClick}>{title}</button>
}

export default Button