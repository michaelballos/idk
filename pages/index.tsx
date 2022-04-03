import { Title, Text, Anchor } from '@mantine/core';
import Parallax from '../components/Parallax';
import ParallaxTwo from '../components/ParallaxTwo';
import Info from '../components/Info';

const HomePage = () => {
  return (
    <>
    <div className={'container'}>
      <Parallax />
        <Info />
      <Parallax />
      <ParallaxTwo /> 

      <ParallaxTwo /> 
    </div>
    </>
  );
}


export default HomePage;