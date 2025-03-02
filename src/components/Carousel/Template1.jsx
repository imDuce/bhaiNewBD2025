import React, { useEffect } from "react";
import "./carousel.css";

import pic1 from "../../assets/ghochu101/1.jpg";
import pic2 from "../../assets/ghochu101/3.jpg";
import pic3 from "../../assets/ishiKidImgs/14.jpg";
import pic4 from "../../assets/ishiKidImgs/20.jpg";
import pic5 from "../../assets/ishiKidImgs/5.jpg";
import pic6 from "../../assets/ishiKidImgs/16.jpg";
import pic7 from "../../assets/ghochu101/7.jpg";
import pic8 from "../../assets/ishiKidImgs/18.jpg";
import pic9 from "../../assets/ghochu101/9.jpg";
import pic10 from "../../assets/ishiKidImgs/3.jpg";
import pic11 from "../../assets/ghochu101/11.jpg";
import me1 from "../../assets/me1.png";

// import vid1 from '../../assets/vid.mp4'

const Carousel = () => {
  useEffect(() => {
    let radius = 240; // Changed from const to let
    const autoRotate = true;
    const rotateSpeed = -60;
    const imgWidth = 120;
    const imgHeight = 170;
    // const bgMusicURL =
    //   "https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a";
    // const bgMusicControls = true;

    const odrag = document.getElementById("drag-container");
    const ospin = document.getElementById("spin-container");
    const aImg = ospin.getElementsByTagName("img");
    const aVid = ospin.getElementsByTagName("video");
    const aEle = [...aImg, ...aVid];

    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    const ground = document.getElementById("ground");
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";

    function init(delayTime) {
      for (let i = 0; i < aEle.length; i++) {
        aEle[i].style.transform = `rotateY(${
          i * (360 / aEle.length)
        }deg) translateZ(${radius}px)`;
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay =
          delayTime || (aEle.length - i) / 4 + "s";
      }
    }

    function applyTranform(obj) {
      if (tY > 180) tY = 180;
      if (tY < 0) tY = 0;
      obj.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
    }

    function playSpin(yes) {
      ospin.style.animationPlayState = yes ? "running" : "paused";
    }

    let sX,
      sY,
      nX,
      nY,
      desX = 0,
      desY = 0,
      tX = 0,
      tY = 10;

    if (autoRotate) {
      const animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
      ospin.style.animation = `${animationName} ${Math.abs(
        rotateSpeed
      )}s infinite linear`;
    }

    // if (bgMusicURL) {
    //   document.getElementById("music-container").innerHTML += `
    //     <audio src="${bgMusicURL}" ${
    //     bgMusicControls ? "controls" : ""
    //   } autoplay loop>
    //       <p>If you are reading this, it is because your browser does not support the audio element.</p>
    //     </audio>
    //   `;
    // }

    document.onpointerdown = function (e) {
      clearInterval(odrag.timer);
      e = e || window.event;
      sX = e.clientX;
      sY = e.clientY;

      this.onpointermove = function (e) {
        e = e || window.event;
        nX = e.clientX;
        nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTranform(odrag);
        sX = nX;
        sY = nY;
      };

      this.onpointerup = function () {
        odrag.timer = setInterval(() => {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTranform(odrag);
          playSpin(false);
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval(odrag.timer);
            playSpin(true);
          }
        }, 17);
        this.onpointermove = this.onpointerup = null;
      };

      return false;
    };

    document.onmousewheel = function (e) {
      e = e || window.event;
      const d = e.wheelDelta / 20 || -e.detail;
      radius += d; // This line should now work correctly
      init(1);
    };

    setTimeout(init, 1000);
  }, []);

  return (
    <div className="carous">
      <div id="drag-container">
        <div id="spin-container">
          <img src={pic1} alt="" />
          <img src={pic9} alt="" />
          <img src={pic3} alt="" />
          <img src={pic4} alt="" />
          <img src={pic11} alt="" />
          <img src={pic6} alt="" />
          <img src={pic10} alt="" />
          <img src={pic5} alt="" />
          <img src={pic8} alt="" />
          {/* <a
            target="_blank"
            href="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg"
          >
            <img
              src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </a> */}
    
            <video controls loop poster={me1} onClick={() => window.open(vid1, "_blank", "noopener,noreferrer")}>
              <source
                src='https://drive.google.com/file/d/1XIfpaJtOqHxHSr0ajmSuv20Nj_REA_we/view?usp=sharing'
                type="video/mp4"
              />
            </video>

          <p>Bhai ka 17wa Janamdin 🥳🥳🥳 Click the Video !</p>
        </div>
        <div id="ground"></div>
        {/* <div id="music-container"></div> */}
      </div>
    </div>
  );
};

export default Carousel;
