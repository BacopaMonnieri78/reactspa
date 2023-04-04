import { LoadingState } from "../../../loading_state";
import {ITestingPropertyLanguage} from "../../models/testingPropertyNodeModel";

export interface TestingOverviewState{
    loadedData :{
        loadingTestingModel: ITestingPropertyLanguage[],
    };
    command: {
            testingRequest: LoadingState,
            testingRequestAll: LoadingState
    };

    data:{
            setdata: ITestingPropertyLanguage,
            removeId: number;
    }
}