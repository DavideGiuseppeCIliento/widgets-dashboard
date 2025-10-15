export default function Card({ title, likes, tags, views }) {
  return (
    <div className="col-12 col-md-6 col-lg-3 my-3 d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Visualizzazioni: {views}
          </h6>
          <p className="card-text">
            <i className="bi bi-heart-fill"></i> {likes}
          </p>
          {tags.map((t, i) => (
            <span key={i} className="badge rounded-pill text-bg-primary mx-1">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
