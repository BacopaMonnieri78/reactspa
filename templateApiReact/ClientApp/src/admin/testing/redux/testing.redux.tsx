import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//import { RootState } from "../../../store/redux_store";

//import {RootState} from "../../../store/redux_store";


// export const getTestingComponent = createAsyncThunk(
//     'templatetest/getTestingComponent', 
//     async(_, { getState, dispatch})=> {
//         const state = getState() as RootState;

//         const response = await axios.get(`https://reqres.in/api/users/${state.testingStore.data.setdata.index}`);
//       //cancelToken: source.token,
        
//     }
// )





// export const getTestingComponent = createAsyncThunk(
//   'users/fetchById',
//   async (_, {getState, signal }) => {
//     const source = axios.CancelToken.source()
//     signal.addEventListener('abort', () => {
//       source.cancel()
//     })

//     const state = getState() as RootState;
//     const response = await axios.get(`https://reqres.in/api/users/${state.testingStore.data.setdata.index}`, {
//       cancelToken: source.token,
//     })
//     return response.data
//   }
// )

export const getTestingComponent = createAsyncThunk(
  'users/fetchById',
  async (_, {getState, signal }) => {
    const source = axios.CancelToken.source()
    signal.addEventListener('abort', () => {
      source.cancel()
    })

    //const state = getState() as RootState;
    const response = await axios.get('https://localhost:7263/WeatherForecast', {
      cancelToken: source.token,
    })
    return response.data
  }
)


// class Testing extends useHttpService
