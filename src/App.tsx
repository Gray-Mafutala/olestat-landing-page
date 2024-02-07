import Footer from "./components/Footer";
import Header from "./components/Header";
import GreatCustomer from "./components/Sections/GreatCustomer";
import Hero from "./components/Sections/Hero";
import NewsLetter from "./components/Sections/NewsLetter";
import Testimonials from "./components/Sections/Testimonials";
import TheBiggestBusiness from "./components/Sections/TheBiggestBusiness";
import TheFutureOfBusiness from "./components/Sections/TheFutureOfBusiness";
import TrustedCompanies from "./components/Sections/TrustedCompanies";
import WeOffer from "./components/Sections/WeOffer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedCompanies />
        <WeOffer />
        <GreatCustomer />
        <TheBiggestBusiness />
        <TheFutureOfBusiness />
        <Testimonials />
        <NewsLetter />
        <Footer />
      </main>
    </>
  );
};

export default App;
