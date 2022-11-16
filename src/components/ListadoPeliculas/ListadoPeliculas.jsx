import { useEffect, useState } from "react";

const ListadoPeliculas = () => {
  const [films, setFilms] = useState([]);


  const getAllFilms = async () => {
    const response = await fetch(
      ` https://api.themoviedb.org/3/discover/movie?api_key=516be3b52cf7301c283cf075e21941e3&language=en-US&page=1
      `
      
    )
    const data = await response.json()
    setFilms(data.results) // `results` from the tmdb docs
    console.log(data)
}
  

  useEffect(() => {
    getAllFilms() }, []);
  // films.forEach((film) =>{console.log(film); return <li>{films}</li>})
  return (
    <div>
      <h1>Listado de películas</h1>
      {films.map((ele, index) => (
        <li>{ele.title}</li>
      ))}
    </div>
  );
};
export default ListadoPeliculas;
