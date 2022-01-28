import React from "react";
import CrudyTablefila from "./CrudyTablefila";

const CrudyTable = ({ data, setDataEdit, deleteData }) => {
  return (
    <div>
      <h3>Tabla De Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Contraseña</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? ( //CONDICIONAL DATOS OCUPA3 LINEA DELATORYTESTIGO
            <tr>
              <td colSpan="3">Sin Datos</td>
            </tr>
          ) : (
            data.map((el) => (
              <CrudyTablefila
                key={el.id}
                el={el}
                setDataEdit={setDataEdit}
                deleteData={deleteData}
              />
            )) //atributo el
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudyTable;
