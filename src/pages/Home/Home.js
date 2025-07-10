import About from "../../components/About/About";
import WelcomeSection from "../../components/Apresentation/Apresentation";
import Carousel from "../../components/Carousel/Carousel";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

function Home() {
  return (
    <div>
      <Header />
      <WelcomeSection />
      <About />
      {/* <Carousel images={images} title="Conheça nossas unidades" /> */}
      <Footer />
    </div>
  );
}

export default Home;
