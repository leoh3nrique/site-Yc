import About from "../../components/features/home/About/About";
import WelcomeSection from "../../components/features/home/WelcomeSection/WelcomeSection";
import PageLayout from "../../components/layout/PageLayout";

function Home() {
  return (
    <PageLayout>
      <WelcomeSection />
      <About />
    </PageLayout>
  );
}

export default Home;
