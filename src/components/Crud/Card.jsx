import React from "react";
import Card from "react-bootstrap/Card";
import "./Card.css"; // Import the CSS file for styles

function Cards({ title, price, image, rating,  children }) {
  return (
    <div className="card-container">
      <Card
        style={{ width: "21rem", border: "none", color: "#444444" }}
        className="card"
      >
        <div className="image-container">
          <Card.Img
            variant="top"
            src={image}
            alt="Watch"
            className="card-image"
          />
          <div className="view-details">View Details</div>
        </div>
        <Card.Body>
          <Card.Title className="text-center fs-4 fw-bold">{title}</Card.Title>
          <Card.Text className="text-center fw-semibold">{price}</Card.Text>
          <Card.Text className="text-center fw-semibold">{}</Card.Text>
          <div className="d-flex justify-content-between gap-2">{children}</div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
