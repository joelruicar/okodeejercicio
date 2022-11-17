import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListadoPeliculas = () => {
  const [films, setFilms] = useState([]);

  let arr = [];
  //NPages parecia ser 718323 pero la API pone como máximo de página la 500
  async function getAllFilms() {
    //React strict mode renders the components twice
    // const response = await fetch(
    //   ` https://api.themoviedb.org/3/discover/movie?api_key=516be3b52cf7301c283cf075e21941e3&language=en-US&page=${1}
    //   `
    // );
    // const data = await response.json();
    // const nPages = await data.total_results;

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
            tempArr = [...tempArr, aux]
            //scope de tempArr
            arr = [...arr, ...tempArr];
            console.log(arr)
          }
        })
        .catch((e) => {
          console.log(e, "error");
        });
    }
  }



  const getSearch = (e) => {
    console.log(arr);

    for (const title in arr) {
        if (title.lastIndexOf(e) === 0) {
        return  <Link to={"/detalles/" + 446807}>Mas informacion </Link>
        
      }
    }

  };

  
  useEffect(() => {
    getAllFilms();
  }, []);

  return (
    <div>
      <h1>Listado de películas</h1>

      <input
        onChange={(e) => {
          getSearch(e.target.value);
        }}
      ></input>

      {/* {films.map((ele, index) => (
        <li>{ele.title}</li>
      ))}  */}
    </div>
  );
};
export default ListadoPeliculas;
