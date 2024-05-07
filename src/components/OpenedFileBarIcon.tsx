import { IFile } from "../interfaces"
import RenderFileIcon from "./RenderFileIcon"
import { CloseIcon } from "./svg/ClosIcon"

interface IProp{
file:IFile,
}

const OpenedFileBarIcon = ({file}:IProp) => {
    return (
        <div className="flex item-center p-2">
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