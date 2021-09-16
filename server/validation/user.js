import joi from "joi";

export const ValidateUserId = (userId) => {
    const Schema = joi.object({
      _id: joi.string().required(),
    });
    return Schema.validateAsync(userId);
};
export const ValidateUserId2 = (userId2) => {
    const Schema = joi.object({
    userId: joi.string().required(),
    });
    return Schema.validateAsync(userId2);
};

export const ValidateUserObject = (userObj) => {
    const Schema =joi.object({
        userData: joi.object({
            fullname: joi.string().required(), 
   email: joi.string().email().required(),
   password: joi.string().number().required(),
   phoneNumber: joi.array().items(joi.number()),
   address: joi.array().items(joi.string()),
        }),
    });
    return Schema.validateAsync(userObj);
};
