import axios from 'axios'
import React, { useState } from 'react'

const AddTshirt = () => {
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

   const AddNewTshirt = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:4000/TShirts`, {name, description, price, originalPrice, discount, image, material, colors, sizes, rating})
    .then((res) => {
      alert("Tshirt Added Successfully")
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
    <div className='container col-lg-6 mx-auto shadow p-5 m-5'>
      <h2 className='text-center'>Add New Tshirt</h2>
      <form onSubmit={AddNewTshirt}>
        <label>Tshirt Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" placeholder="Enter Pants Name" className='form-control' required />
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description" name="description" placeholder="Enter Pants Description" className='form-control' required />
        <label>Price:</label>
        <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" id="price" name="price" placeholder="Enter Price" className='form-control' required />
        <label>Original Price:</label>
        <input value={originalPrice} onChange={(e) => setOriginalPrice(e.target.value)} type="number" id="originalPrice" name="originalPrice" placeholder="Enter Original Price" className='form-control' required />
        <label>Discount (%):</label>
        <input value={discount} onChange={(e) => setDiscount(e.target.value)} type="text" id="discount" name="discount" placeholder="Enter Discount Percentage(Add % symbol at end)" className='form-control' required />
        <label>Image URL:</label>
        <input value={image} onChange={(e) => setImage(e.target.value)} type="text" id="image" name="image" placeholder="Enter Image URL" className='form-control' required />
        <label>Material:</label>
        <input value={material} onChange={(e) => setMaterial(e.target.value)} type="text" id="material" name="material" placeholder="Enter Material" className='form-control' required />
        <label>Colors Available:</label>
        <input value={colors} onChange={(e) => setColors(e.target.value)} type="text" id="colors" name="colors" placeholder="Enter Available Colors" className='form-control' required />
        <label>Sizes Available:</label>
        <input value={sizes} onChange={(e) => setSizes(e.target.value)} type="text" id="sizes" name="sizes" placeholder="Enter Available Sizes" className='form-control' required />
        <label>Rating:</label>
        <input value={rating} onChange={(e) => setRating(e.target.value)} type="number" id="rating" name="rating" placeholder="Enter Rating (1-5)" className='form-control' step="0.1" min="1" max="5" required />
        <div className='flexcenter'>
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddTshirt
