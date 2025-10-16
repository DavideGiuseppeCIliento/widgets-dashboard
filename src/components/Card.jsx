// # IMPORT HOOKS
import { useEffect } from "react";
import useUser from "../hooks/useUser";

export default function Card({ title, likes, tags, views, idUser }) {
  const { userNews, RequestUserNews } = useUser();

  useEffect(() => {
    if (idUser) RequestUserNews(idUser); // ⬅️ niente fetch se manca l'id
  }, [idUser]);

  console.log("USER :", userNews);

  return (
    <div className="col-12 col-md-6 col-lg-3 my-3 d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Visualizzazioni: {views}
          </h6>

          <p className="card-text mb-2">
            <i className="bi bi-heart-fill me-1"></i> {likes}
          </p>

          <div className="mb-2">
            {Array.isArray(tags) &&
              tags.map((t, i) => (
                <span
                  key={i}
                  className="badge rounded-pill text-bg-primary me-1"
                >
                  {t}
                </span>
              ))}
          </div>

          <p className="card-text">
            <span className="text-body-secondary">Autore:</span>
            {userNews.lastName}
          </p>
        </div>
      </div>
    </div>
  );
}
