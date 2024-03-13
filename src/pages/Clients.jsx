
"use client"
import React from 'react'
import { useEffect, useState } from 'react';

const logos = [
  { name: 'Client 1', logo: '/clients/amway.jpeg', alt: 'Client 1 Logo', name: "AMWAY" },
  { name: 'Client 2', logo: '/clients/baptist.jpeg', alt: 'Client 2 Logo', name: "BAPTIST HEALTH CARE" },
  { name: 'Client 2', logo: '/clients/cisco.png', alt: 'Client 2 Logo', name: "CISCO" },
  { name: 'Client 2', logo: '/clients/ec_infosystems.png', alt: 'Client 2 Logo', name: "EC INFOSYSTEMS" },
  { name: 'Client 2', logo: '/clients/fox_entertainment.png', alt: 'Client 2 Logo', name: "FOX ENTERTAINMENT"},
  { name: 'Client 2', logo: '/clients/HItachi_logo.png', alt: 'Client 2 Logo', name: "HITACHI" },
  { name: 'Client 2', logo: '/clients/jp_morgan_chase.png', alt: 'Client 2 Logo', name: "JPMORGAN CHASE" },
  { name: 'Client 2', logo: '/clients/marriot_international.png', alt: 'Client 2 Logo', name: "MARRIOTT INTERNATIONAL" },
  { name: 'Client 2', logo: '/clients/National_broadcast_company.png', alt: 'Client 2 Logo', name: "NATIONAL BROADCASTING COMPANY"},
  { name: 'Client 2', logo: '/clients/northwestern_mutual.png', alt: 'Client 2 Logo', name: "NORTHWESTERN MUTUAL" },
  { name: 'Client 2', logo: '/clients/OneAmerica_sm_rgb.svg', alt: 'Client 2 Logo', name: "ONE AMERICA" },
  { name: 'Client 2', logo: '/clients/panera_bread.png', alt: 'Client 2 Logo', name: "PANERA BREAD" },
  { name: 'Client 2', logo: '/clients/ritz_carlton.jpeg', alt: 'Client 2 Logo', name: "RITZ CARLTON" },
  { name: 'Client 2', logo: '/clients/service_now.png', alt: 'Client 2 Logo', name: "SERVICENOW" },
  { name: 'Client 2', logo: '/clients/TRC.webp', alt: 'Client 2 Logo', name: "TRC HEALTH CARE " },
  { name: 'Client 2', logo: '/clients/verizons.png', alt: 'Client 2 Logo', name: "VERIZON" },

];

const Clients = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const numCols = windowWidth > 768 ? 4 : 2; // Change to 768 for tablet breakpoint

  return (
      <div className="container mx-auto p-4">
        <div className="mb-10">
          <h1 className="text-md font-bold">Home / Clients</h1>
        </div>
        <div className="">
          <h2 className="text-3xl font-bold mx-2"> Our Clients</h2>
          <div className="flex-grow border-b border-gray-400"></div>
          {/* <hr className="border-b-2 border-gray-400 mx-auto w-32" /> */}
          <p className=' lg:w-[62%] text-[16px] md:text-[17px] lg:text-[18px] py-3'>At Refyn Data, our clients are at the heart of everything we do. Partner with us for personalized solutions tailored to your business needs. Experience efficiency, reliability, and a workforce that propels your success forward.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center border p-3 md:p-4 lg:p-5">
              <img src={logo.logo} alt={logo.alt} className="max-h-24 md:max-h-32" />
              <div className="mt-2  text-center">
                <p className='text-[15px]'>{logo.name}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
  );
};

export default Clients;
