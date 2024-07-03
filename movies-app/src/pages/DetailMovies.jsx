import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
// import uuid from 'react-uuid';
import { v4 as uuidv4 } from "uuid";

const DetailMovies = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [ratings, setRating] = useState([]);
  const [error, setError] = useState(false);
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
      setIsLoading(true);
      const urlMovies = `http://www.omdbapi.com/?apikey=f52b8a86&i=${id}`;
      const { data } = await axios.get(urlMovies);
      console.log(data.Ratings);
      if (data.Response === "False") {
        setError(true);
        setIsLoading(false);
        return;
      }
      setMovie(data);
      setRating(data.Ratings);
      setIsLoading(false);
    };
    getMovie();
  }, [id]);

  const goBack = () => {
    navigation(-1);
  };

  // const midata = movie.Ratings.map(datos);

  // console.log(midata);
  return (
    // <div className="container d-flex justify-content-center">

    <div className="card mt-5">
      {isLoading ? (
        <Loading />
      ) : !error ? (
        <div className="row">
          <div className="col-md-4">
            <img
              src={movie.Poster === "N/A" ? "/movie_na.png" : movie.Poster}
              alt="img_movie"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body text-primary">
              <div className="card-title ">
                {movie.Title} <strong>{movie.Year}</strong>
              </div>
              <p className="muted">
                <strong className="txt-details">Genre: </strong> {movie.Genre}
              </p>
              <p className="muted">
                <strong className="text-primary-emphasis fw-bold">
                  Runtime:{" "}
                </strong>{" "}
                {movie.Runtime}
              </p>
              <p className="muted">
                <strong className="text-dark">Director: </strong>{" "}
                {movie.Director}
              </p>
              <p className="muted">
                <strong className="text-dark">Plot: </strong> {movie.Plot}
              </p>
              <p>
                <strong className="text-dark">Actors: </strong>
                {movie.Actors}
              </p>

              <h4 className="text-dark">Ratings</h4>
              <ul className="list-group list-group-numbered">
                {movie ? (
                  ratings.map((rating) => (
                    <li
                      key={uuidv4()}
                      className="list-group-item d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Source</div>
                        {rating.Source}
                      </div>
                      <span className="badge text-bg-primary rounded-pill">
                        Value {rating.Value}
                      </span>
                    </li>
                  ))
                ) : (
                  <div>
                    <h1 className="text-center text-danger mt-5">
                      Movie not Found
                    </h1>
                  </div>
                )}
              </ul>
              <div className="d-flex justify-content-between mt-2">
                <h5>
                  <span className="badge text-bg-danger">
                    Rating {movie.imdbRating}
                  </span>
                </h5>
                <button
                  onClick={() => goBack()}
                  className="btn btn-dark fw-bold"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1>Error, Movie Not Found</h1>
          <Link className="btn btn-primary" to={"/"}>
            Go To Home
          </Link>
        </div>
      )}
    </div>
    // </div>
  );
};
export default DetailMovies;
