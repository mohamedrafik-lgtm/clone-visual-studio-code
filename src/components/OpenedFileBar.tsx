import { RootState } from "../app/store";
import { useSelector } from "react-redux"
import OpenedFileBarIcon from "./OpenedFileBarIcon";
import FileContentComponent from "./FileContentComponent";


const OpenedFileBar = () => {
    const {openedFile,clickedFile} = useSelector((state:RootState) => state.tree) 

    return (
        <div>
            <div className="flex item-center border-b border-gray-500">
                {openedFile.map((file) => ( <OpenedFileBarIcon file={file} key={file.id}/>))}
            </div>
            <FileContentComponent content={clickedFile.fileContent}/>
        </div>
    )
}

export default OpenedFileBar