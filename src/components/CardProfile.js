import React from "react";
import sample_image from "../assets/images/sample_images.jpeg";

function Card() {
  return (
    <div>
      <div className="row mb-5">
        <div className="col-5 ms-2 border-end">
          <figure className="text-center">
            <img src={sample_image} className="img-thumbnail rounded" />
            <h5 className="orange mt-3">Mekanik/Helper</h5>
            <p className="text-muted">Publiished by PT Victory</p>
            <button className="btn bg-orange-btn bg-orange-hover-btn mt-2">
              Edit
            </button>
          </figure>
        </div>
        <div className="col-6 ms-3">
          <div className="text-start">
            <h5 className="orange">Description</h5>
            <hr />
            <>Gaji : </>
            <br />
            <br />
            <>Tunjangan : </>
            <br />
            <br />
            <>Quantity : </>
            <br />
            <br />
            <h5 className="orange">Persyaratan : </h5>
            <hr />
            <>Jenis Kelamin : </>
            <br />
            <br />
            <>Usia : </>
            <br />
            <br />
            <>Lulusan : </>
            <br />
            <br />
            <>Pengalaman Kerja : </>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
