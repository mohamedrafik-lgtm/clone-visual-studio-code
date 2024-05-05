import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";
interface IClickedFile{
    fileName:string,
    fileContent:string
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
        }
    }
})

export const {setOpenedFile} = fileTreeSlice.actions
export default fileTreeSlice.reducer