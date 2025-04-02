
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; 
import { fetchData } from "../../fetchData";
import Loader from "../Loader/Loader.jsx";

function ItemDetail() {
    const { productId } = useParams(); 
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState(null);
    const [contador, setContador] = useState(1);

    function agregarAlCarrito(prod) {
        const nuevoProducto = { ...prod, cantidad: contador };
        console.log("Vas a agregar", nuevoProducto);
        setContador(1);
    }

    useEffect(() => {
        fetchData()
            .then(response => {
                const productoAMostrar = response.find(el => el.id === parseInt(productId));
                setProducto(productoAMostrar);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, [productId]); 
    

    return (
        loading ? <Loader /> :
        producto ? (
            <div className="card p-4">
                <h3 className="card-header">{producto.name}</h3>
                <div className="card-body">
                    <h5>Precio: <b>${producto.price}</b></h5>
                    <h5>Categoría: <b>{producto.category.toUpperCase()}</b></h5>
                    <p><b>{producto.descripcion}</b></p>
                    <p>Quedan <b>{producto.stock}</b> disponibles</p>
                    <ItemCount stock={producto.stock} contador={contador} setContador={setContador} />
                    <button className="btn btn-secondary my-2" onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
                    <Link to="/"><button className="btn btn-secondary my-2">Volver al inicio</button></Link>
                </div>
            </div>
        ) : <p>Producto no encontrado con el id {productId}</p>
    );
}

export default ItemDetail;