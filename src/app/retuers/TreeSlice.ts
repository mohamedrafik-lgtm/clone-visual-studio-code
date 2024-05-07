import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";
interface IClickedFile{
    fileName:string,
    fileContent:string | undefined
}
interface IInitialState{
    openedFile:IFile[],
    clickedFile:IClickedFile,
    activTabId: string | null
}
const initialState:IInitialState = {
    activTabId:null,
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
            state.clickedFile = action.payload
            
        },
        setActivTabIdAction :(state,action:PayloadAction<string>)=>{
            state.activTabId = action.payload
        }
    }
})

export const {setOpenedFile,setClickedFile,setActivTabIdAction} = fileTreeSlice.actions
export default fileTreeSlice.reducer