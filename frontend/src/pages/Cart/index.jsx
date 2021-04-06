import React from "react";
import { Button, Table } from "react-bootstrap";
import { useCart, useRouter } from "../../hooks";

const Cart = () => {
  const { cart, countIncrease, removeFromCart } = useCart();
  const router = useRouter();

  return (
    <div className="cart-wrapper container mt-4">
      {cart.count ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.cartItems.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <img src={item.image} alt={item.image} />
                </td>
                <td>
                  <Button varian="primary" onClick={() => removeFromCart(item)}>
                    -
                  </Button>
                  {item.quantity}
                  <Button varian="primary" onClick={() => countIncrease(item)}>
                    +
                  </Button>
                </td>
                <td>{item.price * item.quantity}</td>
                <td>
                  <Button variant="danger">Remove</Button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="5">Total: {cart.sum}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => router.push("/confirm")}
                >
                  Check out
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <div>Cart empty</div>
      )}
    </div>
  );
};

export default Cart;
