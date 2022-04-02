import { Title, Text, Anchor } from '@mantine/core';
import ParallaxBackground from '../components/ParallaxBackground';
import AboutMe from '../components/AboutMe';

const HomePage = () => {
  return (
    <>
    <div className={'container'}>
      <ParallaxBackground />
        <AboutMe />
      <ParallaxBackground /> 
    </div>
    </>
  );
}


export default HomePage;