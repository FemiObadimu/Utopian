import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import { Bars } from "@agney/react-loading";

const Loading = () => {
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
            <Bars width="50" className="ball-triangle" />
          </h2>
          <Container>
            <Row>
              <Col md={12}>
                <h2 className="py-4" style={{ color: "rgb(11, 9, 33)" }}>
                  {" "}
                  Loading...
                </h2>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Loading;
