import { useSelector } from "react-redux"
import FileContentComponent from "./FileContentComponent"
import OpenedFileBar from "./OpenedFileBar"
import { RootState } from "../app/store";

const Preview = () => {
    const {clickedFile:{fileContent}}= useSelector(({tree}:RootState) => tree)
    return (
        <>
            <OpenedFileBar/>
            <FileContentComponent content={fileContent as string}/>
        </>
    )
}

export default Preview