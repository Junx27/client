import React from "react";
import img1 from "../assets/images/test.jpg";
import img2 from "../assets/images/temukankerja.jpg";
import img3 from "../assets/images/carikerja.png";
import img4 from "../assets/images/applykerja.png";
import img5 from "../assets/images/kerja.png";
import img6 from "../assets/images/dapatkerja.png";
import img7 from "../assets/images/joinus.png";
import Figure from "react-bootstrap/Figure";
import Info1 from "../components/Info1";
import "../assets/styles/styles.css";
import Header from "../components/Header";

function LandingPages() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="session">
          <div className="container">
            <div className="row align-items-center my-5">
              <div className="col-5 offset-1">
                <h1 className="blue font">
                  Pusing <span className="orange">Menganggur?</span>
                </h1>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum reprehenderit excepturi, magnam ut odit odio.
                  Assumenda repellendus inventore minima possimus. Consequatur
                  cumque dolores, voluptates illum suscipit dicta cupiditate eos
                  voluptatum!
                </p>
              </div>
              <div className="col-5">
                <img src={img1} alt="" style={{ width: "500px" }} />
              </div>
            </div>
            <div className="row align-items-center my-5">
              <div className="col-5">
                <img src={img2} alt="" style={{ width: "500px" }} />
              </div>
              <div className="col-5 offset-1">
                <h1 className="blue font">
                  <span className="orange">Bingung</span> Cari Kerja?
                </h1>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum reprehenderit excepturi, magnam ut odit odio.
                  Assumenda repellendus inventore minima possimus. Consequatur
                  cumque dolores, voluptates illum suscipit dicta cupiditate eos
                  voluptatmkjih
                </p>
              </div>
              <hr />
            </div>
          </div>
          <div className="container mt-3 mb-5">
            <h1 className="text-center mb-5 font">
              Bagaimana Cara Mendapat Kerja di{" "}
              <span className="orange">ILOKA?</span>
            </h1>
            <br />
            <div className="row text-center mb-5">
              <div className="col-3 ms-5 border border-warning rounded shadow p-3 mb-5 bg-body grow">
                <h5 className="mt-3 py-2 bg-purple rounded text-light">
                  <h5 className="btn-orange">1</h5>
                  <hr />
                  Cari kerja
                </h5>
                <Figure>
                  <Figure.Image
                    src={img3}
                    alt=""
                    style={{ width: "250px" }}
                    className="pt-5 pb-3 px-2 rounded"
                  />
                  <Figure.Caption className="text">
                    <hr />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Necessitatibus vitae voluptatibus sapiente dolor
                    exercitationem incidunt, numquam tempora facilis at labore
                    atque tenetur aliquid, autem nihil voluptatum aliquam, esse
                    veniam quidem.
                  </Figure.Caption>
                </Figure>
              </div>
              <div className="col-3 offset-1 border border-warning rounded shadow p-3 mb-5 bg-body grow">
                <h5 className="mt-3 py-2 bg-purple rounded text-light">
                  <h5 className="btn-orange">2</h5>
                  <hr />
                  Apply Lamaran
                </h5>
                <Figure>
                  <Figure.Image
                    src={img4}
                    alt=""
                    style={{ width: "250px", height: "245px" }}
                    className="pt-5 pb-3 px-2 rounded"
                  />
                  <Figure.Caption className="text">
                    <hr />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Necessitatibus vitae voluptatibus sapiente dolor
                    exercitationem incidunt, numquam tempora facilis at labore
                    atque tenetur aliquid, autem nihil voluptatum aliquam, esse
                    veniam quidem.
                  </Figure.Caption>
                </Figure>
              </div>
              <div className="col-3 offset-1 border border-warning rounded shadow p-3 mb-5 bg-body grow">
                <h5 className="mt-3 py-2 bg-purple rounded text-light">
                  <h5 className="btn-orange">3</h5>
                  <hr />
                  Kerja
                </h5>
                <Figure>
                  <Figure.Image
                    src={img5}
                    alt=""
                    style={{ width: "250px" }}
                    className="pt-5 pb-3 px-2 rounded"
                  />
                  <Figure.Caption className="text">
                    <hr />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Necessitatibus vitae voluptatibus sapiente dolor
                    exercitationem incidunt, numquam tempora facilis at labore
                    atque tenetur aliquid, autem nihil voluptatum aliquam, esse
                    veniam quidem.
                  </Figure.Caption>
                </Figure>
              </div>
            </div>
            <hr />
            <div className="container text-center my-5">
              <h1 className="font">
                <span className="orange">Temukan Pekerjaan</span>
                <br />
                Impianmu
                <span className="blue"> Sekarang Juga</span>
                <img src={img6} alt="" />
                <h2>
                  Bersama Perusahaan Berkualitas <br />
                  <span className="orange">Penyedia Lowongan Kerja</span>
                </h2>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum, animi. Et, repellat! Beatae, eligendi nesciunt
                perspiciatis accusamus quisquam, illo id libero facere sequi
                asperiores quis natus impedit molestias, fugit alias?
              </p>
              <button className="border-0 bg-pink text-light px-5">
                Tidak Dipungut Biaya Sepersenpun
              </button>
            </div>
            <hr />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-6">
                  <h1 className="font">
                    Yuk Ga<span className="orange">bung</span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aspernatur sint ipsa nihil exercitationem adipisci maxime,
                    consectetur quam dolores quidem eius temporibus distinctio
                    fuga similique! Cum, voluptatem! Ipsum nisi nulla magni.
                  </p>
                  <Info1 />
                </div>
                <div className="col-5 offset-1">
                  <img src={img7} alt="" style={{ width: "400px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPages;
