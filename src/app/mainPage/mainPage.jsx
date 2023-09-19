"use client";
import React, { useState } from "react";
// Component
import Header from "./component/header";
import Index from "./component/index";
import imageData from "../../../data/images.json";

export default function Home({ pageProps }) {
  // search
  const [searchText, setSearchText] = useState();
  // toggle mobile menu
  const [isNavigateVisible, setIsNavigateVisible] = useState(false);
  // Wishlist toggle button
  const [isWishlistModal, setIsWishlistModal] = useState(false);

  function toggleSearchText(e) {
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
        imageData={imageData}
        setIsWishlistModal={setIsWishlistModal}
      />
      <Index
        {...pageProps}
        isNavigateVisible={isNavigateVisible}
        searchText={searchText}
        imageData={imageData}
        setIsWishlistModal={setIsWishlistModal}
        isWishlistModal={isWishlistModal}
      />
    </div>
  );
}
