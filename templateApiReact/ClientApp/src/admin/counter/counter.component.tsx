import { useState } from "react"

export const CounterComponent = () => {

    const  [count, setCount] = useState(0);


    const add  =( num: number)=>  {

        num= num+1;
        setCount(num);
    }

    const min  =(num:number)=>  {

        num= num-1;
        setCount(num);
    }

    return (
        <>

            <div>number {count}</div>

<button className="btn btn-success" onClick={()=> add(count)}>+</button>
<button className="btn  btn-danger" onClick={()=> min(count)}>-</button>
        </>
    )
}