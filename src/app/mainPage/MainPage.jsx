"use client";
import React, { useState } from "react";
// Component
import Header from "./component/header";
import Index from "./component/index";
import imageData from "../../../data/images.json";

const mainPage=({ pageProps })=>{
  // search
  const [searchText, setSearchText] = useState();
  // toggle mobile menu
  const [isNavigateVisible, setIsNavigateVisible] = useState(false);
  // Wishlist toggle button
  const [isWishlistModal, setIsWishlistModal] = useState(false);
  // Wishlist toggle button
  const [isCartModal, setIsCartModal] = useState(false);

  const toggleSearchText =(e)=> {
    var search = e.toLowerCase();
    setSearchText(search);
  }
  // toggle mobile menu
  const toggleNavigateVisibility = () => {
    setIsNavigateVisible(!isNavigateVisible);
  };

  return (
    <div>
      <Header
        toggleNavigate={toggleNavigateVisibility}
        toggleSearchText={toggleSearchText}
        setIsWishlistModal={setIsWishlistModal}
        setIsCartModal={setIsCartModal}
      />
      <Index
        isNavigateVisible={isNavigateVisible}
        searchText={searchText}
        imageData={imageData}
        setIsWishlistModal={setIsWishlistModal}
        isWishlistModal={isWishlistModal}
        setIsCartModal={setIsCartModal}
        isCartModal={isCartModal}
        {...pageProps}
      />
    </div>
  );
}
export default mainPage;