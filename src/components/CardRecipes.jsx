// # IMPORT DEPENDENCES
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CardRecipes({ title, image, difficulty, rating, id }) {
  const navigate = useNavigate();

  // --- GESTIONE REINDIRIZZAMENTO
  function onButtonClick() {
    navigate(`/recipes/${id}`);
  }

  return (
    <div className="col-12 col-md-6 col-lg-3 my-3 d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="Image"></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Difficulty: {difficulty}
          </h6>
          <p className="card-text">
            <i className="bi bi-star-fill"></i> {rating}
          </p>
          <button className="btn btn-primary mt-auto" onClick={onButtonClick}>
            Scopri di più
          </button>
        </div>
      </div>
    </div>
  );
}
