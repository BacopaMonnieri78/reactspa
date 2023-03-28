import {  createSlice } from "@reduxjs/toolkit";

import { TestingOverviewState } from "./testing.model";
import { getTestingComponent } from "./testing.redux";

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

    },extraReducers: (builder)=> {

        builder.addCase(getTestingComponent.pending, (state)=> {
          state.command.testingRequest.status ="pending";
          state.command.testingRequest.canExecute= false; 
        }).addCase(getTestingComponent.rejected,(state)=> {
            state.command.testingRequest.status ="error";
            state.command.testingRequest.canExecute= false; 
        }).addCase(getTestingComponent.fulfilled, (state)=> {
            state.command.testingRequest.status ="success";
            //todo override slice with action.payload.getdata
            
        });
    }
})


export const {resetState, setTestingStatusName}= testingCreateSlice.actions;
export const testingReducer = testingCreateSlice.reducer;


