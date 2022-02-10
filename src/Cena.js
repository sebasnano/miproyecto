import React from "react";

const Cena = ({ nombre, color, precio, setTotal }) => {
  const ruta = "https://html6.es/img/";
  const comprar = (elemto) => {
    setTotal((total) => total + precio);
    elemto.target.parentNode.parentNode.style.display = "none";
  };
  const imagen = `${ruta}rey_${nombre.toLowerCase()}.png`;
  return (
    <>
      <div className="rey" style={{ backgroundColor: color }}>
        <h1>{nombre}</h1>
        <img src={imagen} alt={nombre} />
        <div className="titulo">Precio:</div>
        <div className="precio">
          {precio}$ <button onClick={comprar}>Comprar</button>
        </div>
      </div>
    </>
  );
};

export default Cena;
