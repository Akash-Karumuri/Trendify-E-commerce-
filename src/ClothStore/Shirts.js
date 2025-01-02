import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Shirts = () => {
  const [shirt,setShirt]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:4000/Shirts`)
        .then((res)=>setShirt(res.data))
        .catch((err)=>console.log(err))
    })
  return (
    <div className='container p-5 mt-5 shirts-page'>
        <h2 className='text-center mb-5'>Shirts</h2>    
        <div className='row'>
            {
              shirt.map((shirt,index) => {
                  return (
                      <div data-aos="zoom-in" key={index} className='col-md-4 mb-3'>
                          <div className='card shadow'>
                              <img src={shirt.image}></img>
                              <div className='card-body'>
                                <div className='px-3 py-2 m-0'>
                                  <h4 className='d-inline-block me-3'><strong>{shirt.name}</strong></h4>
                                  <p className='d-inline-block text-bg-success px-2 rounded'>{shirt.rating} <i className="bi bi-star"></i></p>
                                </div>
                                <details className='px-3'>
                                  <summary>Description</summary>
                                  <p className='px-3 pt-3 m-0'>{shirt.description}</p>
                                </details>
                                <div className='px-3 pt-3 pb-0 m-0'>
                                  <p className='d-inline-block me-3'>Price: <span className='text-success lead fw-bold'>₹{shirt.price}</span></p>
                                  <p className='d-inline-block me-3 text-muted'>M.R.P.: <span className='text-decoration-line-through'>₹{shirt.originalPrice}</span></p>
                                  <p className='d-inline-block'><span className='text-success'>{shirt.discount} off</span></p>
                                </div>
                                <p className='px-3 pb-2 m-0'><span className='text-muted'>Material:</span> {shirt.material}</p>
                                <p className='px-3 py-2 m-0'><span className='text-muted'>Colors:</span> {shirt.colors.toString()}</p>
                                <p className='px-3 py-2 m-0'><span className='text-muted'>Sizes:</span> {shirt.sizes.toString()}</p>
                                <div className="d-flex justify-content-center pb-3 mt-2">
                                  <button className='btn btn-primary' type="submit" value="Submit">Book Now</button>
                                </div>
                              </div>
                          </div>
                      </div>
                  )
              })
            }   
        </div> 
   </div>
  )
}

export default Shirts