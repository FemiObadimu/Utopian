import React from "react";
import { Container, Col, Row, Carousel, Button } from "react-bootstrap";
import img8 from "../../images/img8.jpg";
import img7 from "../../images/img7.jpg";
import img1 from "../../images/img1.jpg";
// import img5 from "../../images/img5.jpg";

const Home = () => {
  return (
    <div className="home text-center">
      <Carousel controls={false}>
        <Carousel.Item>
          <img className="home-carousel" src={img8} alt="utopian-slides" />
          <Carousel.Caption>
            <h1 className="carousel-1">Lifestyle</h1>
            <h3 className="carousel-2">Creating TimeLess Photos</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="home-carousel" src={img7} alt="utopian-slides" />

          <Carousel.Caption>
            <h1 className="carousel-1">Beauty</h1>
            <h3 className="carousel-2">Creating TimeLess Photos</h3>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="home-carousel" src={img1} alt="utopian-slides" />

          <Carousel.Caption>
            <h1 className="carousel-1">Fashion</h1>
            <h3 className="carousel-2">Creating TimeLess Photos</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container">
        <div className="image-cont">
          <div className=" text-center ">
            <div className="home-image1"></div>
          </div>
          <div
            className="into-line "
            style={{ color: "black", fontFamily: "Quicksand" }}
          >
            <h1>OUR PHILOSOPHY</h1>
            <br />
            <span>
              <i>Photograohy is Poetry</i>
            </span>
            <br />
            <p>I tell stories through visual creativity</p>
            <Button className="btn-md" variant="outline-dark">
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>MY AESTHETICS</h1>
          </div>
        </div>
        <div className="image-cont ">
          <div className=" text-center">
            <div className="aes1"></div>
          </div>
          <div className="text-center">
            <div className="aes2"></div>
          </div>
          <div className="text-center">
            <div className="aes3"></div>
            <p style={{ color: "black", fontFamily: "Quicksand" }}>Hello Wo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
