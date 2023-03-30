
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { AppDispatch } from '../../store/redux_store'
import { getTestingComponent } from './redux/testing.redux';
//import { setTestingStatusName } from './redux/testing.slice';


export const TestingComponent=() =>{

  const dispatch:AppDispatch= useAppDispatch();
  const state= useAppSelector((state)=> state.testingStore);

useEffect(()=> {

  return ()=> {
    //dispatch(setTestingStatusName())

    dispatch(getTestingComponent())
  };
  
},[dispatch])

  return (
    <div>
      <p>{state.data.setdata.index}</p>
      <p>{state.data.setdata.name}</p>
    </div>
  )
}

