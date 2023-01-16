import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignUp from '../Components/SignUp/SignUp';



test('render of Sign Up field should be correct',()=>{
  render(<SignUp/>,{wrapper: BrowserRouter});
  const usersignupField = screen.getByText("Sign Up");
  expect(usersignupField).toBeInTheDocument();
})

test('render of First name field should be correct',()=>{
  render(<SignUp/>,{wrapper: BrowserRouter});
  const usersignupField = screen.getByLabelText("First Name *");
  expect(usersignupField).toBeInTheDocument();
})

test('render of Last Name field should be correct',()=>{
  render(<SignUp/>,{wrapper: BrowserRouter});
  const usersignupField = screen.getByLabelText("Last Name *");
  expect(usersignupField).toBeInTheDocument();
})

test('render of City field should be correct',()=>{
  render(<SignUp/>,{wrapper: BrowserRouter});
  const usersignupField = screen.getByLabelText("City *");
  expect(usersignupField).toBeInTheDocument();
})

test('render of Age field should be correct',()=>{
  render(<SignUp/>,{wrapper: BrowserRouter});
  const usersignupField = screen.getByLabelText("Age *");
  expect(usersignupField).toBeInTheDocument();
})

export default SignUp