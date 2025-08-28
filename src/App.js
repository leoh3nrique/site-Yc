import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/Cultura/Cultura";
import Contato from "./pages/Contato/Contato";
import TrabalheConosco from "./pages/TrabalheConosco/TrabalheConosco";
import Servicos from "./pages/Servicos/Servicos";
import ScrollToTop from "./hooks/ScrollToTop";
import AvisoPrivacidade from "./pages/AvisoPrivacidade/AvisoPrivacidade";

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
          <Route path="/aviso-de-privacidade" element={<AvisoPrivacidade />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
