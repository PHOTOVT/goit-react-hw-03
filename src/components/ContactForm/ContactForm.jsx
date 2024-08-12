import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    const contactObject = {
      name: values.name,
      number: values.number,
    };

    onAddContact(contactObject);

    actions.resetForm();
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors }) => (
          <Form className={css.contactForm}>
            <div>
              <label className={css.contactFormLabel} htmlFor={nameFieldId}>
                Name
              </label>
              <Field
                className={css.contactFormField}
                type="text"
                name="name"
                id={nameFieldId}
              />
              <ErrorMessage
                className={css.contactFormError}
                name="name"
                component="div"
              />
            </div>
            <div>
              <label className={css.contactFormLabel} htmlFor={numberFieldId}>
                Number
              </label>
              <Field
                className={css.contactFormField}
                type="text"
                name="number"
                id={numberFieldId}
              />
              <ErrorMessage
                className={css.contactFormError}
                name="number"
                component="div"
              />
            </div>
            <button
              className={css.contactFormButton}
              type="submit"
              disabled={Object.keys(errors).length > 0}
            >
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
