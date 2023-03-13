import { useEffect, useState } from "react";
import React from 'react';
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Movies from "./movies.json";
import { FaThumbsUp, FaCommentAlt } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import '../App.css'
import Recomm from "./Recomm";
import axios from 'axios';
import PhoneNav from './PhoneNav';

const isMobile = window.innerWidth < 880;
  
const SinglePage = (props) => {
  const [url, setUrl] = useState('');
  const [Video, setVideo] = useState({});
  const [Stats, setStats] = useState({});
  const params = useParams();
  const [Data, setData] = useState({});
  const [Desc, setDesc] = useState(false);
  const [comments, setComments] = useState([]);


  useEffect(() => {
    for (const movieId in Movies) {
      const movie = Movies[movieId];
      if (movie[params.movie_id].movie_id === params.movie_id) {
        setData(movie[params.movie_id]);
      }
    }
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
    }


  }, [params.movie_id]);


  useEffect(() => {

    if (Data.movie_trailer) {

      const fetchVideo = async () => {

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${Data.movie_trailer}&key=${process.env.REACT_APP_API_KEY}`
        );

        const data = await response.json();

        setVideo(data.items[0].snippet);
      };

      const fetchStats = async () => {

        try {

          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${Data.movie_trailer}&key=${process.env.REACT_APP_API_KEY}`
          );

          const data = await response.json();

          setStats(data.items[0].statistics);

        } catch (error) {
          console.error(error);
          return "Error fetching ";
        }

      };



      const fetchComments = async () => {

        const url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${Data.movie_trailer}&key=${process.env.REACT_APP_API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();
        setComments(data.items);







      };


      fetchVideo();
      fetchStats();
      fetchComments();





    }

  }, [Data.movie_trailer]);


  const toggleDesc = () => {
    setDesc(!Desc)
  }


  function handleShare() {
    const encodedUrl = encodeURIComponent(url);
    const whatsappUrl = `whatsapp://send?text=${encodedUrl}`;
    window.location.href = whatsappUrl;
    return false;
  }


  const likeVideo = () => {
    const videoId = Data.movie_trailer;
    const accessToken = '1006420411968-jdsvj7h8fugsfuts6ghf3v6u36cgepb6.apps.googleusercontent.com';

    axios.post('https://www.googleapis.com/youtube/v3/videos/rate', {
      id: videoId,
      rating: 'like',
      access_token: accessToken
    }).then(response => {
      console.log('Video liked successfully!');
    }).catch(error => {
      console.error('Failed to like video:', error);
    });

  }



  return (
    <Container>

      <TrailerBox>

        <iframe
          src={`https://www.youtube.com/embed/${Data.movie_trailer}?autoplay=1`}
          frameBorder='0' title={Data.movie_id}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen className="frameStyle"

        />
        <DetailsBox>

          <div>
            <h3 style={{lineHeight:'28px'}}>{Video.title}</h3>
          </div>

          <StatsBox>

            <p>{Stats.viewCount} Views</p>
            <LikesBox>

              <Button onClick={likeVideo}>
                <FaThumbsUp /> <h3>{Stats.likeCount} Likes</h3>
              </Button>

              <Button  >
                <FaCommentAlt />  <h3>{Stats.commentCount} Comments</h3>
              </Button>
              <Button onClick={handleShare}  >
                <RiWhatsappFill />  <h3> Share</h3>
              </Button>

            </LikesBox>

            <DescToggle onClick={toggleDesc}>
              <h4>Details</h4>

            </DescToggle>



          </StatsBox>





          {Desc ?
            <DescBox>

              {


                Video.title && (
                  <>

                    <div>
                      {Video.description.split('\n').map((paragraph, index) => {
                        const urls = paragraph.match(
                          /(https?:\/\/[^\s]+)/g
                        );
                        if (urls) {
                          return (
                            <React.Fragment key={index}>
                              {paragraph.split(urls[0]).map((text, i) => (
                                <React.Fragment key={i}>
                                  {text}
                                  {i !== urls.length && (
                                    <a href={urls[i]} target='_blank' rel='noreferrer'>
                                      {urls[i]}
                                    </a>
                                  )}
                                </React.Fragment>
                              ))}
                              <br />
                            </React.Fragment>
                          );
                        } else {
                          return (
                            <React.Fragment key={index}>
                              <p>{paragraph}</p>
                              <br />
                            </React.Fragment>
                          );
                        }
                      })}


                      <DescToggle onClick={toggleDesc}>
                        <h4>Hide Details</h4>
                      </DescToggle>

                    </div>

                  </>
                )


              }

            </DescBox>
            : ''}


          <CommentsBox>
            <h2 style={{ marginBottom: '10px' }}>Comments</h2>

            <div>


              {

                comments.map((comment, index) => (


                  <CommentItem key={index++}>


                    <UserBox key={index} >
                      <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                      <h3 >{comment.snippet.topLevelComment.snippet.authorDisplayName}</h3>
                    </UserBox>


                    <CommentContent key={Data.movie_id}>
                      <p>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
                      <br /><br />
                    </CommentContent>


                    {
                      comment.replies ?
                        comment.replies.comments.map((reply, idx) => {
                          return (

                            <CommentUserBox key={idx}>


                              <UserBox key={Data.movie_trailer} >
                                <img src={reply.snippet.authorProfileImageUrl} alt="" />
                                <h3 >{reply.snippet.authorDisplayName}</h3>
                              </UserBox>
                              <CommentContent key={Data.movie_id} >
                                <p style={{ fontWeight: 'bold' }}  >{reply.snippet.textOriginal}</p>

                              </CommentContent>
                            </CommentUserBox>
                          );
                        })
                        : ""
                    }



                  </CommentItem>






                ))
              }
            </div>




          </CommentsBox>



        </DetailsBox>


      </TrailerBox>
      <RecommendBox>
        <Recomm />
      </RecommendBox>
      {isMobile ? <PhoneNav /> : ""}

    </Container>

  );
};


