import {Navbar} from "./components/Navbar";
import Banner from "./components/Banner";
import { TopBanner } from "./components/TopBanner";
import Product from "./components/Product";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="App">
    <Navbar />
    <TopBanner />
    <Banner />
    <Product />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
