import React from 'react'
import "/src/style/footer.scss";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";




function Footer() {
  return (
    <>
     <div className="container-fluid bg-dark footer-text mt-1 footerbg">
      <div className="row">
        <div className="col-12 col-md-6 col-sm-6">
          <div className='text-center'> 
           <div className="container">
            <div className="row">
              <div className="col-3 lg-12">
               <a href="https://www.facebook.com/roldan.feliciano.18" className='text-light'><BsFacebook to="/" size={30} className='mt-1 mx-3 icons'/></a>
              </div>
              <div className="col-3 lg-12">
               <a href="mailto:roldan.feliciano12@gmail.com" className='text-light'><AiOutlineMail  size={30} className='mt-1 mx-3 icons'/></a>
              </div>
              <div className="col-3 lg-12">
               <a href="https://github.com/felicianoroldan" className='text-light'><AiOutlineGithub  size={30} className='mt-1 mx-3 icons'/></a>
              </div>
              <div className="col-3 lg-12">
               <a href="https://www.linkedin.com/login" className='text-light'><AiFillLinkedin  size={30} className='mt-1 mx-3 icons'/></a>
              </div>
            </div>
           </div>
          </div>
        </div>
        
        <div className="col-12 col-md-6 col-sm-6">
          <p className='text-center mt-1 '><span className='copyright'>COPYRIGHT © ALL RIGHTS RESERVED 2023</span></p>
        </div>
      </div>
     </div>
    </>
  )
}

export default Footer