import React from 'react'
import { MainCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {

    const items = MainCarouselData.map((item) =><img className='cursor-pointer' role='presentation' src={item.image} alt='img'/> );


  return (
    <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={2000}
    infinite
    />
    
  )
}

export default MainCarousel
