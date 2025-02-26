import React, { useState } from 'react';
import { useCart, useDispatchCart } from '../components/ContextReducer';
// import Delete from '@material-ui/icons/Delete';
import { MdDelete } from "react-icons/md";

export default function Cart() {
  const [showGif, setShowGif] = useState(false); // State for showing GIF
  let data = useCart();
  let dispatch = useDispatchCart();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    )
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");

    let response = await fetch(`${backendUrl}/api/orderData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toLocaleString(),
        finalPrice: totalPrice
      })
    });

    if (response.status === 200) {
      setShowGif(true); // Trigger GIF display
      setTimeout(() => {
        setShowGif(false); // Hide GIF after 3 seconds
        dispatch({ type: "DROP" });
      }, 3000);
    }
  };

  return (
    <div>
      {showGif ? (
        <div className="text-center">
          <img src="https://media1.tenor.com/m/LeSVOZJUt-oAAAAd/muuve-rider.gif" alt="Order Placed Successfully" style={{ width: '150px' }} />
          <p className="fs-4 text-success">Your order has been placed successfully!</p>
        </div>
      ) : (
        <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
          <table className='table table-hover '>
            <thead className='text-success fs-4'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Option</th>
                <th scope='col'>Amount</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              {data.map((food, index) => (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{food.name}</td>
                  <td>{food.qty}</td>
                  <td>{food.size}</td>
                  <td>{food.price}</td>
                  <td>
                    <button type="button" className="btn p-0">
                      <MdDelete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <h1 className='fs-2'>Total Price: {totalPrice}/-</h1>
          </div>
          <div>
            <button className='btn bg-success mt-5' onClick={handleCheckOut}>
              Placed your Order 
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
