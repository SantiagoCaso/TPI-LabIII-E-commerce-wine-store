import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../Theme/useContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./CartPage.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartPage = () => {
 const { theme } = useContext(ThemeContext);

 const [creditCard, setCreditCard] = useState({
    cardNumber: "",
    cardHolder: "",
    expirationDate: "",
    cvv: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCreditCard({
      ...creditCard,
      [name]: value,
    });
  };
  const succesedMessage = () => {
    toast.success('Payment Succesed!', {
      position: 'top-right',
      autoClose: 3000,       
      hideProgressBar: false, 
      closeOnClick: true,   
      pauseOnHover: true,    
    })
  }

  const errorMessage = () =>
    toast.error("Failed payment", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });


  const handleSubmit = (event) => {
    event.preventDefault();
    const { cardNumber, expirationDate, cvv } = creditCard;
  
    if (cardNumber.length === 16 || expirationDate.length === 4 ||cvv.length === 3) {
      succesedMessage();
    } else {
      errorMessage();
    }
  };



 return (
   <div className={theme}>
     <h2>Shopping Cart</h2>
     <div>
     
      <form onSubmit={handleSubmit}>
      <div className="container">
      <div className="card-info">
      
      <h2>Pay with your card!</h2>
        <div>
          <label className="card-info">Card number</label>
          <input className="input"
            type="text"
            name="cardNumber"
            value={creditCard.cardNumber}
            onChange={handleInputChange}
            placeholder="**** **** **** ****"
          />
        </div>
        <div>
          <label className="card-info">Name on card: </label>
          <input className="input"
            type="text"
            name="cardHolder"
            value={creditCard.cardHolder}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="card-info" >Expiry date: </label>
          <input className="input"
            type="text"
            name="expirationDate"
            value={creditCard.expirationDate}
            onChange={handleInputChange}
            placeholder="MM/YY"
          />
        </div>
        <div>
          <label className="card-info">CVV: </label>
          <input className="input"
            type="text"
            name="cvv"
            value={creditCard.cvv}
            onChange={handleInputChange}
          />
        </div>
        <Button className="botton-submit" type="submit">Next</Button>
        </div>
        </div>
      </form>
      <Button className="shopping-botton" as={Link} to="/products"> Back to shopping </Button>
    </div>
   </div>
 );
};

export default CartPage;
