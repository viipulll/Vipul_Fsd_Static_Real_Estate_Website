import React, { useContext } from 'react';
import { PropertyContext } from '../../Context/UserContext';
import bg from '../../assets/360_F_412838417_dTT9Q9puBtEzwPMicYnDC5wmqCGHh11B.jpg';
import bg2 from '../../assets/gurugram-india-29-sep-2020-600nw-1824038999.jpg'
import bg3 from '../../assets/beautiful-landscape-with-small-village_23-2149721819.jpg'
import bg4 from '../../assets/outside-view-of-a-office-building-with-blue-windows.jpg'
import bg5 from '../../assets/3d-electric-car-building.jpg'
import bg6 from '../../assets/3d-house-model-with-modern-architecture.jpg'

const Card = () => {
  const { properties } = useContext(PropertyContext);

  return (
    <>
      
    
      <div className='flex flex-wrap justify-center items-center gap-28  md:gap-24 mx-auto'>
  <div className='flex flex-col justify-center items-center shadow-2xl rounded-xl p-5 '>
    <img className="w-full max-w-[400px] rounded-tl-full -mt-20" src={bg} alt="Property" />
    <h1 className="font-bold text-xl">{properties.price}</h1>
    <p className="text-gray-700 text-base">456, Sector 29, Gurgaon.</p>
  </div>

  <div className='flex flex-col justify-center items-center shadow-2xl rounded-xl p-5'>
    <img className="w-full max-w-[400px] rounded-tl-full -mt-20" src={bg2} alt="Property" />
    <h1 className="font-bold text-xl">$300000</h1>
    <p className="text-gray-700 text-base">123, Main Street, Connaught Place.
</p>
  </div>


  <div className='flex flex-col justify-center items-center shadow-2xl rounded-xl p-5'>
    <img className="w-full max-w-[400px] rounded-tl-full -mt-20" src={bg4} alt="Property" />
    <h1 className="font-bold text-xl">$400000</h1>
    <p className="text-gray-700 text-base">789, Noida Sector 18, Uttar Pradesh.
</p>
  </div>

  <div className='flex flex-col justify-center items-center shadow-2xl rounded-xl p-5'>
    <img className="w-full max-w-[400px] rounded-tl-full -mt-20" src={bg3} alt="Property" />
    <h1 className="font-bold text-xl">$500000</h1>
    <p className="text-gray-700 text-base">654, Dwarka Sector 10, South West Delhi, .
</p>
  </div>

  <div className='flex flex-col justify-center items-center shadow-2xl rounded-xl p-5'>
    <img className="w-full max-w-[400px] rounded-tl-full -mt-20" src={bg5} alt="Property" />
    <h1 className="font-bold text-xl">$600000</h1>
    <p className="text-gray-700 text-base">987, Greater Noida West, Gautam Buddh Nagar, </p>
  </div>
  
  <div className='flex flex-col justify-center items-center shadow-2xl rounded-xl p-5'>
    <img className="w-full max-w-[400px] rounded-tl-full -mt-20" src={bg6} alt="Property" />
    <h1 className="font-bold text-xl">$700000</h1>
    <p className="text-gray-700 text-base">234, DLF Cyber City, Phase 3, Gurugram
</p>
  </div>

  {/* Add more card components here as needed */}
</div>




        
      

    </>
  );
};

export default Card;
