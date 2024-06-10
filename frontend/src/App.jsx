import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signin from './Components/Auth/Signin'
import ErrorPage from './ErrorPage'
import Signup from './Components/Auth/Register'
import EmailSucess from './Components/EmailSucess'
import Listings from './Components/Listings'
import ViewCharts from './Components/ViewCharts'
import ListingDetails from './Components/ListingDetails'
import CreateProfile from './Components/Auth/CreateProfile'
import Home from './Components/Landing/Home'
import Payment from './Components/Payment/Payment'
import SignInWarning from './SigninWarning'
import AddProperty from './Components/AddProperty'
import NewsDetail from './Components/NewsDetail'
import ViewProfiles from './Components/ViewProfiles'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/emailsuccess" element={<EmailSucess />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/viewcharts" element={<ViewCharts />} />
        <Route path="/listingdetails/:id" element={<ListingDetails />} />
        <Route path="/newsDetails/:id" element={<NewsDetail />} />
        <Route path="/createprofile" element={<CreateProfile />} />
        <Route path="/addProperty" element={<AddProperty />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/viewProfile" element={<ViewProfiles />} />
        <Route path="/errorSignin" element={<SignInWarning />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
