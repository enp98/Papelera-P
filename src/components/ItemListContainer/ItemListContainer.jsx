
import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import Item from "../Item/Item";
import Loader from "../Loader/Loader.jsx";
import { fetchData } from "../../fetchData";
import { useParams } from "react-router-dom"; 

function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [todosLosProductos, setTodosLosProductos] = useState(null);
  const { categoryId } = useParams(); 

  
  useEffect(() => {
    fetchData()
        .then(response => {
            console.log("Productos recibidos:", response); 
            setTodosLosProductos(response);
            setTimeout(() => setLoading(false), 500);
        })
        .catch(err => console.error("Error en fetchData:", err));
}, [categoryId]);

  return (
    loading ? <Loader /> :
    <div className="container-products">
      {todosLosProductos?.filter(el => !categoryId || el.category === categoryId)
        .map(el => <Item key={el.id} products={el} />)}
    </div>
  );
}

export default ItemListContainer;