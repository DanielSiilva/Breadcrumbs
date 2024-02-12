import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(products);
        const sliceProducts = data.products.slice(0, 6);
        setProducts(sliceProducts);
      });
  }, []);

  return (
    <div>
      <h2> Home Page</h2>
      <div>
        {products?.map((item) => (
          <div key={item.id}>
            <Link to={"/products/${item.id"} />
            <img src={item.thumbnail} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

      <Link to="/products">
        <button> Visualizar dos os produtos</button>
      </Link>
    </div>
  );
}
