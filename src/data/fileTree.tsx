import { IFile } from "../interfaces";

export const fileTree:IFile = {
    name:"vs code clone",
    isFolder:true,
    children:[
        {
            name:"node_modules",
            isFolder:true,
            children:[{name:".svg",isFolder:true,children:[{name:"react.tsx",
                        isFolder:false}],
                    },
                    ],
        },
        {name:".src",isFolder:true,children:[{name:"components",isFolder:true,children:[{name:"index.js",isFolder:false}]},
        {
            name:"redux",isFolder:true,children:[
                {name:"userData.ts",isFolder:false}
            ]
        },{name:"react.tsx",
                        isFolder:false}],
                    },
        {
            name:"public",
            isFolder:true,
            children:[{name:"index.ts",isFolder:false}]
        },
                        {
                            name:"index.html",
                            isFolder:false
                        },
        
    ]
}