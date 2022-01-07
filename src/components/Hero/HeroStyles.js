import styled from 'styled-components';
import ParticleBackground from '../BackgrooundAnimation/ParticleBackground';

import Particles from "react-particles-js"
import particlesConfig from "../../../src/components/BackgrooundAnimation/particleConfig";

export const LeftSection = styled.div`
  width: 90%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }

`;

