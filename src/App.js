import { useEffect, useState } from "react";
import "./styles.css";
export default function App() {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.mercadolibre.com/products/search?status=active&site_id=MLA&q=Samsung"
    )
      .then((result) => {
        return result.json();
      })
      .then((value) => {
        setDatos(value.results);
      });
  }, []);

  return (
    <div className="App">
      <h1>Consumiendo Api</h1>
      {console.log(datos)}
      {datos.map((e) => {
        return <h5>Nombre: {e.name}</h5>;
      })}
      <h2>Mercado Libre</h2>
    </div>
  );
}
