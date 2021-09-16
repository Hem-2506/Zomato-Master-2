import joi from "joi";

export const ValidateOrderId = (orderId) => {
    const Schema = joi.object({
      _id: joi.string().required(),
    });
  
    return Schema.validateAsync(orderId);
  };

  export const ValidateOrderDetails = (orderObj) => {
    const Schema =joi.object({
        orderDetails: joi.object({
            food: joi.string().required(), 
   quantity: joi.string().number().required(),
   paymode: joi.string().string().required(),
   status: joi.string().string().required(),
   paymentDetails: joi.object({
    itemTotal: joi.string().number().required(),
    promo: joi.string().number().required(),
    tax: joi.string().number().required(),
   }),
   phoneNumber: joi.array().items(joi.number()),
   address: joi.array().items(joi.string()),
        }),
    });
    return Schema.validateAsync(orderObj);
};