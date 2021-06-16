import CarouselCustom from "../CarouselCustom";
import InitialForm from "../InitialForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col className = "p-0" xs = {12} md = {{span: 6, order: "last"}}>
          <CarouselCustom />
        </Col>
        <Col className = "p-0" xs = {12} md = {6}>
          <InitialForm />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
