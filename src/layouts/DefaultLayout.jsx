import { Outlet, NavLink } from "react-router-dom";

export default function DefaultLayout() {
  // Altezza stimata di header e footer (Bootstrap navbar ≈ 56px)
  const HEADER_H = 56; // se la tua navbar è più alta, aumenta questo valore
  const FOOTER_H = 56; // se il footer è più alto, aumenta questo valore

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* HEADER fisso */}
      <header
        className="navbar navbar-expand-md navbar-light bg-white border-bottom sticky-top"
        style={{ height: HEADER_H }}
      >
        <div className="container-fluid">
          <button
            className="btn btn-outline-secondary d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#appSidebar"
            aria-controls="appSidebar"
            aria-label="Apri menu"
          >
            ☰
          </button>
          <span className="navbar-brand ms-2 ms-md-0 fw-semibold">
            Widgets Dashboard
          </span>
        </div>
      </header>

      {/* AREA CENTRALE: altezza fissa, scroll interno su sidebar e main */}
      <div
        className="d-flex overflow-hidden"
        style={{ height: `calc(100vh - ${HEADER_H}px - ${FOOTER_H}px)` }}
      >
        {/* SIDEBAR desktop (scroll interno) */}
        <aside
          className="d-none d-md-flex flex-column flex-shrink-0 border-end bg-light"
          style={{ width: 240 }}
        >
          <div className="d-flex align-items-center hstack gap-2 px-3 py-3 border-bottom">
            <span className="fw-semibold">Menu</span>
          </div>

          <div className="flex-grow-1 overflow-auto">
            <nav className="nav flex-column py-3">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link ${
                    isActive ? "active fw-semibold text-primary" : ""
                  }`
                }
              >
                🏠 Dashboard
              </NavLink>

              <NavLink
                to="/recipes"
                className={({ isActive }) =>
                  `nav-link ${
                    isActive ? "active fw-semibold text-primary" : ""
                  }`
                }
              >
                🍝 Ricette
              </NavLink>

              <NavLink
                to="/news"
                className={({ isActive }) =>
                  `nav-link ${
                    isActive ? "active fw-semibold text-primary" : ""
                  }`
                }
              >
                📰 News
              </NavLink>

              <NavLink
                to="/todos"
                className={({ isActive }) =>
                  `nav-link ${
                    isActive ? "active fw-semibold text-primary" : ""
                  }`
                }
              >
                ✅ To-Do
              </NavLink>

              <NavLink
                to="/quotes"
                className={({ isActive }) =>
                  `nav-link ${
                    isActive ? "active fw-semibold text-primary" : ""
                  }`
                }
              >
                💡 Quotes
              </NavLink>
            </nav>
          </div>

          <div className="mt-auto px-3 py-3 small text-muted border-top">
            v1.0 • Sidebar
          </div>
        </aside>

        {/* OFFCANVAS mobile (opzionale) */}
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="appSidebar"
          aria-labelledby="appSidebarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="appSidebarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Chiudi"
            ></button>
          </div>
          <div className="offcanvas-body d-flex flex-column">
            <nav className="nav flex-column">
              <NavLink
                to="/"
                end
                className="nav-link"
                data-bs-dismiss="offcanvas"
              >
                🏠 Dashboard
              </NavLink>
              <NavLink
                to="/recipes"
                className="nav-link"
                data-bs-dismiss="offcanvas"
              >
                🍝 Ricette
              </NavLink>
              <NavLink
                to="/news"
                className="nav-link"
                data-bs-dismiss="offcanvas"
              >
                📰 News
              </NavLink>
              <NavLink
                to="/todos"
                className="nav-link"
                data-bs-dismiss="offcanvas"
              >
                ✅ To-Do
              </NavLink>
              <NavLink
                to="/quotes"
                className="nav-link"
                data-bs-dismiss="offcanvas"
              >
                💡 Quotes
              </NavLink>
            </nav>
            <div className="mt-auto small text-muted">v1.0 • Sidebar</div>
          </div>
        </div>

        {/* MAIN scrollabile */}
        <main className="flex-grow-1 overflow-auto px-3 px-md-4 py-4">
          <Outlet />
        </main>
      </div>

      {/* FOOTER fisso */}
      <footer
        className="border-top bg-white d-flex align-items-center"
        style={{ height: FOOTER_H }}
      >
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center py-2 px-3 px-md-4 small text-muted">
            <span>Powered by DummyJSON • widgets-dashboard</span>
            <a
              className="link-secondary"
              href="https://dummyjson.com/docs"
              target="_blank"
              rel="noreferrer"
            >
              API Docs
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
