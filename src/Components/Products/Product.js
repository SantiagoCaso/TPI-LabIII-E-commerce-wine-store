import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Products.css";
import { useContext } from "react";
import { OrderContext } from "../Order/OrderContext";
import { CartContext } from "../Cart/CartContext";
import { getAuth } from "firebase/auth";
import { succesedMessage, warnMessage } from "../Tostify/MessagesToastify";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase/Firebase";
import { collection } from "firebase/firestore";

function CardProduct({ props, index }) {
  const { name, winery, vintage, type, url, cost } = props;
  const { order, setOrder } = useContext(OrderContext);
  const [newProduct, setNewProduct] = useState({
    orderName: "",
    orderCost: 0,
    orderImg: "",
    orderId: 0,
  });
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    // Actualiza newProduct cuando las props cambian
    setNewProduct({
      orderName: name,
      orderCost: cost,
      orderImg: url,
      orderId: index,
    });
  }, [name, cost, url, index]);

  // añadir un producto a la variable global de pedido
  const addOrder = () => {
    setOrder([...order, newProduct]);
    console.log(order);
    console.log({ name });
    succesedMessage("Wine added to shopping cart");
  };

  //funcion para que un guest inicie sesion
  const goToLogin = () => {
    warnMessage("You have to login to make an order");
    navigate("/login");
  };

  //funcion para que el admin elimine un producto de la collecion de firebase
  const delateProdcut = async () => {
    console.log("Borrando producto");

    // const productRef = db.collection("products").doc(productId);
    // try {
    //   await productRef.delete();
    //   console.log("Producto borrado exitosamente");
    // } catch (error) {
    //   console.error("Error al borrar el producto:", error);
    // }
  };

  return (
    <div>
      <Card className="card">
        <Card.Img className="card-img" variant="top" src={url} alt={name} />
        <Card.Body>
          <Card.Title>
            <b>{name}</b>
          </Card.Title>
          <Card.Text className="card-text">
            <b>Winery: </b> {winery}
          </Card.Text>
          <Card.Text className="card-text">
            <b> Vintage: </b> {vintage}
          </Card.Text>
          <Card.Text className="card-text">
            <b> Wine Type: </b>
            {type}
          </Card.Text>
          <Card.Text className="card-text">
            <b>Cost:</b> ${cost}
          </Card.Text>
          {user && user.email ? (
            user.email === "santiagoignaciocaso@gmail.com" ? (
              <div className="product-admin-container">
                <Button
                  className="animated-button"
                  variant="danger"
                  onClick={delateProdcut}
                >
                  Delate product
                </Button>
              </div>
            ) : (
              <div className="product-user-container">
                <Button className="animated-button" onClick={addOrder}>
                  Add to cart
                </Button>
              </div>
            )
          ) : (
            <div className="product-user-container">
              <Button className="animated-button" onClick={goToLogin}>
                Add to cart
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardProduct;
