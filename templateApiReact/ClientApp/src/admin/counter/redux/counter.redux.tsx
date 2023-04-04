import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getSavedCountNumber = createAsyncThunk(
    'Counter/getCountNumber',
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