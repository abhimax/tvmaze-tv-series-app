import { Col, Row } from "react-grid-system";
import { useNavigate } from "react-router-dom";
import { ShowCard } from "./ShowCard";
import classes from "./ShowList.module.css";
const ShowList = ({ list }) => {
  const navigate = useNavigate();
  const handleShowCarClick = (e) => {
    console.log('Show ID >>',e.currentTarget.id);
    navigate('/detailed');
  }
  return (
    <div className={classes["show-list-layout"]}>
      <Row>
        {list &&
          list.map((item) => {
            return (
              <Col md={3} xs={6} align="center" key={item.show.id}>
                <ShowCard
                  id={item.show.id}
                  name={item.show.name}
                  rating={item.show.rating}
                  image={item.show.image.medium}
                  onCardClick={handleShowCarClick}
                />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};
export default ShowList;
