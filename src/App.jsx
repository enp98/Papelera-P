
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import Contact from "./components/Contact/Contact.jsx"; 

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/product/:productId" element={<ItemDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<p>404 not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
