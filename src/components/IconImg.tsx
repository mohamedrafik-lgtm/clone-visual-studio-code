interface IProp{
    src: string,
}

const IconImg = ({src}:IProp)=>{
    return <img src={src} className="w-5 h-5"/>
}

export default IconImg