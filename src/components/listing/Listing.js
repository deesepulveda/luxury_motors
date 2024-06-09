import React, { useState } from "react";
import "./Listing.css";
import AutoListCard from "./AutoListCard";
import { data } from "../../data/Data.js";

const Listing = () => {
  const [carData, setCarData] = useState(data);

  // Uniquely Set/Sort Make For Select Options

  const makeArr = new Set(
    data
      .map((item) => {
        return item.make;
      })
      .sort()
  );

  // Filter Data by Make

  const filterMake = (e) => {
    const curVal = e.currentTarget.value;

    curVal !== "all"
      ? setCarData(
          data.filter((item) => {
            return item.make === curVal;
          })
        )
      : setCarData(data);
  };

  return (
    <div className="listing_container">
      <div className="filter_container">
        <select name="make" id="" onChange={filterMake} className="">
          <option value="all">all</option>
          {Array.from(makeArr).map((item, i) => (
            <option key={i} value={item.make}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="card_listing_container">
        {carData.map((car) => (
          <AutoListCard
            key={car.id}
            carMake={car.make}
            carModel={car.model}
            carYear={car.year}
            carPrice={car.price}
            carTurbo={car.turbo}
            carHp={car.horsepower}
            carTrim={car.trim}
          />
        ))}
      </div>
    </div>
  );
};

export default Listing;
