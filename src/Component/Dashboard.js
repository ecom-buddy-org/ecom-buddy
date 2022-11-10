import React from 'react'
import "./Dashboard.css"
import Navbar from './Navbar'
function Dashboard() {
  return (
    <>
    <Navbar/>
    <div class="text">
      <p class="text1">Welcome!!</p>
    </div>
        <div class="container3">
        <div class="con1">
            <div class="tool_head">
                <div class="tool_icon">
                    <i class="fa-solid fa-key"></i>
                </div>
                <a href="" class="tool_head_text">
                    <span id="text1">Keyword Tracker</span>
                    <span id="text2">Product Rank Tracking</span>
                </a>
            </div>
            <div class="tool_body">Keep track of the changes and visualize how each change affects product listings
                rank for given keywords.</div>
        </div>
        <div class="con2">
            <div class="con1">
                <div class="tool_head">
                    <div class="tool_icon">
                        <i class="fa-solid fa-scroll"></i>
                    </div>
                    <a href="" class="tool_head_text">
                        <span id="text1">Index Checker</span>
                        <span id="text2">Keyword Index Checker</span>
                    </a>
                </div>
                <div class="tool_body">
                    Figure out which of your back-end and front-end keyword search terms are being indexed
                     by Amazon and which ones are not.</div>
            </div>
        </div>
        <div class="con3">
            <div class="con1">
                <div class="tool_head">
                    <div class="tool_icon">
                        <i class="fa-solid fa-pen"></i>
                    </div>
                    <a href="" class="tool_head_text">
                        <span id="text1">Scribbles</span>
                        <span id="text2">Listing Optimizer</span>
                    </a>
                </div>
                <div class="tool_body">
                    Never miss out on using any valuable keywords when writing fully optimized titles,
                     bullet points, descriptions, and backend search term keywords.</div>
            </div>
        </div>
        <div class="con4">
            <div class="con1">
                <div class="tool_head">
                    <div class="tool_icon">
                        <i class="fa-solid fa-box"></i>
                    </div>
                    <a href="" class="tool_head_text">
                        <span id="text1">BlackBox</span>
                        <span id="text2">Amazon Product Research</span>
                    </a>
                </div>
                <div class="tool_body">
                    Save time and energy researching every niche in existence on Amazon to find your next 
                    perfect product to sell—use Black Box to get results in seconds!</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard