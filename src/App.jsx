// # IMPORT DEPENDENCES
import { BrowserRouter, Route, Routes } from "react-router-dom";

// # IMPORT CONTEXT

// # IMPORT LAYOUT
import DefaultLayout from "./layouts/DefaultLayout";

// # IMPORT PAGES
import HomeDashboard from "./pages/HomeDashboard";
import NewsPage from "./pages/NewsPage";
import QuotesPage from "./pages/QuotesPage";
import RecipesPage from "./pages/RecipesPage";
import TodosPage from "./pages/TodosPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomeDashboard />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/quotes" element={<QuotesPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/todos" element={<TodosPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
