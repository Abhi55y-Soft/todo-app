import React, { createContext, useState } from 'react';
import DisplayItem from './DisplayItem';
import InputField from './InputField';

export const itemContext = createContext();
const Todo = () => {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);
  const [toggleEdit, setToggleEdit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () => {
    if (!inputData){
      alert('Please fill data 🥺')
    }
    else if (inputData && !toggleEdit){
      setItems(
        items.map((item) => {
          if (item.id === isEditItem){
            return{...item, name: inputData}
          }
          return item;
        })
      );
      setToggleEdit(true);
      setInputData('');
      setIsEditItem(null);
    }
    else{
      const allInputData = {id: new Date().getTime().toString(), name: inputData}
      setItems([...items, allInputData]);
      setInputData('');
    }
  }

  const deleteItem = (index) => {
    const updatedItems = items.filter((item) => {
      const {id} = item;
      return id !== index;
    })
    setItems(updatedItems);
  }

  const editItem = (index) => {
    const newEditItem = items.find((item) => {
      const {id} = item;
      return id === index;
    });
    setToggleEdit(false);
    setInputData(newEditItem.name);
    setIsEditItem(index); 
  }

  const removeAll = () => {
    setItems([]);
  }
    return (
        <itemContext.Provider value={{inputData, setInputData, items, addItem, toggleEdit, editItem, deleteItem,removeAll}}>
          <div className="main-div">
              <div className="child-div">
                < InputField />
                < DisplayItem />
              </div>
          </div>  
        </itemContext.Provider>
    )
}

export default Todo;
