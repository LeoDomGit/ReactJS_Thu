import "./App.css";
import "bootstrap";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/:id" element={<Home />} /> */}
          <Route path="/tin-tuc" element={<Notfound />} />
          <Route path="/cua-hang" element={<Shop />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/gio-hang" element={<ShoppingCart />} />
          <Route path="/thanh-toan" element={<Checkout />} />
          <Route path="/not-found" element={<Notfound />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
