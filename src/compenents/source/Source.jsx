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
              Imagine a sip of pure, unadulterated coffee bliss. Grown at an astonishing 1716 meters above sea level in the heart of Ethiopia (5°35′N 38°15′E), this coffee is a testament to nature's artistry. The high altitude, rich volcanic soil, and ideal climate conspire to create beans that are nothing short of extraordinary.
    <br/> <br/>
With every cup, you'll embark on a sensory journey. Experience the vibrant acidity that dances on your palate, the floral and fruity notes that tantalize your senses, and the smooth, velvety finish that lingers long after the last drop. This is coffee that awakens your taste buds and elevates your morning ritual.
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
                  it is located at west guji zone around bule hora town
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