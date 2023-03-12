import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import json from '../movies.json';
import Navbar from '../Navbar';
import { AllComponents, Container, VideoDetails, VideoItem, VideoRow } from '../Style';

const Drama = () => {
    const [movies, setMovies] = useState([]);



    useEffect(() => {

        const movies = Object.values(json[0]).map((movie) => ({
            movie_id: movie.movie_id,
            movie_name: movie.movie_name,
            movie_director: movie.movie_director,
            movie_release: movie.movie_release,
            movie_genre: movie.movie_genre,
            movie_img: `https://i.ytimg.com/vi/${movie.movie_trailer}/hqdefault.jpg`,
            movie_trailer: movie.movie_trailer
        }));
        setMovies(movies);

    }, []);

    return (
        <>
            <Container>
                <Navbar />

                <AllComponents>
                    <VideoRow>
                        {
                            movies.filter((val, idx) =>
                                val.movie_genre.toLowerCase().includes("drama")).map((val) => (

                                    <Link to={`/movie/${val.movie_id}`} key={val.movie_id} style={{ textDecoration: "none" }}>
                                        <VideoItem id={val.movie_id}>

                                            <img src={val.movie_img} alt="" />


                                            <VideoDetails>
                                                <h2 className='applyFont'> {val.movie_name}</h2>
                                                <h1>  {val.movie_release}</h1>
                                                <h1>Directed by {val.movie_director}</h1>

                                            </VideoDetails>

                                        </VideoItem>
                                    </Link>

                                ))}

                    </VideoRow>


                </AllComponents>
            </Container>
        </>
    );
};
export default Drama;
