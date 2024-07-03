import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Loading from "../components/Loading";

const Movies = () => {
  const navigation = useNavigate();
  let [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const clean = useCallback(() => {
    setMovies([]);
    setInputSearch("");
    navigation("");
  }, [navigation]);

  useEffect(() => {
    const title = searchParams.get("title") || "";
    if (title === "") {
      return clean();
    }
    setInputSearch(title);
    getMovies(title);
  }, [searchParams, clean]);

  const getMovies = async (title) => {
    try {
      // const urlMovies = 'http://www.omdbapi.com/?apikey=f52b8a86&s='+ title
      setIsLoading(true);
      const { data } = await axios.get(
        "http://www.omdbapi.com/?apikey=f52b8a86&s=" + title
      );
      setMovies(data.Search);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Error en get movies", error.message);
    }
  };

  // const searchMovies = movies.filter(movie => movie.Title.toLowerCase().includes(inputSearch.toLowerCase()));

  const search = (e) => {
    if (e.target.value === "") {
      return clean();
    } else {
      setInputSearch(e.target.value);
      // esta funcion la podemos omitir toda vez que el searcparams en quien la esta invocando en el useEfect
      // getMovies(e.target.value);
      // navigation("?title="+e.target.value)
      navigation(`?title=${e.target.value}`);
    }
  };

  return (
    <div>
      <section>
        <h1 className="text-white fw-bold text-center mt-5">MOVIE SEARCH</h1>
        <div className="mt-5 d-flex justify-content-center align-items-center">
          <div className="col-6">
            <form action="">
              <div className="input-group">
                <span className="input-group-text fw-bold bg-white text-black">
                  Search Movies
                </span>
                <input
                  type="text"
                  className="form-control"
                  autoFocus
                  value={inputSearch}
                  onChange={(e) => search(e)}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <section className="col-xxl-8 form-group mx-auto">
                <h1 className="text-white fw-bold text-center mt-5">ENTERTAIMENT MOVIES</h1>
                <div className="mt-5 d-flex justify-content-center align-items-center">
                    <input
                        type="text"
                        className="form-control"
                        autoFocus
                        value={inputSearch}
                        onChange={(e) => search(e)}
                    />


                </div>
            </section> */}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="row">
          {movies ? (
            movies.map((movie) => (
              <Link
                key={movie.imdbID}
                to={`/description/${movie.imdbID}`}
                className="col-md-4 my-3 text-decoration-none"
              >
                <div className="card">
                  <div className="card-header">
                    <img
                      className="card-img-top"
                      src={
                        movie.Poster === "N/A" ? "/movie_na.png" : movie.Poster
                      }
                      alt="img_movie"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center text-capitalize fw-bold">
                      {movie.Title}
                    </h5>
                    {/* <div className="stats mt-2">

                                        <div className="d-flex justify-content-between"><span className="fw-bold text-info">Year</span><span className="fw-normal text-info"> {movie.Year}</span></div>
                                        <div className="d-flex justify-content-between"><span className="text-primary">Type</span><span>{movie.Type}</span></div>
                                    </div> */}
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div>
              <h1 className="text-center text-danger mt-5">Movie not Found</h1>
            </div>
          )}
        </div>
      )}

      {/* <div className="d-flex justify-content-center align-items-center flex-wrap gap-2  mt-5">
                {movies.map((movie) => (
                    <div key={movie.imdbID} className="card p-3 bg-white">
                        <div className="about-product text-center"><img src={movie.Poster} style={{ width: "100%", height: "300px" }} alt="image_movie" />
                            {/* <div>
                                <h4 className="text-2 fw-bold">{movie.Title}</h4>
                            </div> 
                        </div>
                        <div className="stats mt-2">
                            <div className="d-flex justify-content-between p-price"><span className="fw-bold text-primary">Titulo</span><span className="text-primary">{movie.Title}</span></div>
                            <div className="d-flex justify-content-between"><span className="fw-bold text-info">Year</span><span className="fw-normal text-info"> {movie.Year}</span></div>
                            <div className="d-flex justify-content-between p-price "><span className="text-primary">Type</span><span>{movie.Type}</span></div>
                        </div>

                    </div>
                ))}
            </div> */}
    </div>
  );
};
export default Movies;
