import { Bedroom, Shower } from "../Icons/Icons";

const PropertyItem = ({ image, title, price, bedrooms, bathrooms }) => {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-600/10">
      <img src={image} alt={title} />
      <div className="p-6">
        <h4 className="text-2xl font-bold cursor-pointer">{title}</h4>
        <div className="mt-2">
          <span className="text-xl font-extrabold text-blue-600">{price}</span>{" "}
          /M
        </div>
      </div>
      <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
        <div className="flex items-center">
          <Bedroom></Bedroom>
          <p>
            <span className="font-bold text-gray-900">{bedrooms}</span> Bedrooms
          </p>
        </div>
        <div className="flex items-center">
          <Shower></Shower>
          <p>
            <span className="font-bold text-gray-900">{bathrooms}</span>{" "}
            Bathrooms
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
