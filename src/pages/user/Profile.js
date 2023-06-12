import React, { useEffect, useState } from "react";
import logoprofile from "../../assets/images/profil3.jpg";
import backgroundlogo from "../../assets/images/backgroundprofile.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import whatsapp from "../../assets/images/whatsapp.png";
import line from "../../assets/images/line.png";
import tiktok from "../../assets/images/tiktok.png";
import supabase from "../../config/supabaseClient";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { CiViewList, CiEdit } from "react-icons/ci";
import Login from "../../components/ResetProfileUser";

function Profile() {
  const [nama, setNama] = useState();
  const [tempat_tgl_lahir, setTempat] = useState();
  const [alamat, setAlamat] = useState();
  const [tinggi_badan, setTinggiBadan] = useState();
  const [berat_badan, setBeratBadan] = useState();
  const [lulusan, setLulusan] = useState();
  const [pengalaman, setPengalaman] = useState();
  const [keahlian, setKeahlian] = useState();
  const [bio, setBio] = useState();

  useEffect(() => {
    updatePosts();
  }, [updatePosts]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function updatePosts() {
    const { data } = await supabase
      .from("profile")
      .select("*")
      .eq("user_id", session.user.id)
      .single();
    if (data) {
      setNama(data?.nama);
      setTempat(data?.tempat_tgl_lahir);
      setAlamat(data?.alamat);
      setTinggiBadan(data?.tinggi_badan);
      setBeratBadan(data?.berat_badan);
      setLulusan(data?.lulusan);
      setPengalaman(data?.pengalaman);
      setKeahlian(data?.keahlian);
      setBio(data?.bio);
    }
  }

  let navigate = useNavigate();
  const [session, setSession] = useState();
  const [profile, setProfile] = useState();
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchProfile() {
    const { data: profile } = await supabase
      .from("profile")
      .select("*")
      .eq("user_id", session.user.id);

    setProfile(profile);
  }
  useEffect(() => {
    setSession(supabase.auth.getSession());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  if (!session) {
    navigate("/");
  }
  return (
    <>
      <div className="sticky-top">
        <Header />
      </div>
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-8 ms-lg-5 pt-3">
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
            {profile &&
              profile.map((profile) => (
                <div key={profile.id}>
                  <div className="name">
                    {profile.nama}
                    <hr />
                  </div>
                  <p className="text-muted text-end shadow pe-2 pb-2">
                    <span className="orange">Mastered Abilities: </span>"
                    {profile.bio} "
                  </p>
                </div>
              ))}
            <span className="btn btn-warning mt-2">
              <CiViewList className="icon" /> Riwayat Lamaran Kerja
            </span>
            <Login />
            <button
              className="btn btn-info ms-3 mt-2"
              onClick={() => {
                navigate("/updateprofileuser");
              }}
            >
              <CiEdit className="icon" /> Update Profile
            </button>
            <hr />
            <div className="shadow mt-5 border-bottom border-warning border-2 grow">
              <h4 className="orange ms-3">PT Victory</h4>
              <p className="ms-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                sapiente minus quasi iste cum perspiciatis iure atque distinctio
                totam earum possimus amet. Velit tempore aut nostrum
                consequuntur quam aspernatur inventore!
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
                sapiente minus quasi iste cum perspiciatis iure atque distinctio
                totam earum possimus amet. Velit tempore aut nostrum
                consequuntur quam aspernatur inventore!
              </p>
              <div className="d-flex justify-content-end mt-2 px-3 py-3">
                <button className="btn btn-info">View</button>
                <button className="btn btn-danger ms-3">Delete</button>
              </div>
            </div>
            <div className="shadow mt-5 border-bottom border-warning border-2 grow mb-5">
              <h4 className="orange ms-3">PT Indotech</h4>
              <p className="ms-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                sapiente minus quasi iste cum perspiciatis iure atque distinctio
                totam earum possimus amet. Velit tempore aut nostrum
                consequuntur quam aspernatur inventore!
              </p>
              <div className="d-flex justify-content-end mt-2 px-3 py-3">
                <button className="btn btn-info">View</button>
                <button className="btn btn-danger ms-3">Delete</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 ms-3 pt-3">
            <div>
              <h5 className="biodata orange">Biodata</h5>
              <hr />
              Tempat/Tgl Lahir:{" "}
              <div className="font blue mt-2">{tempat_tgl_lahir}</div>
              <hr />
              Alamat: <div className="font blue mt-2">{alamat}</div>
              <hr />
              Tinggi Badan: <div className="font blue mt-2">{tinggi_badan}</div>
              <hr />
              Berat Badan: <div className="font blue mt-2">{berat_badan}</div>
              <hr />
              Lulusan: <div className="font blue mt-2">{lulusan}</div>
              <hr />
              Pengalaman: <div className="font blue mt-2">{pengalaman}</div>
              <hr />
              Keahlian: <div className="font blue mt-2">{keahlian}</div>
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
    </>
  );
}

export default Profile;
