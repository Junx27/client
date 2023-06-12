import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiViewList, CiEdit } from "react-icons/ci";

function CardTest({ data }) {
  const navigate = useNavigate();
  return (
    <div>
      <h5 className="orange">{data.username}</h5>
      <button
        className="btn btn-warning"
        onClick={(e) => navigate("/" + data.id)}
      >
        <CiEdit className="icon me-2" /> Edit
      </button>
    </div>
  );
}

export default CardTest;
