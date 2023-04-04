import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterOverviewState } from "./counter.model";
import { getSavedCountNumber } from "./counter.redux";

const countNumbersState : CounterOverviewState= {
    loadedData: {
        loadingCountNumber: {
            count:0,
        },
    },
    command: {
        counterRequest: {status: "idle", canExecute : false},
    },
    data: {
        counterNumber:{
            count:0,
        }
    }
}


export const countCreateSlice = createSlice ({
    name :'count',
    countNumbersState,
    reducers:{
        resetState:(state)=> {
            state.data = counterState.data;
            state.command= counterState.command;
            state.loadedData= counterState.loadedData;
        },
        setName :(state, action: PayloadAction<string> )=> {
            state.data.setdata.name=action.payload;
        },
        
     
    } ,extraReducers: (builder)=> {

        builder.addCase(getSavedCountNumber.pending, (state)=> {
          state.command.counterRequest.status ="pending";
          state.command.counterRequest.canExecute= false; 
        }).addCase(getSavedCountNumber.rejected,(state)=> {
            state.command.counterRequest.status ="error";
            state.command.counterRequest.canExecute= false; 
        }).addCase(getSavedCountNumber.fulfilled, (state, action)=> {
            state.command.counterRequest.status ="success";
            state.data.setdata = action.payload;
        });
    }
})


export const {resetState, setName}= countCreateSlice.actions;
export const counterReducer = countCreateSlice.reducer;