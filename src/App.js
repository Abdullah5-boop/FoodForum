import logo from './logo.svg';
import './App.css';
import Homepage from './Component/Homepage';
import Banner from './Component/Banner';
import Page1 from './Component/Page1';
import Page2 from './Component/Page2';
import SlideImg from './Component/Parallex/SlideImg';
import Page3 from './Component/Page3';
import Footer from './Component/Footer';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Lastpage from './Component/Lastpage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fetching from './Component/Fetching';
import HomepageMain from './Component/HomepageMain';
import UIview from './Component/UIview';
import UI2 from './Component/UI2';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomepageMain></HomepageMain>,
    },
    {
      path: "/fetching",
      element: <Fetching></Fetching>,
    },
    {
      path: "/",
      element: <Fetching></Fetching>,
      
      children: [
        {
          path: "fetching/1",
          element: <UIview/>,
        },
        {
          path: "fetching/2",
          element: <UI2/>,
        },
      ],
    },
   
  ]);

  return (
    <div className="App" >
      <RouterProvider router={router}>
      </RouterProvider>
      <div>


      </div>


    </div>
  );
}

export default App;
