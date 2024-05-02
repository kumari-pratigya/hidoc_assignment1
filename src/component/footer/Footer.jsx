import React from 'react'
import { FaFacebookF ,FaInstagram, FaYoutube,FaLinkedin } from "react-icons/fa";
import style from './Footer.module.css'
const Footer = () => {
  return (
    <div>
    <div className={style.footerContainer}>
    <div className='container'>
      <div className='row py-3'>
        <div className='col-md-4 text-start'>
            <img alt="logo" className={style.logo} src="https://kolfactory.hidoc.co/assets/img/logo.png"/>
            <p className='pt-2'>Fastest growing plateform for doctors</p>
            <div className='flex  justify-content-start '>
            <FaFacebookF className={`px-1 ${style.icon}`} />
<FaInstagram className={`px-1 ${style.icon}`} />
<FaYoutube className={`px-1 ${style.icon}`} /><FaLinkedin className={`px-1 ${style.icon}`} />

            </div>
        </div>
        <div className='col-md-4 text-start'>
            <h6>Reach Us</h6>
            <p>Please contact the details for any other information</p>
            <p className={` mb-0 ${style.subHeading}`}>Email</p>
            <p>info@gmail.com</p>
            <p className={` mb-0 ${style.subHeading}`}>Address</p>
            <p>Hidoc dr,2055 limestone road,united states</p>
        </div>
        <div className='col-md-4'>
        <h4>Hidoc dr feature</h4>
<div className='d-flex'>
    <div className={`${style.feature} border border-1 bg-primary bg-primary p-3`}>
    <FaFacebookF/> 
    <p className='mb-0'>Article</p>
    </div>
    <div className={` ${style.feature} border border-1 bg-primary bg-danger p-3`}>
    <FaFacebookF/> 
    <p>Article</p>
    </div>
    <div className={` ${style.feature} border border-1 bg-primary bg-secondary p-3`}>
    <FaFacebookF/> 
    <p>Article</p>
    </div>
    <div className={`${style.feature} bg-primary p-3 border border-1 bg-primary`}>
    <FaFacebookF/> 
    <p>Article</p>
    </div>
        </div>
        <div className='d-flex '>
    <div className={`${style.feature} border border-1 bg-primary p-3`}>
    <FaFacebookF/> 
    <p className='mb-0'>Article</p>
    </div>
    <div className={` ${style.feature} border border-1 bg-primary bg-danger p-3`}>
    <FaFacebookF/> 
    <p>Article</p>
    </div>
    <div className={` ${style.feature} border border-1 bg-primary bg-secondary p-3`}>
    <FaFacebookF/> 
    <p>Article</p>
    </div>
    <div className={`${style.feature} border border-1 bg-primary bg-primary p-3`}>
    <FaFacebookF/> 
    <p>Article</p>
    </div>
        </div>
</div>
      </div>
    </div>
    </div>
    <div className={` py-2 ${style.bottomFooter}`}>
        <p className='mb-0'>@copyright 2022<span className={style.hidocBold}> Hidoc Dr.inc </span></p>
        <p className='mb-0'>Terms and condition privacy policy</p>
    </div>
    </div>
  )
}

export default Footer
