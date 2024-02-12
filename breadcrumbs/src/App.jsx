import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { ProductListing } from "./pages/product-listing";
import { ProductDetail } from "./pages/product-detail";
import { BreadCrumbs } from "./components/breadcrumbs";

export function App() {
  return (
    <Router>
      <div className="app">
        <h1> Store</h1>
        <BreadCrumbs />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
