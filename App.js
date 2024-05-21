import React,{useState,useEffect} from "react";
import {v4 as uuid} from "uuid";
import Header from "./Header";
import Adddquestions from "./Adddqestions";
import Addfeelings from "./Addfeelings";
import Display from "./Display";
import './App.css';
function App() {
  const LOCAL_STORAGE_KEY="Details";
const [values,setvalues]=useState([]);  

const addfeelingsHandler=(value)=>{
  setvalues([...values,{id:uuid(),...value}]);
}

const removeValueByIndex = (index) => {
  setvalues(values.filter((_, i) => i !== index));
};


const updateValue = (id, updatedFeel, updatedText) => {
  const updatedValues = values.map((value) => 
    value.id === id ? { ...value, feel: updatedFeel, text: updatedText } : value
  );
  setvalues(updatedValues);
};


useEffect(()=>{
  const storage=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if(storage) setvalues(storage);
  setvalues(storage);
},[]);

useEffect(()=>{
localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(values));
},[values]);

  return (
    <div className="container">
    <Header />
    <Adddquestions addfeelingsHandler={addfeelingsHandler} />
    <Addfeelings 
      values={values} 
      onDelete={removeValueByIndex} 
      onSave={updateValue} 
    />
  </div>
  );
}

export default App;
