import React, { useState } from "react";
import './BtnCellRenderer.css';
import './header.css';
import $ from 'jquery';
import loginImg from "../../tdl_logo.jpg";
import profilePic from '../../profile_pic.png';
function BtnCellRenderer(props){
  
  const[action, setColor] = useState(props.value);
  $(document).ready(function(){
    var elements = document.getElementsByClassName("actiondropdown-content");
    for (var i = 0, len = elements.length; i < len; i++) {
        console.log('test');
    }
    $(".dropdbtn").click(function(){
      $(".actiondropdown-content").toggleClass("contentVisible");
    });
  });
    
  
    return(
      <div className="actionDropdown">
  <button className="dropdbtn">..</button>
  <ul className="actiondropdown-content contentInvisible">
    <li><a href="#"><i className="fa fa-check" aria-hidden="true"></i>Sync</a></li>
    <li><a href="#"><i className="fa fa-times" aria-hidden="true"></i>History</a></li>
    <li><a href="#"><i className="fa fa-rotate-right"></i>Deactivate</a></li>
    <li><a href="#">Clone</a></li>
  </ul>
</div>
    );
  }


export default BtnCellRenderer;
