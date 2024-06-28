import React from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from ".";
import { setBookData } from "../redux/slicers/book";
import { setIsModalOpen } from "../redux/slicers/modal";
import { BookProps, State, BookValidationScheme } from "../utils";

const Form = () => {
  const { book: books, selectedBook } = useSelector(
    (state: State) => state.book
  );
  const { isModalOpen } = useSelector((state: State) => state.modal);
  const dispatch: any = useDispatch();

  const onSubmitHandler = (values: BookProps) => {
    if (selectedBook?.name) {
      const updatedBooks: BookProps[] = books?.map((book: BookProps) => {
        if (book?.id === selectedBook?.id) {
          values.id = selectedBook?.id;
          return values;
        }
        return book;
      });
      dispatch(setBookData(updatedBooks));
    } else {
      values.id = Math.floor(1000 + Math.random() * 8000);
      const updatedBooks: BookProps[] = [...books, values];
      dispatch(setBookData(updatedBooks));
    }
    dispatch(setIsModalOpen(!isModalOpen));
  };

  const onDeleteHandler = () => {
    const updatedBooks: BookProps[] = books?.filter(
      (book: BookProps) => book?.id !== selectedBook?.id
    );
    dispatch(setBookData(updatedBooks));
    dispatch(setIsModalOpen(!isModalOpen));
  };

  return (
    <Formik
      initialValues={{
        name: selectedBook?.name || "",
        category: selectedBook?.category || "",
        price: selectedBook?.price || 0,
        description: selectedBook?.description || "",
        isCheck: selectedBook?.isCheck || false,
      }}
      onSubmit={onSubmitHandler}
      validationSchema={BookValidationScheme}
    >
      {({ handleChange, handleSubmit, touched, errors, values }) => (
        <div className="flex flex-col gap-8">
          <div className="flex justify-center font-bold text-lg">
            {selectedBook?.name ? "Modify Book Details" : "Add Book"}
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              id={"name"}
              placeholder={"Name"}
              value={values?.name}
              onChange={handleChange("name")}
              className="focus:outline-none  text-[#6E6D7A] border border-[#E7E8EC] w-full py-3 px-4 rounded-lg"
            />
            {touched.name && errors.name && (
              <div className="text-red-700 text-sm -mt-3">{errors.name}</div>
            )}

            <input
              id={"category"}
              placeholder={"Category"}
              value={values?.category}
              onChange={handleChange("category")}
              className="focus:outline-none text-[#6E6D7A] border border-[#E7E8EC] w-full py-3 px-4 gap-3 rounded-lg"
            />
            {touched.category && errors.category && (
              <div className="text-red-700 text-sm -mt-3">
                {errors.category}
              </div>
            )}
            <input
              id={"price"}
              placeholder={"Price"}
              value={values?.price}
              onChange={handleChange("price")}
              className="focus:outline-none text-[#6E6D7A] border border-[#E7E8EC] w-full py-3 px-4 gap-3 rounded-lg"
            />
            {touched.price && errors.price && (
              <div className="text-red-700 text-sm -mt-3">{errors.price}</div>
            )}
            <textarea
              id={"description"}
              placeholder={"Description"}
              value={values?.description}
              onChange={handleChange("description")}
              className="focus:outline-none text-[#6E6D7A] border border-[#E7E8EC] w-full py-3 px-4 gap-3 rounded-lg max-h-20"
            />
            {/* </div> */}
            {touched.description && errors.description && (
              <div className="text-red-700 text-sm -mt-3">
                {errors.description}
              </div>
            )}
          </div>
          <div className="flex justify-end gap-6">
            {selectedBook?.name && (
              <CustomButton
                onClick={onDeleteHandler}
                text={"Delete Book"}
                className={"w-32 bg-secondary hover:bg-red-500"}
              />
            )}
            <CustomButton
              onClick={handleSubmit}
              text={selectedBook?.name ? "Edit" : "Add"}
              className={"w-28 bg-primary hover:bg-primary_green"}
            />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Form;
