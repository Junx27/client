/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClientAdmin";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function EditPostAdmin() {
  const [judul_pekerjaan, setJudul] = useState("");
  const [gaji, setGaji] = useState("");
  const [tunjangan, setTunjangan] = useState("");
  const [quantity, setQuantity] = useState("0");
  const [jenis_kelamin, setJenisKelamin] = useState("");
  const [usia, setUsia] = useState("");
  const [lulusan, setLulusan] = useState("");
  const [tinggi_badan, setTinggiBadan] = useState("");
  const [skill, setSkill] = useState("");
  const [nama_perusahaan, setNamaPerusahaan] = useState("");
  const [judul_pekerjaan1, setJudul1] = useState("");
  const [gaji1, setGaji1] = useState("");
  const [tunjangan1, setTunjangan1] = useState("");
  const [quantity1, setQuantity1] = useState("0");
  const [jenis_kelamin1, setJenisKelamin1] = useState("");
  const [usia1, setUsia1] = useState("");
  const [lulusan1, setLulusan1] = useState("");
  const [tinggi_badan1, setTinggiBadan1] = useState("");
  const [skill1, setSkill1] = useState("");
  const [nama_perusahaan1, setNamaPerusahaan1] = useState("");

  async function handleDelete() {
    const { data } = await supabase
      .from("posts")
      .delete()
      .eq("id", id)
      .single();
  }

  async function handleUpdate() {
    const { error } = await supabase
      .from("posts")
      .update({
        judul_pekerjaan: judul_pekerjaan1,
        gaji: gaji1,
        tunjangan: tunjangan1,
        quantity: quantity1,
        jenis_kelamin: jenis_kelamin1,
        usia: usia1,
        lulusan: lulusan1,
        tinggi_badan: tinggi_badan1,
        skill: skill1,
        nama_perusahaan: nama_perusahaan1,
      })
      .eq("id", id)
      .single();
  }

  useEffect(() => {
    updatePosts();
  }, [updatePosts]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function updatePosts() {
    const { data: posts } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();
    if (posts) {
      setJudul(posts.judul_pekerjaan);
      setGaji(posts.gaji);
      setTunjangan(posts.tunjangan);
      setQuantity(posts.quantity);
      setJenisKelamin(posts.jenis_kelamin);
      setUsia(posts.usia);
      setLulusan(posts.lulusan);
      setTinggiBadan(posts.tinggi_badan);
      setSkill(posts.skill);
      setNamaPerusahaan(posts.nama_perusahaan);
    }
  }

  const navigate = useNavigate();
  const [session, setSession] = useState();
  const { id } = useParams();

  useEffect(() => {
    setSession(supabase.auth.getSession());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

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
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="container">
          <div className="container">
            <h1 className="font text-center blue">
              Your <span className="orange">Post Job</span>
            </h1>
            <hr />
            <Form
              className="border border-warning  rounded p-5 mt-5 shadow p-3 mb-5 bg-body"
              style={{ height: "1050px" }}
            >
              <Form.Group className="mb-3 mt-3">
                <Form.Label>Judul Pekerjaan</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={judul_pekerjaan}
                />
              </Form.Group>
              <Form.Group className="mb-2 mt-3">
                <Form.Label>Gaji</Form.Label>
                <Form.Control type="text" placeholder="" value={gaji} />
              </Form.Group>
              <Form.Group className="mb-2 mt-3">
                <Form.Label>Tunjangan</Form.Label>
                <Form.Control type="text" placeholder="" value={tunjangan} />
              </Form.Group>
              <Form.Group className="mb-3 mt-3">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" placeholder="" value={quantity} />
              </Form.Group>
              <Form.Group className="mb-3 mt-3 orange font">
                <Form.Label>Persyaratan</Form.Label>
              </Form.Group>
              <hr />
              <Form.Group className="mb-3 mt-3">
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={jenis_kelamin}
                />
              </Form.Group>
              <Form.Group className="mb-3 mt-3">
                <Form.Label>Usia</Form.Label>
                <Form.Control type="text" placeholder="" value={usia} />
              </Form.Group>
              <Form.Group className="mb-3 mt-3">
                <Form.Label>Lulusan</Form.Label>
                <Form.Control type="text" placeholder="" value={lulusan} />
              </Form.Group>
              <Form.Group className="mb-3 mt-3">
                <Form.Label>Tinggi Badan</Form.Label>
                <Form.Control type="text" placeholder="" value={tinggi_badan} />
              </Form.Group>
              <Form.Group className="mb-3 mt-3">
                <Form.Label>Skill</Form.Label>
                <Form.Control type="text" placeholder="" value={skill} />
              </Form.Group>
              <Form.Group className="mb-3 mt-3">
                <Form.Label>Published</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={nama_perusahaan}
                />
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="container">
          <div className="container">
            <h1 className="font text-center blue">
              New <span className="orange">Post Job</span>
            </h1>
            <hr />
            <Form className="border border-warning  rounded p-5 mt-5 shadow p-3 mb-5 bg-body">
              <Form.Group className="mb-3 mt-3">
                <Form.Label>Judul Pekerjaan</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={judul_pekerjaan1}
                  onChange={(e) => setJudul1(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2 mt-3">
                <Form.Label>Gaji</Form.Label>
              </Form.Group>
              <Form.Select
                className="mb-3"
                value={gaji1}
                onChange={(e) => setGaji1(e.target.value)}
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
                value={tunjangan1}
                onChange={(e) => setTunjangan1(e.target.value)}
              >
                <option>-</option>
                <option value="BPJS"> BPJS</option>
                <option value="THT">THT</option>
                <option value="BPJS & THT">BPJS & THT</option>
              </Form.Select>
              <Form.Group className="mb-3 mt-3">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  min="0"
                  max="200"
                  placeholder=""
                  value={quantity1}
                  onChange={(e) => setQuantity1(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3 mt-3 orange font">
                <Form.Label>Persyaratan</Form.Label>
              </Form.Group>
              <hr />
              <Form.Group className="mb-3 mt-3">
                <Form.Label>Jenis Kelamin</Form.Label>
                <div className="blue mx-4">
                  <input
                    type="radio"
                    name="jenis_kelamin1"
                    value="Laki-laki"
                    onChange={(e) => setJenisKelamin1(e.target.value)}
                  />
                  <span className="mx-3">Laki-laki</span>
                  <input
                    type="radio"
                    name="jenis_kelamin1"
                    value="Wanita"
                    onChange={(e) => setJenisKelamin1(e.target.value)}
                  />
                  <span className="mx-3">Wanita</span>

                  <input
                    type="radio"
                    name="jenis_kelamin1"
                    value="Laki-laki dan Wanita"
                    onChange={(e) => setJenisKelamin1(e.target.value)}
                  />
                  <span className="mx-3">Laki-laki dan Wanita</span>
                </div>
              </Form.Group>
              <Form.Group className="mb-3 mt-3">
                <Form.Label>Usia</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={usia1}
                  onChange={(e) => setUsia1(e.target.value)}
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
                <Form.Label>Tinggi Badan</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={tinggi_badan1}
                  onChange={(e) => setTinggiBadan1(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3 mt-3">
                <Form.Label>Skill</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={skill1}
                  onChange={(e) => setSkill1(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3 mt-3">
                <Form.Label>Published</Form.Label>
                <Form.Control type="text" placeholder="" value={profile} />
              </Form.Group>
              <div className="text-end mt-4">
                <button
                  className="btn btn-warning me-2"
                  onClick={() => navigate("/profilecompany")}
                >
                  Cancel
                </button>
                <Link to="/profilecompany">
                  <button
                    className="btn btn-danger me-2"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </Link>
                <Link to="/profilecompany">
                  <button className="btn btn-info" onClick={handleUpdate}>
                    Update
                  </button>
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPostAdmin;
