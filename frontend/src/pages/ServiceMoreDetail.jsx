import React from "react";
import { useParams } from "react-router-dom";
import { serviceDetails } from "../assets/data/serviceDetails";

const ServiceMoreDetail = () => {
  const { name } = useParams();
  const service = serviceDetails.find((item) => item.name === name);

  if (!service) {
    return <p>Service not found</p>;
  }

  const { about, image, cure, doctors } = service;

  return (
    <div className="container">
    <div className="service-detail p-5 bg-gray-100">
      <h2 className="heading text-center mt-[30px] mb-[20px]">
        {name}
      </h2>
      <h3 className="text-[26px] leading-9 text-headingColor font-[700] mb-[20px]">About</h3>
      <p className="text-gray-500 text-lg mb-[20px]">{about}</p>

      <img src={image} alt={name} className="max-w-full h-auto mx-auto block rounded-lg mb-[20px]" />
      <h3 className="text-[26px] leading-9 text-headingColor font-[700] mb-[20px]">Methods</h3>
      <p className="text-gray-500 text-lg mb-[20px]">{cure.description}</p>
      {cure.methods.map((method, index) => (
        <div key={index}>
          <h4 className="text-[20px] leading-7 text-headingColor font-[600] mb-[20px]">{method.name}</h4>
          <p className="text-gray-500 text-lg mb-[20px]">{method.details}</p>
        </div>
      ))}
      <p className="text-gray-500 text-lg mb-[20px]">{cure.note}</p>
      <h3 className="text-[26px] leading-9 text-headingColor font-[700] mb-[20px]">Doctors in the Field</h3>
      <ul className="list-none p-0">
        {doctors.map((doctor) => (
          <li key={doctor} className="text-gray-500 text-lg">
            {doctor}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default ServiceMoreDetail;
