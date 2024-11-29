import React from 'react'
import './source.css';
import SourceImage from './../../assets/images/nokka-coffee-drying-station.png'
import coffeBean from './../../assets/icons/coffee-bean.png';


import qillenso from './../../assets/images/coffee-drying-process-2-01.png';
import oggo from './../../assets/images/oggo-01.png';
import karcha from './../../assets/images/qarchaa-01.png';
import bardaye from './../../assets/images/bardayee-01.png';
import rassa from './../../assets/images/rassaa-01.png';


const Source = () => {
  return (
    <div className="container">
      <div id="source" className="source">
        <div className="section">
          <div className="left">
            <div className="source-image-container">
              <img src={SourceImage} alt="" />
            </div>
          </div>
          <div className="right">
            <div className="top">
              <h3>Our Source</h3>
              <h1>Our Coffee source is.....</h1>
              <div className="icon-container">
                <img src={coffeBean} alt="" />
              </div>
            </div>
            <div className="bottom">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Amet inventore vero natus asperiores veritatis dolorum
                at consequatur. Omnis qui quaerat delectus deleniti provident
                veniam tenetur ratione magnam voluptatum nisi, optio, dolore in laboriosam
                sed doloribus. Cupiditate repudiandae ad eos distinctio delectus
                exercitationem quos, laborum culpa dolore quae, tenetur saepe in eaque
                reprehenderit assumenda dolores? Sed accusamus consequuntur blanditiis quo
                rerum. Ratione cupiditate facere animi impedit dolorem optio aspernatur iure,
                voluptas quibusdam rem dolores, dolore, dolor ullam eligendi aperiam sit distinctio
                ad enim ducimus laudantium voluptates consequuntur! Officiis, modi nam, temporibus
                aliquid. Delectus ipsam sit quo eligendi officia porro id eius.
              </p>
            </div>
          </div>
        </div>
        <div className="section-2">
          <div className="source-card">

            <div className="card">
              <div className="image-box">
                <img src={karcha} alt="" />
                <div className="icon">
                  <img src={coffeBean} alt="" />
                </div>
              </div>
              <div className="card-body">
                <h3 className="card-title">Bardayee</h3>
                <p>
                  
                </p>
              </div>

              <button>Learn More</button>
            </div>

            <div className="card">
              <div className="image-box">
                <img src={qillenso} alt="" />
                <div className="icon">
                  <img src={coffeBean} alt="" />
                </div>
              </div>
              <div className="card-body">
                <h3 className="card-title">Qilleenso</h3>
                <p>Lorem, ipsum dolor sit
                  amet consectetur adipisicing
                  elit. Hic, voluptas.</p>
              </div>

              <button>Learn More</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Source