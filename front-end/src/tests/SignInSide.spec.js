import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SignInSide from '../Components/LoginPage/SignInSide';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme();


test('renders login form', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <SignInSide />
      </ThemeProvider>
    );
    const usernameInput = getByLabelText('Email Address');
    const passwordInput = getByLabelText('Password');
    
    
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    
  });




// test('renders login form', () => {
  
//   render(<SignInSide />, {wrapper: BrowserRouter});
//   const usernameInput = screen.getByLabelText('Email Address');
//   const passwordInput = screen.getByLabelText('Password');

  
//   expect(usernameInput).toBeInTheDocument();
//   expect(passwordInput).toBeInTheDocument();

// });

export default SignInSide