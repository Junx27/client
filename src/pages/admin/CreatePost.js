import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import supabase from "../../config/supabaseClientAdmin";
import { useNavigate } from "react-router-dom";
import Header from "../../components/HeaderAdmin";

function CreatePost() {
  const [judul_pekerjaan, setJudul] = useState();
  const [gaji, setGaji] = useState();
  const [tunjangan, setTunjangan] = useState();
  const [quantity, setQuantity] = useState();
  const [jenis_kelamin, setJenisKelamin] = useState();
  const [usia, setUsia] = useState();
  const [lulusan, setLulusan] = useState();
  const [tinggi_badan, setTinggiBadan] = useState();
  const [skill, setSkill] = useState();
  const [nama_perusahaan, setPublished] = useState();

  async function createPost(e) {
    e.preventDefault();

    const { data } = await supabase.from("posts").insert([
      {
        judul_pekerjaan,
        gaji,
        tunjangan,
        quantity,
        jenis_kelamin,
        usia,
        lulusan,
        tinggi_badan,
        skill,
        nama_perusahaan: profile,
        user_id: session.user.id,
      },
    ]);
    navigate("/homeadmin");
  }

  const [profile, setProfile] = useState();
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchProfile() {
    const { data } = await supabase
      .from("profile")
      .select("*")
      .eq("user_id", session.user.id)
      .single();

    if (data) {
      setProfile(data?.nama);
    }
  }

  let navigate = useNavigate();
  const [session, setSession] = useState();

  useEffect(() => {
    setSession(supabase.auth.getSession());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if (!session) {
    navigate("/login");
  }
  return (
    <>
      <Header />
      <div className="container">
        <div className="container mt-5" style={{ width: "800px" }}>
          <h1 className="font text-center blue">
            Create <span className="orange">New Job</span>
          </h1>
          <hr />
          <Form className="border border-warning  rounded p-5 mt-5 shadow p-3 mb-5 bg-body">
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Judul Pekerjaan</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={judul_pekerjaan}
                onChange={(e) => setJudul(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-2 mt-3">
              <Form.Label>Gaji</Form.Label>
            </Form.Group>
            <Form.Select
              className="mb-3"
              value={gaji}
              onChange={(e) => setGaji(e.target.value)}
            >
              <option>-</option>
              <option value="1.000.000 - 2.000.000">
                1.000.000 - 2.000.000
              </option>
              <option value="3.000.000 - 5.000.000">
                3.000.000 - 5.000.000
              </option>
            </Form.Select>
            <Form.Group className="mb-2 mt-3">
              <Form.Label>Tunjangan</Form.Label>
            </Form.Group>
            <Form.Select
              className="mb-3"
              value={tunjangan}
              onChange={(e) => setTunjangan(e.target.value)}
            >
              <option>-</option>
              <option value="BPJS"> BPJS</option>
              <option value="THT">THT</option>
              <option value="BPJS & THT">BPJS & THT</option>
            </Form.Select>
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Persyaratan</Form.Label>
            </Form.Group>
            <hr />
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Jenis Kelamin</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={jenis_kelamin}
                onChange={(e) => setJenisKelamin(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Usia</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={usia}
                onChange={(e) => setUsia(e.target.value)}
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
              <Form.Label>Tinggi Badan</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={tinggi_badan}
                onChange={(e) => setTinggiBadan(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Skill</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Label>Published</Form.Label>
              <Form.Control type="text" placeholder="" value={profile} />
            </Form.Group>
            <div className="mb-3 mt-5 d-flex justify-content-end">
              <Button type="submit" onClick={createPost}>
                Create Post
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
