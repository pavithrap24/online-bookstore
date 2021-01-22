import React from "react";
// import ReactStars from "react-rating-stars-component";
import { Button } from "@material-ui/core";
import "./book.css";

function book(props) {
  return (
    <div className="divClass">
      <label>{props.title}</label>
      <label>
        <i>Authors: </i>
        {props.authors}
      </label>
      <label>
        <i>Average Ratings: </i>
        {props.avgRating}
      </label>
      {/* <ReactStars
        count={5}
        value={Number.parseFloat(props.avgRating)}
        size={24}
        activeColor="#ffd700"
        isHalf={true}
        edit={false}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
      /> */}

      <label>
        <i>isbn: </i>
        {props.isbn}
      </label>
      <label>
        <i>Avaiable in Languages: </i>
        {props.languageCode}
      </label>
      <label>
        <i>Total Ratings: </i>
        {props.ratingsCount}
      </label>
      <label>
        <i>Price: </i>₹{props.price}
      </label>
      <Button variant="contained" onClick={props.addToCart}>
        Add to Cart
      </Button>
    </div>
  );
}

export default book;
