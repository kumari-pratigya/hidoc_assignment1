import React from 'react';
import style from './Header.module.css';
import { TfiCup  } from "react-icons/tfi";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  return (
    <div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid d-block">
  <div className='row d-flex justify-content-center align-items-center'>
    <div className='col-md-4'>
    <a class="navbar-brand" href="/"><img  className={style.logo} alt="logo" src="https://www.hidoc.co/ad_campaign/pharma/sai_allergy/img/logo.png"></img></a>
  </div>
   
  
    <div className='col-md-4 d-flex justify-content-center'>     
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item border-end">
          <a class="nav-link active" aria-current="page" href="/">Drugs</a>
        </li>
        <li class="nav-item border-end">
          <a class="nav-link" href="/">Calculator</a>
        </li>
        <li class="nav-item border-end">
          <a class="nav-link" href="/">Calculator</a>
        </li>
        <li class="nav-item border-end">
          <a class="nav-link" href="/">Articles</a>
        </li>
        <li class="nav-item border-end">
          <a class="nav-link" href="/">News</a>
        </li>
        <li class="nav-item border-end">
          <a class="nav-link" href="/">Quizzes</a>
        </li>
        <li class="nav-item border-end">
          <a class="nav-link" href="/">Surveys</a>
        </li>
        <li class="nav-item border-end">
          <a class="nav-link" href="/">webinars</a>
        </li>
        <li class="nav-item"> 
          <a class="nav-link"  href="/">Guidelines</a>
        </li>
      </ul>
    
    </div>
    </div>
    <div className='col-md-4 d-flex align-items-center justify-content-center'>     
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className='mx-2'><IoMdMenu/></div>
    <div className={`border border-1 px-4 rounded-pill ${style.colorDiv} `}><TfiCup className='mx-1' style={{color:'black'}}/>274</div>
    <div className='border border-1 px-2 mx-3 rounded-circle'>A</div>

    </div>
  </div>
  </div>
</nav>
    </div>
  )
}

export default Header
