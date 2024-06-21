import { useEffect, useRef } from "react"
import { setOpenedFile } from "../../app/retuers/TreeSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";


interface IProp{
    SetShowMenu:(val:boolean) => void;
    positions:{
        x: number, 
        y: number
    }
}


const DropMenu = ({positions,SetShowMenu}:IProp) => {
    const dispatch = useDispatch()
    const menuRef = useRef<HTMLDivElement>(null)
    const {openedFile,tapIdToRemove} = useSelector((state:RootState) => state.tree)
    // handlers
    const closeAll = () =>{
        dispatch(setOpenedFile([]))
        SetShowMenu(false)
    }
    const onClose = ()=>{
        const filtered = openedFile.filter(file => file.id !== tapIdToRemove)
        dispatch(setOpenedFile(filtered))
        SetShowMenu(false)
    }
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
            <li onClick={onClose} className="cursor-pointer">close</li>
            <li onClick={closeAll} className="cursor-pointer">close all</li>
           </ul>
           </div>
        
    )
}


export default DropMenu



