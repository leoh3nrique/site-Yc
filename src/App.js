import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  ScrollRestoration,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contato from "./pages/Contato/Contato";
import TrabalheConosco from "./pages/TrabalheConosco/TrabalheConosco";
import Servicos from "./components/Servicos/Servicos";
import ScrollToTop from "./components/ScrollToTop";

export const goToPage = (navigate, page) => {
  navigate(`/${page}`);
};

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cultura" element={<AboutUs />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
