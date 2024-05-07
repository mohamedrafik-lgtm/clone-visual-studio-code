import { svgStyle } from "../style"

interface IProp{
    src: string,
}

const IconImg = ({src}:IProp)=>{
    return <img src={src} {...svgStyle} className="mr-2"/>
}

export default IconImg