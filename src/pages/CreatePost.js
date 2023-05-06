import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CreatePost() {
  return (
    <div className="container mt-5" style={{ width: "800px" }}>
      <h1 className="font text-center blue">
        Create <span className="orange">New Job</span>
      </h1>
      <hr />
      <Form className="border border-warning  rounded p-5 mt-5 shadow p-3 mb-5 bg-body">
        <Form.Group className="mb-3 mt-3">
          <Form.Label>Judul Pekerjaan</Form.Label>
          <Form.Control type="Judul Pekerjaan" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-2 mt-3">
          <Form.Label>Gaji</Form.Label>
        </Form.Group>
        <Form.Select className="mb-3">
          <option>-</option>
          <option value="1">1.000.000 - 2.000.000</option>
          <option value="2">3.000.000 - 5.000.000</option>
        </Form.Select>
        <Form.Group className="mb-2 mt-3">
          <Form.Label>Tunjangan</Form.Label>
        </Form.Group>
        <Form.Select className="mb-3">
          <option>-</option>
          <option value="1">BPJS</option>
          <option value="2">THT</option>
        </Form.Select>
        <Form.Group className="mb-3 mt-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="Quantity" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3 mt-3">
          <Form.Label>Persyaratan</Form.Label>
        </Form.Group>
        <hr />
        <Form.Group className="mb-3 mt-3">
          <Form.Label>Jenis Kelamin</Form.Label>
          <Form.Control type="Jenis Kelamin" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3 mt-3">
          <Form.Label>Usia</Form.Label>
          <Form.Control type="Usia" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3 mt-3">
          <Form.Label>Lulusan</Form.Label>
          <Form.Control type="Lulusan" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3 mt-3">
          <Form.Label>Tinggi Badan</Form.Label>
          <Form.Control type="Tinggi Badan" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3 mt-3">
          <Form.Label>Pengalaman Kerja</Form.Label>
          <Form.Control type="Pengalaman Kerja" placeholder="" />
        </Form.Group>
        <div className="mb-3 mt-5 d-flex justify-content-end">
          <Button type="submit">Submit form</Button>
        </div>
      </Form>
    </div>
  );
}

export default CreatePost;
