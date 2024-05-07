import { useDispatch } from "react-redux"
import { IFile } from "../interfaces"
import RenderFileIcon from "./RenderFileIcon"
import { CloseIcon } from "./svg/ClosIcon"
import { setClickedFile } from "../app/retuers/TreeSlice"

interface IProp{
file:IFile,
}

const OpenedFileBarIcon = ({file}:IProp) => {
    const dispatch = useDispatch()
    // handlers
    const onClick = () => {
        const {name,content} = file
        dispatch(setClickedFile({fileContent:content,fileName:name}))
    }
    return (
        <div className="flex item-center p-2" onClick={onClick}>
                <RenderFileIcon fileName={file.name} />
            <span className="cursor-pointer duration-300 flex justify-center item-center wx-2 mr-2 p-1 rounded-md">
        {file.name}
            </span>
            <span className="cursor-pointer duration-300 flex justify-center item-center wx-2 mr-2 p-1 rounded-md"> 
                <CloseIcon/>
            </span>
        </div>
    )
}


export default OpenedFileBarIcon