
interface IProp{
    src: string,
    className?:string
}

const IconImg = ({src , className="w-6 h-6"}:IProp)=>{
    return <img src={src}  className={className}/>
}

export default IconImg