import React from 'react';
import RestaurantNavbar from '../Components/Navbar/restaurantNavbar';
import ImageGrid from '../Components/restaurant/ImageGrid';



const RestaurantLayout = () => {
    return (
        <>
        {" "}
      <RestaurantNavbar />
        <div className="container mx-auto px-4 lg:px-20">
          <ImageGrid 
          images={[
            "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
            "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
            "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
            "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
            "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
          ]}
          />
    </div>
        </>
     ) ;
};

export default RestaurantLayout;
