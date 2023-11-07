import React from 'react'
import './Thanks.css'
import logo from './Assets/logo with website.png'
import lakshmicoin from './Assets/Group 4.png'
import webicon from './Assets/web-icon.png'

function Thanks() {
    function openwebLink(){
       
        window.open('https://sencogoldanddiamonds.com/', '_blank'); 
    }

    function footerwebLink(){
       
        window.open('https://sencogoldanddiamonds.com/', '_blank'); 
    }
  return (
    <>
    <div className='full-contianer'>
        <div className='navbar-section'>

            <div className='logo'><img src={logo} alt="logo" className='logoicon'  /></div>
           
            <div className='navbar-text' onClick={openwebLink}><span className='visit-text'>Visit Senco Website</span><span className='web-text'><img src={webicon}alt="webicon" style={{width:"50px",height:"50px"}} /></span></div>
            
            

        </div>
        <div className='body-section'>
            <div className='coin-logo'><img src={lakshmicoin} alt="lakshmi-coin" className='lakshmicon'/></div>
            <div className='thank-you-text'><b>Thank You!</b></div>
            <div className='succes-text'>We've successfully received your registration. </div>
            <div className='email-notification-text'>You'll be notified by email once your personalised prayer<br /> video for Ma Lakshmi is ready </div>
            <div className='end-diwali-text'>We at Senco wish you and your family a very happy <br /> Dhanteras and Diwali.</div>
            </div>
        <div className='footer-section'> 

            <div className='footer-text' onClick={footerwebLink}>*Terms and Conditions apply</div>

            </div>
       
      
    </div>
    </>
  )
}

export default Thanks