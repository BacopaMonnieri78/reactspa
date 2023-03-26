import { configureStore } from '@reduxjs/toolkit';
import { testingReducer } from '../admin/testing/redux/testing.slice';

//todo import slice
 const store = configureStore({
    reducer:{
        
        testingStore: testingReducer,
    },
});

export type RootState= ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;