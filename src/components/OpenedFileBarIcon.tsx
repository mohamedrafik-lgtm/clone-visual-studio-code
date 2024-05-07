import { useDispatch, useSelector } from "react-redux"
import { IFile } from "../interfaces"
import RenderFileIcon from "./RenderFileIcon"
import { CloseIcon } from "./svg/ClosIcon"
import { setActivTabIdAction, setClickedFile } from "../app/retuers/TreeSlice"
import { RootState } from "../app/store"

interface IProp{
file:IFile,
}

const OpenedFileBarIcon = ({file}:IProp) => {
    const dispatch = useDispatch()
    const {activTabId} = useSelector((state:RootState) => state.tree)
    // handlers
    const {id,name,content} = file
    const onClick = () => {
        dispatch(setClickedFile({fileContent:content,fileName:name}))
        dispatch(setActivTabIdAction(id))
    }
    return (
        <div className={`flex item-center p-2 border-t-2 ${id === activTabId ? "border-[#cf6ccf]" : "border-transparent"}`} onClick={onClick}
        >
                <RenderFileIcon fileName={file.name} />
            <span className="cursor-pointer duration-300 flex justify-center item-center wx-2 mr-2 p-1 rounded-md" >
        {file.name}
            </span>
            <span className="cursor-pointer duration-300 flex justify-center item-center wx-2 mr-2 p-1 rounded-md"> 
                <CloseIcon/>
            </span>
        </div>
    )
}


export default OpenedFileBarIcon