import Navbar from "../components/NavBar/navbar";
import Intro from "../components/Intro/intro";
import Work from "../components/Work/work";
import ScrollTop from "../components/backtotop";


function HomePage() {
  return (
    <div className="HomePage">
      <Navbar/>
      <Intro/>
      <Work/>
      <ScrollTop/>
    </div>
  );
}

export default HomePage;
