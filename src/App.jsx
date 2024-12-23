
import { useState } from 'react';
import './App.css'
import CommonForm from './components/common/form'
import { addProductFormElements } from "@/config";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
};
function App() {
  const [formData, setFormData] = useState(initialFormData);
  const onSubmit = (event) => {
    event.preventDefault();
    setFormData(initialFormData);
  };

  const isFormValid = () => {
    return Object.keys(formData)
      .map((key) => formData[key] !== "")
      .every((item) => item);
  };
 
  return (
    <>
     <CommonForm
            formData={formData}
            setFormData={setFormData}
            buttonText={"Add"}
            formControls={addProductFormElements}
            onSubmit={onSubmit}
            isBtnDisabled={!isFormValid()}
          />
    </>
  )
}

export default App
