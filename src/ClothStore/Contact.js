import axios from 'axios'
import React, { useState } from 'react'

const Contact = () => {
  const [fname,setfName]=useState("")
  const [lname,setlName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [message,setMessage]=useState("")
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/ViewQueries`, { fname, lname, email, phone, message })
      .then((res) => {
        alert("Details Submitted Successfully");
        // Clear form fields
        setfName("");
        setlName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className='contact-page p-5 container-fluid'>
        <div className='row px-5'>
            <div className='col-sm-12 col-lg-6 p-5 mt-5'>
                <h2>Get in Touch with <strong>Trendify</strong></h2>
                <h2 className='mt-5'>Contact Information:</h2>
                <h4><i className="bi bi-telephone-fill"></i> Phone:</h4>
                <p>Call us at <strong>+91-9392968885</strong> for instant bookings or inquiries. Our lines are open 24/7 to serve you better</p>
                <h4><i className="bi bi-envelope-at-fill"></i> Email:</h4>
                <p>Drop us an email at <strong>info@trendify.com</strong>, and we’ll get back to you within 24 hours.</p>
                <h4><i className="bi bi-geo-alt-fill"></i> Address:</h4>
                <p>Trendify, <br></br>
                Plot No. 123, Main Road, <br></br>
                kakinada, India – 533003.</p>
            </div>
            <div className='col-sm-12 col-lg-6 p-5 mt-5'>
                <h2>Inquiry Form</h2>
                <p className='text-center'>Use the form below to send us your queries or feedback.</p>
                <form onSubmit={submitHandler}>
                  <label>First Name:</label>
                  <input onChange={(e)=>setfName(e.target.value)} value={fname} type='text' placeholder='Enter your first name' className='form-control' required></input>
                  <label>Last Name:</label>
                  <input onChange={(e)=>setlName(e.target.value)} value={lname} type='text' placeholder='Enter your last name' className='form-control' required></input>
                  <label>Mail:</label>
                  <input onChange={(e)=>setEmail(e.target.value)} value={email} type='email' placeholder='Enter your mail' className='form-control' required></input>
                  <label>Mobile:</label>
                  <input onChange={(e)=>setPhone(e.target.value)} value={phone} type='tel' placeholder='Enter your mobile number' className='form-control' required></input>
                  <label>Message:</label>
                  <textarea onChange={(e)=>setMessage(e.target.value)} value={message} rows="3" cols="50" name="comment" className='form-control' placeholder='Type your quiry...' required></textarea>
                  <section className='flexcenter'><button type="submit" className='w-25'>Submit</button></section>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact