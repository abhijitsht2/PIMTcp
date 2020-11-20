import React,{useState} from 'react';
import './header.css';
import $ from 'jquery';
import loginImg from "../../tdl_logo.png";
import profilePic from '../../profile_pic.png';

function Header(){
    $(document).ready(function(){
        $(".profile .icon_wrap").unbind('click');
			$(".profile .icon_wrap").click(function(){
			  $(".profile_dd").toggleClass("active");
			  $(".notifications").removeClass("active");
			});
    });
    window.onclick = function(event) {
      if (!event.target.matches('.profilePic')) {
       
        var dropdowns = document.getElementsByClassName("profile_dd");
        
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('active')) {
            openDropdown.classList.remove('active');
          }
        }
      }
    }
    return (
        <>
         <div class="navbar">
        <a href="#"><img src={loginImg} className="LogoImg"/></a>
        <a href="#" className="pimText">PIM</a>
  <a href="#home" className="bottomBorder bottomhoverBorder">Dashboard</a>
  
  <div class="dropdown">
    <button class="dropbtn">Manage 
      <i className="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#" className="bottomBorder">Category 1</a>
      <a href="#" className="bottomBorder">Category 2</a>
      <a href="#" className="bottomBorder">Category 3</a>
    </div>
  </div>
  <div class="profile">
        <div class="icon_wrap">
          <img className="profilePic" src={profilePic} alt="profile_pic"/>
        </div>

        <div class="profile_dd">
          <ul class="profile_ul">
            <li class="profile_li"><a class="myaccount" href="#"><span class="picon"><i class="fas fa-user-alt"></i>
                </span>Profile</a>
            </li>
            <li><a class="address" href="#"><span><i class="fas fa-map-marker"></i></span>Address</a></li>
            <li><a class="settings" href="#"><span class="picon"><i class="fas fa-cog"></i></span>Settings</a></li>
            <li><a class="logout" href="#"><span class="picon"><i class="fas fa-sign-out-alt"></i></span>Logout</a></li>
          </ul>
        </div>
      </div>
      </div>
        </>
    );
}

export default Header
