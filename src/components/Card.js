import React from "react";
import "./Card.css"

export default function Card(props) {  
  return (
    <article className="card">
      <div className="card--container">
        <img className="card--container--img" src={props.element.imageUrl} alt="paisage" />
        <div className="card--info">
          <div className="card--location">
            <img src="./img/location-icon.svg" alt="icon" />
            {props.element.location && <p>{props.element.location}</p>}
            <a href={props.element.locationLink}>View on Google Maps</a>
          </div>
          <div className="card--title">
            <h1>{props.title}</h1>
          </div>
          <div className="card--date">
            <p>{props.element.startDate} - {props.element.endDate}</p>
          </div>
          <div className="card--description">
            <p>{props.element.description}</p>
          </div>
        </div>
      </div>
      <hr />
    </article>
  )
}