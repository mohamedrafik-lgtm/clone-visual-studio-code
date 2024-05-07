import { RootState } from "../app/store";
import { useSelector } from "react-redux"
import OpenedFileBarIcon from "./OpenedFileBarIcon";


const OpenedFileBar = () => {
    const {openedFile} = useSelector((state:RootState) => state.tree) 

    return (
        <div>
            <ul className="flex item-center">
                {openedFile.map((file) => ( <OpenedFileBarIcon file={file} key={file.id}/>))}
            </ul>
        </div>
    )
}

export default OpenedFileBar