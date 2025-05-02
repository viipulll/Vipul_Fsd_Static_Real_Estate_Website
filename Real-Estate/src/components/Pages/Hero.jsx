import React from 'react';
import { ReactTyped } from 'react-typed';
import bg1 from '../../assets/5031099-hd_1920_1080_30fps.mp4'


function Home() {
  const stats = [
    { id: 1, name: 'Happpy Customers', value: '44,000+' },
    { id: 2, name: 'Assets under holding', value: '119 Crore' },
    { id: 3, name: 'New Customers annually', value: '46,000' },
  ]
  return (
    <>
    <div className="static h-[650px] py-24 " id='home'>
     <video autoPlay muted loop className='absolute top-0 left-0 w-full h-full object-cover bg-center z-[-1] opacity-95'>
  <source src={bg1} type='video/mp4' />
  Your browser does not support the video tag.
</video>

      <div className="max-w-[1240px] mx-auto text-center flex flex-col justify-center h-full">

        <h2 className="text-white  mx-auto font-bold md:text-[80px] text-3xl md:p-[24px] p-[15px] ">Real-Estate Soultions</h2>

        <div className="text-[25px] md:text-[50px] bg-white bg-clip-text text-transparent font-bold md:p-[24px] p-[15px]">
          <ReactTyped
            className="pl-3"
            strings={['Deals with all type of', 'properties', 'flat/villas/plot','in Delhi NCR']}
            typeSpeed={100}
            loop
          />
        </div>
        </div>
    </div>
{/* ------------------------------------------------------------------ */}

{/* ----------------------------------------------------------- */}
    <div className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}

export default Home;
