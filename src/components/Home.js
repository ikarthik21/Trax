import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import json from './movies.json';
// import Navbar from './Navbar';


import '../App.css';


const Home = () => {
  const [movies, setMovies] = useState([]);
  const [maxWidth, setMaxWidth] = useState(window.innerWidth);



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
    const handleResize = () => {
      setMaxWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  return (
    <>
      <Container>
        {/* <Navbar /> */}

        <AllComponents>
          <VideoRow>
            {
              movies.map((val) => (

                <Link to={`/movie/${val.movie_id}`} key={val.movie_id} style={{ textDecoration: "none" }}>
                  <VideoItem id={val.movie_id} maxWidth={maxWidth}>

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
export default Home;



const Container = styled.section`
padding : 20px 20px;
 margin-left: 100px;
 margin-top: 30px;
 @media (min-width: 190px )and (max-width : 480px){
    
  margin-left: 0px;
  padding : 0px 0px;
 }

`


const AllComponents = styled.div`
 

`

const VideoRow = styled.div`
padding : 10px 10px;
display:flex;
align-items:center;
justify-content:center;
margin : 10px 10px;
flex-wrap :wrap;
 @media (min-width: 190px )and (max-width : 880px){
    
  margin : 0px 0px;
  padding : 0px 0px;
 }
 
`

const VideoItem = styled.div`
 
 padding: 10px 10px;
object-fit:cover;
border-radius:15px;
 
img{
  height: 200px;
  width: 350px;
  object-fit:cover;
  border-radius:15px;
}
margin : 10px 10px;

min-width: 300px;
background-color:#1c1b1bd9;

&:hover{
  transition: transform 0.6s ease-in-out; 
  transform:scale(1.09,1.09);
  box-shadow: 2px 2px 18px -7px rgba(254,180,180,0.68);
  -webkit-box-shadow: 2px 2px 17px -7px rgba(254,180,180,0.68);
  -moz-box-shadow: 2px 2px 18px -7px rgba(254,180,180,0.68);
}
z-index:0;
 color:white;
 @media (min-width: 300px )and (max-width : 480px){
  
  img{
    height: 200px;
    max-width: ${props => props.maxWidth - 30}px;
   
  }
  
 
 max-width: ${props => props.maxWidth}px;
 }
 
 


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
@media (min-width: 190px )and (max-width : 330px){
  
  max-width: 280px;
 }
 
@media (min-width: 330px )and (max-width : 480px){
  
  max-width: 350px;
 }
 
 
`