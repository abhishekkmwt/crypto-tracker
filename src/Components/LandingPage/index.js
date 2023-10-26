import React from 'react'
import Button from '../Common/Button'
import "./style.css"
import iphone from "./../../assets/iphone.png"
import gradient from "./../../assets/gradient.png"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className='landing-page-container'>
        <div className='left-landing-page'>
            <motion.h1 className='track-heading'
                initial={{ x:-15 }}
                animate={{ x:0 }}
                transition={{ 
                    duration: 0.5,
                }}
            >Track Crypto</motion.h1>
            <motion.h1 className='real-time-heading'
                initial={{ x:-15 }}
                animate={{ x:0 }}
                transition={{ 
                    duration: 0.5,
                }}
            >Real Time.</motion.h1>
            <h6 className='crypto-track-detail'>Track crypto through a public api in real time. Visit the dashboard to do so!</h6>
            <div className='btn1'>
                <Link to="/dashboard"><Button text={"Dashboard"}/></Link>
                <Button text={"Share"} outlined={true}/>
            </div>
        </div>
        <div className='right-landing-page'>
            <motion.img src={iphone} className='iphone'
                initial={{ y:-12 }}
                animate={{ y:12 }}
                transition={{ 
                    duration: 2,
                    repeat:Infinity,
                    type:"smooth",
                    repeatType:"mirror"
                }}
            />
            <img src={gradient} className='gradient' alt='img'/>
        </div>
    </div>
  )
}

export default LandingPage