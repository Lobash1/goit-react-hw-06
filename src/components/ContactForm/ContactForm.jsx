import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  number: Yup.string()
    .matches(
      /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      "Invalid number. Example: 111-11-11"
    )
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm({ onAddContact }) {
  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    onAddContact(newContact);
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">
          Name
        </label>
        <Field className={css.input} id="name" name="name" type="text" />
        <ErrorMessage
          className={css.error}
          name="name"
          component="span"
        ></ErrorMessage>

        <label className={css.label} htmlFor="number">
          Number
        </label>
        <Field className={css.input} id="number" name="number" type="text" />
        <ErrorMessage
          className={css.error}
          name="number"
          component="span"
        ></ErrorMessage>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
