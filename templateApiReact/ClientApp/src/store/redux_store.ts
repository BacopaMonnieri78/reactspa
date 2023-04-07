import { configureStore } from '@reduxjs/toolkit';
//import { counterReducer } from '../admin/counter/redux/counter.slices';
import { testingReducer } from '../admin/testing/redux/testing.slice';


 const store = configureStore({
    reducer:{
        
        testingStore: testingReducer,
        //countStore: counterReducer,
    },
});

export type RootState= ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;