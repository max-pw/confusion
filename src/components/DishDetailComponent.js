import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

const RenderDish = ({ dish }) => {
  const { image, name, description } = dish;
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
};

const RenderComments = ({ comments }) => {
  return (
    <div className="col-12 col-md-5 m-1">
      <h4>Comments</h4>
      {comments.map(({ comment, date, author }, index) => (
        <div key={index}>
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
};

const DishDetail = ({ dish }) => {
  if (!dish) {
    return null;
  }
  return (
    <div className="row">
      <RenderDish dish={dish} />
      <RenderComments comments={dish.comments} />
    </div>
  );
};

export default DishDetail;
