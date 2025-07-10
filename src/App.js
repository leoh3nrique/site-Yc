import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Legado from "./pages/Legado/Legado";
import Unidades from "./pages/Unidades/Unidades";

export const goToPage = (navigate, page) => {
  navigate(`/${page}`);
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quemsomos" element={<AboutUs />} />
      <Route path="/legado" element={<Legado />} />
      <Route path="/unidades" element={<Unidades />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  );
}

export default App;
