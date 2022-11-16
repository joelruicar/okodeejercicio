import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListadoPeliculas from "./components/ListadoPeliculas";
import DetallePelicula from "./components/DetallePelicula"
function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<ListadoPeliculas></ListadoPeliculas>}></Route>
          <Route path="/detalles" element={<DetallePelicula></DetallePelicula>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
