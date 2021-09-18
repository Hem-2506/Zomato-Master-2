import React, { useState, useEffect } from "react";

// Components
import DeliveryCarousel from './DeliveryCarousel';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';

 const Delivery = () => {
const [restaurantList] = useState([
   {
_id: "123456",
photos:["https://b.zmtcdn.com/data/dish_photos/0a5/167b8a27b16d1656033f6f341917f0a5.jpg?output-format=webp"],
cuisine: ["Street Food", "Beverages", "Tea"],
averageCost: 70,
isPro: true,
isOff: 80,
durationOfdelivery:47,
restaurantReviewValue: 4.12,
},
   {
_id: "123456-2",
photos:["https://b.zmtcdn.com/data/pictures/chains/3/19604063/419eae0f17e3c72b7c492fb2160d1cca.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
name: "Muzzaffarabad Biryani",
cuisine: ["Biryani"],
averageCost: 100,
isPro: true,
isOff: 80,
durationOfdelivery:47,
restaurantReviewValue: 4.1,
},
   {
_id: "123456-3",
photos:["https://b.zmtcdn.com/data/pictures/8/800228/9746cf43dfb4217bf76988aba7cd23c5.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
cuisine: ["Fast Food",  "Chinese", "South Indian", "Beverages"],
name: "Marksmen",
averageCost: 430,
isPro: true,
isOff: 80,
durationOfdelivery:47,
restaurantReviewValue: 4.1,
},

])


    return (
        <>
            <DeliveryCarousel />
            {/* <Brand /> */}
            <div className="flex justify-between flex-wrap">
            {restaurantList.map((restaurant) => (
          <RestaurantCard
            {...restaurant}
            key={restaurant._id}
          />
        ))}
            </div>
        </>
    );
};

export default Delivery;
