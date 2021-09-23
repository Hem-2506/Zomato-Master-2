import React, { useEffect, useState }  from 'react';

// Components
import FloatMenuBtn from '../../Components/restaurant/Order-Online/FloatMenuBtn';
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
           <div className="w-full">
           <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
               <MenuListContainer />
               <MenuListContainer />
               <MenuListContainer />
               <MenuListContainer />
               <MenuListContainer />
               <MenuListContainer />
               <MenuListContainer />
               <MenuListContainer />
               <MenuListContainer />
               <MenuListContainer />
               <MenuListContainer />
               <MenuListContainer />
               </aside>
           </div>
           <FloatMenuBtn />
        </>
    );
};

export default OrderOnline;
