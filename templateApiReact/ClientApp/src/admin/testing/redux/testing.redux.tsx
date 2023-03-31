import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../../store/redux_store";

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


export const init = createAsyncThunk(
  'users/fetchalldata',
  async (_, {getState, signal }) => {
    const source = axios.CancelToken.source()
    signal.addEventListener('abort', () => {
      source.cancel()
    })

    //const state = getState() as RootState;
    const response = await axios.get('https://localhost:7263/WeatherForecast/GetAll', {
      cancelToken: source.token,
    })
    return response.data
  }
)

export const deleteTestingComponent = createAsyncThunk(
  'users/fetchDelete',
  async (_, {getState, signal }) => {
    const source = axios.CancelToken.source()
    signal.addEventListener('abort', () => {
      source.cancel()
    })

    const state = getState() as RootState;
    const response = await axios.delete(`https://localhost:7263/WeatherForecast/Delete/${state.testingStore.data.removeId}`, {
      cancelToken: source.token,
    })
    return response.data
  }
)

export const updateTestingComponent = createAsyncThunk(
  'users/fetchUpdate',
  async (_, {getState, signal }) => {
    const source = axios.CancelToken.source()
    signal.addEventListener('abort', () => {
      source.cancel()
    })

    const state = getState() as RootState;
    const response = await axios.put(`https://localhost:7263/WeatherForecast/update/${state.testingStore.data.setdata.index}`, {
      cancelToken: source.token,
    })
    return response.data
  }
)

export const AddTestingComponent = createAsyncThunk(
  'users/fetchAdd',
  async (_, {getState, signal }) => {
    const source = axios.CancelToken.source()
    signal.addEventListener('abort', () => {
      source.cancel()
    })

    const state = getState() as RootState;
    const response = await axios.post('https://localhost:7263/WeatherForecast/AddTestingComponent', state.testingStore.data.setdata, )
    
    return response.data


    
  }
)


