import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {
  const [view, setView] = useState('Home');

 
    return (
      <div className="Navbar" style={{animationDelay: '0.5s', transition: 'all 0.3s ease-in-out'}}>

        <img className="fadeInUp" src="/icon.png" style={{animationDelay: '0.0s',transition: 'all 0.3s ease-in-out'}}/>

        <div className="navbar-left">
          <Link to="/" onClick={()=>{
            setView('Home');
          }}>
            <span className={`fadeInUp ${view==='Home' ? 'focused' : ''}`} style={{animationDelay: '0.2s'}}>Home</span>
          </Link>


          <Link to="/links" onClick={()=>{
            setView('Helpful Links');
          }}>
            <span className={`fadeInUp ${view==='Helpful Links' ? 'focused' : ''}`} style={{animationDelay: '0.4s'}}>Helpful Links</span>
          </Link>

          <Link to="/faqs" onClick={()=>{
            setView('FAQs');
          }}>
            <span className={`fadeInUp ${view==='FAQs' ? 'focused' : ''}`} style={{animationDelay: '0.4s'}}>FAQs</span>
          </Link>
        </div>

        <div className="navbar-right"></div>

      </div>
    );

}

export default Navbar;
