import FileIcone from "./svg/fileIcon";

interface IProp{
    fileName:string
}

const FileComponent = ({fileName}:IProp)=>{

    return <>
    <div className="flex items-center mb-2">
        <span className="mr-2">
            <FileIcone/>
        </span>
        <span>
            {fileName}
        </span>
    </div>
    </>
};

export default FileComponent