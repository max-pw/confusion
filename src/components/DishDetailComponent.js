import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

class DishDetail extends Component {
  renderComments(comments) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        {comments.map(({ comment, date, author }) => (
          <div>
            <p>{comment}</p>
            <p>
              -- {author},{" "}
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        ))}
      </div>
    );
  }

  renderDish({ image, name, description }) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" object src={image} alt={name} />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>{description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  render() {
    const { dish } = this.props;
    if (!dish) {
      return null;
    }
    return (
      <div className="row">
        {this.renderDish(dish)}
        {this.renderComments(dish.comments)}
      </div>
    );
  }
}

export default DishDetail;
