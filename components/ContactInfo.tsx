import { useState } from 'react';
import { Button, Collapse } from '@mantine/core';

function ContactInfo = () => {
  const [opened, setOpen] = useState(false);
  const info = {
    Email: 'ballos.michael@gmail.com',
    Phone: '(316) 223-2223',
    Twitter: '@michaelballos',
  }

  const btnInfo = Object.keys(info);
  const contactButton =  btnInfo.map((key) => {
  return (
    <>
      <Button onClick={() => setOpen((o) => !o)}>
        {key}
      </Button><Collapse in={opened}>
        {info[key]}
      </Collapse>
    </>
  )});
 
  return contactButton; 
}