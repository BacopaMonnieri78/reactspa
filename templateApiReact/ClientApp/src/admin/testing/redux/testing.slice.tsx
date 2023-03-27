import {  createSlice } from "@reduxjs/toolkit";

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
        // setTestingStatusName :(state, action: PayloadAction<ITestingPropertyLanguage>)=> {
            
        //     //state.data.setdata = action.payload;

        //     state.data.setdata.index=0;
        //     state.data.setdata.name="Hello World"
        // }
        setTestingStatusName :(state)=> {
            
            //state.data.setdata = action.payload;

            state.data.setdata.index=0;
            state.data.setdata.name="Hello World"
        }

    },
    extraReducers: (builder)=> {

        //builder.addCase()
    }
})


export const {resetState, setTestingStatusName}= testingCreateSlice.actions;
export const testingReducer = testingCreateSlice.reducer;


