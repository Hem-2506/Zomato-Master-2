// Importing Env Variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// // Configs
 import googleAuthConfig from "./config/google.config";
 import routeConfig from "./config/route.config"

// microservices routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restuarant";
import Food from "./API/Food";
import Order from "./API/orders";
import Reviews from "./API/reviews";
import User from "./API/User";
import Image from "./API/Image";
import MailService from "./API/Mail";
import Menu from "./API/menu"

// Database Connection
import ConnectDB from "./database/connection";

const zomato = express();

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false}));
zomato.use(helmet()); 
zomato.use(cors()); 
zomato.use(passport.initialize());
zomato.use(passport.session());

 
// Passport configuration
 googleAuthConfig(passport);
 routeConfig(passport);

zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/order", Order);
zomato.use("/reviews", Reviews);
zomato.use("/user", User); 
zomato.use("/image", Image); 
zomato.use("/mail", MailService);
zomato.use("/menu", Menu);

zomato.get ("/", (req,res) => res.json ({messsage: "Setup success"}));

const port = process.env.PORT || 4000;

zomato.listen(port, () => 
ConnectDB().then(() => console.log("Server is running"))
.catch(() => console.log("Server is running, but Database Connection failed")) );