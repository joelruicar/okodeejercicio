import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import "./ListadoPeliculas.css"

const ListadoPeliculas = () => {
  const inputRef = useRef(null);
  const [films, setFilms] = useState([]);
  const [arrO, setArrO] = useState([]);
  const [oLfilms, setoLfilms] = useState([]);

  let arr = [];
  async function getAllFilms() {
    //React strict mode renderiza el componente 2 veces la primera vez

    //NPages parecia ser 718323 pero la API pone como máximo de página la 500
    for (let i = 1; i < 501; i++) {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=516be3b52cf7301c283cf075e21941e3&language=en-US&page=${i}`
      )
        // eslint-disable-next-line no-loop-func
        .then(async (response) => {
          const data = await response.json();
          const dataResults = await data.results;
          setFilms([...films, ...dataResults]);
          for (let i = 0; i < 20; i++) {
            let tempArr = [];
            const aux = { id: dataResults[i].id, title: dataResults[i].title };
            tempArr = [...tempArr, aux];
            //scope de tempArr
            arr = [...arr, ...tempArr];
            setArrO([...arr, ...tempArr]);
          }
        })
        .catch((e) => {
          console.log(e, "error");
        });
    }
  }

  function isPrefix(a, b) {
    //Caso base 1: String a vacia
    if (a.length === 0) return true;
    //Caso base 2: String b vacia y String a no vacia
    if (b.length === 0) return false;
    //Caso general: Ninguna String Vacia
    else {
      //Si no coinciden los caracteres
      if (a.charAt(0) !== b.charAt(0)) return false;
      else {
        //Si coinciden y es la ultima comparacion
        if (a.length === 1) return true;
        //Si coinciden pero aun quedan mas comparaciones
        else return isPrefix(a.substring(1), b.substring(1));
      }
    }
  }

  function handleClick() {
    const filteredFilms = arrO.filter((peli) => {
      if (inputRef.current.value === 0) {
        return null;
      } else if (
        isPrefix(inputRef.current.value, peli.title) &&
        !oLfilms.includes(peli)
      ) {
        return peli;
      }
    });
    setoLfilms(filteredFilms);
  }

  useEffect(() => {
    getAllFilms();
  }, []);

  return (
    <div className="contenedor">
      <h1>Listado de películas</h1>

      <input ref={inputRef}></input>
      <button onClick={handleClick}> click me</button>
      <li className="contenedor-datos">
        {oLfilms.map((elem, index) => (
          <Link to={"/detalles/" + elem.id}> {elem.title} </Link>
        ))}
      </li>
    </div>
  );
};
export default ListadoPeliculas;
