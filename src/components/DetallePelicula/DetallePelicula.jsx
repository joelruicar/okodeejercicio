import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./DetallePelicula.css"

const DetallePelicula = () => {
  let idFilm = useParams();
  const [film, setFilm] = useState([]);

  useEffect(() => {
    fetch(
      `
      https://api.themoviedb.org/3/movie/${idFilm.id}?api_key=516be3b52cf7301c283cf075e21941e3&language=es`
    ).then(async (response) => {
      const data = await response.json();
      setFilm(data);
    });
  }, []);
  return (
    <div className="contenedor-datos">
      <Link to={"/"}> Volver a inicio </Link>
      <text>Es posible que pueda tardar unos segundos en mostrar la información</text>
      <div className="contenedor-datos2">
        <h1>{film.title}</h1>
        <li>Fecha de estreno: {film.release_date}</li>
        <li>Idioma original: {film.original_language}</li>
        <li>Overview: {film.overview}</li>
      </div>
    </div>
  );
};
export default DetallePelicula;
