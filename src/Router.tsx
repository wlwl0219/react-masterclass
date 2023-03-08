import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./screens/About";
import Header from "./screens/components/Header";
import Home from "./screens/Home";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
