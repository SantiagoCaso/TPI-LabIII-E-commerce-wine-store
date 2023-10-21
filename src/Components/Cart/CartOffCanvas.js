import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GrCart } from "react-icons/gr";
import { OrderContext } from "../Order/OrderContext";

function CartOffCanvas() {
  const { order } = useContext(OrderContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary">
        <GrCart />
      </Button>
      {/* 
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Listado de Productos en el carrito de compras.</p>
          <ul>
            {order && order.length > 0 ? (
              order.map((product, index) => (
                <>
                  <li key={index}>
                    <p>Nombre: {product.orderName}</p>
                    <p>Cost: {product.orderCost}</p>
                    <p>Id: {product.orderId}</p>
                  </li>
                </>
              ))
            ) : (
              <p>El carrito está vacio</p>
            )}
          </ul>
        </Offcanvas.Body>
      </Offcanvas> */}
    </>
  );
}

export default CartOffCanvas;
