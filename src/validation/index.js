export const loginValidation = (values) => {
      const errors = {};

  if (
    values.email.includes("@") === false ||
    values.email.includes(".") === false
  ) {
    errors.email = "Email not valid must be contain (@) and (.)";
  }

  if (values.password.length < 7 || values.password.length > 15) {
    errors.password = "Password must be form 7 characters to 15 characters";
  }

  if (values.username.length < 4 || values.username.length > 15) {
    errors.username = "Username must be form 4 characters to 15 characters";
  }

  return errors;
};
  


  //  title: "",
  //           price: "",
  //           image: "",
  //           description: "",
  //           rating: "",

export const InputValidation = (values) => {
  const errors = {};

  if(values.title.length < 4 || values.title.length > 15){
    errors.title = "Title must be form 4 characters to 15 characters";
  }

  if(values.price.length < 4 || values.price.length > 15){
    errors.price = "Price must be form 4 characters to 15 characters";
  }

  if(values.image.length < 4 || values.image.length > 999){
    errors.image = "Image must be form 4 characters to 999 characters";
  }
  if (values.description.length < 4 || values.description.length > 1000) {
    errors.description =
      "Description must be form 4 characters to 1000 characters";
  }

  const ratingNumber = Number(values.rating);
  if (isNaN(ratingNumber) || ratingNumber < 1 || ratingNumber > 5) {
    errors.rating = "Rating must be a number between 1 and 5";
  }

  return errors;
};
