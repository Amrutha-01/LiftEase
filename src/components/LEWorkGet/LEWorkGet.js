import React from 'react'
import "./LEWorkGet.css"
import money from "../images/Saving money-amico.png"

export default function LEWorkGet() {
  return (
    <div className='LEWorkGet'>
      <div className='top-part'>
        <h1>How LifeEase Works?</h1>
        <div className='vertical'></div>
        <p>Tempor reprehenderit nostrud anim aute pariatur elit cillum excepteur ad culpa nisi. Eu amet anim deserunt veniam irure excepteur laborum in. Reprehenderit consequat adipisicing eu nostrud et pariatur eu id et nisi voluptate. Voluptate minim ullamco nostrud adipisicing sit officia cupidatat do non labore dolore adipisicing cupidatat. Pariatur labore sunt laboris anim laborum non.</p>
      </div>
      <div className='bottom-part'>
        <div className='card'>
            <img src={money}  className='bottom-part-img'/>
            <h3>EARN</h3>
            <p>Earn credit points for giving a lift</p>
        </div>
        <div className='card'>
            <img src={money} height="120px" className='bottom-part-img'/>
            <h3>EARN</h3>
            <p>Earn credit points for giving a lift</p>
        </div>
        <div className='card'>
            <img src={money} height="120px" className='bottom-part-img'/>
            <h3>EARN</h3>
            <p>Earn credit points for giving a lift</p>
        </div>
      </div>
    </div>
  )
}
