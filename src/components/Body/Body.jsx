import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Description } from '../description/Description';
import { Item } from '../Item/Item';

export function Body(props) {


  const [items, setItems] = useState([]);
  console.log(items)

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

  // onDesc() {

  //     return (
  //       <Link to="/description">{Description}</Link>
  //     )

  // }

  return (
    <main className="catalog">
      <div className="item__box"> 
          
          {/* {items.content.map((elem, index) => (
             <Item data={items.content[index]} key={items.content[index].id} />)
           )}   */}
      </div>
    </main>
 )

}






