
import React from 'react'
import './BSFooter.css';
import Timer1 from '../../Timer';
import { useNavigate } from "react-router-dom";
import SignInSide from '../LoginPage/SignInSide';



export default function Footer() {

  const navigate = useNavigate();

  function logout() {
    navigate("/login")
    localStorage.removeItem('jwt_token');
    
  }


  
  if (localStorage.getItem('jwt_token')) {
    setTimeout(logout, 60000);
  }


  return (
    <div>


    <footer class="site-footer my-4">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">

          

            <h6>About</h6>
            <p class="text-justify"><i>NatWest Group</i> is a relationship bank for a digital world. We champion potential; breaking down barriers and building financial confidence so the 19 million people, families and businesses we serve in communities throughout the UK and Ireland can rebuild and thrive. If our customers succeed, so will we.</p>
            
            {localStorage.getItem('jwt_token') ?
            
            <p><Timer1/></p>
            :null
          }
          
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">Privacy notice</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">Business Banking catalogue</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">Student Accounts</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Branche Locator</a></li>
              <li><a href="http://scanfcode.com/category/android/">ATM Locator</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Work with us</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
         
          

            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">
Leadership & governance</a></li>
              <li><a href="http://scanfcode.com/contact/">Sustainable Banking contacts</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Media contacts</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Investor contacts</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Customer contacts</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by{' '}
         <a href="https://www.natwest.com/" target={''}>NatWest.com</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="/"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="/"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="/"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="/"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>

    </div>
  )
}
