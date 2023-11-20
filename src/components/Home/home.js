import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../Redux/Action/allProductsAction";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Home() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state?.productData?.listdata);
  console.log(productData, "data");
  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  return (
    <div>
      <Row>
        {productData &&
          productData.map((product) => (
            <Col key={product.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {product.category}
                  </Card.Subtitle>
                  <Card.Text>{product.description}</Card.Text>
                  <p>{product.price}</p>
                  <div>
                    <p>{product.rating.rate}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}
export default Home;
