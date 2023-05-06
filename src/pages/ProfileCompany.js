import React from "react";
import Table from "react-bootstrap/Table";
import LogoCompany from "../assets/images/logocompany.jpeg";
import Card from "../components/CardProfile";

function ProfileCompany() {
  return (
    <div className="container mt-3">
      <div className="text-center shadow p-3">
        <img
          className=""
          src={LogoCompany}
          style={{ width: "100px", height: "100px" }}
          alt=""
        />
        <h5 className="orange">PT Boyang Industrial</h5>
        <hr />
        <p className="text-muted">
          Jalan Jendral Ahmad Yani No.4-A, Kandang Gampang, Kec. Purbalingga,
          Kabupaten Purbalingga, Jawa Tengah 53312
        </p>
        <div className="d-flex justify-content-end">
          <button className="btn btn-info">edit</button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-6 me-3">
          <h5 className="orange text-center">Riwayat Lowongan Pekerjaan</h5>
          <hr />
          <div className="shadow">
            <Card />
          </div>
          <div className="shadow">
            <Card />
          </div>
          <div className="shadow">
            <Card />
          </div>
        </div>
        <div className="col-5 border-start">
          <h5 className="orange text-center">Daftar Pelamar Kerja</h5>
          <hr />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Berkas</th>
                <th>Confirm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Indra Lasmana</td>
                <td>
                  <button className="btn btn-success me-2">Unduh</button>
                </td>
                <td>
                  <button className="btn btn-success me-2">YES</button>
                  <button className="btn btn-danger">NO</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ratih Purwati</td>
                <td>
                  <button className="btn btn-success me-2">Unduh</button>
                </td>
                <td>
                  <button className="btn btn-success me-2">YES</button>
                  <button className="btn btn-danger">NO</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ProfileCompany;
