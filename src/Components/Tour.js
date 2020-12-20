import React, { useState } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Button,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "../css/Tour.css";

const Tour = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {props.tours.map((tour) => (
        <Card className={"format"}>
          <CardBody>
            <CardTitle tag="h5">{tour.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Price: {tour.price}$/day
            </CardSubtitle>
          </CardBody>
          <img width="30%" src={tour.image} alt="Card image cap" />
          <CardBody className={"text-info"}>
            <CardText
              style={{
                width: "30%",
              }}
            >
              {tour.info}
            </CardText>
          </CardBody>
          <Button
            onClick={() => {
              if (isOpen === false) {
                setIsOpen(true);
              } else {
                setIsOpen(false);
              }
            }}
            outline
            color="warning"
          >
            Book tour
          </Button>
          {isOpen && (
            <div>
              <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input
                  type="select"
                  name="select"
                  value={tour.day}
                  onChange={(e) => {
                    // setValue(e.target.value);
                    props.onUpdateDay(tour.id, e.target.value);
                  }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Input>
              </FormGroup>
              <h4>
                Total: {tour.priceByDay}$/{tour.day} days
              </h4>
            </div>
          )}
          <br />
          <br />
          <Button color="danger">danger</Button>
        </Card>
      ))}
    </>
  );
};

export default Tour;
