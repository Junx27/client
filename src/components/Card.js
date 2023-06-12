/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import sample_image from "../assets/images/sample_images.jpeg";
import { IoIosCloudUpload, IoIosFiling, IoIosListBox } from "react-icons/io";

function Card({ posts }) {
  return (
    <div>
      <div className="mb-5">
        <div className=" ms-2">
          <figure className="">
            <img src={sample_image} className="img-thumbnail rounded" />
            <img src={sample_image} className="img-thumbnail rounded mt-2" />
            <h5 className="orange mt-3 border border-warning rounded py-2">
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
            <div className="fw-bold">
              Gaji :{" "}
              <div className="text-muted my-2 fw-normal">{posts.gaji}</div>
            </div>

            <div className="fw-bold">
              Tunjangan :{" "}
              <div className="text-muted my-2 fw-normal">{posts.tunjangan}</div>
            </div>

            <div className="fw-bold">
              Quantity :{" "}
              <div className="text-muted my-2 fw-normal mb-5">
                {posts.quantity} Orang
              </div>
            </div>

            <h5 className="orange">
              <IoIosListBox className="icon me-2 fw-normal" />
              Persyaratan :{" "}
            </h5>
            <hr />
            <div className="fw-bold">
              Jenis Kelamin :{" "}
              <div className="text-muted my-2 fw-normal">
                {posts.jenis_kelamin}
              </div>
            </div>

            <div className="fw-bold">
              Usia :{" "}
              <div className="text-muted my-2 fw-normal">{posts.usia}</div>
            </div>

            <div className="fw-bold">
              Lulusan :{" "}
              <div className="text-muted my-2 fw-normal">{posts.lulusan}</div>
            </div>
            <div className="fw-bold">
              Skill :{" "}
              <div className="text-muted my-2 fw-normal">{posts.skill}</div>
            </div>
            <hr />
            <div className="mx-auto text-center mt-4">
              <button className="btn bg-orange-btn bg-orange-hover-btn">
                <IoIosCloudUpload className="icon me-3" />
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
