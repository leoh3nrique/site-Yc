import About from "../../components/About/About";
import WelcomeSection from "../../components/Apresentation/Apresentation";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";


function Home() {

  return (
    <div>
      <Header />
      <WelcomeSection />
      <About />

      <Footer />
    </div>
  );
}

export default Home;
