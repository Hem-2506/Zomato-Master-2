import { Route, Redirect } from "react-router-dom";

// HOC
import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

// Component
import Temp from "./Components/Temp";
import Home from "./Page/Home";
import overview from "./Page/Restaurant/overview";
import OrderOnline from "./Page/Restaurant/OrderOnline";

function App() {
  return(
  <>
  <Route path="/" exact>
    <Redirect to="/delivery"/>
  </Route>
   <HomeLayoutHOC path="/:type" exact component ={Home}/>
   <RestaurantLayoutHOC path="/restaurant/:id" exact component ={Temp}/>
   <RestaurantLayoutHOC
        path="/restaurant/:id/overview"
        exact
        component={overview}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/order-online"
        exact
        component={OrderOnline}
      />
      <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={Temp} />
      <RestaurantLayoutHOC
        path="/restaurant/:id/reviews"
        exact
        component={Temp}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/photos"
        exact
        component={Temp}
      />
  </>
  );
};

export default App;
