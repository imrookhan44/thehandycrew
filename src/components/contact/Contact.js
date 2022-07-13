import React from 'react'
import './contact.css'
function Contact() {
  return (
    <div>
      <div className="pt-5 pb-5 contact-section" style={{ background: 'rgb(245, 245, 245)' }}><div className="section-padding container"><div className="animated fadeInLeft" style={{ animationDuration: '1s' }}>
        <h4 className="f-bold padding-left padding-right" style={{ color: 'black' }}>Contact us</h4></div><form>
          <div className="row d-flex justify-content-between mt-2 ">
            <div className="col-md-6 my-3">
              <div className="animated fadeInLeft" style={{ animationDuration: '1s', animationDelay: '0.5s' }}>
                <span className="float-left mb-2" style={{ color: 'black' }}>First name</span>
                <input type="text" name="firstName" className="custom-input" autoComplete="off" required /></div>
            </div>
            <div className="col-md-6 my-3 ">
              <div className="animated fadeInRight" style={{ animationDuration: '1s', animationDelay: '0.7s' }}><span className="float-left mb-2" style={{ color: 'black' }}>Last name</span><input type="text" name="lastName" className="custom-input" autoComplete="off" required /></div></div><div className="col-md-6 my-3"><div className="animated fadeInLeft"><span className="float-left mb-2" style={{ color: 'black' }}>Email</span><input type="email" className="custom-input" autoComplete="off" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required /></div></div><div className="col-md-6 my-3"><div className="animated fadeInRight" style={{ animationDuration: '1s', animationDelay: '1.1s' }}><span className="float-left mb-2" style={{ color: 'black' }}>Phone number</span><input type="phone" name="phone" className="custom-input" autoComplete="off" required /></div></div><div className="col-md-6 my-3"><div className="animated fadeInLeft" style={{ animationDuration: '1s', animationDelay: '1.3s' }}><span className="float-left mb-2" style={{ color: 'black' }}>Subject</span><textarea name="subject" className="custom-input" autoComplete="off" required style={{ padding: '10px 15px' }} defaultValue={""} /></div></div><div className="col-md-6 my-3"><div className="animated fadeInRight" style={{ animationDuration: '1s', animationDelay: '1.5s' }}><span className="float-left mb-2" style={{ color: 'black' }}>Message</span><textarea name="message" className="custom-input" autoComplete="off" required style={{ padding: '10px 15px' }} defaultValue={""} /></div></div>
            <div className="col-md-12"><div id="animated" className="animated fadeInUp" style={{ animationDuration: '1s', animationDelay: '1.7s' }}><div className="text-center mt-4"><button className="button bounce" style={{ background: 'black', color: 'white' }}>SUBMIT</button></div></div></div></div><div className="Toastify" /></form></div></div>


    </div>
  )
}

export default Contact
