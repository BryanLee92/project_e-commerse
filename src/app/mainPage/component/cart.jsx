import React from "react";
import Image from "next/image";
const cart = ({
  item,
  index,
  handleRemoveFromCart,
  toggleViewBtn,
  addQuantity,
  reduceQuantity,
}) => {
  return (
    <>
      <td>{index + 1}</td>
      <td
        style={{ cursor: "pointer" }}
        onClick={() => toggleViewBtn(item.data)}
      >
        <Image
          src={item.data.imageUrl}
          alt={item.data.name}
          width={200}
          height={150}
          quality={100}
          className="wishlist-table__image"
        />
      </td>
      <td>
        <strong>{item.data.name}</strong>
      </td>
      <td>
        <button
          className="RemoveFromWishlist"
          onClick={() => reduceQuantity(item)}
        >
          -
        </button>
      </td>
      <td>{item.quantity}</td>
      <td>
        <button
          className="RemoveFromWishlist"
          onClick={() => addQuantity(item)}
        >
          +
        </button>
      </td>
      <td>RM {(item.data.price * item.quantity).toFixed(2)}</td>
      <td>
        <button
          className="RemoveFromWishlist"
          onClick={() => {
            handleRemoveFromCart(item.data.id)
          }}
        >
          &times;
        </button>
      </td>
    </>
  );
};
export default cart;
