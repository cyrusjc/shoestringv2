import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
// import Contact from "./pages/Contact/Contact";
import Menu from "./pages/Menu/Menu";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
