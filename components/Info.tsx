import { Title } from '@mantine/core'; 
import { Head } from 'next/document';

const Info = () => {

  return (
    <>

    <div className={'info'}>
        <h1 className={'firstName'} >
          Michael
        </h1>
        <h1 className={'lastName'}>
          Ballos
        </h1>
        <div className={'contactInfo'} />
    </div>
    </>
  )
}


export default Info;