import { createAsyncThunk } from "@reduxjs/toolkit";

//import { RootState } from "../../../store/redux_store";

//import {RootState} from "../../../store/redux_store";


export const getTestingComponent = createAsyncThunk(
    'templatetest/getTestingComponent', 
    async(_, { getState, dispatch})=> {
        //const state = getState() as RootState;

        
    }
)


// class Testing extends useHttpService
