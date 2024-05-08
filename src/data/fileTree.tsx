import { IFile } from "../interfaces";
import {v4 as uuid} from "uuid"
export const fileTree:IFile = {
    id: uuid(),
    name:"vs code clone",
    isFolder:true,
    children:[
        {
            id: uuid(),
            name:"node_modules",
            isFolder:true,
            children:[{id: uuid(),name:".svg",isFolder:true,children:[{id: uuid(),name:"react.tsx",
                        isFolder:false}],
                    },
                    ],
        },
        {id: uuid(),name:".src",isFolder:true,children:[{id: uuid(),name:"components",isFolder:true,children:[{id: uuid(),name:"index.js",isFolder:false,
            content:`const onFileClick = ()=> {
                const exists = doesFileObjectExist(openedFile,id)
                dispatch(setClickedFile({fileContent:content,fileName:name,activTabId:id}))
                if (exists) return;
                dispatch(setOpenedFile([...openedFile,fileTree]))
            }`
        }]},
        {
            id: uuid(),
            name:"redux",isFolder:true,children:[
                {id: uuid(),name:"userData.ts",isFolder:false}
            ]
        },{id: uuid(),name:"react.tsx",
                        isFolder:false}],
                    },
        {
            id: uuid(),
            name:"public",
            isFolder:true,
            children:[{id: uuid(),name:"index.ts",isFolder:false}]
        },
                        {
                            id: uuid(),
                            name:"index.html",
                            isFolder:false
                        },
        
    ]
}



