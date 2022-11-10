import React from 'react'
import "./Navbarstyle.css"
import Logo from './Images/Logo.jpg'
function Navbar() {
  return (
    <>
  <header class="top-nav">
    <img id="logo" src={Logo}/>

    <div class="nav-button-bars">
      <div class="nav-button">
        <button type="submit" class="btn1" onclick="window.location.href='https://w3docs.com';">Login</button>
      </div>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
    <div class="first-half">
      <ul class="navbar-items">
        <li>
          <a id="list-items" href="">Tools <i class="fas fa-caret-down"></i>
          </a>
          <div class="dropdown-list">
            <ul class="drop">
              <li>
                <a id="dropdown-a" class="dropdown-items" href="">Black Box</a>
              </li>
              <li>
                <a id="dropdown-b" class="dropdown-items" href="">Keyword Research</a>
              </li>
            </ul>
          </div>
        </li>
        <li><a id="list-items" href="">Pricing</a></li>
        <li><a id="list-items" href="">Resources</a></li>
        <li><a id="list-items" href="">Blogs</a></li>
        <li><a id="list-items" href="">About</a></li>
      </ul>
      <div class="button">
        <button type="submit" class="btn1">Login</button>
        <button type="submit" class="btn2">Sign Up For Free</button>
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
      <li id="resp-navitems" class="resp-navitem2"><a href="">Pricing</a></li>
      <li id="resp-navitems" class="resp-navitem3"><a href="">Resources</a></li>
      <li id="resp-navitems" class="resp-navitem4"><a href="">Blog</a></li>
      <li id="resp-navitems" class="resp-navitem5"><a href="">About</a></li>
    </ul>
    <div class="resp-navbutton">
      <button type="submit" class="btn2">Sign Up For Free</button>
    </div>
  </div>
    </>
  )
}

export default Navbar