import React, { useContext } from 'react'
import { itemContext } from './Todo';

const DisplayItem = () => {
    const {items, editItem, deleteItem, removeAll} = useContext(itemContext);
    return (
        <>
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
        </>
    )
}

export default DisplayItem
