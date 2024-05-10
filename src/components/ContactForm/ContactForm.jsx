import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  usernumber: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  username: '',
  usernumber: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.username,
        number: values.usernumber,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.contactFormBox}>
        <div className={css.inputBox}>
          <label htmlFor={nameId}>Name</label>
          <Field
            className={css.inputField}
            type="text"
            name="username"
            id={nameId}
          ></Field>
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>
        <div className={css.inputBox}>
          <label htmlFor={numberId}>Number</label>
          <Field
            className={css.inputField}
            type="text"
            name="usernumber"
            id={numberId}
          ></Field>
          <ErrorMessage
            className={css.error}
            name="usernumber"
            component="span"
          />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
