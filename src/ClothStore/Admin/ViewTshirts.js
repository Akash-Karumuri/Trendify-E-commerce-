import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewTshirts = () => {
  const [tshirt, setTshirt] = useState([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [originalPrice, setOriginalPrice] = useState("")
  const [discount, setDiscount] = useState("")
  const [image, setImage] = useState("")
  const [material, setMaterial] = useState("")
  const [colors, setColors] = useState("")
  const [sizes, setSizes] = useState("")
  const [rating, setRating] = useState("")
  const [id, setId] = useState("")

  // Fetching data
  useEffect(() => {
    axios.get('http://localhost:4000/TShirts')
      .then((res) => setTshirt(res.data))
      .catch((err) => console.log(err))
  }, [])

  // Delete a Tshirt
  const deleteTshirt = (id) => {
    axios.delete(`http://localhost:4000/TShirts/${id}`)
      .then(() => {
        alert("Tshirt deleted")
        // Refresh the list of t-shirts after deletion
        setTshirt(tshirt.filter(item => item.id !== id))
      })
      .catch((err) => console.log(err))
  }

  // Get one Tshirt record for editing
  const getOneRecord = (id) => {
    axios.get(`http://localhost:4000/TShirts/${id}`)
      .then((res) => {
        setName(res.data.name)
        setDescription(res.data.description)
        setPrice(res.data.price)
        setOriginalPrice(res.data.originalPrice)
        setDiscount(res.data.discount)
        setImage(res.data.image)
        setMaterial(res.data.material)
        setColors(res.data.colors)
        setSizes(res.data.sizes)
        setRating(res.data.rating)
        setId(res.data.id)
      })
      .catch((err) => console.log(err))
  }

  // Update a Tshirt
  const updateTshirt = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:4000/TShirts/${id}`, {
      id, name, description, price, originalPrice, discount, image, material, colors, sizes, rating
    })
      .then((res) => {
        alert("Tshirt Updated")
        // Reset the form fields after successful update
        setName("")
        setDescription("")
        setPrice("")
        setOriginalPrice("")
        setDiscount("")
        setImage("")
        setMaterial("")
        setColors("")
        setSizes("")
        setRating("")
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='container p-3 view-tshirts-page'>
      <h2 className='text-center mb-5'>Available Tshirts {tshirt.length}</h2>
      <div className='row Tshirt-page'>
        {
          tshirt.map((tshirt, index) => {
            return (
              <div data-aos="zoom-in" key={index} className='col-md-4 mb-3'>
                <div className='card shadow'>
                  <img src={tshirt.image} alt={tshirt.name} className='card-img-top' />
                  <div className='card-body'>
                    <div className='px-3 py-2 m-0'>
                      <h4 className='d-inline-block me-3'><strong>{tshirt.name}</strong></h4>
                      <p className='d-inline-block text-bg-success px-2 rounded'>
                        {tshirt.rating} <i className="bi bi-star"></i>
                      </p>
                    </div>
                    <details className='px-3'>
                      <summary>Description</summary>
                      <p className='px-3 pt-3 m-0'>{tshirt.description}</p>
                    </details>
                    <div className='px-3 pt-3 pb-0 m-0'>
                      <p className='d-inline-block me-3'>Price: 
                        <span className='text-success lead fw-bold'>₹{tshirt.price}</span>
                      </p>
                      <p className='d-inline-block me-3 text-muted'>M.R.P.: 
                        <span className='text-decoration-line-through'>₹{tshirt.originalPrice}</span>
                      </p>
                      <p className='d-inline-block'>
                        <span className='text-success'>{tshirt.discount} off</span>
                      </p>
                    </div>
                    <p className='px-3 pb-2 m-0'><span className='text-muted'>Material:</span> {tshirt.material}</p>
                    <p className='px-3 py-2 m-0'><span className='text-muted'>Colors:</span> {tshirt.colors.toString()}</p>
                    <p className='px-3 py-2 m-0'><span className='text-muted'>Sizes:</span> {tshirt.sizes.toString()}</p>
                    <div className="d-flex justify-content-center pb-3 mt-2">
                      <button
                        onClick={() => getOneRecord(tshirt.id)}
                        data-bs-toggle="modal"
                        data-bs-target="#updateTshirt"
                        className='btn btn-primary me-2'
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteTshirt(tshirt.id)}
                        className='btn btn-danger delete-button'
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>


      {/* Modal for updating Tshirt */}
      <div className="modal fade" id="updateTshirt" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">Update Tshirt</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={updateTshirt}>
                <label>Name:</label>
                <input onChange={(e) => setName(e.target.value)} type="text" value={name} className='form-control' required />
                <label>Description:</label>
                <input onChange={(e) => setDescription(e.target.value)} type="text" value={description} className='form-control' required />
                <label>Price:</label>
                <input onChange={(e) => setPrice(e.target.value)} type="number" value={price} className='form-control' required />
                <label>Original Price:</label>
                <input onChange={(e) => setOriginalPrice(e.target.value)} type="number" value={originalPrice} className='form-control' required />
                <label>Discount:</label>
                <input onChange={(e) => setDiscount(e.target.value)} type="text" value={discount} className='form-control' required />
                <label>Image URL:</label>
                <input onChange={(e) => setImage(e.target.value)} type="text" value={image} className='form-control' required />
                <label>Material:</label>
                <input onChange={(e) => setMaterial(e.target.value)} type="text" value={material} className='form-control' required />
                <label>Colors:</label>
                <input onChange={(e) => setColors(e.target.value)} type="text" value={colors} className='form-control' required />
                <label>Sizes:</label>
                <input onChange={(e) => setSizes(e.target.value)} type="text" value={sizes} className='form-control' required />
                <label>Rating:</label>
                <input onChange={(e) => setRating(e.target.value)} type="number" value={rating} step="0.1" className='form-control' required />
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className='btn btn-success'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewTshirts
