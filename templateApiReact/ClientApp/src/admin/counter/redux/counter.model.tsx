import { LoadingState } from "../../../loading_state";
import { ICounter } from "../../models/counterModel";

export interface CounterOverviewState{
    loadedData :{
        loadingCountNumber: ICounter,
    };
    command: {
        counterRequest: LoadingState,
            
    };
    data:{
        counterNumber: ICounter,
    }
}