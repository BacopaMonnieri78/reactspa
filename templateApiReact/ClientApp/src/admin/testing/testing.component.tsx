
//import { Button, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { AppDispatch } from '../../store/redux_store'
import { deleteTestingComponent, getTestingComponent, init } from './redux/testing.redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import { removeButton, setName, sumbitButton } from './redux/testing.slice';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export const TestingComponent=() =>{

  const dispatch:AppDispatch= useAppDispatch();
  const state= useAppSelector((state)=> state.testingStore);

useEffect(()=> {

  return ()=> {
    //dispatch(setTestingStatusName())

    dispatch(getTestingComponent())
  };
  
},[dispatch])

useEffect(()=> {

  return ()=> {
    //dispatch(setTestingStatusName())

    dispatch(init())
  };
  
},[dispatch])



const deleteItem = (index: number) => {

  console.log(index,"deleteNumber");

  dispatch(removeButton(index));
  dispatch(deleteTestingComponent())

}

  return (
   <>
    <div>
      <TextField id="outlined-basic" label="Add Something" variant="outlined" onChange={ (e)=> dispatch(setName(e.target.value))} />
      <Button onClick={()=>dispatch(sumbitButton())} variant="contained">Submit</Button>
    </div>

    <div>
      <List>
        {state.loadedData.loadingTestingModel.map((entry)=> 
          <ListItem disablePadding >
            <ListItemText primary={entry.name} key={entry.index}/>
            
            <Button onClick={()=>(deleteItem(entry.index))} variant="contained">Delete</Button>
        </ListItem>
        )}
      </List>
    </div>
   </>
  )
}

