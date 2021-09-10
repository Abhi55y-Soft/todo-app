import React from 'react';
import todo from './todo.jpg';

const InputFeild = ({setInputData, inputData, toggleEdit, addItem}) => {
    return (
        <>
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
        </>
    )
}

export default InputFeild;