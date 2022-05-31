import { Component } from "react";
import { DISHES } from "../shared/dishes";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({
      selectedDish: dishId,
    });
  }

  render() {
    const { dishes, selectedDish } = this.state;
    return (
      <div>
        <Header />
        <div className="container">
          <Menu
            dishes={dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}
          />
          <DishDetail
            dish={
              this.state.dishes.filter((dish) => dish.id === selectedDish)[0]
            }
          />
        </div>
      </div>
    );
  }
}

export default Main;
