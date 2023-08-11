import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {

  const [data, setdata] = useState([
    {
      id: 1,
      checkboxval : true,
      itemname: "Eat"
    },
    {
      id: 2,
      checkboxval : true,
      itemname: "Sleep"
    },
    {
      id: 3,
      checkboxval : true,
      itemname: "Repeat"
    }
  ]);

  const handleChange = (id) => {
    const listItems = data.map(item => 
      item.id===id ? {...item, checked:!item.checked} : item)
    setdata(listItems);
    localStorage.setItem("to_do_list", JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    // const listItems = [...data];
    // if (index-1 !== -1) {
    //   listItems.splice(index-1, 1);
    //   setdata(listItems);
    // }
    const listItems = data.filter(item => 
    item.id!==id)
    setdata(listItems);
    localStorage.setItem("to_do_list", JSON.stringify(listItems));
    
  }

  return (
    <main>
    {(data.length) ? 
      (<ul>
        {data.map(item => 
          (
            <li  className='item' key={item.id} > 
              <input type='checkbox' onChange={() => handleChange(item.id)} value={item.checkboxval} />

              <label style={(item.checked) ? {textDecoration: 'line-through'} : null}  onDoubleClick={() => handleChange(item.id)} >{item.itemname}</label>

              <FaTrashAlt role='button' tabIndex="0" onClick={() => handleDelete(item.id)} />
            </li>
            
          ))}
      </ul>):
    <p>Your list is empty</p>}
    </main>
    
  )
}

export default Content