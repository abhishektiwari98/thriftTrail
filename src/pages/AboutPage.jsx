import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (

    <>
      <Navbar />

      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/aboutBanner.jpg"
            alt="Card"
            style={{ height: "550px", width: "100%" }}
          />

        </div>

      </div>
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Welcome to ThriftTrail! We are a website that specializes in buying used products from people and restoring them to a new condition, providing you with high-quality items at affordable prices. Our mission is to offer a sustainable and eco-friendly alternative to traditional shopping while also helping you save money. At ThriftTrail, we believe that buying used items is not only a smart financial decision but also a responsible one. By giving pre-owned items a second life, we encourage our customers to join us in reducing waste and preserving the environment.

          We take great pride in curating our inventory, ensuring that every item is carefully inspected, restored to a like-new condition, and meets our standards of quality. Our team is dedicated to selecting each piece to make sure that you receive the best value for your money.

          Our website is easy to use, and you can browse through our collection of clothes, accessories, household items, and more from the comfort of your own home. Thank you for choosing ThriftTrail, and we hope you enjoy your shopping experience with us!
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
          <h2 className="text-center py-4">Meet our team</h2>
          <div className="hero border-1 pb-3">
            <div className="card bg-dark text-white border-0 mx-3">
              <img
                className="card-img img-fluid"
                src="./assets/Team.jpg"
                alt="Card"
                style={{ height: "250px", width: "100%" }}
              />

            </div>

          </div>
        </div>

      </div>



      <Footer />
    </>
  )
}

export default AboutPage