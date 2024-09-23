import React from "react";
import Card from "react-bootstrap/Card";
import "./Card.css"; // Import the CSS file for styles
import { Link } from "react-router-dom";

function Cards({ title, price, image,to,   id, rating ,children  }) {
  return (
    <div className="card-container">
      <Card
      
        style={{  border: "none", color: "#444444" } }
        className="card border-1 border shadow-sm mb-3  "
      >
        <div className="image-container">
          <Card.Img
            variant="top"
            src={image}
            alt="Watch"
            className="card-image"
            style={{ objectFit: "cover" , width: "100%", height: "50%" }}

          />
          <Link to={to} className="view-details text-decoration-none" >View Details</Link>
        </div>
        <Card.Body >
          <Card.Title className=" fs-4 fw-bold">{title}</Card.Title>
<div className="d-flex justify-content-between ">
            <Card.Text className=" fw-semibold">{price} $ </Card.Text>
            <Card.Text className="text-warning fw-semibold">{rating}</Card.Text>
</div>


          <div className="d-flex justify-content-between gap-2">{children}</div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
