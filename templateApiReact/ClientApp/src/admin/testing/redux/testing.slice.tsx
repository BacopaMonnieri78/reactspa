import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
//import { ITestingPropertyLanguage } from "../../models/testingPropertyNodeModel";

import { TestingOverviewState } from "./testing.model";
import { getTestingComponent, init } from "./testing.redux";

const initialState : TestingOverviewState = {
    loadedData: {
        loadingTestingModel: [],
    },
    command: {
        testingRequest: {status: "idle", canExecute : false},
        testingRequestAll: {status: "idle", canExecute : false}
        
    },
    data: {
        setdata: {
            index: 0,
            name: ''
        },
        removeId: 0,
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
        setName :(state, action: PayloadAction<string> )=> {
            state.data.setdata.name=action.payload;
        },
        sumbitButton: (state=> {
            let getnewPropertyLanguage =  state.data.setdata;
                getnewPropertyLanguage.index = state.loadedData.loadingTestingModel.length;

            state.loadedData.loadingTestingModel.push(getnewPropertyLanguage);
        }),
        removeButton: (state, action: PayloadAction<number>)=> {
            let getPropertyLanguageList= state.loadedData.loadingTestingModel;
            let filter= getPropertyLanguageList.filter((entry)=> { return entry.index !== action.payload});
            state.loadedData.loadingTestingModel= filter;

            state.data.removeId = action.payload;
        },
    },extraReducers: (builder)=> {

        builder.addCase(getTestingComponent.pending, (state)=> {
          state.command.testingRequest.status ="pending";
          state.command.testingRequest.canExecute= false; 
        }).addCase(getTestingComponent.rejected,(state)=> {
            state.command.testingRequest.status ="error";
            state.command.testingRequest.canExecute= false; 
        }).addCase(getTestingComponent.fulfilled, (state, action)=> {
            state.command.testingRequest.status ="success";
            state.data.setdata = action.payload;
        }).addCase(init.pending, (state)=> {
            state.command.testingRequestAll.status ="pending";
            state.command.testingRequestAll.canExecute = false;
        }).addCase(init.rejected,(state)=> {
            state.command.testingRequestAll.status ="error";
            state.command.testingRequestAll.canExecute = false;
        }).addCase(init.fulfilled, (state, action)=> {
            state.command.testingRequestAll.status ="success";
            state.loadedData.loadingTestingModel = action.payload;
        });
    }
})


export const {resetState, setName, sumbitButton, removeButton}= testingCreateSlice.actions;
export const testingReducer = testingCreateSlice.reducer;


