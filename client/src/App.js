import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {getKfcData} from './redux/kfcSlice';
import {getIdentifierData} from './redux/kfcIdentifierSlice';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const {menu, loading} = useSelector((state) => state.kfc);
  useEffect(() => {
    dispatch(getKfcData());
    
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
    dispatch(getIdentifierData(e.target.elements[0].value));
  }
  return (
    <div className="menu-container">
      {
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='enter name' />
          <button>search</button>
        </form>
      }
      {loading && <div>Please wait Loading.....</div>}
      {
        !loading && menu.length > 0 && menu.map((item) => (
          <div className="menu-item--container" key={item.id}>
            <img src={item.img}/>
              <div className='menu-description'>
                <div>{item.name}</div>
                <div>${item.price}</div>
                <button>Add</button>
              </div>
          </div>
        ))
      }
    </div>
  )
}

export default App