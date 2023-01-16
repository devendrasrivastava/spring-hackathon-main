import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/BSHeader';
import ResponsiveAppBar from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import MediaCard from './Components/Butt0nBases/ButtonBases';
import SignUp from './Components/SignUp/SignUp';
import ContactUs from './Components/ContactUs/ContactUs';
import Services from './Components/Services/Services';
import MuiFooter from './Components/Footer/Footer';
import ActionAreaCard from './Components/AboutUs/AboutUs';
import SignInSide from './Components/LoginPage/SignInSide';
import Register from './Components/ForgetPassword/ForgetPassword';
import Footer from './Components/Footer/BSFooter';
import BSHeader from './Components/Header/BSHeader';
import BSFooter from './Components/Footer/BSFooter';




function App() {
  return (
    <div>
      
      <BrowserRouter>
        {/* <ResponsiveAppBar /> */}
        <BSHeader/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<ActionAreaCard />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<SignInSide />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetpassword" element={<Register />} />
        </Routes>
        {/* <StickyFooter /> */}
        
        <BSFooter/>
        
        
        
        {/* <MuiFooter/> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
