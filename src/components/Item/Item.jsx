import { Link } from "react-router-dom"; 
import "./Item.css";

function Item({ products }) {
  const { id, name, price, stock } = products;
  
  function agregarAlCarrito(prod) {
    const nuevoProducto = { ...prod, cantidad: 1 };
  }
  
  return (
    <div className="card p-4">
      <h3 className="card-header">{name}</h3>
      <h5 className="card-body">Precio: ${price}</h5>
      <p>Quedan {stock} disponibles</p>
      <button className="btn btn-secondary my-2" onClick={() => agregarAlCarrito(products)}>Agregar al carrito</button>
      <Link to={`/product/${id}`}>
        <button className="btn btn-secondary my-2">Ver detalle</button>
      </Link>
    </div>
  );
}

export default Item;
