import React from "react";
import { useParams } from "react-router-dom";
import { serviceDetails } from "../assets/data/serviceDetails";

const ServiceMoreDetail = () => {
  const { name } = useParams();
  const service = serviceDetails.find((item) => item.name === name);

  if (!service) {
    return <p>Service not found</p>;
  }

  const { history, image, cure, doctors } = service;

  return (
    <div className="service-detail p-5 bg-gray-100">
      <h2 className="heading text-center">
        {name}
      </h2>
      <h3 className="text-[26px] leading-9 text-headingColor font-[700] ">History</h3>
      <p className="text-gray-500 text-lg ">{history}</p>

      <img src={image} alt={name} className="max-w-full h-auto mx-auto block rounded-lg m-5" />
      <h3 className="text-[26px] leading-9 text-headingColor font-[700] ">Methods</h3>
      <p className="text-gray-500 text-lg">{cure.description}</p>
      {cure.methods.map((method, index) => (
        <div key={index}>
          <h4 className="text-[20px] leading-7 text-headingColor font-[600]">{method.name}</h4>
          <p className="text-gray-500 text-lg">{method.details}</p>
        </div>
      ))}
      <p className="text-gray-500 text-lg">{cure.note}</p>
      <h3 className="text-[26px] leading-9 text-headingColor font-[700]">Doctors in the Field</h3>
      <ul className="list-none p-0">
        {doctors.map((doctor) => (
          <li key={doctor} className="text-gray-500 text-lg">
            {doctor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceMoreDetail;
