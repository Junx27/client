import React, { useEffect, useState } from "react";
import logoprofile from "../../assets/images/profil3.jpg";
import backgroundlogo from "../../assets/images/backgroundprofile.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import whatsapp from "../../assets/images/whatsapp.png";
import line from "../../assets/images/line.png";
import tiktok from "../../assets/images/tiktok.png";
import LoginSession from "../../components/LoginSession";
import supabase from "../../config/supabaseClient";
import Header from "../../components/Header";

function Profile() {
  const [session, setSession] = useState();

  useEffect(() => {
    setSession(supabase.auth.getSession());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <>
      <Header />
      {session ? (
        <div className="container position-relative">
          <div className="row">
            <div className="col-8 ms-5 pt-3">
              <div>
                <img src={backgroundlogo} alt="" className="hero" />
              </div>
              <div>
                <img
                  className="profile"
                  src={logoprofile}
                  style={{ width: "200px", height: "200px" }}
                  alt=""
                />
              </div>
              <div className="name">
                Muhamad Saiful Mujib
                <hr />
              </div>
              <p className="text-muted text-end shadow pe-2">
                <span className="orange">Mastered Abilities:</span> Fresh
                Graduated | Web Developer | Design | More
                <hr />
              </p>
              <span className="btn btn-warning">Riwayat Lamaran Kerja</span>
              <hr />
              <div className="shadow mt-5 border-bottom border-warning border-2 grow">
                <h4 className="orange ms-3">PT Victory</h4>
                <p className="ms-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                  sapiente minus quasi iste cum perspiciatis iure atque
                  distinctio totam earum possimus amet. Velit tempore aut
                  nostrum consequuntur quam aspernatur inventore!
                </p>
                <div className="d-flex justify-content-end mt-2 px-3 py-3">
                  <button className="btn btn-info">View</button>
                  <button className="btn btn-danger ms-3">Delete</button>
                </div>
              </div>
              <div className="shadow mt-5 border-bottom border-warning border-2 grow">
                <h4 className="orange ms-3">PT Harimath</h4>
                <p className="ms-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                  sapiente minus quasi iste cum perspiciatis iure atque
                  distinctio totam earum possimus amet. Velit tempore aut
                  nostrum consequuntur quam aspernatur inventore!
                </p>
                <div className="d-flex justify-content-end mt-2 px-3 py-3">
                  <button className="btn btn-info">View</button>
                  <button className="btn btn-danger ms-3">Delete</button>
                </div>
              </div>
              <div className="shadow mt-5 border-bottom border-warning border-2 grow">
                <h4 className="orange ms-3">PT Indotech</h4>
                <p className="ms-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                  sapiente minus quasi iste cum perspiciatis iure atque
                  distinctio totam earum possimus amet. Velit tempore aut
                  nostrum consequuntur quam aspernatur inventore!
                </p>
                <div className="d-flex justify-content-end mt-2 px-3 py-3">
                  <button className="btn btn-info">View</button>
                  <button className="btn btn-danger ms-3">Delete</button>
                </div>
              </div>
            </div>
            <div className="col-3 ms-3 pt-3">
              <div>
                <h5 className="biodata orange">Biodata</h5>
                <hr />
                Tempat/Tgl Lahir: <br />
                <br />
                <br />
                <hr />
                Alamat: <br />
                <br />
                <br />
                <hr />
                Tinggi Badan: <br />
                <br />
                <br />
                <hr />
                Berat Badan: <br />
                <br />
                <br />
                <hr />
                Lulusan: <br />
                <br />
                <br />
                <hr />
                Pengalaman: <br />
                <br />
                <br />
                <hr />
                Keahlian: <br />
                <br />
                <br />
                <hr />
              </div>
              <h5 className="biodata mt-5 orange">Contact</h5>
              <hr />
              <div className="text-center">
                <img className="sosial-media me-2" src={whatsapp} alt="" />
                <img className="sosial-media me-2" src={facebook} alt="" />
                <img className="sosial-media me-2" src={instagram} alt="" />
                <img className="sosial-media me-2" src={line} alt="" />
                <img className="sosial-media" src={tiktok} alt="" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <LoginSession />
        </>
      )}
    </>
  );
}

export default Profile;
