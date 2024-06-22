import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { RootState } from "../store"


interface IAuth {
    userId : string | null
    token : string | null
    isLoggedIn : boolean
}

const initialState : IAuth = {
    isLoggedIn : false,
    userId : null, 
    token : null
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        signIn: (state:IAuth, action:PayloadAction<IAuth>) => {
            state = {
                ...state,
                ...action.payload
            }
        }
    },
}); 

// action
export const {signIn} = authSlice.actions; 

//selector
export const selectAuth = (state : RootState) => state;

//reducer
export default authSlice.reducer;
