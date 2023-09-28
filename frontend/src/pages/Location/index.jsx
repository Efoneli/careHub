import BasicMap from "../Location/LocationPicker";
import { Link } from 'react-router-dom'

const Location = () => {
  return (
    <>
      <div className="mx-4 p-2">
        <h2 className="heading text-center m-3">Book a Location</h2>
        <hr />
        <p className="text__para text-center p-2 mb-3 font-bold">
          Confirm your Location.
        </p>

        <BasicMap />

        <hr />
        <div className="flex justify-center items-center">
          <Link to='/doctors'>
          <button className="btn flex items-center justify-center mb-6">
            Pick Location
          </button>
          </Link>         
        </div>
      </div>
    </>
  );
};

export default Location;
