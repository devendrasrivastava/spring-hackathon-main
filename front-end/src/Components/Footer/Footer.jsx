import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import './Footer.css'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        natwest.com
      </Link>{' '}
      Created by Devendra-
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const footers = [
  {
    title: 'NatWest',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Wallet Features',
    description: [
      'Daily Offers',
      'Redeem Reward points',
      'Refer your friends',
      'Desktop App',
    ],
  },
  {
    title: 'Resources',
    description: ['Branch Locator', 'ATM Locator', 'Change your pin', 'Wallet Deactivation'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function PricingContent() {
  return (
    <React.Fragment>
      
     
      <div className="container my-4 user-footer-text">
        <hr />
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom >
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
            
          ))}
        </Grid>
        <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="https://www.facebook.com/" target={'_blank'}><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="https://twitter.com/" target={'_blank'}><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="https://dribbble.com/" target={'_blank'}><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="https://www.linkedin.com/" target={'_blank'}><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        <Copyright sx={{ mt: 5 }} />
        </div>
      {/* </Container> */}
      
      {/* End footer */}
    </React.Fragment>
  );
}

export default function MuiFooter() {
  return <PricingContent />;
}
