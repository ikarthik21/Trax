import styled from 'styled-components';

export const Container = styled.section`
padding : 20px 20px;
 margin-left: 100px;
 margin-top: 30px;

`


export const AllComponents = styled.div`
 

`

export const VideoRow = styled.div`
padding : 10px 10px;
 
display:flex;
align-items:center;
justify-content:center;
margin : 10px 10px;
flex-wrap :wrap;
 
 
`

export const VideoItem = styled.div`
 
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
 
 
 


`

export const VideoDetails = styled.div`
 
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