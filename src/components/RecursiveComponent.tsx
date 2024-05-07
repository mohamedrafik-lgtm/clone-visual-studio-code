import { useState } from "react";
import { IFile } from "../interfaces";
import { RightArrowIcon } from "./svg/RightArrowIcon";
import { ButtomIcon } from "./svg/ButtomIcon";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { setOpenedFile } from "../app/retuers/TreeSlice";
import { RootState } from "../app/store";
import { doesFileObjectExist } from "../utils/functions";


interface IProp{
    fileTree:IFile
}

const RecursiveComponent = ({fileTree}:IProp)=>{
    const {id,isFolder,name,children} = fileTree
    const dispatch = useDispatch()
    const {openedFile} = useSelector((state:RootState) => state.tree)
    const [isOpen,setIsOpen] = useState<boolean>(false)

    // handlers
    const tagle = ()=>setIsOpen(prev => !prev)
    
    const onFileClick = ()=> {
        const exists = doesFileObjectExist(openedFile,id)
        if (exists) return;
        dispatch(setOpenedFile([...openedFile,fileTree]))
    }

    return (
    <div className="mb-2 ml-2 cursor-pointer">
        <div className="flex item-center mb-1">
            {isFolder ? (
                <div onClick={tagle} className="flex item-center">
                    <span className="mr-1">
                    {isOpen ? <ButtomIcon/> : <RightArrowIcon/>}
                    </span>
                    
                    <RenderFileIcon fileName={name} isFolder={isFolder} isOpen={isOpen}/>
                    <span className="cursor-pointer select-none">
                    {name}
                    </span>
                </div>
            ):(<div className="flex item-center ml-2" onClick={onFileClick}>
                    <RenderFileIcon fileName={name}/>
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