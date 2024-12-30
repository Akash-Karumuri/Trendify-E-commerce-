import React from 'react'
import heroSec from './assets/hero-sec.png'
import shirt1 from './assets/Shirts/shirt-1.jpg'
import shirt2 from './assets/Shirts/shirt-2.jpg'
import shirt3 from './assets/Shirts/shirt-3.jpg'
import tshirt1 from './assets/T-Shirts/t-shirt-1.jpg'
import tshirt2 from './assets/T-Shirts/t-shirt-2.jpg'
import tshirt3 from './assets/T-Shirts/t-shirt-3.jpg'
import pants from './assets/Pants/pants.jpg'
import shoes from './assets/Shoes/shoes.jpg'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container p-5 mt-5 home-page'>
      <div className='row'>
        <div data-aos="fade-right" className='col-sm-12 col-lg-6 p-5'>
          <h2 className='display-4'>Redefine Your Style with Premium Men's Wear!</h2>
          <p>Where fashion meets quality – explore handpicked designs crafted for the modern man.</p>
          <p className='lh-lg'>Upgrade your wardrobe with the latest trends in Shirts, T-Shirts, Pants, and Shoes.
          Unmatched comfort, timeless styles, and unbeatable prices – all in one place.
          Find the perfect fit and express your individuality with our exclusive collection.</p>
          <NavLink to='/Shirts'><button>Shop Now</button></NavLink>

        </div>
        <div data-aos="fade-left" className='col-sm-12 col-lg-6 text-center'>
          <img className='w-75 h-100' src={heroSec}></img>
        </div>
      </div>
      <div className='container p-5'>
          <h2>Shop by Categories</h2>
          <p>Discover our curated selection of men’s fashion essentials. From versatile shirts to trendy T-shirts, sleek pants, and stylish shoes – we have everything you need to elevate your wardrobe.</p>
          <div className='row'>
            <h3 className='text-center my-5'>Shirts</h3>
            <div data-aos="zoom-out" className='col-sm-12 col-lg-4'>
              <figure className='shadow'>
                <img className='w-100' src={shirt1}></img>
                <figcaption className='p-3'>
                  <h5>Check Shirts</h5>
                  <p>Redefining timeless elegance</p>
                  <div className='text-end'><NavLink to='/Shirts'><button>Shop Now</button></NavLink></div>
                </figcaption>
              </figure>
            </div>
            <div data-aos="zoom-out" className='col-sm-12 col-lg-4'>
              <figure className='shadow'>
                <img className='w-100' src={shirt2}></img>
                <figcaption className='p-3'>
                  <h5>classic cotton shirt</h5>
                  <p>Perfect for every occasion</p>
                  <div className='text-end'><NavLink to='/Shirts'><button>Shop Now</button></NavLink></div>
                </figcaption>
              </figure>
            </div>
            <div data-aos="zoom-out" className='col-sm-12 col-lg-4'>
              <figure className='shadow'>
                <img className='w-100' src={shirt3}></img>
                <figcaption className='p-3'>
                  <h5>Party Wear Shirt</h5>
                  <p>Shine in every gathering</p>
                  <div className='text-end'><NavLink to='/Shirts'><button>Shop Now</button></NavLink></div>
                </figcaption>
              </figure>
            </div>
          </div>


          <div className='row'>
            <h3 className='text-center my-5'>T-Shirts</h3>
            <div data-aos="zoom-in" className='col-sm-12 col-lg-4'>
              <figure className='shadow'>
                <img className='w-100' src={tshirt1}></img>
                <figcaption className='p-3'>
                  <h5>Solid Color T-Shirt</h5>
                  <p>Simplicity never goes out of style</p>
                  <div className='text-end'><NavLink to='/TShirts'><button>Shop Now</button></NavLink></div>
                </figcaption>
              </figure>
            </div>
            <div data-aos="zoom-in" className='col-sm-12 col-lg-4'>
              <figure className='shadow'>
                <img className='w-100' src={tshirt2}></img>
                <figcaption className='p-3'>
                  <h5>Striped T-Shirt</h5>
                  <p>A timeless classic for everyday wear</p>
                  <div className='text-end'><NavLink to='/TShirts'><button>Shop Now</button></NavLink></div>
                </figcaption>
              </figure>
            </div>
            <div data-aos="zoom-in" className='col-sm-12 col-lg-4'>
              <figure className='shadow'>
                <img className='w-100' src={tshirt3}></img>
                <figcaption className='p-3'>
                  <h5>V-Neck T-Shirt</h5>
                  <p>Perfect blend of comfort and style</p>
                  <div className='text-end'><NavLink to='/TShirts'><button>Shop Now</button></NavLink></div>
                </figcaption>
              </figure>
            </div>
          </div>
      </div>
      <div className='row'>
        <h3 className='text-center my-5'>Pants</h3>
          <div data-aos="fade-right" className='col-sm-12 col-lg-6 flexcenter'>
              <img className='w-75 h-75 shadow pants-home' src={pants}></img>
          </div>
          <div data-aos="fade-left" className='col-sm-12 col-lg-6 p-5'>
              <h5>Upgrade Your Wardrobe with Versatile Men's Pants</h5>
              <p className='lh-lg'>Discover the perfect blend of style, comfort, and versatility with our exclusive collection of men's pants. Whether you're looking for the classic appeal of denim jeans, the sophisticated look of formal trousers, or the relaxed comfort of joggers and chinos, we have something for every occasion. Our pants are designed with a focus on fit, durability, and modern trends, ensuring you stay comfortable and stylish throughout the day. From casual outings to business meetings, our pants are the ideal choice for completing your look. Explore our collection and find the perfect pair to elevate your wardrobe.</p>
              <div className='text-center'><NavLink to='/Pants'><button>Shop Now</button></NavLink></div>
          </div>
      </div>
      <div className='row'>
        <h3 className='text-center my-5'>Shoes</h3>
          <div data-aos="fade-right" className='col-sm-12 col-lg-6 p-5'>
               <h5>Step Up Your Style with Premium Men's Shoes</h5>
              <p className='lh-lg'>Step into style with our premium collection of men's shoes, where comfort meets fashion. Whether you're searching for sleek formal shoes for business meetings, rugged boots for outdoor adventures, or casual sneakers for everyday wear, our collection has you covered. Crafted with quality materials and designed to provide all-day comfort, our shoes are the perfect addition to any wardrobe. From timeless leather oxfords to versatile slip-ons and trendy sneakers, each pair is built to enhance your style while offering lasting durability. Browse our selection and find the ideal pair to complete your look.</p>
              <div className='text-center'><NavLink to='/Shoes'><button>Shop Now</button></NavLink></div>
          </div>
          <div data-aos="fade-left" className='col-sm-12 col-lg-6 flexcenter'>
              <img className='w-75 h-75 shadow pants-home' src={shoes}></img>
          </div>
      </div>

    </div>
  )
}

export default Home