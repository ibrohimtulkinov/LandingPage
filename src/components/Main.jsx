import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './main/MainPage';
import Navbar from './navbar/Navbar';
import SecondLines from './secondline/SecondLine';
import Works from './works/Works';
import '../style.css';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import About from './about/AboutUs';
import OurModels from '../ourmodels/OurModels';
import { LangProvider } from '../context/langContext';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
      <div className='needed-bg'>
        <Navbar />
        <div id="home">
          <MainPage />
        </div>
        <div id="secondlines">
          <SecondLines />
        </div>
        </div>
        <div id="works">
          <Works />
        </div>
        <div id="models">
          <OurModels />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </>
    ),

  },
]);

export default function Main() {
  return (
    <LangProvider>

        <RouterProvider router={router} />

    </LangProvider>
  );
}
