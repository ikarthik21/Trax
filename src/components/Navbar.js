import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AiFillVideoCamera, AiFillHome, AiFillHeart } from 'react-icons/ai';
import { GiPistolGun } from 'react-icons/gi';
import { FaMusic } from 'react-icons/fa';
import { BiCool, BiWebcam } from 'react-icons/bi';
import { RiEmotionLaughFill } from 'react-icons/ri';
const Navbar = () => {
  return (
    <Nav>

      <Navbox>
        <AiFillHome size={23} />
        <SLink to="/home" > Home</SLink>
      </Navbox>
      <Navbox>
        <RiEmotionLaughFill size={23} />
        <SLink to="/comedy" > Comedy</SLink>
      </Navbox>

      <Navbox>
        <AiFillVideoCamera size={23} />
        <SLink to="/drama" > Drama</SLink>
      </Navbox>
      <Navbox>
        <GiPistolGun size={23} />
        <SLink to="/action" > Action</SLink>
      </Navbox>
      <Navbox>
        <BiCool size={23} />
        <SLink to="/recommended" > Recommended</SLink>
      </Navbox>
      <Navbox>
        <FaMusic size={23} />
        <SLink to="/retro" > Retro </SLink>
      </Navbox>
      <Navbox>
        <AiFillHeart size={23} />
        <SLink to="/love" > Love </SLink>
      </Navbox>
      <Navbox>
        <BiWebcam size={23} />
        <SLink to="/webseries" > Web Series </SLink>
      </Navbox>




    </Nav>
  )
}

export default Navbar


const Nav = styled.div`
 
background-color: #0f0f0f;
display:flex;
height: 100%;
width:200px;
 
flex-direction :column;
align-items:center; 
position :fixed;
left:0;
top:0;
margin-top:60px;
 padding:25px 0px;

`



const SLink = styled(Link)`

  text-decoration: none;
       margin : 5px 5px;
          color:white;
          font-size:20px;

     padding: 10px 10px;

    display:flex;
  
   font-size: 18px;
 
width:100%;
font-family:monospace;

 
`
  ;

const Navbox = styled.div`
&:hover{
  
  background-color:#151515;;
}
 display:flex;
 align-items:center;
 justify-content:flex-start;
 width: 100%;
 padding-left:40px;
 border-radius: 10px;

`