import React from 'react'
import './Header.css'
function Header() {
    const nav_title=[{
        path:'/',display:'Home'
    },
{
    path:'/',display:'Vision'
},
{
    path:'/',display:'Services'
},
{
    path:'/',display:'About Us'
}]
  return (
    <header className='header'>
<div className="container">
   
 <div className="nave_container">
    <div className="logo">
        <div className="logo-img">
            <img src="https://shreethemes.in/doctris/assets/images/logo-icon.png" alt="" />
        </div>
        <h2>SWASYA</h2>
    </div>
 <div className="navigation">
<div className="hamburger">
    <span></span>
    <span></span>
    <span></span>
</div>
    <ul className='menu'>
        {
            nav_title.map((item)=>(
                
                <li className='nav_item'>{item.display}</li>
            ))
        }
     
        
    </ul>
 </div>



    </div>
</div>
    </header>
  )
}

export default Header