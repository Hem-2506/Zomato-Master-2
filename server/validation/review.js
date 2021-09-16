import joi from "joi";

export const ValidateReviewData = (rvData) => {
  const Schema = joi.object({
    reviewData: joi.string().required(),
  });

  return Schema.validateAsync(rvData);
};
export const ValidateDeleteId = (delId) => {
    const Schema = joi.object({
      _id: joi.string().required(),
    });
  
    return Schema.validateAsync(delId);
  };