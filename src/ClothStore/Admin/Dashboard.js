import React, { useContext, useState } from 'react'
import Welcome from './Welcome';
import Login from './Login';
import { loginStatus } from '../../App';

const Dashboard = () => {
    const [view,setView]=useState("");
    const [login,setLogin]=useContext(loginStatus)
    const DashboardView=()=>{
        if (view === "") {
            return <Welcome />;
        } 
        // else if (view === "AddService") {
        //     return <AddService />;
        // } else if (view === "ViewService") {
        //     return <ViewService />;
        // } 
        // else if (view === "AddCar") {
        //     return <AddCar />;
        // } 
        // else if (view === "ViewCars") {
        //     return <ViewCars />;
        // } 
        // else if (view === "CustomerDetails") {
        //     return <CustomerDetails />;
        // } 
        else {
            return <h2 className='m-5'>Invalid View</h2>;
        }
    }
    if (login){
        return (
            <div className='container-fluid dashboard mt-5'>
                <div className='row'>
                    <aside className='col-lg-2 pt-3 px-2 text-center'>
                        <div className='row'><h4 onClick={()=>setView("")} className='mb-3 m-0 p-3'>Admin Dashboard</h4></div>
                        <button className='shadow-lg'>Add Shirt</button>
                        <button className='shadow-lg'>View Shirts</button>
                        <button className='shadow-lg'>Add T-Shirts</button>
                        <button className='shadow-lg'>View T-Shirts</button>
                        <button className='shadow-lg'>View Queries</button>
                        <button className='shadow-lg' onClick={()=>setLogin(false)} >Logout</button>
                    </aside>
                    <div className='col-lg-10'>
                        {DashboardView()}
                    </div>
                </div>
            </div>
          )
    }
    else{
        return <Login/>
    }
}

export default Dashboard