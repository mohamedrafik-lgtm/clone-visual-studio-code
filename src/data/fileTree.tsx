import { IFile } from "../interfaces";

export const fileTree:IFile = {
    name:"vs code clone",
    isFolder:true,
    children:[
        {
            name:"node_modules",
            isFolder:true,
            children:[{name:".vite",isFolder:true,children:[{name:"react.js",
                        isFolder:false}] }],
        },
                        {
                            name:"index.html",
                            isFolder:false
                        },
        
    ]
}