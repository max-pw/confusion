import { Component } from "react";
import { Card, CardImgOverlay, CardTitle, CardImg } from "reactstrap";
import DishDetail from "./DishDetailComponent";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.props.onClick(dish.id)}>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardImgOverlay className="ml-5">
              <CardTitle heading>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
      </div>
    );
  }
}

export default Menu;