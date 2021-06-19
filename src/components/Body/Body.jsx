import React, { useEffect, useState } from 'react';
import { Description } from '../description/Description';
import { Item } from '../Item/Item';

export function Body(props) {
  const [item, setItem] = useState(null);
  const [items, setItems] = useState(null);

  const getData = async () => {
    try {
      const res = await fetch('http://localhost:3006/item');
      const data = await res.json()
      setItems(data.content)
    } catch (e) {
      console.log("ERRR", e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const getDataById = async (id) => {
    try {
      const res = await fetch(`http://localhost:3006/item/${id}`);
      const data = await res.json()
      setItem(data.content)
    } catch (e) {
      console.log("ERRR", e)
    }
  }

  const handleExit = () => {
    setItem(null)
  }

  const handleClick = (elem) => {
    getDataById(elem.id)
  }


  return (
    <main className="catalog">
      {item ? (
        <>
          <Description item={item} onExit={handleExit} />
        </>
      ) : (
        !!items ? (
          !items.length ? (<div>Loading...</div>) : (
            <>
              <div className="item__box">
                {items.map(elem => (
                    <div className="item" key={elem.id} onClick={handleClick}>
                      <Item data={elem} id={elem.id}  />
                    </div>
                  )
                  )}
              </div>
            </>
          )
        ) : (
          <>
            {null}
          </>
        )
      )}
    </main>
  )
}

  