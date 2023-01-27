import { Card, Col, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";
import "./ItemList.css";


const ItemList = ({itData}) => {
  return (
    <Row>
    <Zoom>
    {
      itData.length >1 ? (itData.map((n)=>{
        return(
          <Col key={n.id} sm='12' className="mb-2">
          <Card className="card">
            <Card.Img className="img-item "  src={n.imgUrl } />
            <Card.Body>
              <Card.Title className="ytitle" >
              
                  <div className="item-title">{n.title}</div>
                  <div className="item-price "> {n.price}</div>
              
              </Card.Title>
              <Card.Text className="py-2">
                {n.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>)
      })) : <h3 className=''> THERE IS NOT CATEGORIES  </h3>
    }
    </Zoom>
    </Row>
  );
};

export default ItemList;
