import React from 'react';

import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

import RestaurantNavbar from '../Components/Navbar/restaurantNavbar';
import ImageGrid from '../Components/restaurant/ImageGrid';
import RestaurantInfo from '../Components/restaurant/RestaurantInfo';
import InfoButtons from '../Components/restaurant/InfoButton';
import TabContainer from '../Components/restaurant/Tabs';

const RestaurantLayout = (props) => {
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
          
    <RestaurantInfo
          name="Mumbai Xpress"
          restaurantRating="3.5"
          deliveryRating="3.2"
          cuisine="North Indian, Fast Food, Chinese, Street Food"
          address="Basavanagudi, Banglore"
        />
         <div className="my-4 flex flex-wrap gap-3">
          <InfoButtons isActive>
            <TiStarOutline /> Add Review
          </InfoButtons>
          <InfoButtons>
            <RiDirectionLine /> Direction
          </InfoButtons>
          <InfoButtons>
            <BiBookmarkPlus /> Bookmark
          </InfoButtons>
          <InfoButtons>
            <RiShareForwardLine /> Share
          </InfoButtons>
        </div>
        <div className="my-10">
          <TabContainer></TabContainer>
        </div>
        <div className="relative">{props.children}</div>
        </div>
        </>
     ) ;
};

export default RestaurantLayout;
