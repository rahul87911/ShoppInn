import React from 'react'
import MainCarousel from './../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import mens_kurta from '../../../data/mens_kurta';

export default function HomePage() {
  return (
    <div>
      <MainCarousel/>
      <div className='space-y-10 py-20 flex flex-col justify-center'>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"}/>
     
      </div>
    </div>
  )
}
