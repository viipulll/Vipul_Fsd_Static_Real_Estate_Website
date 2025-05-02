import React from 'react'
import v1 from '../../assets/light-garden-luxury-pool-nature.jpg'
import v2 from '../../assets/swimming-pool-blue-water-tropical-garden-with-sea-view-background.jpg'
import v3 from '../../assets/swimming-pool.jpg'
import v4 from '../../assets/trees-design-house-lawn-wallpaper-preview.jpg'
function Villa() {
  const products = [
    {
      id: 1,
      name: 'Sea Breeze Villa',
      
      price: '10000 per/Day (Weekdays/Weekends) ',
      
      imageSrc: v2,
    },
    {
      id: 2,
      name: 'Beach side villa',
     
      price: '6000 per/Day (Weekdays) , 9000 per/Day (Weekends)',
      
      
      imageSrc: v3,
    },
    {
      id: 3,
      name: 'Sea Shore villa',
      
      price: '12000 per/Day (Weekdays) , 15000 per/Day (Weekends)',
      
      imageSrc: v4,
    },
    {
      id: 4,
      name: '5-star Peace ocean villa',
      
      price: 'Price increse according to day call for more',
      description: 'The house you looked at today and wanted to think about until tomorrow may be the same house someone looked at yesterday and will buy today.',
      imageSrc: 'https://img.freepik.com/free-photo/movie-night-by-pool-whole-family_1268-31098.jpg?w=1380&t=st=1712931632~exp=1712932232~hmac=09daea8d2764515f684a8b51027f29e5826cd2fe253febc36f6bd3092da410d0',
    },
  ]
  return (
    <>
    <div className="bg-gray-800 h-64 md:h-96 lg:h-screen flex items-center justify-center">
      {/* Replace the image URL with your actual image */}
      <img
        src={v1}
        alt="Banner Image"
        className="object-cover w-full h-full"
      />
    </div>


    <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Have a look at our top sites</h2>

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
          <div className="mt-4 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                <a href={product.href}>{product.name}</a>
              </h3>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>
            <p className="text-base font-semibold text-gray-900">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </>
  )
}

export default Villa