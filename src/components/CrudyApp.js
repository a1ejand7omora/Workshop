import CrudyForm from "./CrudyForm";
import CrudyTable from "./CrudyTable";
import React, { useState } from "react";

const initdb = [
  { id: 1, name: "renault", origen: "francia" },
  { id: 2, name: "alpine", origen: "francia" },
  { id: 3, name: "citroen", origen: "francia" },
];

const CrudyApp = () => {
  const [bd, setBd] = useState(initdb); //ESTADO INICIAL DE BD

  const [dataEdit, setDataEdit] = useState(null); //estado de registro
  //funciones
  const createData = (data) => {
    setBd([...bd, data]);
    data.id = Date.now();
   
  };
  const upData = (data) => {
    let newData = bd.map((el)=>(el.id === data.id ? data:el));
    setBd(newData); 
  };


  const deleteData = (id) => {};

  return (
    <div>
      <h2>CRUDY App</h2>
      <CrudyForm //4prop 1valor 3funciones
        createData={createData}
        upData={upData}
        dataEdit={dataEdit}
        setDataEdit={setDataEdit}
      />
      <CrudyTable data={bd} setDataEdit={setDataEdit} deleteData={deleteData} />
    </div>
  );
};

export default CrudyApp;
