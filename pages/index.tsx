import ParallaxPlain from '../components/ParallaxPlain';
import LastName from '../components/LastName';
import FirstName from '../components/FirstName';
import ParallaxTechVaporwave from '../components/ParallaxTechVaporwave';
import ICanWrite from '../components/ICanWrite';

const HomePage = () => {
  return (
    <>
    <div className={'container'}>
      <ParallaxPlain />
      <div className={'info'}>
        <FirstName />  
      </div>
      <div className={'contactInfo'}>
      
      </div>
      <ParallaxPlain  />
      <ParallaxTechVaporwave />
    </div>
    </>
  );
}


export default HomePage;