import React from "react";


export function Description(props) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={`http://localhost:3006/${props.item.picture.path}`} alt={props.item.picture.alt} />
      </div>

      <div className="card__desc-wrap">
        <div className="card__desc">
          <h1 className="product__title">{props.item.name}</h1>
          <p>{props.item.description}</p>
          <h2 className="product__desc">Details</h2>
          <p>{props.item.details}</p>
        </div>

        <div className="card__order-wrap">
          <div className="card__order">
            <span className="card__order-price">{props.item.price.currency} {props.item.price.value}</span>
          </div>

          <div className="card__order-quantity">
            <div className="card__btns-box">
              <button className="card__control-btn">-</button>
              <input type="number" />
              <button className="card__control-btn">+</button>
            </div>

            <button className="card__order-btn" type="submit">Add to cart</button>

          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"
              fill="#959595" />
          </svg>
        </div>
        <button className="card__exit" onClick={props.onExit}>Turn Back</button>
      </div>
    </div>
  )
}