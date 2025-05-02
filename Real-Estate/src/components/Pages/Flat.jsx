import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '600px',
  margin:'10px'
}





function Flat() {


  const products = [
    {
      id: 1,
      name: 'Sea Breeze Villa',
      
      price: '10000 per/Day (Weekdays/Weekends) ',
      
      imageSrc: 'https://5.imimg.com/data5/CF/NU/LY/SELLER-99196338/3bhk-apartment-in-gurgaon.png',
    },
    {
      id: 2,
      name: 'Beach side villa',
     
      price: '6000 per/Day (Weekdays) , 9000 per/Day (Weekends)',
      
      
      imageSrc:'https://im.proptiger.com/1/640880/6/select-homes-images-for-elevation-of-dlf-select-homes-118118705.png',
    },
    {
      id: 3,
      name: 'Sea Shore villa',
      
      price: '12000 per/Day (Weekdays) , 15000 per/Day (Weekends)',
      
      imageSrc: 'https://mitahighendrealty.com/wp-content/uploads/2021/11/fs-1-758x564-1.png',
    },
    {
      id: 4,
      name: '5-star Peace ocean villa',
      
      price: 'Price increse according to day call for more',
      description: 'The house you looked at today and wanted to think about until tomorrow may be the same house someone looked at yesterday and will buy today.',
      imageSrc: 'https://www.yhataw.com/wp-content/uploads/2021/01/DLF-The-Ultima-01-900x600.jpg',
    },
  ]
 
  const slideImages = [
    {
      url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      
    },
    {
      url: 'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
       
    },
    {
      url: 'https://images.pexels.com/photos/7168058/pexels-photo-7168058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      
    },
    {
      url: 'https://images.pexels.com/photos/4713243/pexels-photo-4713243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      
    },
    {
      url: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      
    },
  ];

  
  
  return (
    <>
    
    <div className="slide-container">
        <Slide duration={2000}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    
      


      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Have a look to our top sites</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:scale-105  lg:h-80 transition-transform duration-300 ease-in-out">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              
              <div className="mt-4 flex flex-col">
                <div>
                  <h3 className="text-base font-bold text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  
                </div>
                <p className="text-base  font-semibold text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Flat