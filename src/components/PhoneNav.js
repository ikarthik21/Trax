import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {  BiWebcam } from 'react-icons/bi';
import { FaMusic } from 'react-icons/fa';

import { GiPistolGun } from 'react-icons/gi';
import { RiEmotionLaughFill } from 'react-icons/ri';

import { AiFillHome } from 'react-icons/ai';
 
const PhoneNav = () => {
  return (
    <>
      <BottomNav>


        <NavBox>


          <SLink to="/action" >
            <NavItem>
              <GiPistolGun size={28} />
              <p>Action</p> 
            </NavItem>
          </SLink>


          <SLink to="/retro" >
            <NavItem>
            <FaMusic size={26} />
            <p>Retro</p>
            </NavItem>
          </SLink>


          <SLink to="/home" >
            <NavItem>
            <AiFillHome size={28} />
            <p>Home</p>
            </NavItem>

          </SLink>


          <SLink to="/comedy" >
            <NavItem>
            <RiEmotionLaughFill size={28} />  
            <p>Comedy</p>
            </NavItem>
          </SLink>

          <SLink to="/webseries" >
          <NavItem>
          <BiWebcam size={28} />
          <p>Series</p>
          </NavItem>
          </SLink>


        </NavBox>
      </BottomNav>
    </>
  )
}



const BottomNav = styled.div`
position: fixed;
left: 0;
bottom: 0;
width: 100%;
background-color: #0f0f0f;
 min-height:70px;
box-sizing: border-box;
z-index: 2;
display:flex;
align-items :center; 
border-radius:7px;
`

const NavBox = styled.div`
 
 display:flex;
 align-items :center;
 justify-content :space-evenly;
 min-width:100vw;
`



const NavItem = styled.div`
 
padding:10px 10px;
color: white;
 display:flex;
 align-items:center;
 justify-content:center;
 flex-direction:column;
 p{
  font-family:monospace;
  font-weight:bold;
  font-size:14px;
   margin-top:5px;
 }



`


const SLink=styled(Link)`
text-decoration:none;
`
export default PhoneNav
