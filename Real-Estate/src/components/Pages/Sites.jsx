import React from 'react';
import Card from './Card';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'





const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '700px',
  margin:'10px'
}

function Sites() {
  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      
    },
    {
      url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       
    },
    {
      url: 'https://vijayakalpa.com/assets/img/gallery/1.jpg',
      
    },
  ];
  const posts = [


    {
      id: 1,
      title: 'Buying House',
      description:
        'he house you looked at today and wanted to think about until tomorrow may be the same house someone looked at yesterday and will buy today.',
      date: 'Apr16, 2020',
      datetime: '2020-04-16',
      category: { title: 'Marketing' },
      author: {
        "name": "Koki Adasi,",
        "role": "Koki & Associates, Inc.",
        imageUrl:
          'https://img.freepik.com/free-photo/3d-illustration-teenage-girl-with-hoodie_1142-32303.jpg?t=st=1712678908~exp=1712682508~hmac=d1f956242f8a3197e0f67d5ce3c403ed0743d4ac4b7d0d4b63b77b6165a372dd&w=740',
      },
    },
    {
      id: 2,
      title: 'RealEstate',
      description:
        'The location of this property is unbeatable, with easy access to schools, shopping centers, and public transportation',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        imageUrl:
          'https://img.freepik.com/free-photo/portrait-smiling-businessman-with-mustache-his-head-3d-rendering_1142-51486.jpg?t=st=1712678864~exp=1712682464~hmac=dfc7047f46b7b12ed35411da1398be727039d9d4a0339368e66cb62ab23e4775&w=740',
      },
    },
    {
      id: 3,
      "title": "RealEstate",
  "description": "Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world.",
  "date": "Dec 10, 2020",
  "datetime": "2020-12-10",
  "category": { "title": "Marketing" },
  "author": {
    "name": "Franklin D. Roosevelt",
    "role": "U.S. President",

        imageUrl:
          'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100279.jpg?t=st=1712678935~exp=1712682535~hmac=4e2ed3abdbeb5efc097cbbcead1190a0e59ee086e46f338856d6efec228d727f&w=740',
      },
    },
    // More posts...
  ]
  return (
    <>
    <div className="static h-screen py-24 " id='home'>
        <video autoPlay muted loop className='absolute top-0 left-0 w-full h-full object-cover bg-center z-[-1] '>
          <source src='Bg5.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="w-screen h-full my-2">
        <Card/>
      </div>




      {/* slide show */}

      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>


{/* Blogs section */}
<div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the famous blogs</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            About RealEstate
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
</>
  );
}

export default Sites;
