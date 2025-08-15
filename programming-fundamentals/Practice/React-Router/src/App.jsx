import "@picocss/pico/css/pico.min.css";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Nav from "./pages/Nav";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=":productId" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
