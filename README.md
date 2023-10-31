Esta es una aplicación web creada con React. En el E-commerce de WinesStore tenemos 3 tipos de usuarios: guest, user (con una cuenta) y admin. El admin puede Agregar nuevos productos. El usuario puede ver esos productos previamnte agregados y crear una orden de compra. Mientras que el guest solo puede ver los productos. 
Un guest puede crear una cuenta y una vez que es user puede modificar su nombre de usuario. 
Un user y admin deben iniciar sesion para poder desarrolar sus actividades. 

Usuario admin: 
email: javier@gmail.com 
password: javi123

Usamos varios hooks: 
useState en muchos casos 
useContext para crear el toggle theme dark and light y para crear una orden de compra que se ve en la parte de Cart.
useMemo para la función que calcula el total de la orden que el usuario armó. 
useCallback para borrar todos los productos seleccionados del carrito de compras. 

