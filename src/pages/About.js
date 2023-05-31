import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import LoginSession from "../components/LoginSession";
import Header from "../components/Header";

function About() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5 offset-1">
              <h1 className="blue font">
                About <span className="orange">ILOKA</span>
              </h1>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                reprehenderit excepturi, magnam ut odit odio. Assumenda
                repellendus inventore minima possimus. Consequatur cumque
                dolores, voluptates illum suscipit dicta cupiditate eos
                voluptatum!
              </p>
            </div>
            <div className="col-5">
              <Player
                autoplay={true}
                loop
                src="https://assets10.lottiefiles.com/packages/lf20_sqwEc44qxw.json"
                style={{ height: "500px", width: "500px" }}
              ></Player>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-5">
              <Player
                autoplay={true}
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_8etvTOtK4O.json"
                style={{ height: "500px", width: "500px" }}
              ></Player>
            </div>
            <div className="col-5 offset-1">
              <h1 className="blue font">
                <span className="orange">Tentang</span> Kami
              </h1>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                reprehenderit excepturi, magnam ut odit odio. Assumenda
                repellendus inventore minima possimus. Consequatur cumque
                dolores, voluptates illum suscipit dicta cupiditate eos
                voluptatum!
              </p>
            </div>
            <hr />
          </div>
          <div className="row align-items-center">
            <div className="col-5 offset-1">
              <h1 className="blue font">
                Kelebihan <span className="orange">ILOKA</span>
              </h1>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                reprehenderit excepturi, magnam ut odit odio. Assumenda
                repellendus inventore minima possimus. Consequatur cumque
                dolores, voluptates illum suscipit dicta cupiditate eos
                voluptatum!
              </p>
            </div>
            <div className="col-5">
              <Player
                autoplay={true}
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_1mA0i9a3PH.json"
                style={{ height: "500px", width: "500px" }}
              ></Player>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-5">
              <Player
                autoplay={true}
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_vCSa0OQQkd.json"
                style={{ height: "500px", width: "500px" }}
              ></Player>
            </div>
            <div className="col-5 offset-1">
              <h1 className="blue font">
                Yuk Berga<span className="orange">bung</span>
              </h1>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                reprehenderit excepturi, magnam ut odit odio. Assumenda
                repellendus inventore minima possimus. Consequatur cumque
                dolores, voluptates illum suscipit dicta cupiditate eos
                voluptatum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
