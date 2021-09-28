import React, { useEffect, useState }  from 'react';
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";


// Components
import FloatMenuBtn from '../../Components/restaurant/Order-Online/FloatMenuBtn';
import FoodItem from '../../Components/restaurant/Order-Online/FoodItem';
import FoodList from '../../Components/restaurant/Order-Online/FoodList';
import MenuListContainer from '../../Components/restaurant/Order-Online/MenuListContainer';

const OrderOnline = () => {
    const [selected, setSelected] = useState("");

  const onClickHandler = (e) => {
    if (e.target.id) {
      setSelected(e.target.id);
    }
    return;
  };
    return (
        <>
           <div className="w-full h-screen flex">
           <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
               <MenuListContainer />
               </aside>
            
               <div className="w-full px-3 md:w-3/4">
               <div className="pl-3 mb-4">
            <h2 className="text-xl font-semibold">Order Online</h2>
            <h4 className="flex items-center gap-2 font-light text-gray-500">
              <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
            </h4>
          </div>
            <section className="flex  h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
              <FoodList
              title="Recommended"
             items={[
                {image:"https://b.zmtcdn.com/data/dish_photos/9da/7d52427082fc2c7c14bbeb86546819da.jpg?fit=around|130:130&crop=130:130;*,*",
               title:"Biryani",
               price:"1000",
               rating:3,
               description:"Delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice." ,}
             ]}
              />
              <FoodList
              title="Pizza"
             items={[
                {image:"https://b.zmtcdn.com/data/dish_photos/9da/7d52427082fc2c7c14bbeb86546819da.jpg?fit=around|130:130&crop=130:130;*,*",
               title:"Biryani",
               price:"1000",
               rating:3,
               description:"Delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice." ,}
             ]}
              />
              {/* <div>
              <h2 className="bg-white top-0 w-full px-2 py-1 z-10 sticky text-xl font-semibold">Recommended</h2>
              <FoodItem
               image="https://b.zmtcdn.com/data/dish_photos/9da/7d52427082fc2c7c14bbeb86546819da.jpg?fit=around|130:130&crop=130:130;*,*"
               title="Biryani"
               price="1000"
               rating={3}
               description="Delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice." 
               />
              <FoodItem 
               image="https://b.zmtcdn.com/data/dish_photos/9da/7d52427082fc2c7c14bbeb86546819da.jpg?fit=around|130:130&crop=130:130;*,*"
               title="Biryani"
               price="1000"
               rating={3}
               description="Delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice." 
               />
              <FoodItem 
               image="https://b.zmtcdn.com/data/dish_photos/9da/7d52427082fc2c7c14bbeb86546819da.jpg?fit=around|130:130&crop=130:130;*,*"
               title="Biryani"
               price="1000"
               rating={3}
               description="Delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice." 
               />
              <FoodItem 
               image="https://b.zmtcdn.com/data/dish_photos/9da/7d52427082fc2c7c14bbeb86546819da.jpg?fit=around|130:130&crop=130:130;*,*"
               title="Biryani"
               price="1000"
               rating={3}
               description="Delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice." 
               />
          
              </div>
              <div>
              <h2 className="bg-white top-0  w-full px-2 py-1 z-10 sticky text-xl font-semibold">Pizza</h2>
              <FoodItem
               image="https://b.zmtcdn.com/data/dish_photos/9da/7d52427082fc2c7c14bbeb86546819da.jpg?fit=around|130:130&crop=130:130;*,*"
               title="Biryani"
               price="1000"
               rating={3}
               description="Delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice." 
               />
              <FoodItem 
               image="https://b.zmtcdn.com/data/dish_photos/9da/7d52427082fc2c7c14bbeb86546819da.jpg?fit=around|130:130&crop=130:130;*,*"
               title="Biryani"
               price="1000"
               rating={3}
               description="Delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice." 
               />
              <FoodItem 
               image="https://b.zmtcdn.com/data/dish_photos/9da/7d52427082fc2c7c14bbeb86546819da.jpg?fit=around|130:130&crop=130:130;*,*"
               title="Biryani"
               price="1000"
               rating={3}
               description="Delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice." 
               />
              <FoodItem 
               image="https://b.zmtcdn.com/data/dish_photos/9da/7d52427082fc2c7c14bbeb86546819da.jpg?fit=around|130:130&crop=130:130;*,*"
               title="Biryani"
               price="1000"
               rating={3}
               description="Delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice." 
               />
          
              </div>
              <div>
              <h2 className="bg-white top-0  w-full px-2 py-1 z-10 sticky text-xl font-semibold">Burgers</h2>
              <FoodItem
               image="https://b.zmtcdn.com/data/dish_photos/9da/7d52427082fc2c7c14bbeb86546819da.jpg?fit=around|130:130&crop=130:130;*,*"
               title="Biryani"
               price="1000"
               rating={3}
               description="Delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice." 
               />
              <FoodItem 
               image="https://b.zmtcdn.com/data/dish_photos/9da/7d52427082fc2c7c14bbeb86546819da.jpg?fit=around|130:130&crop=130:130;*,*"
               title="Biryani"
               price="1000"
               rating={3}
               description="Delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice." 
               />
          
              </div> */}
            </section>
          </div>
               </div>
           <FloatMenuBtn />
        </>
    );
};

export default OrderOnline;
