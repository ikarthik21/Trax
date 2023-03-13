import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../App.css'
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications } from 'react-icons/md';
import NoticationComp from './NoticationComp';



const Topbar = () => {

    const [Not, setNot] = useState(false);

    const handleNotification = () => {

        setNot(!Not);
    }


    return (

        <Container>



            <TopNav>

                <LogoBox>

                    <Link to="/">

                        <Logo>
                            <img src="/images/yt-icon.png" alt="" />
                            <h1>Trax</h1>
                        </Logo>
                    </Link>
                </LogoBox>

                <Notications>
                    <MdNotifications onClick={handleNotification}
                        color='white'
                        size={25}
                        style={{ padding: '9px', cursor: 'pointer', backgroundColor: '#333', borderRadius: '50%' }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#e93e3e'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#333'}
                    />



                </Notications>

                {
                    Not
                        ? <FetchedNotfications  >
                            <NoticationComp />
                        </FetchedNotfications> :

                        null
                }



                <SearchBox>

                    <SLink to="/search">

                        <Search>
                            <AiOutlineSearch size={25} />
                            <span>Search</span>
                        </Search>
                    </SLink>


                </SearchBox>


            </TopNav>

        </Container>



    )
}

export default Topbar


const Container = styled.div`
width : 100%;
background-color: #0f0f0f;
height: 50px;
padding: 6px 10px;
 position :fixed;
top:0;
left:0;
z-index:5;
 
`

const Notications = styled.div`
flex:3; 
display:flex;
justify-content:flex-end;
margin-right:10px;
cursor:pointer;
&>hover{
    background-color: #e93e3e;
} 
    
`

const LogoBox = styled.div`
flex:3;
display:flex; 
justify-content:flex-start;

`

const TopNav = styled.div`
 
h1
{
    color:white;
    letter-spacing:1.5px;
}

padding: 3px 3px;

a{
    text-decoration:none;
}
display:flex;
align-items:center;
 
 

`

const Logo = styled.div`
 
font-family: 'Anton', sans-serif;
font-size:12px;
display:flex;
align-item:center;
justify-content:center;

img{
    margin-right: 10px;
    height: 38px;

}


`

const SearchBox = styled.div`
flex:0.1;
margin-right:35px;
 
  

`

const SLink = styled(Link)`
 color:white;
 display:flex;
 align-items:center;
 justify-content:flex-end;
 span{
    margin-left : 5px;
 }


`

const Search = styled.div`
&:hover{
    color: #e93e3e;

} 
    
display :flex;
align-items:center;


`

const FetchedNotfications = styled.div`
 
   border-radius: 10px;
   position:absolute;
   top:45px;
   right:150px;
   background-color: rgb(15, 15, 15);
   overflow-x:hidden;
   overflow-y:scroll;
    display:inline;
  max-width : 415px;
   max-height : 430px;

 
 ::-webkit-scrollbar {
    width: 4px;   
    color: red;
    border-radius: 55px;
 }

 
 ::-webkit-scrollbar-thumb {
    background-color:  #e93e3e;
    border-radius: 55px; 
    color: red;
 } 
 
 @media (min-width: 300px )and (max-width : 600px){
    top:50px;
    right:30px;
    max-width : 380px;
}


  
 


`