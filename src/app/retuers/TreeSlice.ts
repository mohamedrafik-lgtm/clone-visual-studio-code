import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";
interface IClickedFile{
    activTabId: string | null ,
    fileName:string,
    fileContent:string | undefined
}
interface IInitialState{
    openedFile:IFile[],
    clickedFile:IClickedFile,
}
const initialState:IInitialState = {
    openedFile:[],
    clickedFile:{
        activTabId: null,
        fileName:"",
        fileContent:""
    }
};

const fileTreeSlice = createSlice({
    name:"fileTree",
    initialState,
    reducers:{
        setOpenedFile:(state,action:PayloadAction<IFile[]>) => {
            state.openedFile = action.payload
        },
        setClickedFile:(state,action:PayloadAction<IClickedFile>) =>{
            state.clickedFile = action.payload
            
        },
        
    }
})

export const {setOpenedFile,setClickedFile} = fileTreeSlice.actions
export default fileTreeSlice.reducer