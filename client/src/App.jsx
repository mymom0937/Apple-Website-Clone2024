import React from "react";

// Pages
import { Routes, Route } from "react-router-dom";
import Mains from "./Components/Mains.jsx";
import Iphones from "./Components/Pages/Iphones.jsx";
import Mac from "./Components/Pages/Mac.jsx";
import Four04 from "./Components/Pages/Four04.jsx";
import Productspages from "./Components/Pages/Productspages.jsx";
import Ipad from "./Components/Pages/Ipad.jsx";
import Music from "./Components/Pages/Music.jsx";
import Support from "./Components/Pages/Support.jsx";
import TV from "./Components/Pages/Tv.jsx";
import Watch from "./Components/Pages/Watch.jsx";
import Search from "./Components/Pages/Search.jsx";
import Cart from "./Components/Pages/Cart.jsx";
import SharedLayout from "./Components/Pages/SharedLayout.jsx";

// Styles CSS
// import "./commonResource/css/bootstrap.css";
// import "./commonResource/css/styles.css";
import "./assets/commonResource/css/bootstrap.css";
import "./assets/commonResource/css/styles.css";
//**********For Question #2 & #3 Start Here************************//

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Mains />} />
          <Route path="mac" element={<Mac />} />
          <Route path="iphone" element={<Iphones />} />
          <Route path="iphone/:productID" element={<Productspages />} />
          <Route path="ipad" element={<Ipad />} />
          <Route path="watch" element={<Watch />} />
          <Route path="tv" element={<TV />} />
          <Route path="music" element={<Music />} />
          <Route path="support" element={<Support />} />
          <Route path="search" element={<Search />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
      {/* <YoutubeVideos /> */}
    </>
  );
}

export default App;

//**********For Question #2 & #3 End Here************************//
