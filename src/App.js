import "./App.css";
import { Route, Routes } from "react-router-dom";  
import ListadoPeliculas from "./components/ListadoPeliculas/ListadoPeliculas";
import DetallePelicula from "./components/DetallePelicula/DetallePelicula";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<ListadoPeliculas></ListadoPeliculas>}></Route>
          <Route path="/detalles/:id" element={<DetallePelicula></DetallePelicula>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
