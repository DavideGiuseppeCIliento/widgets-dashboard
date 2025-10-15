// # IMPORT DEPENDENCES
import { Outlet, NavLink } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* Topbar */}
      <header className="navbar navbar-expand-md navbar-light bg-white border-bottom sticky-top">
        <div className="container-fluid">
          {/* Toggle sidebar (mobile) */}
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

          <div className="ms-auto d-flex align-items-center gap-2">
            <button className="btn btn-outline-secondary">
              ⟳ <span className="d-none d-sm-inline">Aggiorna tutto</span>
            </button>
          </div>
        </div>
      </header>

      {/* Corpo pagina: sidebar + contenuto */}
      <div className="container-fluid flex-grow-1">
        <div className="row">
          {/* Sidebar desktop */}
          <aside className="d-none d-md-block col-md-3 col-lg-2 border-end bg-light">
            <div className="position-sticky top-0 min-vh-100">
              <div className="d-flex align-items-center hstack gap-2 px-3 py-3 border-bottom">
                <span className="fw-semibold">Menu</span>
              </div>

              {/* MENU */}
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

              <div className="mt-auto px-3 py-3 small text-muted border-top">
                v1.0 • Sidebar
              </div>
            </div>
          </aside>

          {/* Offcanvas sidebar (mobile) */}
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
                <a className="nav-link" href="#" data-bs-dismiss="offcanvas">
                  🏠 Dashboard
                </a>
                <a className="nav-link" href="#" data-bs-dismiss="offcanvas">
                  🍝 Ricette
                </a>
                <a className="nav-link" href="#" data-bs-dismiss="offcanvas">
                  📰 News
                </a>
                <a className="nav-link" href="#" data-bs-dismiss="offcanvas">
                  ✅ To-Do
                </a>
                <a className="nav-link" href="#" data-bs-dismiss="offcanvas">
                  💡 Quotes
                </a>
              </nav>

              <div className="mt-auto small text-muted">v1.0 • Sidebar</div>
            </div>
          </div>

          {/* Content */}
          <main className="col-md-9 col-lg-10 ms-sm-auto px-3 px-md-4 py-4">
            {/* === Sostituisci con <Outlet /> o i tuoi componenti === */}
            <Outlet />
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-top bg-white">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center py-3 px-3 px-md-4 small text-muted">
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
