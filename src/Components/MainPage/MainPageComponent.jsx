import React from 'react'
import AdsComponent from './AdsComponent'
import AdvsXLComponent from './AdvsXLComponent'
import IconBoxesComponent from './IconBoxesComponent'
import NewsLetterComponent from './NewsLetterComponent'
import ProductsComponent from './ProductsComponent'
import SliderComp from './SliderComp'
export default function MainPageComponent() {
  return (
    <>
      <SliderComp />
      <AdsComponent />
      <ProductsComponent />
      <AdvsXLComponent />
      <IconBoxesComponent />
      <NewsLetterComponent />
    </>
  )
}
