import Experties from "./Components/Experties/Experties";
import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio";
import Works from "./Components/Works/Works";
import Hero from "./Components/hero/Hero";
import Footer from "./Footer/Footer";
import css from "./styles/app.module.scss";

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
   <Header/>
   <Hero/>
   <Experties/>
   <Works/>
   <Portfolio/>
   <Footer/>
  </div>
};

export default App;
