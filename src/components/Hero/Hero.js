import React from 'react';

import { Section, SectionText, SectionTitle,Img, ProfileImg} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Particles from "react-particles-js"
import particlesConfig from "../../../src/components/BackgrooundAnimation/particleConfig";
import ParticleBackground from '../../../src/components/BackgrooundAnimation/ParticleBackground';

const Hero = (props) => (
 <Section nopadding >
  <SectionTitle >
  Hello!! <br/>
 I am UZUKHANYE NOHE
  </SectionTitle>
 
  <Section row nopadding>
  <SectionText> 
  I am a developer that recently graduated from varsity college. People constantly tell me that I am always smiling, 
  that is because I am a positive person and enjoy everything that I immerse myself in. I have held countless leadership 
  positions which have refined my abilities at school, varsity and on the rugby field. SovTech has one of the leading graduate 
  programs which would be a great start to my career in application development. As it is a company that has produced quality
   applications for multiple trusted companies in different industries. This program would allow me to put the skills I have 
   already learned to practical and professional use while also learning from people that have been in the industry. Thereby
    providing me with insight and a broader technological perspective into a fast-developing industry. I would be a great 
    attribute to this program, as not only am a dedicated, hardworking person, I also know that I have a lot to give and 
    a lot to learn. Therefore, this opportunity would be greatly appreciated. Allow me to be an asset to the future of 
    application development in South Africa and possibly the world.
 </SectionText>
 <ProfileImg src='/images/profilepic.jpeg' />
  </Section>
 
 </Section>
);

export default Hero;