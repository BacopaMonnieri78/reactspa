import {  Route,Routes } from "react-router-dom";
import { CounterComponent } from "./admin/counter/counter.component";
import { HomeComponent } from "./admin/home/home.component";
import { TestingComponent } from "./admin/testing/testing.component";

// const AppRoutes = [
//     {
//         index: true,
//         element: <HomeComponent />
//     },
//     {
//         path: '/counter',
//         element: <CounterComponent />
//     },
//     {
//         path: '/testing',
//         element: <TestingComponent />
//     }
// ];



export const AppRoutes = () => {
    return (

        
        <Routes>
            <Route path="/" element={<HomeComponent/>}/>
            <Route path="/counter" element={<CounterComponent/>}/>
            <Route path="/testing" element={<TestingComponent/>}/>
        </Routes>
        
        
    );
}

// export default AppRoutes;


