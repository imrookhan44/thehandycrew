import React from 'react'
import './about.css'
import about from './../assets/under-constructions.8c72a53c41ceaf7603dadee19ff228c5.svg'
function About() {
  return (
    <div>
      <div className="pt-5 pb-5 about-section off-whiteBgColor">
        <div className="section-padding container">
          <div className="animated fadeInLeft" style={{ animationDuration: '1s' }}><h4 className="f-bold padding-left padding-right" style={{ color: 'black' }}>About us</h4>
          </div>
          <div className="row justify-content-between flex-direction-column-reverse mt-2">
            <div className="col-lg-5 col-md-12">
              <div className="animated fadeInLeft" style={{ animationDuration: '1s', animationDelay: '0.5s' }}>
                <p className="mb-4 f-size-09 line-height text-muted mt-2" style={{ color: '' }}>The Handy Crew LLC is a trusted name in the home repairs and maintenance domain. The Handy Crew LLC is a Dubai based leading home and corporate solutions company. Our Company has been providing all kind of Technical services in various domains such as plumbing, electrical, carpentry, painting, ac repair services, landscaping and many more.The Handy Crew have aim to bring a smile on our customers face each time through a strict compliance of quality, commitment, value for money, honesty and timely service.</p>
              </div>
              <div className="animated fadeInLeft" style={{ animationDuration: '1s', animationDelay: '0.5s' }}>
                <a href="/AboutUs" target="_parent">
                  <div>
                    <button className="button" style={{ background: 'black', color: 'white' }}>Learn more</button>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="animated fadeInRight" style={{ animationDuration: '1s', animationDelay: '0.5s' }}><div className="services-img"><img alt="services-Img" src={about} />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About
