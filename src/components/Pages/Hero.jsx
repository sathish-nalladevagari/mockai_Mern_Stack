import React from 'react'

function Hero() {
  return (
    <div className="grid grid-cols-1 w-full h-screen lg:grid-cols-2 text-black place-items-center">

    <div className="lg:col-start-1 lg:col-end-2 p-8 ">
        <h1 className="text-4xl font-bold mb-4">Your Hero Title</h1>
        <p className="text-lg mb-6">A brief description of your hero section.</p>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100">Learn More</button>
    </div>

    <div className="lg:col-start-2 lg:col-end-3 flex justify-center ">
        <img src="https://news.ubc.ca/wp-content/uploads/2023/08/AdobeStock_559145847-1024x682.jpeg" alt="Hero Image" className="object-cover w-1/2 rounded-md h-full"/>
    </div>
    </div>
  ) 
}

export default Hero