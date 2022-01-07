import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import Particles from "react-particles-js"
import particlesConfig from "../../../src/components/BackgrooundAnimation/particleConfig";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
 <Container>
    <Div1>
      <Link href ="/">
        <a style = {{display: "flex", alignItems:"center", color:"white", marginBottom: "20px"}}>
          <DiCssdeck size = "3rem"/> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
<Div2>
  <li>
    <Link href="#projects">
      <NavLink>Projects</NavLink>
    </Link>
  </li>
  <li>
    <Link href="#tech">
      <NavLink>Skills</NavLink>
    </Link>
  </li>  
  <li>
    <Link href="#about">
      <NavLink>Hobbies</NavLink>
    </Link>
  </li>
</Div2>
<Div3>
  <SocialIcons href = "https://github.com">
    <AiFillGithub size ="3rem"/>
  </SocialIcons>
  <SocialIcons href = "https://www.facebook.com/uzukhanye.nohe.1/">
    <AiFillFacebook size ="3rem"/>
  </SocialIcons>
  <SocialIcons href = "https://www.instagram.com/uzi.the.shooter_8/">
    <AiFillInstagram size ="3rem"/>
  </SocialIcons>
</Div3>
 </Container>
 
);

export default Header;
