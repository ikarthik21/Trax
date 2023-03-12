import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import json from './movies.json';
import Navbar from './Navbar';
const Search = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
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
          <SearchBox>
            <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search for a Movie......" />
          </SearchBox>
          <VideoRow>


            {

              movies.filter((movie) => movie.movie_name.toLowerCase().startsWith(search.toLowerCase())).map((movie, index) => (
                <Slink to={"/movie/" + movie.movie_id} key={movie.movie_id} >

                  <VideoItem id={movie.movie_id}>
                    <img src={movie.movie_img} alt="" />


                    <VideoDetails>
                      <h2 className='applyFont'> {movie.movie_name}</h2>
                      <h1>  {movie.movie_release}</h1>
                      <h1>Directed by {movie.movie_director}</h1>

                    </VideoDetails>

                  </VideoItem>
                </Slink>
              ))

            }

          </VideoRow>


        </AllComponents>
      </Container>
    </>
  );
};
export default Search;



const Container = styled.section`
padding : 20px 20px;
 margin-left: 100px;
 margin-top: 30px;

`


const AllComponents = styled.div`
 

`
const Slink = styled(Link)`
color:white;
text-decoration: none;

`

const VideoRow = styled.div`
padding : 10px 10px;
display:flex;
align-items:center;
justify-content:center;
margin : 10px 10px;
flex-wrap :wrap;
 
 
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
background-color:#141414;

&:hover{
  transition: transform 0.6s ease-in-out; 
  transform:scale(1.09,1.09);
  box-shadow: 2px 2px 18px -7px rgba(254,180,180,0.68);
  -webkit-box-shadow: 2px 2px 17px -7px rgba(254,180,180,0.68);
  -moz-box-shadow: 2px 2px 18px -7px rgba(254,180,180,0.68);
}
z-index:0;
 color:white;
 
 
 


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


const SearchBox = styled.div`
margin:15px 400px;
  width: 35vw;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  input:focus {
    outline: none;
  }
 
  input {
    height: 20px;
    font-size: 18px;
    padding: 10px;
    width: 100%;
    font-weight: bold;
    border-radius: 50px;
    font-family: monospace;

    &:focus{
      font-weight: bold;
    }
  }

  
  
   @media (min-width: 190px )and (max-width : 500px){
    
    width: 55vw;
   }



`;