const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(1.5vw + 5px);
 
  display:flex;
  @media (min-width: 300px )and (max-width : 1500px){
          flex-direction:column;    
   }
`;

const StatsBox = styled.div`
p{
  // font-family:sans-serif;
  margin-top:10px;
}
background-color:#1c1b1bd9;
padding: 10px 20px;
border-radius:18px;
display:flex;
margin-top:20px;
  

flex-wrap:wrap;
justify-content:space-between;
@media (min-width: 280px )and (max-width : 500px){
  flex-direction:column;
 
  align-items:center;
  margin-top:230px;

}



`


const TrailerBox = styled.div`
 diplay:flex;
 align-items:center; 
 justify-content:center;
 iframe{
  margin-top: 15px;
  min-width: 100%;
    min-height: 80vh;
    // objectFit: fill;
    z-index: 0;
   } 
z-index:2;


 
 @media (min-width: 300px )and (max-width : 600px){
  border-radius:0px;
   iframe{
    flex-direction:column;
    min-height: 35vh;
    min-width: 93vw;
    position:fixed;
    top:30px;
    left:0px;
     width:99vw;
     border-radius:0px;
   }
 

 }
 


 
`

const DetailsBox = styled.div`
display:flex;
 
padding: 15px 15px;
 
flex-wrap:wrap;
 
flex-direction :column;
h3{
  
  font-size:20px;
  font-family: 'Golos Text', sans-serif;
   margin :4px; 
}
p{
  display:flex;
  flex-direction:column;
 
}


 
`

const DescToggle = styled.div`
margin: 10px 0px;
h4{
  font-family:monospace;
  font-size:20px;
  color:lightblue;
  cursor:pointer;
  display:inline;
}
 
`

const RecommendBox = styled.div`




`

const DescBox = styled.div`
font-family:sans-serif;
line-height:25px;
background-color:#1c1b1bd9;
padding: 45px 20px;
border-radius:18px;
margin-top:15px;
a{
  color:#2d49e9;
  text-decoration:none;
}

`
const LikesBox = styled.div`
display:flex;
background-color:#1c1b1bd9;
padding: 10px 20px;
border-radius:18px;
justify-conten:space-between;
@media (min-width: 300px )and (max-width : 500px){
 flex-direction:column;
 

}


`


const Button = styled.div`
cursor:pointer;
margin:2px 10px;
display:flex;
align-items:center;
justify-content:center;
h3{
  margin-left:7px;
  font-size:16px;
}
`

const CommentsBox = styled.div`
background-color:#1c1b1bd9;
margin: 18px 0px;
padding: 15px 20px;
border-radius:18px;

 
display:flex;
flex-direction:column;
flex-wrap:wrap;
`

const CommentUserBox = styled.div`
 
padding: 10px 100px;
@media (min-width: 300px )and (max-width : 500px){
  
    padding: 10px 15px;
 }



 
`
const UserBox = styled.div`
display:flex;
align-items:center;
img{
  height:40px;
  width:40px;
  border-radius:150px;
}
h3{
  margin-left:10px;
  
}
margin:5px 5px;
`

const CommentContent = styled.div`
 display:flex;
 align-items:center;
 padding:15px 15px;
 border-radius:15px;
 background-color:#1e1e1ed9;
font-family: 'Lato', sans-serif;
margin:8px 5px;
p{
  font-size:16px;
}
`

const CommentItem = styled.div`
display:flex;
flex-direction:column;
h3{
  font-size:19px;
  color:whitesmoke;
}
`
export default SinglePage;