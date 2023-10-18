import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
