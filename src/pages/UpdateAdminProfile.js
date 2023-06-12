import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import supabase from "../config/supabaseClientAdmin";
import Header from "../components/HeaderAdmin";

function CreateAdminProfile() {
  const [nama, setNama] = useState();
  const [alamat, setAlamat] = useState();
  const [nama1, setNama1] = useState();
  const [alamat1, setAlamat1] = useState();

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
      setAlamat(data?.alamat);
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

  function handleNama(e) {
    setNama(e.target.value);
  }
  function handleAlamat(e) {
    setAlamat(e.target.value);
  }
  function handleNama1(e) {
    setNama1(e.target.value);
  }
  function handleAlamat1(e) {
    setAlamat1(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { data } = await supabase
      .from("profile")
      .update({
        nama: nama1,
        alamat: alamat1,
      })
      .eq("user_id", session.user.id);

    navigate("/profilecompany");
  }

  return (
    <>
      <div className="sticky-top">
        <Header />
      </div>
      <div className="container">
        <div className="container mt-5">
          <h1 className="font text-center blue">
            Update <span className="orange">Profile Admin</span>
          </h1>
          <hr />
          <div className="row">
            <div className="col-lg-6">
              <h2 className="orange text-center mt-2">Your Profile</h2>
              <Form
                className="border border-warning  rounded p-5 mt-5 shadow p-3 mb-5 bg-body"
                style={{ height: "310px" }}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nama Perusahaan</Form.Label>
                  <Form.Control
                    className="orange"
                    type="email"
                    value={nama}
                    onChange={handleNama}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Alamat</Form.Label>
                  <Form.Control
                    className="orange"
                    type="text"
                    value={alamat}
                    onChange={handleAlamat}
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="col-lg-6">
              <h2 className="blue text-center mt-2">New Profile</h2>
              <Form className="border border-warning  rounded p-5 mt-5 shadow p-3 mb-5 bg-body">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nama Perusahaan</Form.Label>
                  <Form.Control
                    type="email"
                    value={nama1}
                    onChange={handleNama1}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Alamat</Form.Label>
                  <Form.Control
                    type="text"
                    value={alamat1}
                    onChange={handleAlamat1}
                  />
                </Form.Group>
                <button
                  className="btn btn-danger me-3"
                  onClick={() => navigate("/profilecompany")}
                >
                  Cancel
                </button>
                <button className="btn btn-primary me-5" onClick={handleSubmit}>
                  Konfirmasi
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAdminProfile;
