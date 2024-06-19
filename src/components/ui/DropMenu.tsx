import { useEffect, useRef } from "react"

interface IProp{
    SetShowMenu:(val:boolean) => void;
    positions:{
        x: number, 
        y: number
    }
}


const DropMenu = ({positions,SetShowMenu}:IProp) => {
    const menuRef = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        const handelClickOutside = (event:MouseEvent) => {
            if(menuRef.current && !menuRef.current.contains(event.target as Node)) {
                SetShowMenu(false)
            }
        }
         window.addEventListener('click',handelClickOutside)

         return () => {
             window.removeEventListener('click',handelClickOutside)
         }
    },[SetShowMenu])
    return(
           
           <div ref={menuRef}>
            <ul className="bg-white text-black w-fit px-7 py-2 rounded-md"
           style={{
            position: 'absolute',
            left:positions.x,
            top:positions.y,
            
           }}>
            <li>close</li>
            <li>close all</li>
           </ul>
           </div>
        
    )
}


export default DropMenu