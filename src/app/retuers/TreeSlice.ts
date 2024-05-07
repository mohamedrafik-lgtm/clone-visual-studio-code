import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";
interface IClickedFile{
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
            state.clickedFile.fileName = action.payload.fileName
            state.clickedFile.fileContent = action.payload.fileContent
        }
    }
})

export const {setOpenedFile,setClickedFile} = fileTreeSlice.actions
export default fileTreeSlice.reducer