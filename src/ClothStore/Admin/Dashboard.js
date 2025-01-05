import React, { useContext, useState } from 'react'
import Welcome from './Welcome';
import AddShirt from './AddShirt'
import ViewShirts from './ViewShirts'
import AddTshirt from './AddTshirt'
import ViewTshirts from './ViewTshirts'
import AddPant from './AddPant'
import ViewPants from './ViewPants'
import AddShoe from './AddShoe'
import ViewShoes from './ViewShoes'
import ViewQueries from './ViewQueries'
import Login from './Login';
import { loginStatus } from '../../App';

const Dashboard = () => {
    const [view,setView]=useState("");
    const [login,setLogin]=useContext(loginStatus)
    const DashboardView=()=>{
        if (view === "") {
            return <Welcome />;
        } 
        else if (view === "AddShirt") {
            return <AddShirt/>;
        } else if (view === "ViewShirts") {
            return <ViewShirts />;
        } 
        else if (view === "AddTshirt") {
            return <AddTshirt />;
        } 
        else if (view === "ViewTshirts") {
            return <ViewTshirts />;
        } 
        else if (view === "AddPant") {
            return <AddPant />;
        } 
        else if (view === "ViewPants") {
            return <ViewPants />;
        } 
        else if (view === "AddShoe") {
            return <AddShoe />;
        } 
        else if (view === "ViewShoes") {
            return <ViewShoes />;
        } 
        else if (view === "ViewQueries") {
            return <ViewQueries />;
        } 
        else {
            return <h2 className='m-5'>Invalid View</h2>;
        }
    }
    if (login){
        return (
            <div className='container-fluid dashboard mt-5'>
                <div className='row'>
                    <aside className='col-lg-3 pt-3 px-2 text-center'>
                        <div className='row'><h4 onClick={()=>setView("")} className='mb-3 m-0 p-3'>Admin Dashboard</h4></div>
                        <button className='me-2' onClick={()=>setView("AddShirt")}>Add Shirt</button>
                        <button onClick={()=>setView("ViewShirts")}>View Shirts</button>
                        <button className='me-2' onClick={()=>setView("AddTshirt")}>Add T-Shirts</button>
                        <button onClick={()=>setView("ViewTshirts")}>View T-Shirts</button>
                        <button className='me-2' onClick={()=>setView("AddPant")}>Add Pant</button>
                        <button onClick={()=>setView("ViewPants")}>View Pants</button>
                        <button className='me-2' onClick={()=>setView("AddShoe")}>Add Shoe</button>
                        <button onClick={()=>setView("ViewShoes")}>View Shoes</button>
                        <button className='me-2' onClick={()=>setView("ViewQueries")}>View Queries</button>
                        
                        <button className='logout' onClick={()=>setLogin(false)} >Logout</button>
                    </aside>
                    <div className='col-lg-9'>
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