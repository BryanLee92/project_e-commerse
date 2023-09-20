import React from "react";
import Modal from "react-modal";

import ViewBtn from "./viewModel";
import WishList from "./wishlist";
import Cart from "./cart";

const Model = ({
  setViewModel,
  viewModel,
  productData,
  wishlistBtnIcon,
  setIsWishlistModal,
  isWishlistModal,
  wishlist,
  handleRemoveFromWishlist,
  toggleViewBtn,
  cartBtnIcon,
  setIsCartModal,
  isCartModal,
  setCart,
  cart,
  handleRemoveFromCart,
}) => {
  const addQuantity = (data) => {
    const existingItemIndex = cart.findIndex(
      (product) => product.data.id === data.data.id
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      const currentItem = updatedCart[existingItemIndex];
      if (currentItem.quantity < currentItem.data.total) {
        currentItem.quantity += 1;
        setCart(updatedCart);
      }
    }
  };

  const reduceQuantity = (data) => {
    const existingItemIndex = cart.findIndex(
      (product) => product.data.id === data.data.id
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      const currentItem = updatedCart[existingItemIndex];
      if (currentItem.quantity > 0) {
        const updatedItem = { ...currentItem };
        updatedItem.quantity -= 1;
        if (updatedItem.quantity === 0) {
          const updatedArray = updatedCart.splice(existingItemIndex, 1);
          setCart(updatedArray);
        } else {
          updatedCart[existingItemIndex] = updatedItem;
        }
        setCart(updatedCart);
      }
    }
  };

  return (
    <>
      {/* Preview button */}
      {productData ? (
        <Modal
          isOpen={viewModel}
          ariaHideApp={false}
          onRequestClose={() => setViewModel(false)}
        >
          <div className="model-close">
            <button onClick={() => setViewModel(false)}>&times;</button>
          </div>
          <ViewBtn
            productData={productData}
            wishlistBtnIcon={wishlistBtnIcon}
            cartBtnIcon={cartBtnIcon}
          />
        </Modal>
      ) : null}

      {/* wishlist */}
      <Modal
        isOpen={isWishlistModal}
        ariaHideApp={false}
        onRequestClose={() => setIsWishlistModal(false)}
      >
        <div className="model-close">
          <button onClick={() => setIsWishlistModal(false)}>&times;</button>
        </div>
        <div>
          {wishlist.length > 0 ? (
            <>
              <h2>Wishlist</h2>
              <hr />
              <table className="wishlist-table">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>Name:</th>
                    <th>Description:</th>
                    <th>Price:</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.map((item, index) => (
                    <tr key={item.id}>
                      <WishList
                        item={item}
                        index={index}
                        toggleViewBtn={toggleViewBtn}
                        handleRemoveFromWishlist={handleRemoveFromWishlist}
                        cartBtnIcon={cartBtnIcon}
                      />
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <div className="wishlist-table">
              <h2>Wishlist</h2>
              <hr />
              <p colSpan="5">No items in your wishlist</p>
            </div>
          )}
        </div>
      </Modal>

      {/* Cart */}
      <Modal
        isOpen={isCartModal}
        ariaHideApp={false}
        onRequestClose={() => setIsCartModal(false)}
      >
        <div className="model-close">
          <button onClick={() => setIsCartModal(false)}>&times;</button>
        </div>
        <div>
          {cart.length > 0 ? (
            <>
              <h2>Cart</h2>
              <hr />
              <table className="wishlist-table">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>Name:</th>
                    <th></th>
                    <th>Quantity:</th>
                    <th></th>
                    <th>Description:</th>
                    <th>Price:</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={item.data.id}>
                      <Cart
                        item={item}
                        index={index}
                        toggleViewBtn={toggleViewBtn}
                        handleRemoveFromCart={handleRemoveFromCart}
                        addQuantity={addQuantity}
                        reduceQuantity={reduceQuantity}
                      />
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <div className="wishlist-table">
              <h2>Cart</h2>
              <hr />
              <p colSpan="5">No items in your cart</p>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
export default Model;
