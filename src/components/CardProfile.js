import React from "react";
import sample_image from "../assets/images/sample_images.jpeg";
import { IoMdCreate, IoIosFiling, IoIosListBox } from "react-icons/io";

function Card({ posts }) {
  return (
    <div>
      <div className="row mb-5">
        <div className="col-5 ms-2 border-end">
          <figure className="text-center">
            <img src={sample_image} className="img-thumbnail rounded" />
            <h5 className="orange mt-3">{posts.judul_pekerjaan}</h5>
            <p className="text-muted">Published by {posts.nama_perusahaan}</p>
            <button className="btn bg-orange-btn bg-orange-hover-btn mt-2">
              <IoMdCreate className="icon me-3" />
              Edit
            </button>
          </figure>
        </div>
        <div className="col-6 ms-3">
          <div className="text-start">
            <h5 className="orange">
              <IoIosFiling className="icon me-3" />
              Description
            </h5>
            <hr />
            <>Gaji : {posts.gaji} </>
            <br />
            <br />
            <>Tunjangan : {posts.tunjangan} </>
            <br />
            <br />
            <>Quantity : {posts.quantity}</>
            <br />
            <br />
            <h5 className="orange">
              <IoIosListBox className="icon me-3" />
              Persyaratan :{" "}
            </h5>
            <hr />
            <>Jenis Kelamin : {posts.jenis_kelamin}</>
            <br />
            <br />
            <>Usia : {posts.usia}</>
            <br />
            <br />
            <>Lulusan : {posts.lulusan}</>
            <br />
            <br />
            <>Skill : {posts.skill}</>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
