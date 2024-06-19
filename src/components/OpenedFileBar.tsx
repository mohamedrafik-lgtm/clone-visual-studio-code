import { RootState } from "../app/store";
import { useSelector } from "react-redux"
import OpenedFileBarIcon from "./OpenedFileBarIcon";
import DropMenu from "./ui/DropMenu";
import { useState } from "react";

const OpenedFileBar = () => {
    const {openedFile} = useSelector((state:RootState) => state.tree) 
    const[menuPosition,setMenuPosition]= useState<{x:number,y:number}>({x:0,y:0})
    const [showMenu,SetShowMenu] = useState(false)
    return (
        <div>
            <div className="flex item-center border-b border-gray-500"
              onContextMenu={(e)=>{
                e.preventDefault()
                setMenuPosition({x:e.clientX,y:e.clientY})
                SetShowMenu(true)
            }}
            >
                {openedFile.map((file) => ( <OpenedFileBarIcon file={file} key={file.id}/>))}
            </div>
            {showMenu && <DropMenu positions={menuPosition}/>}
        </div>
    )
}

export default OpenedFileBar