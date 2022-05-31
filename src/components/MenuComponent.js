import { Card, CardImgOverlay, CardTitle, CardImg } from "reactstrap";

const RenderMenuItem = ({ dish, onClick }) => {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" object src={dish.image} alt={dish.name} />
      <CardImgOverlay className="ml-5">
        <CardTitle heading>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

const Menu = ({ dishes, onClick }) => {
  const menu = dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onClick={onClick} />
      </div>
    );
  });

  return <div className="row">{menu}</div>;
};

export default Menu;
