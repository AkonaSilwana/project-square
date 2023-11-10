import React from 'react'
import confidence from '../assets/images/confidence.jpeg'

function Hero() {
  return (
    <div className='hero'>
     <img src={confidence} alt='Jose Mourinho'/>
      <h1>Live with Confidence</h1>
      <p>Jose Mourinho brings confidence to pan-Africa Sanlam <br/> campaign.</p>
      <button>View project</button>
    </div>
  )
}

export default Hero