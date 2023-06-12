import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";

function UpdateProfileUser() {
  const [nama, setNama] = useState();
  const [tempat_tgl_lahir, setTempat] = useState();
  const [alamat, setAlamat] = useState();
  const [tinggi_badan, setTinggiBadan] = useState();
  const [berat_badan, setBeratBadan] = useState();
  const [lulusan, setLulusan] = useState();
  const [pengalaman, setPengalaman] = useState();
  const [keahlian, setKeahlian] = useState();
  const [bio, setBio] = useState();
  const [nama1, setNama1] = useState();
  const [tempat_tgl_lahir1, setTempat1] = useState();
  const [alamat1, setAlamat1] = useState();
  const [tinggi_badan1, setTinggiBadan1] = useState();
  const [berat_badan1, setBeratBadan1] = useState();
  const [lulusan1, setLulusan1] = useState();
  const [pengalaman1, setPengalaman1] = useState();
  const [keahlian1, setKeahlian1] = useState();
  const [bio1, setBio1] = useState();

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
  async function handleSubmit(e) {
    e.preventDefault();

    const { data } = await supabase
      .from("profile")
      .update({
        nama: nama1,
        tempat_tgl_lahir: tempat_tgl_lahir1,
        alamat: alamat1,
        tinggi_badan: tinggi_badan1,
        berat_badan: berat_badan1,
        lulusan: lulusan1,
        pengalaman: pengalaman1,
        keahlian: keahlian1,
        bio: bio1,
      })
      .eq("user_id", session.user.id);
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
      <div className="sticky-top">
        <Header />
      </div>
      <div className="container">
        <h1 className="font text-center blue">
          Update <span className="orange">Profile</span>
        </h1>
        <hr />
        <div className="row">
          <div className="col-lg-6">
            <h2 className="orange text-center">Your profile</h2>
            <div className="container mt-5">
              <Form className="border border-warning  rounded p-5 mt-5 shadow p-3 mb-5 bg-body">
                <Form.Group className="mb-3 mt-3">
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control
                    className="orange"
                    type="text"
                    placeholder=""
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2 mt-3">
                  <Form.Label>Tempat/Tgl Lahir</Form.Label>
                  <Form.Control
                    className="orange"
                    type="text"
                    placeholder=""
                    value={tempat_tgl_lahir}
                    onChange={(e) => setTempat(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2 mt-3">
                  <Form.Label>Alamat</Form.Label>
                  <Form.Control
                    className="orange"
                    type="text"
                    placeholder=""
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                  <Form.Label>Tinggi Badan</Form.Label>
                  <Form.Control
                    className="orange"
                    type="text"
                    placeholder=""
                    value={tinggi_badan}
                    onChange={(e) => setTinggiBadan(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                  <Form.Label>Berat Badan</Form.Label>
                  <Form.Control
                    className="orange"
                    type="text"
                    placeholder=""
                    value={berat_badan}
                    onChange={(e) => setBeratBadan(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                  <Form.Label>Lulusan</Form.Label>
                  <Form.Control
                    className="orange"
                    type="text"
                    placeholder=""
                    value={lulusan}
                    onChange={(e) => setLulusan(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                  <Form.Label>Pengalaman</Form.Label>
                  <Form.Control
                    className="orange"
                    type="text"
                    placeholder=""
                    value={pengalaman}
                    onChange={(e) => setPengalaman(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                  <Form.Label>Keahlian</Form.Label>
                  <Form.Control
                    className="orange"
                    type="text"
                    placeholder=""
                    value={keahlian}
                    onChange={(e) => setKeahlian(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                  <Form.Label>Bio</Form.Label>
                  <Form.Control
                    className="orange"
                    type="text"
                    placeholder=""
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </Form.Group>
                <div className="mb-2 mt-5 d-flex justify-content-end">
                  <br />
                  <br />
                </div>
              </Form>
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="blue text-center">New profile</h2>
            <div className="container mt-5">
              <Form className="border border-warning  rounded p-5 mt-5 shadow p-3 mb-5 bg-body">
                <Form.Group className="mb-3 mt-3">
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={nama1}
                    onChange={(e) => setNama1(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2 mt-3">
                  <Form.Label>Tempat/Tgl Lahir</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={tempat_tgl_lahir1}
                    onChange={(e) => setTempat1(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2 mt-3">
                  <Form.Label>Alamat</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={alamat1}
                    onChange={(e) => setAlamat1(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                  <Form.Label>Tinggi Badan</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={tinggi_badan1}
                    onChange={(e) => setTinggiBadan1(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                  <Form.Label>Berat Badan</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={berat_badan1}
                    onChange={(e) => setBeratBadan1(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                  <Form.Label>Lulusan</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={lulusan1}
                    onChange={(e) => setLulusan1(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                  <Form.Label>Pengalaman</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={pengalaman1}
                    onChange={(e) => setPengalaman1(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                  <Form.Label>Keahlian</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={keahlian1}
                    onChange={(e) => setKeahlian1(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                  <Form.Label>Bio</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={bio1}
                    onChange={(e) => setBio1(e.target.value)}
                  />
                </Form.Group>
                <div className="mb-3 mt-5 d-flex justify-content-end">
                  <Button
                    type="submit"
                    variant="danger"
                    className="me-2"
                    onClick={() => navigate("/profile")}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="info" onClick={handleSubmit}>
                    Update Profile
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfileUser;
