import React from "react";

const CrudyTablefila = ({ el, setDataEdit, deleteData }) => {
    let {name,origen,id} = el;
  return (
    <tr>
      <td>{name}</td>
      <td>{origen}</td>
      <td>
        <button onClick={() => setDataEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudyTablefila;
