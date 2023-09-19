import React from "react";
import Image from "next/image";
const cart = ({
  item,
  index,
  handleRemoveFromCart,
  toggleViewBtn,
  addQuantity,
  reduceQuantity
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
        <div>
          <button onClick={() => reduceQuantity(item)}>-</button>
          {item.quantity}
          <button onClick={() => addQuantity(item)}>+</button>
        </div>
      </td>
      <td>"{item.data.description}"</td>
      <td>RM {item.data.price}</td>
      <td>
        <button
          className="RemoveFromWishlist"
          onClick={() => handleRemoveFromCart(item.data.id)}
        >
          &times;
        </button>
      </td>
    </>
  );
};
export default cart;
