import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Info() {
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
      <div className="sticky-top">
        <Header />
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4 me-lg-1 ms-lg-5 mb-5">
            <h5 className="orange">Informasi ILOKA</h5>
            <br />
            <div>1. Bagaimana Melamar Kerja di ILOKA?</div>
            <br />
            <div>2. Mengapa Harus Memilih ILOKA?</div>
          </div>
          <div className="col-lg-7">
            <h5 className="text-center orange">Status Lamaran Kerja</h5>
            <hr />
            <div className="shadow px-3 py-3 mt-5">
              <h4>PT Victory</h4>
              <hr />
              <Tabs className="mb-3" justify>
                <Tab eventKey="Status Lamaran" title="Status Lamaran">
                  <p className="info">Diterima</p>
                </Tab>
                <Tab eventKey="Psikotest" title="Psikotest">
                  <p className="info">17 pril 2023</p>
                </Tab>
                <Tab eventKey="Interview" title="Interview">
                  <p className="info">23 April 2023</p>
                </Tab>
                <Tab eventKey="Status Diterima" title="Status Diterima">
                  <p className="info">Belum Diterima</p>
                </Tab>
              </Tabs>
            </div>
            <div className="shadow px-3 py-3 mt-5">
              <h4>PT Indotech</h4>
              <hr />
              <Tabs className="mb-3" justify>
                <Tab eventKey="Status Lamaran" title="Status Lamaran">
                  <p className="info">Diterima</p>
                </Tab>
                <Tab eventKey="Psikotest" title="Psikotest">
                  <p className="info">17 pril 2023</p>
                </Tab>
                <Tab eventKey="Interview" title="Interview">
                  <p className="info">23 April 2023</p>
                </Tab>
                <Tab eventKey="Status Diterima" title="Status Diterima">
                  <p className="info">Belum Diterima</p>
                </Tab>
              </Tabs>
            </div>
            <div className="shadow px-3 py-3 mt-5">
              <h4>PT Haritama</h4>
              <hr />
              <Tabs className="mb-3" justify>
                <Tab eventKey="Status Lamaran" title="Status Lamaran">
                  <p className="info">Diterima</p>
                </Tab>
                <Tab eventKey="Psikotest" title="Psikotest">
                  <p className="info">17 pril 2023</p>
                </Tab>
                <Tab eventKey="Interview" title="Interview">
                  <p className="info">23 April 2023</p>
                </Tab>
                <Tab eventKey="Status Diterima" title="Status Diterima">
                  <p className="info">Belum Diterima</p>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
