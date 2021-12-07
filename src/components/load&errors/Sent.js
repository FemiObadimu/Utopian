import React from "react";
import {
  faAngleDoubleLeft,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Sent = () => {
  return (
    <div
      className="container text-center"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "200px 0px",
        alignItems: "center",
      }}
    >
      <div className="row">
        <div className="col-md-12">
          <h2 style={{ color: "#000" }}>
            Email Sent{" "}
            <FontAwesomeIcon
              icon={faMailBulk}
              style={{ color: "rgb(11, 9, 33)" }}
            />
          </h2>
          <Container>
            <Row>
              <Col md={12}>
                <Button className="btn-md btn-send">
                  <Link to="/" className="link" style={{ color: "#000" }}>
                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    <span
                      style={{
                        fontSize: "15px",
                        padding: "20px",
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
    </div>
  );
};

export default Sent;
