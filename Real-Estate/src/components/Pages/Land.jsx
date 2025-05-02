import React from 'react'
import bg from '../../assets/Bg6.mp4'
function Land() {
  const products = [
    {
      id: 1,
      name: 'Dlf cyber city',
      
      price: '1.2 lakh / sq ft',
      
      imageSrc: 'https://t3.ftcdn.net/jpg/04/32/20/42/360_F_432204282_kzoPMHoqIcIRqhn2s51hgZBdGKvHqJcR.jpg',
    },
    {
      id: 2,
      name: 'Nakhrola Gurgaon',
     
      price: '2.2 lakh / sq ft',
      
      imageSrc: 'https://rsandeshgroupinfra.com/wp-content/uploads/2022/05/3D-Map-Highway-Radiance-r-sandesh-group-infra-.jpg',
    },
    {
      id: 3,
      name: 'Wazirabad',
      
      price: '0.85 lakh / sq ft',
      
      imageSrc: 'https://4.imimg.com/data4/YT/VW/ANDROID-34162931/product.jpeg',
    },
    {
      id: 4,
      name: 'Nathupur',
      
      price: '3.12 lakh / sq ft',
      description: 'The house you looked at today and wanted to think about until tomorrow may be the same house someone looked at yesterday and will buy today.',
      imageSrc: 'https://is1-3.housingcdn.com/4f2250e8/a7eab5573fe84b4f23bf972845e025ae/v0/fs/keshvam_reality-wardha_road-nagpur-bhumesh_realtors.jpeg',
    },
  ]
  return (
    <>
    <div className="static h-screen py-24 " id='home'>
    <video autoPlay muted loop className='absolute top-0 left-0 w-full h-screen object-cover bg-center z-[-1] '>
      <source src={bg} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
   
   
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
              <div className="mt-4 flex justify-between">
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

export default Land