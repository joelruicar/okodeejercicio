import { useState } from "react";
import { getAllFilms } from "../services/requests";
const ListadoPeliculas = () => {
  const [films, setFilms] = useState([]);

  const allFilms = () => {
    getAllFilms()
      .then((response) => {
        console.log(response.url);
        setFilms(response.url);
      })
      .then((data) => {
        console.log(data);
      });
  };
  return <></>;
};
export default ListadoPeliculas;
