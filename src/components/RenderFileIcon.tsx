import IconImg from "./IconImg";
import FileIcone from "./svg/fileIcon";

interface IProp{
    fileName:string,
    isOpen?:boolean,
    isFolder?:boolean
}
const RenderFileIcon = ({fileName,isOpen,isFolder}:IProp)=>{
    const extension = fileName.split(".").pop()
    // file icon
    if (extension === "tsx") return <IconImg src="/public/icons/react_ts.svg"/>
    if (extension === "js") return <IconImg src="/public/icons/javascript.svg"/>
    if (extension === "ts") return <IconImg src="/public/icons/typescript.svg"/>
    if (extension === "jsx") return <IconImg src="/public/icons/react.svg"/>
    if (extension === "html") return <IconImg src="/public/icons/html.svg"/>
    if (extension === "css") return <IconImg src="/public/icons/css.svg"/>
    if (extension === "tailwindcss") return <IconImg src="/public/icons/tailwindcss.svg"/>
    

    // folder icon
    if (extension === "node_modules") return isFolder && isOpen ? (<IconImg src="/icons/folder-node-open.svg"/>) : (<IconImg src="/public/icons/folder-node.svg"/>) 
    if (extension === "components") return isFolder && isOpen ? <IconImg src="/public/icons/folder-components-open.svg"/> : <IconImg src="/public/icons/folder-components-open.svg"/>
    if (extension === "public") return isFolder && isOpen ? <IconImg src="/public/icons/folder-public-open.svg"/> : <IconImg src="/public/icons/folder-public.svg"/>
    if (extension === "src") return isFolder && isOpen ? <IconImg src="/public/icons/folder-src-open.svg"/> : <IconImg src="/public/icons/folder-src.svg"/>
    if (extension === "svg") return isFolder && isOpen ? <IconImg src="/public/icons/folder-svg-open.svg"/> : <IconImg src="/public/icons/folder-svg.svg"/>
    if ( extension === "redux") return isFolder && isOpen ? <IconImg src="/public/icons/folder-redux-store-open.svg"/> : <IconImg src="/public/icons/folder-redux-store.svg"/>
    // default
    if(isFolder && isOpen) return <IconImg src={"/public/icons/folder-default-open.svg"}/>
    if(isFolder && !isOpen) return <IconImg src={"/public/icons/folder-default.svg"}/>
    return <FileIcone/>
};

export default RenderFileIcon