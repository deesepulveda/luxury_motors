import React, { useEffect, useRef, useState } from "react";
import "./Marketing.css";
import NewsLetter from "./NewsLetter";

const Marketing = () => {
  const [animate, setAnimate] = useState(false);
  const marketingRef = useRef();

  useEffect(() => {
    const observFunc = (entries) => {
      const [entry] = entries;
      // console.log(entry);
      if (entry.isIntersecting) {
        setAnimate(true);
      }
    };

    const observOpt = {
      root: null,
      threshold: 0,
      rootMargin: "-50px",
    };

    const cardObserver = new IntersectionObserver(observFunc, observOpt);

    cardObserver.observe(marketingRef.current);
  }, []);

  return (
    <div className="marketing_container">
      <div className="marketing_card_wrapper" ref={marketingRef}>
        <MarketingCard
          title="showroom"
          listings="lorem ipsum"
          animate={animate}
        />
        <MarketingCard
          title="leasing"
          listings="lorem ipsum"
          animate={animate}
        />
        <MarketingCard
          title="concierge"
          listings="lorem ipsum"
          animate={animate}
        />
      </div>
      <NewsLetter />
    </div>
  );
};

const MarketingCard = ({ title, listings, animate }) => {
  return (
    <div className={animate ? "card_container moveIn" : "card_container"}>
      <div className="card_title">{title}</div>
      <div className="card_marketing_content_container">
        <div className="card_marketing_content_lists">
          <div className="content_lists_diamond"></div>
          <div>{listings}</div>
        </div>
        <div className="card_marketing_content_lists">
          <div className="content_lists_diamond"></div>
          <div>{listings}</div>
        </div>
        <div className="card_marketing_content_lists">
          <div className="content_lists_diamond"></div>
          <div>{listings}</div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
