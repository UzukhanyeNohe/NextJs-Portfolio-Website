import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
     <LinkColumn>
     <LinkTitle>Call</LinkTitle>
     <LinkItem href='tel: 067 928 5706'>067 928 5706</LinkItem>
     </LinkColumn>
     <LinkColumn>
     <LinkTitle>Email</LinkTitle>
     <LinkItem href='tel: mailto:magodlauzzi@gmail.com'>magodlauzzi@gmail.com</LinkItem>
     </LinkColumn>
     </LinkList>
     <SocialContainer>
     <SocialIcons href = "https://github.com">
    <AiFillGithub size ="3rem"/>
  </SocialIcons>
  <SocialIcons href = "https://facebook.com">
  <AiFillFacebook size ="3rem"/>
  </SocialIcons>
  <SocialIcons href = "https://instagram.com">
    <AiFillInstagram size ="3rem"/>
  </SocialIcons>
     </SocialContainer>
   </FooterWrapper>
  );
};

export default Footer;
