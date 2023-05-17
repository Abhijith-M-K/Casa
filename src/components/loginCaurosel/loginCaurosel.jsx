import Carousel from "react-bootstrap/Carousel";
import Bg from "../../img/login.png";

function LoginCaurosel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 vh-100" src={Bg} alt="First slide" />
        <Carousel.Caption>
          <h3>Welcome to Casagrand</h3>
          <p>Building Aspiration</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img className="d-block w-100" src={Bg} alt="Second slide" /> */}
        {/* <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1566888596782-c7f41cc184c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
        /> */}
        <img className="d-block w-100 vh-100" src={Bg} alt="First slide" />

        <Carousel.Caption>
          <h3>Welcome to Casagrand</h3>
          <p>Building Aspiration</p>{" "}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 vh-100" src={Bg} alt="Third slide" />

        <Carousel.Caption>
          <h3>Welcome to Casagrand</h3>
          <p>Building Aspiration</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default LoginCaurosel;
