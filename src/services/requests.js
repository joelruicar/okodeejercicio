// https://api.themoviedb.org/3/movie/550?api_key=516be3b52cf7301c283cf075e21941e3s

async function getAllFilms() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  
    const respuesta = await fetch(
      
      "https://api.themoviedb.org/3/movie/popular?api_key=516be3b52cf7301c283cf075e21941e3&language=en-US&page=1",
      requestOptions
    );
  
    return respuesta;
  }

  export {getAllFilms}