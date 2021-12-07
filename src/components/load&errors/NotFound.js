import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import errorImg from "../../images/img9.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotFound = () => {
  return (
    <div
      style={{
        margin: "200px 0px",
      }}
    >
      <div>
        <Container>
          <Row>
            <Col md={12} className=" head-contact">
              <div className="text-center">
                <img
                  src={errorImg}
                  alt="utopian images"
                  className="contact-error"
                />
              </div>
              <h1 className="text-center">Utopian Studios...</h1>
            </Col>

            <Col md={12} className="text-center">
              <h4 style={{ color: "#000" }}>
                Ooops An Error Occured, Check your Connections
              </h4>
              <Button className="btn-md btn-send">
                <Link to="/" className="link" style={{ color: "#000" }}>
                  <FontAwesomeIcon
                    icon={faAngleDoubleLeft}
                    style={{ background: "none" }}
                  />
                  <span
                    style={{
                      fontSize: "25px",
                      background: "none",
                      padding: "5px 10px",
                      color: "#fff",
                    }}
                  >
                    Back to Home
                  </span>
                </Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default NotFound;
