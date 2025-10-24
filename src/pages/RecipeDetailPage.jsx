// # IMPORT DEPENDENCES
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useRequest from "../hooks/useRequest";

// # IMPORT HOOKS
import { useState } from "react";

export default function RecipeDetailPage() {
  const { id } = useParams();
  const { loading, recipe, showRecipe } = useRequest();

  useEffect(() => {
    if (id) showRecipe(id);
  }, [id, showRecipe]);

  //   console.log(recipe);
  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Caricamento...</span>
        </div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="container py-5 text-center">
        <h2>Ricetta non trovata 😢</h2>
        <p>ID richiesto: {id}</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      {/* === TITOLO + IMMAGINE === */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="img-fluid rounded shadow-sm border"
          />
        </div>
        <div className="col-md-6">
          <h1 className="fw-bold mb-3">{recipe.name}</h1>
          <p className="text-muted mb-2">
            <i className="bi bi-geo-alt"></i> {recipe.cuisine}
          </p>
          <p className="mb-1">
            <strong>Difficoltà:</strong> {recipe.difficulty}
          </p>
          <p className="mb-1">
            <strong>Tempo totale:</strong>{" "}
            {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
          </p>
          <p className="mb-1">
            <strong>Porzioni:</strong> {recipe.servings}
          </p>
          <p className="mb-1">
            <strong>Calorie per porzione:</strong> {recipe.caloriesPerServing}{" "}
            kcal
          </p>
          <p className="mb-0">
            <strong>Valutazione:</strong>{" "}
            <span className="text-warning">{recipe.rating} ★</span> (
            {recipe.reviewCount} recensioni)
          </p>

          <div className="mt-3">
            {recipe.tags?.map((tag) => (
              <span key={tag} className="badge bg-secondary me-2">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <hr className="my-5" />

      {/* === SEZIONE INGREDIENTI + ISTRUZIONI === */}
      <div className="row gy-5">
        {/* Ingredienti */}
        <div className="col-md-5">
          <h4 className="fw-semibold mb-3">🧂 Ingredienti</h4>
          <ul className="list-group list-group-flush">
            {recipe.ingredients?.map((ing, index) => (
              <li key={index} className="list-group-item">
                {ing}
              </li>
            ))}
          </ul>
        </div>

        {/* Istruzioni */}
        <div className="col-md-7">
          <h4 className="fw-semibold mb-3">👩‍🍳 Istruzioni</h4>
          <ol className="list-group list-group-numbered">
            {recipe.instructions?.map((step, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">{step}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <hr className="my-5" />

      {/* === INFO EXTRA === */}
      <div className="text-center text-muted">
        <p className="mb-1">
          <strong>Tipo di pasto:</strong> {recipe.mealType?.join(", ")}
        </p>
        <small>ID utente autore: {recipe.userId}</small>
      </div>
    </div>
  );
}
