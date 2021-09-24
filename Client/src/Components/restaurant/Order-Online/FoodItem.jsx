import React from 'react';
import ReactStars from "react-rating-stars-component";

const FoodItem = (props) => {
    return (
        <>
            <div>
                <div className="w-24 h-24">
                    <img 
                    src={props.image}
                    alt="food"
                    className="w-full h-full rouned-lg"
                    />
                    </div>
                    <div>
                        <h3>{props.title}</h3>
                        <ReactStars count={5} value={props.rating} />
                        <h5>{props.price}</h5>
                        <p>{props.description}</p>
                    </div>
                    <div>
                </div>
            </div>
        </>
    );
};

export default FoodItem;
