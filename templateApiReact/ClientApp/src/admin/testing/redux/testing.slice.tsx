import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITestingPropertyLanguage } from "../../models/testingPropertyNodeModel";
import { TestingOverviewState } from "./testing.model";

const initialState : TestingOverviewState = {
    loadedData: {
        loadingTestingModel: {
            index: 0,
            name: ''
        },

        
    },
    command: {
        testingRequest: {status: "idle", canExecute : false}
        
    },
    data: {
        setdata: {
            index: 0,
            name: ''
        }
    }
}

export const testingCreateSlice = createSlice ({
    name :'test',
    initialState,
    reducers:{
        resetState:(state)=> {
            state.data = initialState.data;
            state.command= initialState.command;
            state.loadedData= initialState.loadedData;
        },
        setTestingStatusName :(state, action: PayloadAction<ITestingPropertyLanguage>)=> {
            
            state.data.setdata = action.payload;
        }

    },
    extraReducers: (builder)=> {

        //builder.addCase()
    }
})


export const {resetState, setTestingStatusName}= testingCreateSlice.actions;
export const testingReducer = testingCreateSlice.reducer;


