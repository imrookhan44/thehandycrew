import React from 'react'
import banner from './../assets/images/banner.71b3b9f3551211d33efa.jpg'
import './home.css'
function Home() {
  return (
    <div>
      <div className="banner">
        <img alt="bannerBgImg" src={banner} />
        <div className="col-8 center-content" id='textpara'><h1>The Handy Crew</h1>
          <p className="col-md-9 col-sm-9 col-9  m-auto" >To give real service you must add something which cannot be bought or measured with money, and that is sincerity and integrity.</p><div><button className="button greenBgColor">Get Started</button></div><div className="down-arrow">
            <i className="fa fa-angle-down  text-white" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
