import { useState } from 'react'
import './index.css'
import Background from './components/Background'
import Footer from './components/Footer'
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Programs from './pages/Programs'
import Waitlist from './pages/Waitlist'
import Contact from './pages/Contact'
import About from './pages/about/About'
import GetInvolved from './pages/GetInvolved'
import Resources from './pages/Resources'
import WhoWeAre from './pages/about/WhoWeAre'
import MeetOurStaff from './pages/about/MeetOurStaff'
import MeetOurBod from './pages/about/MeetOurBod'

function App() {

  return (
   <div className = "h-screen w-full flex flex-col overflow-auto">
    <Background/>
    <Header/>
    <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/programs" element = {<Programs/>}/>
        <Route path = "/waitlist" element = {<Waitlist/>}/>
        <Route path = "/contact" element = {<Contact/>}/>

        <Route path = "/about" element = {<About/>}>
            <Route path = "who-we-are" element = {<WhoWeAre/>}/>
            <Route path = "meet-our-staff" element = {<MeetOurStaff/>}/>
            <Route path = "meet-our-bod" element = {<MeetOurBod/>}/>
        </Route>

        <Route path = "/get-involved" element = {<GetInvolved/>}/>
        <Route path = "/resources" element = {<Resources/>}/>

    </Routes>
    <Footer/>
   </div>
  )
}



export default App
