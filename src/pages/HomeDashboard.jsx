// # IMPORT HOOKS
import useRequest from "../hooks/useRequest";

// --- RANDOMIZE QUOTES
function randomIndex(length) {
  return Math.floor(Math.random() * length);
}
export default function HomeDashboard() {
  const { news, recipes, quotes } = useRequest();
  const index = randomIndex(quotes.length);
  // console.log(news);
  console.log(quotes);
  return (
    <>
      {/* QUOTE */}
      <div className="container p-5">
        <h3 className="mb-3">Citazione del giorno</h3>
        <div className="row">
          <div className="col fst-italic">
            {quotes && quotes.length > 0 ? (
              <em>{quotes[index].quote}</em>
            ) : (
              "Caricamento citazione..."
            )}
          </div>
        </div>
      </div>

      {/* NEWS */}
      <div className="container border p-5 ">
        <h3 className="mb-3">Ultime Notizie</h3>
        <div className="row">
          {news.slice(0, 3).map((n) => (
            <div key={n.id} className="col">
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title mb-2">{n.title}</h5>
                  <p className="card-text flex-grow-1">{`${n.body.slice(
                    0,
                    90
                  )}...`}</p>
                  <a
                    href="#"
                    className="btn btn-primary mt-auto align-self-start"
                  >
                    Leggi di Più
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RICETTE */}
      <div className="container mt-5 border p-5">
        <h3 className="mb-3">Ultime Ricette</h3>
        <div className="row">
          {recipes.slice(0, 3).map((r) => (
            <div key={r.id} className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src={r.image} className="card-img-top" alt="Image"></img>
                <div className="card-body">
                  <h5 className="card-title">{r.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Difficulty: {r.difficulty}
                  </h6>
                  <p className="card-text">
                    <i className="bi bi-star-fill"></i> {r.rating}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
