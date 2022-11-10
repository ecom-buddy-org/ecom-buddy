import React from 'react'
import Logo from './Images/Logo.jpg'
function Dashboardnavbar() {
    return (
        <>
<header class="top-nav">
      <img id="logo" src="Logo.jpg" />
      
        <div class="nav-button-bars">
      
          <i id="resp-searchicon" class="fa fa-search" aria-hidden="true"></i>
        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
     
        </div>
        <div class="resp-dropicon">
            <i  class="fa fa-user" aria-hidden="true"></i>
            <div class="dropdown-button">
                <i id="icon-dropdown" class="fas fa-caret-down"></i>
                <div class="dropdown-content">
                   <a href=""> <button id="drop-button" type="submit" class="btn1">Logout</button></a>
                </div>
              </div>
      
           
        </div>
        </div>
  

      <div class="first-half">
        <ul class="navbar-items">
          <li>
            <a id="list-items" href=""
              >Tools <i class="fas fa-caret-down"></i>
              </a>
            <div class="dropdown-list">
              <ul class="drop">
                <li>
                  <a id="dropdown-a" class="dropdown-items" href=""
                    >Black Box</a>
                </li>
                <li>
                  <a id="dropdown-b" class="dropdown-items" href=""
                    >Keyword Research</a>
                </li>
              </ul>
            </div>
          </li>
          <li><a id="list-items" href="">Dashboard</a></li>
       
        </ul>
        <div class="button">
            <i id="searchicon" class="fa fa-search" aria-hidden="true"></i>
          <button type="submit" class="btn1">Logout</button>
          <i  class="fa fa-user" aria-hidden="true"></i>   
            <i id="icon-dropdown" class="fas fa-caret-down"></i>
        </div>
      </div>
    </header>
    <div class="responcive-navcontent">
      <ul class="resp-navmenu">
       
            <div class="resp-tooldrop">
                <li id="resp-navitems" class="resp-navitem1"><a href="">Tools <i class="fas fa-caret-down"></i></a> 
                <div class="resp-toolcontent">
                <a href="#">Black Box</a>
                <a href="#">Keyword Research</a>
                
                </div>
              </li>
              </div>
        <li id="resp-navitems"  class="resp-navitem2"><a href="">Dashboard </a></li>

      </ul>
  
    </div>
        </>
    )
}

export default Dashboardnavbar