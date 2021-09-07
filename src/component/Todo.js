import React, { useState } from 'react'
import todo from './todo.jpg';

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
        <>
          <div className="main-div">
              <div className="child-div">

                <figure>
                    <img src={todo} height="50px" width="50px" alt="Todo App" />
                    <figcaption>Add Your List Here 😃 </figcaption>
                </figure>

                <div>
                  <input type="text" placeholder="✍️ Add Items..."
                  name='item'
                  value={inputData}
                  onChange={(e) => setInputData(e.target.value)} 
                  />
                  {
                    toggleEdit ? <i class="fa fa-plus-circle" aria-hidden="true" title="Add Item" onClick={addItem}></i>
                    : <i class="fa fa-edit" aria-hidden="true" title="Update Item"onClick={addItem}></i>
                  }
                  
                </div>

                <div>
                  {
                    items.map((item) => {
                      const {id, name} = item;
                        return (
                          <div key={id}>
                            <h3 style={{display: 'inline-block', marginRight: '5px', color: 'purple'}}>{name}</h3>
                            <i class="fa fa-edit" aria-hidden="true" title="Edit Item"
                            style={{marginRight: '5px'}}
                            onClick={() => editItem(id)}></i>
                            <i class="fa fa-trash-alt" aria-hidden="true" title="Delete Item" onClick={() => deleteItem(id)}></i>
                          </div>
                        );
                    })
                  }
                  
                </div>

                <div>
                  <button style={{marginTop: '10px', backgroundColor: 'lightslategray'}} onClick={removeAll}><span>Remove All</span></button>
                </div>

              </div>
          </div>  
        </>
    )
}

export default Todo
