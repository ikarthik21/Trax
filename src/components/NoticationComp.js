import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import json from './movies.json';
import '../App.css'
const NoticationComp = () => {
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


                <VideoRow   >
                    {
                        movies.filter((val, idx) =>
                            val.movie_genre.toLowerCase().includes("new")).map((val) => (

                                <Link to={`/movie/${val.movie_id}`} key={val.movie_id} style={{ textDecoration: "none" }}>
                                    <VideoItem key={val.movie_id}   >


                                        <img src={val.movie_img} alt="" />




                                        <VideoDetails>
                                            <h2 className='applyFontsmall'> {val.movie_name}</h2>
                                            <h1>  {val.movie_release}</h1>
                                            <h1>Directed by {val.movie_director}</h1>

                                        </VideoDetails>

                                    </VideoItem>
                                </Link>

                            ))}

                </VideoRow>



            </Container>
        </>
    );
};
export default NoticationComp;


const VideoItem = styled.div`
padding: 10px 10px;
 
img{
  height: 100px;
  width: 100px;
  object-fit:center;
  border-radius:15px;
  margin-right:3px;
}
 
background-color: #0f0f0f;
&:hover{
  transition: transform 0.6s ease-in-out; 
  transform:scale(1.02,1.02);
  background-color: #1c1b1b;
}
z-index:0;
color:white;
 display :flex;
 min-width : 390px;
 
 
 

`

export const Container = styled.section`
 

`



const VideoRow = styled.div`
 
display:flex;
align-items:center;
justify-content:center;
 
flex-direction:column;

 
`

const VideoDetails = styled.div`
 
padding: 10px 10px;
h1{
  display:flex;
  flex-wrap:wrap;
  font-family: monospace;
 font-size: 16px;
 margin-bottom: 4px;
}
max-width: 350px;
 


 
`