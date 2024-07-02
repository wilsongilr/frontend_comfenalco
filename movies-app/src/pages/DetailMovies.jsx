import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
// import { v4 as uuidv4 } from 'uuid';

const DetailMovies = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [error, setError] = useState(false);
    const navigation = useNavigate();

    useEffect(() => {
        const getMovie = async () => {

            const urlMovies = `http://www.omdbapi.com/?apikey=f52b8a86&i=${id}`
            const { data } = await axios.get(urlMovies);
            if (data.Response === 'False') {
                setError(true);
                return;
            }
            setMovie(data);




        };
        getMovie();
    }, [id])


    const goBack = () => {
        navigation(-1);
    }


    return (
        // <div className="container d-flex justify-content-center">


        <div className="card mt-5">
            {!error ? (
                <div className="row">
                    <div className="col-md-4">
                        <img src={movie.Poster === 'N/A' ? '/movie_na.png' : movie.Poster} alt="img_movie" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-white">
                            <div className="card-title ">
                                {movie.Title} <strong>{movie.Year}</strong>
                            </div>
                            <p className="muted">
                                <strong>Genre: </strong> {movie.Genre}
                            </p>
                            <p className="muted">
                                <strong>Runtime: </strong> {movie.Runtime}
                            </p>
                            <p className="muted">
                                <strong>Director: </strong> {movie.Director}
                            </p>
                            <p className="muted">
                                <strong>Plot: </strong> {movie.Plot}
                            </p>
                            <p>
                                <strong>Actors: </strong>{movie.Actors}
                            </p>

                            <div className="d-flex justify-content-between">
                                <h5><span className="badge text-bg-danger">Rating {movie.imdbRating}</span></h5>
                                <button onClick={() => goBack()} className="btn btn-dark fw-bold">Back</button>
                            </div>

                            {/* <ul className="list-group list-group-numbered">
                            {movie ?
                                movie.Ratings.map((rating) => (
                                    <li key={uuidv4()} className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Source</div>
                                            {rating.source}
                                        </div>
                                        <span className="badge text-bg-primary rounded-pill">Value {rating.Value}</span>
                                    </li>

                                )) :
                                <div>
                                    <h1 className="text-center text-danger mt-5">
                                        Movie not Found
                                    </h1>
                                </div>
                            }
                        </ul> */}

                        </div>
                    </div>

                </div>
            ) : (
                <div className="text-center">
                    <h1>Error, Movie Not Found</h1>
                    <Link className="btn btn-primary" to={"/"}>Go To Home</Link>
                    
                </div>

            )}

        </div>
        // </div>
    )
}
export default DetailMovies