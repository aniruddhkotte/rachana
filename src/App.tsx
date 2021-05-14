import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';
import Header from './Components/HeaderComponent';
import Product from './Components/ProductComponent';

import door1 from "./Assets/door-1.jpg";
import door2 from "./Assets/door-2.png";
import door3 from "./Assets/door-3.jpg";
import door4 from "./Assets/door-4.jpg";

import Modal from 'react-modal'

const modalStyles = {
  content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
  },
  overlay: {
      background: "#23202142"
  }
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedImg, setClickedImg] = useState("");

  const closeModal = () => {
    setIsOpen(false);
    setClickedImg("");
  }

  let doorImages = [door1, door2, door3, door4];

  const clickHandler = (img: any) => {
    setClickedImg(img);
    setIsOpen(true);
  }

  return (
    <div className="App flex col">
      <Header />

      <div className="carousel-container flex">
        <Carousel className="carousel" showThumbs={false} autoPlay showStatus={false}
            interval={2000} infiniteLoop={true} showIndicators={false}>
          <div>
            <img src={require("./Assets/1.jpg").default} alt="Machine"/>
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={require("./Assets/2.jpg").default} alt="Machine"/>
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={require("./Assets/3.jpg").default} alt="Machine"/>
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src={require("./Assets/4.jpg").default} alt="Machine"/>
            <p className="legend">Legend 4</p>
          </div>
        </Carousel>
      </div>

      <div className="door-list flex row">
        {
          doorImages.map((img, i) => {
            return(<Product key={i} img={img} click={clickHandler}/>);
          })
        }
      </div>
      
      <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={modalStyles}
          contentLabel="Product description">

        <div className="modal-container">
          <div className="modal-header flex row">
              <h4>Product Description</h4>
              <img className="close-icon-modal" onClick={closeModal}
                  src={require('./Assets/close.svg').default} alt="" />
          </div>
          <div className="modal-body flex col">
            <img className="modal-product-img" src={clickedImg} alt="" />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
