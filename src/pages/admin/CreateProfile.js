import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import supabase from "../../config/supabaseClientAdmin";
import Header from "../../components/HeaderAdmin";

function CreateProfile() {
  const [nama, setNama] = useState();
  const [alamat, setAlamat] = useState();

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

  async function handleSubmit(e) {
    e.preventDefault();

    const { data } = await supabase.from("profile").insert([
      {
        nama: nama,
        alamat: alamat,
        user_id: session.user.id,
      },
    ]);

    navigate("/profilecompany");
  }

  return (
    <>
      <div className="sticky-top">
        <Header />
      </div>
      <div className="container w-50">
        <Form className="border border-warning  rounded p-5 mt-5 shadow p-3 mb-5 bg-body">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nama Perusahaan</Form.Label>
            <Form.Control type="email" value={nama} onChange={handleNama} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Alamat</Form.Label>
            <Form.Control type="text" value={alamat} onChange={handleAlamat} />
          </Form.Group>
          <button className="btn btn-primary me-5" onClick={handleSubmit}>
            Konfirmasi
          </button>
        </Form>
      </div>
    </>
  );
}

export default CreateProfile;
