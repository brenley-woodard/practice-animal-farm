import React from 'react';
import Animal from '../Animal/Animal';
import { animals } from '../../data';
import background from '../../background.png';
import './Main.css';

export default function Main() {
  return <main style={{ backgroundImage: `url(${background})` }}>
    {animals.map((prop) => (
      <Animal key={prop.name} {...prop} />
    ))}
  </main>;
}
