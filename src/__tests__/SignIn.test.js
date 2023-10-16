import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { View } from 'react-native';
import { Formik } from 'formik';
import { SignInForm } from '../components/SignIn';

const SignInContainer = ({ onSubmit }) => {
  const initialValues = {
    username: '',
    password: '',
  };
  return (
    <View>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
}

describe('SignIn', () => {
  it('calls onSubmit function with correct arguments when form is submitted', async () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<SignInContainer onSubmit={onSubmit} />);
    const usernameInput = getByTestId('usernameInput');
    const passwordInput = getByTestId('passwordInput');
    const submitButton = getByTestId('submitButton');

   await waitFor(() => {
      fireEvent.changeText(usernameInput, 'testuser');
      fireEvent.changeText(passwordInput, 'password');
      fireEvent.press(submitButton);

      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: 'testuser',
        password: 'password',
      });
    });



  });
});