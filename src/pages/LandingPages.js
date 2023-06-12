import React, { useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";

function LandingPages() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 2000,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="sticky-top">
        <Header />
      </div>
      <div className="container">
        <div>
          <div className="row align-items-center my-5" data-aos="fade-left">
            <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 offset-md-1 offset-lg-1 offset-xl-1">
              <h1 className="blue font">
                Pusing <span className="orange">Menganggur?</span>
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
            <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 sizeimg">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="row align-items-center my-5" data-aos="fade-up">
            <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 offset-md-1 offset-lg-1 offset-xl-1 order-sm-first order-md-last order-lg-last order-xl-last">
              <h1 className="blue font">
                <span className="orange">Bingung</span> Cari Kerja?
              </h1>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                reprehenderit excepturi, magnam ut odit odio. Assumenda
                repellendus inventore minima possimus. Consequatur cumque
                dolores, voluptates illum suscipit dicta cupiditate eos
                voluptatmkjih
              </p>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 sizeimg">
              <img src={img2} alt="" />
            </div>
          </div>
          <hr />
          <div className="container mt-3 mb-5" data-aos="fade-up">
            <h1 className="text-center mb-5 font">
              Bagaimana Cara Mendapat Kerja di{" "}
              <span className="orange">ILOKA?</span>
            </h1>
            <br />
            <div className="row text-center mb-5">
              <div className="col-lg-3 ms-lg-5 border border-warning rounded shadow p-3 mb-5 bg-body grow">
                <div className="mt-3 py-lg-2 bg-purple rounded text-light pop">
                  <h5 className="btn-orange">1</h5>
                  <hr />
                  Cari kerja
                </div>
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
              <div className="col-lg-3 offset-lg-1 border border-warning rounded shadow p-3 mb-5 bg-body grow">
                <div className="mt-lg-3 py-lg-2 bg-purple rounded text-light pop">
                  <h5 className="btn-orange">2</h5>
                  <hr />
                  Apply Lamaran
                </div>
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
              <div className="col-lg-3 offset-lg-1 border border-warning rounded shadow p-3 mb-5 bg-body grow">
                <div className="mt-lg-3 py-lg-2 bg-purple rounded text-light pop">
                  <h5 className="btn-orange">3</h5>
                  <hr />
                  Kerja
                </div>
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
            <div className="container text-center my-5" data-aos="fade-up">
              <div className="font">
                <h1 className="orange">Temukan Pekerjaan</h1>
                <h1>Impianmu</h1>
                <h1 className="blue"> Sekarang Juga</h1>
                <img src={img6} alt="" style={{ width: "300px" }} />
                <h2>
                  Bersama Perusahaan Berkualitas <br />
                  <span className="orange">Penyedia Lowongan Kerja</span>
                </h2>
              </div>
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
                <div className="col-lg-6" data-aos="fade-up">
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
                <div className="col-lg-5 offset-lg-1" data-aos="fade-right">
                  <img src={img7} alt="" style={{ width: "300px" }} />
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
