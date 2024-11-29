import React from 'react';
import './gallery.css';
import coffeBean from './../../assets/icons/coffee-bean.png';
import coffeeDrying from './../../assets/images/nokka-coffee-drying-station.png';


import drying1 from './../../assets/images/coffee-drying-process-01.png';
import drying2 from './../../assets/images/coffee-drying-process-2-01.png';
import drying3 from './../../assets/images/coffee-drying-process-3-01.png';
import drying4 from './../../assets/images/coffee-drying-process-4-01.png';
import buying from './../../assets/images/coffee-buying-from-farmer-01.png';
import grinding from './../../assets/images/coggee-grinding-process-01.png';






const Gallery = () => {
  return (
    <div className="container">
      <div className="gallery">
        <div className="top">
          <p>our Gallery</p>
          <h1>Let's see Nokka's coffee Gallery at diffirent coffee processing steps</h1>
          <div className="icon-container">
            <img src={coffeBean} alt="" />
          </div>
        </div>

        <div className="bottom">
          <div className="card">
            <div className="card-image">
              <img src={coffeeDrying} alt="" />

            </div>

            <div className="card-body">

              <h2 className="event-title">Coffee Drying</h2>
              <p>Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum dolor sit amet.</p>

            </div>
          </div>


          <div className="card">
            <div className="card-image">
              <img src={drying2} alt="" />

            </div>

            <div className="card-body">

              <h2 className="event-title">Coffee Drying</h2>
              <p>Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum dolor sit amet.</p>

            </div>
          </div>



          <div className="card">
            <div className="card-image">
              <img src={grinding} alt="" />

            </div>

            <div className="card-body">

              <h2 className="event-title">Coffee Grinding</h2>
              <p>Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum dolor sit amet.</p>

            </div>
          </div>


          <div className="card">
            <div className="card-image">
              <img src={buying} alt="" />

            </div>

            <div className="card-body">

              <h2 className="event-title">Coffee buying from farmer</h2>
              <p>Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum dolor sit amet.</p>

            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={drying1} alt="" />

            </div>

            <div className="card-body">

              <h2 className="event-title">Coffee Drying</h2>
              <p>Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum dolor sit amet.</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery