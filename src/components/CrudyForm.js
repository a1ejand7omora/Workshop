import React,{useEffect,useState} from "react";

const initailForm = {
  name:"",
  origen:"",
  id: null,
};

const CrudyForm = ({createData, upData, dataEdit, setDataEdit}) => {
  const [form, setForm] = useState(initailForm);

  useEffect(()=>{
    if(dataEdit){
      setForm(dataEdit);
    }else{
      setForm(initailForm);
    }

  },[dataEdit]);

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }; //Actualiza datos
// console.log(createData);


  const handleSubmit = (e) => {
    e.preventDefault();

  //   if(!form.name||!form.origen){
  //    //Validacionvacio
  //     alert("DATOS INCOMPLETOS");
  //    return;
  // }
    

    if(form.id === null) {//Registro por null vacio
      createData(form);
    } else {
      upData(form)
    }
    handleReset();

  };

  const handleReset = (e) => {
    setForm(initailForm);
    setDataEdit(null);
  };

  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Marca"
          onChange={handleChange}
          value={form.marca}
        />
        <input
          type="text"
          name="origen"
          placeholder="Contraseña"
          onChange={handleChange}
          value={form.origen}
        />
        <input type="submit" value="Registar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudyForm;
