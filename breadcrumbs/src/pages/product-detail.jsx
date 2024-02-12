import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ProductDetail() {
  const { id } = useParams();

  const [products, setProducts] = useState(null);

  console.log("detalhes", products);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [id]);

  return (
    <div>
      <h1> detalhes do produto {products?.title}</h1>

      {products ? (
        <div>
          <img src={products.thumbnail} />
          <h3>product.title</h3>
          <h3> ${products.price}</h3>
          <p>{products.description}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}
