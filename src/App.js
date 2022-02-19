import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Solutions from "./component/Solutions";
import WhyUs from "./component/WhyUs";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Solutions/>
      <WhyUs/>
      <Footer/>
    </div>
  );
}

export default App;
