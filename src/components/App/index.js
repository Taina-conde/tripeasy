import CarouselCustom from "../CarouselCustom";
import InitialForm from "../InitialForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.scss";

function App() {
  return (
    <Container fluid className = "app">
      <Row>
        <Col className = "p-0" xs = {12} lg = {{span: 6, order: "last"}}>
          <CarouselCustom />
        </Col>
        <Col className = "p-0 mt-5" xs = {12} lg = {6} >
          <InitialForm />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
