import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import ParticleBackground from '../components/BackgrooundAnimation/ParticleBackground';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section, ProfileImg } from '../styles/GlobalComponents';
const Home = () => {
  return (
    <Layout>
        <Hero />
        <Timeline />
      <Projects />
      <Technologies />
    </Layout>
  );
};

export default Home;
