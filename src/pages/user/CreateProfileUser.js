import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import supabase from "../../config/supabaseClient";
import { useNavigate } from "react-router-dom";

function CreateProfileUser() {
  const [nama, setNama] = useState();
  const [tempat_tgl_lahir, setTempat] = useState();
  const [alamat, setAlamat] = useState();
  const [tinggi_badan, setTinggiBadan] = useState();
  const [berat_badan, setBeratBadan] = useState();
  const [lulusan, setLulusan] = useState();
  const [pengalaman, setPengalaman] = useState();
  const [keahlian, setKeahlian] = useState();
  const [bio, setBio] = useState();

  async function createPost(e) {
    e.preventDefault();

    const { data } = await supabase.from("profile").insert([
      {
        nama,
        tempat_tgl_lahir,
        alamat,
        tinggi_badan,
        berat_badan,
        lulusan,
        pengalaman,
        keahlian,
        bio,
        user_id: session.user.id,
      },
    ]);
    navigate("/profile");
  }

  let navigate = useNavigate();
  const [session, setSession] = useState();

  useEffect(() => {
    setSession(supabase.auth.getSession());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="container mt-5" style={{ width: "800px" }}>
          <h1 className="font text-center blue">
            Create <span className="orange">Profile</span>
          </h1>
          <hr />
          <Form className="border border-warning  rounded p-5 mt-5 shadow p-3 mb-5 bg-body">
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-2 mt-3">
              <Form.Label>Tempat/Tgl Lahir</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={tempat_tgl_lahir}
                onChange={(e) => setTempat(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-2 mt-3">
              <Form.Label>Alamat</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Tinggi Badan</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={tinggi_badan}
                onChange={(e) => setTinggiBadan(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Berat Badan</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={berat_badan}
                onChange={(e) => setBeratBadan(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Lulusan</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={lulusan}
                onChange={(e) => setLulusan(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Pengalaman</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={pengalaman}
                onChange={(e) => setPengalaman(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Keahlian</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={keahlian}
                onChange={(e) => setKeahlian(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </Form.Group>
            <div className="mb-3 mt-5 d-flex justify-content-end">
              <Button type="submit" onClick={createPost}>
                Create Profile
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CreateProfileUser;
