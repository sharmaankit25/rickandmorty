import React from "react";

const Details = ({ details }) => (
  <div>
    <h2 className="title">{details.name}</h2>
    <h3 className="subtitle">{details.name}</h3>
    <figure className="image is-4by3">
      <img src={details.image} alt={details.name} />
    </figure>
    <ul>
      <li>{details.status}</li>
      <li>{details.gender}</li>
      <li>{details.species}</li>
      <li>{details.origin ? `Origin - ${details.origin.name}` : ""}</li>
      <li>{details.location ? `Location - ${details.location.name}` : ""}</li>
    </ul>
  </div>
);

export default Details;
