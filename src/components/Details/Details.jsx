import React, { useState, useEffect } from "react";
import { moviesData } from "../data";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { FcFilmReel } from "react-icons/fc";

import "./Details.css";

const MoviesDetails = ({ match }) => {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        setMovie(
            moviesData.find((movie) => movie.title === match.params.title)
        );
    }, [match.params.title]);
    return (
        <div>
            <h1 id="movieTrailer">
                Movie Trailer <FcFilmReel />
            </h1>
            <div className="trailerCont">
                <div className="trailer">
                    <h2>{movie.title}</h2>
                    <iframe
                        title={movie.title}
                        width="560"
                        height="315"
                        src={movie.trailerUrl}
                        frameBorder="0"
                        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <p>{movie.description}</p>
                    <hr />
                    <div className="butn">
                        <Link to="/Home">
                            <Button variant="secondary">Go Back</Button>{" "}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviesDetails;
