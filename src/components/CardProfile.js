/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import sample_image from "../assets/images/sample_images.jpeg";
import { IoMdCreate, IoIosFiling, IoIosListBox } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Card({ posts }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mb-5">
        <div className="ms-2">
          <figure className="text-center">
            <img src={sample_image} className="img-thumbnail rounded" />
            <h5 className="orange mt-3 border border-warning py-2 rounded">
              {posts.judul_pekerjaan}
            </h5>
            <p className="text-muted">Published by {posts.nama_perusahaan}</p>
          </figure>
        </div>
        <div className="ms-3">
          <div className="text-start">
            <h5 className="orange">
              <IoIosFiling className="icon me-2" />
              Description
            </h5>
            <hr />
            <div className="fw-bolder">
              Gaji : <br />
              <div className="text-muted fw-normal my-2">{posts.gaji}</div>
            </div>

            <div className="fw-bolder">
              Tunjangan : <br />
              <div className="text-muted fw-normal my-2">{posts.tunjangan}</div>
            </div>

            <div className="fw-bolder">
              Quantity :<br />
              <div className="text-muted fw-normal my-2">
                {posts.quantity} Orang
              </div>
            </div>

            <h5 className="orange">
              <IoIosListBox className="icon my-2 me-1" />
              Persyaratan :
            </h5>
            <hr />
            <div className="fw-bolder">
              Jenis Kelamin :<br />
              <div className="text-muted fw-normal my-2">
                {posts.jenis_kelamin}
              </div>
            </div>

            <div className="fw-bolder">
              Usia :<br />
              <div className="text-muted fw-normal my-2">{posts.usia}</div>
            </div>

            <div className="fw-bolder">
              Lulusan : <br />
              <div className="text-muted fw-normal my-2">{posts.lulusan}</div>
            </div>

            <div className="fw-bolder">
              Skill : <br />
              <div className="text-muted fw-normal my-2">{posts.skill}</div>
            </div>
            <hr />
            <div className="text-center">
              <button
                className="btn bg-orange-btn bg-orange-hover-btn mt-3"
                onClick={() => navigate("/editpostadmin/" + posts.id)}
              >
                <IoMdCreate className="icon me-3" />
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
