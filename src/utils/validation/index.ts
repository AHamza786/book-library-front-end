import * as Yup from "yup";

export const BookValidationScheme = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  category: Yup.string().required().label("Category"),
  price: Yup.number().required().label("Price"),
  description: Yup.string().required().label("Description"),
});
