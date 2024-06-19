import { useDispatch, useSelector } from "react-redux"
import { IFile } from "../interfaces"
import RenderFileIcon from "./RenderFileIcon"
import { CloseIcon } from "./svg/ClosIcon"
import { setClickedFile, setOpenedFile } from "../app/retuers/TreeSlice"
import { RootState } from "../app/store"

interface IProp{
file:IFile,
}

const OpenedFileBarIcon = ({file}:IProp) => {
    const dispatch = useDispatch()
    
    const {openedFile,clickedFile:{activTabId}} = useSelector((state:RootState) => state.tree)
    // handlers
    const onClick = () => {
        const {id,name,content} = file
        dispatch(setClickedFile({fileContent:content,fileName:name,activTabId:id}))
    }
    const onRemove = (selictedId:string) =>{
        const filtered = openedFile.filter(file => file.id !== selictedId)
        const lastTab = filtered[filtered.length - 1]
        if(!lastTab){
            dispatch(setOpenedFile([]))
            dispatch(setClickedFile({activTabId:null,fileContent:"",fileName:""}))
            return;
        }
        const {id,name,content} = lastTab
        dispatch(setOpenedFile(filtered))
        dispatch(setClickedFile({activTabId:id,fileContent:content,fileName:name}))
    }
    return (
        <div className={`flex item-center p-2 border-t-2 ${file.id === activTabId ? "border-[#cf6ccf]" : "border-transparent"}`} onClick={onClick}
      
        >
                <RenderFileIcon fileName={file.name} />
            <span className="cursor-pointer duration-300 flex justify-center item-center wx-2 mr-2 p-1 rounded-md" >
        {file.name}
            </span>
            <span className="cursor-pointer duration-300 flex justify-center item-center wx-2 mr-2 p-1 rounded-md"
            onClick={e =>{
                    e.stopPropagation()
                    onRemove(file.id)
            }}> 
                <CloseIcon/>
            </span>
            
        </div>
    )
}


export default OpenedFileBarIcon