import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useSignUp from '../hooks/useSignUp';
import theme from '../theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    padding: '0.5rem',
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    borderRadius: 5,
    marginBottom: '1rem',
    width: '100%',
  },
  errorText: {
    color: theme.colors.error,
    marginBottom: '1rem',
  },
  button: {
    padding: '1rem',
    backgroundColor: theme.colors.primary,
    color: 'white',
    border: 'none',
    borderRadius: '0.25rem',
    width: '100%',
  },
});

const SignUpForm = () => {
  const [signUp] = useSignUp();
  const initialValues = {
    username: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(5, 'Username must be at least 5 characters')
      .max(30, 'Username must be at most 30 characters')
      .required('Username is required'),
    password: Yup.string()
      .min(5, 'Password must be at least 5 characters')
      .max(50, 'Password must be at most 50 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const onSubmit = (values) => {
    const { username, password } = values;
    signUp({ username, password });
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form style={styles.container}>
          <div style={{ marginBottom: '1rem', width: '100%' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Username
            </label>
            <Field type="text" name="username" id="username" style={styles.input} />
            <ErrorMessage name="username" component="div" style={styles.errorText} />
          </div>

          <div style={{ marginBottom: '1rem', width: '100%' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Password
            </label>
            <Field type="password" name="password" id="password" style={styles.input} />
            <ErrorMessage name="password" component="div" style={styles.errorText} />
          </div>

          <div style={{ marginBottom: '1rem', width: '100%' }}>
            <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Confirm Password
            </label>
            <Field type="password" name="confirmPassword" id="confirmPassword" style={styles.input} />
            <ErrorMessage name="confirmPassword" component="div" style={styles.errorText} />
          </div>

          <button type="submit" disabled={isSubmitting} style={styles.button}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;

