import React, { useRef, useState, useEffect } from "react";
import "./Listing.css";

const Listing = () => {
  const myRef = useRef();
  const [fixedPosition, setFixedPosition] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0,
      rootMargin: "-200px",
    };

    const observerFunction = function (entries) {
      const [entry] = entries;

      // let divTop = entry.boundingClientRect.top;
      // console.log(divTop, entry);

      if (entry.isIntersecting) {
        setFixedPosition(true);
      } else {
        setFixedPosition(false);
      }

      // Stop Observer after Intersecting

      // if (entry.isIntersecting) observer.unobserve(entry.target);
    };

    const observer = new IntersectionObserver(
      observerFunction,
      observerOptions
    );

    observer.observe(myRef.current);
  }, []);

  return (
    <div className="listing_container">
      <div
        ref={myRef}
        className={
          fixedPosition ? "filter_container testbg" : "filter_container"
        }
      >
        Filter Section
      </div>
      <div className="card_listing_container">
        {Array.from({ length: 11 }, (_, i) => <h1>{`Card ${i + 1}`}</h1>).map(
          (card, i) => (
            <AutoListCard key={i} title={card} />
          )
        )}
      </div>
    </div>
  );
};

const AutoListCard = ({ title }) => {
  return (
    <div className="auto_list_card_box">
      <div className="auto_list_card_box_content">{title}</div>
    </div>
  );
};

export default Listing;
