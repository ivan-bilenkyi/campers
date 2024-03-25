import './components/GlobalStyle.js'
import { Route, Routes } from 'react-router-dom';
import { lazy } from "react";
import { AppLayout } from "./components/AppLayout.jsx";
import "./index.css"

const HomePage = lazy(() => import('./pages/Home.jsx'));
const CatalogPage = lazy(() => import('./pages/Catalog.jsx'));
const FavoritePage = lazy(() => import('./pages/Favorite.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFound.jsx'));


function App() {



  return (

    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
