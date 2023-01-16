import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignUp from '../Components/SignUp/SignUp';



test('render of Sign up field should be correct',()=>{
  render(<SignUp/>,{wrapper: BrowserRouter});
  const usersignupField = screen.getByText("Sign Up");
  expect(usersignupField).toBeInTheDocument();
})




export default SignUp