import React from 'react';
import { DiCss3, DiDotnet, DiFirebase, DiGithub, DiHtml5, DiJava, DiJavascript, DiMsqlServer, DiReact, DiVisualstudio, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import Particles from "react-particles-js"
import particlesConfig from "../../../src/components/BackgrooundAnimation/particleConfig";

const Technologies = () =>  (
  <Section id="tech" >
    <SectionDivider></SectionDivider>
    <br/>
    <section style={{height: 0}}>
  <Particles  params={particlesConfig}>
         </Particles>
  </section>
    <SectionTitle>
      Skills 
    </SectionTitle>
    <SectionText>
    These are some of the technologies and Languages I have worked with
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>
            Languages
          </ListTitle>
          <ListParagraph>
            <li><DiJava/>  Java </li>
            <li> C# </li>
            <li> <DiMsqlServer/>SQL </li>
            <li><DiHtml5/>HTML </li>
            <li><DiCss3/>CSS </li>
            <li><DiJavascript/>JavaScript </li>
            <li>XAML </li>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>
            Technologies
          </ListTitle>
          <ListParagraph>
            <li><DiDotnet/> .NET </li>
            <li> Azure </li>
            <li> <DiMsqlServer/>SQLSERVER </li>
            <li><DiVisualstudio/>Visual Studio </li>
            <li><DiFirebase/>Firebase </li>
            <li><DiGithub/>GitHub </li>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
