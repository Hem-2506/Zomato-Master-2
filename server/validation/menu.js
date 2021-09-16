import joi from "joi";

export const ValidateMenuId = (menuId) => {
    const Schema = joi.object({
      _id: joi.string().required(),
    });
  
    return Schema.validateAsync(menuId);
  };

export const ValidateImageId = (imageId) => {
    const Schema = joi.object({
      _id: joi.string().required(),
    });
  
    return Schema.validateAsync(imageId);
  };