import React from 'react';
import Introduce from '../components/Introduce';
import Carousels from '../components/Carousels';
import Describe from '../components/Describe';
import Partner from '../components/Partner';
import SpotLight from '../components/SpotLight';
import Footer from '../components/Footer';

export default function HomeContainer() {
  return (
    <div>
        <Introduce />
        <Carousels />
        <Describe />
        <Partner />
        <SpotLight />
        <Footer />

    </div>
  )
}
