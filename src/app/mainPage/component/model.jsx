import React from "react";
import Modal from "react-modal";

import ViewBtn from "./viewModel";
import WishList from "./wishlist";
import Cart from "./cart";

const Model = ({
  productProps
}) => {

  return (
    <>
      {/* Preview button */}
      {productProps.productData ? (
        <Modal
          isOpen={productProps.viewModel}
          ariaHideApp={false}
          onRequestClose={() => productProps.setViewModel(false)}
        >
          <div className="model-close">
            <button onClick={() => productProps.setViewModel(false)}>&times;</button>
          </div>
          <ViewBtn
            productData={productProps.productData}
            wishlistBtnIcon={productProps.wishlistBtnIcon}
            cartBtnIcon={productProps.cartBtnIcon}
          />
        </Modal>
      ) : null}

      {/* wishlist */}
      <Modal
        isOpen={productProps.isWishlistModal}
        ariaHideApp={false}
        onRequestClose={() => productProps.setIsWishlistModal(false)}
      >
        <div className="model-close">
          <button onClick={() => productProps.setIsWishlistModal(false)}>&times;</button>
        </div>
        <div>
          {productProps.wishlist.length > 0 ? (
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
                  {productProps.wishlist.map((item, index) => (
                    <tr key={item.id}>
                      <WishList
                        item={item}
                        index={index}
                        toggleViewBtn={productProps.toggleViewBtn}
                        handleRemoveFromWishlist={productProps.handleRemoveFromWishlist}
                        cartBtnIcon={productProps.cartBtnIcon}
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
        isOpen={productProps.isCartModal}
        ariaHideApp={false}
        onRequestClose={() => productProps.setIsCartModal(false)}
      >
        <div className="model-close">
          <button onClick={() => productProps.setIsCartModal(false)}>&times;</button>
        </div>
        <div>
          {productProps.cart.length > 0 ? (
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
                    <th>Price:</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {productProps.cart.map((item, index) => (
                    <tr key={item.data.id}>
                      <Cart
                        item={item}
                        index={index}
                        toggleViewBtn={productProps.toggleViewBtn}
                        handleRemoveFromCart={productProps.handleRemoveFromCart}
                        addQuantity={productProps.addQuantity}
                        reduceQuantity={productProps.reduceQuantity}
                      />
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{float: 'right', display: 'flex', gap: '50px'}}>
                <h4>Total: </h4>
                <h3>RM {productProps.totalPrice.toFixed(2)}</h3>
              </div>
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
