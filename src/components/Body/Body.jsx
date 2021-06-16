import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Description } from '../description/Description';
import { Item } from '../Item/Item';

export function Body(props) {
  const [items, setItems] = useState([]);
  console.log(items.content)

  const getData = async () => {
    try {
      const res = await fetch('http://localhost:3006/item');
      const data = await res.json()
      setItems(data)
    } catch (e) {
      console.log("ERRR", e)
    }
  }

  useEffect( () => {
    getData()
  }, [])


  return (
    <main className="catalog">
      <div className="item__box"> 
      {items.content && items.content.map(elem => (
            <Item data={elem}  key={elem.id}  />)
          )}  
      </div>
    </main>
 )

}







