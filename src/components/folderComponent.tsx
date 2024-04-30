import FolderIcon from "./svg/folderIcon"

interface IProp{
    folderName:string,
}

const FolderComponent = ({folderName}:IProp)=>{

return<>
    <div className="flex items-center mb-2">
        <span className="mr-2">
            <FolderIcon/>
        </span>
        <span>
            {folderName}
        </span>
    </div>
</>
}

export default FolderComponent