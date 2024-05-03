import { useState } from "react";
import { IFile } from "../interfaces";
import { RightArrowIcon } from "./svg/RightArrowIcon";
import { ButtomIcon } from "./svg/ButtomIcon";
import RenderFileIcon from "./RenderFileIcon";


interface IProp{
    fileTree:IFile
}

const RecursiveComponent = ({fileTree:{isFolder,name,children}}:IProp)=>{
    const [isOpen,setIsOpen] = useState<boolean>(false)


    // handlers
    const tagle = ()=>setIsOpen(prev => !prev)

    return (
    <div className="mb-2 ml-2 cursor-pointer">
        <div className="flex item-center mb-1">
            {isFolder ? (
                <div onClick={tagle} className="flex item-center">
                    <span className="mr-1">
                    {isOpen ? <ButtomIcon/> : <RightArrowIcon/>}
                    </span>
                    
                    <RenderFileIcon fileName={name} isFolder={isFolder} isOpen={isOpen}/>
                    <span className="cursor-pointer select-none	">
                    {name}
                    </span>
                </div>
            ):(<div className="flex item-center mr-2 ">
                    <RenderFileIcon fileName={name} isOpen={isOpen} isFolder={isFolder}/>
            <span className="select-none ml-2">
                {name}
            </span>
            </div>)}
        
        </div>
        {
            isOpen && children && children.map((file,idx) => <RecursiveComponent fileTree={file} key={idx}/>)
        }
    </div>
    )
};

export default RecursiveComponent