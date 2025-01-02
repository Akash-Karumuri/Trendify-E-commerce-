import React from 'react'

const Footer = () => {
  return (
    <footer className=' p-5 pb-0 container-fluid'>
        <div className="row px-5">
          <div className="col-md-4">
            <h3>Trendify</h3>
            <p>Upgrade your wardrobe with the latest trends in Shirts, T-Shirts, Pants, and Shoes. Unmatched comfort, timeless styles, and unbeatable prices – all in one place. Find the perfect fit and express your individuality with our exclusive collection.</p>
          </div>
          <div className="col-md-2">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="/" className="text-decoration-none">Home</a></li>
              <li><a href="" className="text-decoration-none">Shirts</a></li>
              <li><a href="" className="text-decoration-none">T-Shirts</a></li>
              <li><a href="" className="text-decoration-none">Pants</a></li>
              <li><a href="" className="text-decoration-none">Shoes</a></li>
              <li><a href="" className="text-decoration-none">Contact</a></li>
            </ul>
          </div>
      
          <div className="col-md-3">
            <h4>Contact Information</h4>
            <p><strong>Phone:</strong> +91-9392968885</p>
            <p><strong>Email:</strong> info@trendify.com</p>
            <p><strong>Address:</strong> Trendify, Main Road, Kakinada, India – 533003</p>
          </div>
      
          <div className="col-md-2">
            <h4>Follow Us</h4>
            <div className='lh-lg'>
              <a href="https://facebook.com" target="_blank" className="text-decoration-none mr-3"><i className="bi bi-facebook"></i> Facebook</a> <br></br>
              <a href="https://twitter.com" target="_blank" className="text-decoration-none mr-3"><i className="bi bi-twitter-x"></i> Twitter-X</a> <br></br>
              <a href="https://instagram.com" target="_blank" className="text-decoration-none"><i className="bi bi-instagram"></i> Instagram</a> <br></br>
              <a href="https://www.threads.net/" target="_blank" className="text-decoration-none"><i className="bi bi-threads"></i> Threads</a>
            </div>
          </div>
        </div>
        
      
        <div className="row">
          <div className="col-12 text-center m-0 py-3">
            <p>&copy; 2024 Trendify. All Rights Reserved.</p>
          </div>
        </div>
</footer>
  )
}

export default Footer