import React, { useState } from "react";
import logo from "../../images/img6.jpg";
import Loading from "./Loading";
import NotFound from "./NotFound";
import Sent from "./Sent";
import {
  Container,
  Col,
  Row,
  Form,
  Button,
  FormCheck,
  FormLabel,
} from "react-bootstrap";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    type: "",
    select: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState(true);
  const [sent, setSent] = useState(false);
  const { name, email, phone, message, select, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setForm(false);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/send");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function () {
      if (xhr.responseText === "success") {
        alert("Email Sent");
        setLoading(false);
        setSent(true);
      } else {
        alert("Error");
        setLoading(false);
        setError(true);
      }
    };

    setContact({
      name: "",
      email: "",
      phone: "",
      select: "",
      type: "",
      message: "",
    });

    xhr.send(JSON.stringify(contact));
  };

  return (
    <Container>
      <Row>
        {loading && <Loading />}
        {error && (
          <div className="text-center">
            <NotFound />
          </div>
        )}

        {sent && <Sent />}
        {form && (
          <div className="col-md-12 text-center" >
            <Col md={12} className=" head-contact">
              <div className="text-center">
                <img src={logo} alt="utopian images" className="contact-logo" />
              </div>
              <h1 className="text-center">Utopian Studios...</h1>
            </Col>

            <Row>
              <h2 className="p-4">Contact Us</h2>
              <div className="background text-center">
                <Col md={12}>
                  <div className="form-background">
                    <Form
                      autoComplete="off"
                      onSubmit={onSubmit}
                      className="form"
                    >
                      <Row>
                        <Col md={12}>
                          <input
                            autoComplete="off"
                            type="text"
                            placeholder="Full Name"
                            name="name"
                            required
                            value={name}
                            onChange={onChange}
                            className="my-3 form-control "
                          />
                        </Col>
                        <Col md={12}>
                          <input
                            autoComplete="off"
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            required
                            onChange={onChange}
                            className="my-3 form-control"
                          />
                        </Col>

                        <Col md={12} className="block">
                          <input
                            type="text"
                            autoComplete="off"
                            placeholder="Phone Number"
                            name="phone"
                            value={phone}
                            required
                            onChange={onChange}
                            className="my-3 form-control"
                          />
                        </Col>

                        <Col md={12} className="text-left">
                          <FormLabel>
                            <h5>What Type of Session are you Looking For ?</h5>
                          </FormLabel>
                          <FormCheck
                            type="radio"
                            label="Wedding"
                            name="type"
                            value="Wedding"
                            checked={type === "Wedding"}
                            onChange={onChange}
                            className="py-2"
                          />
                          <FormCheck
                            type="radio"
                            label="Casual"
                            onChange={onChange}
                            name="type"
                            value="Casual"
                            checked={type === "Casual"}
                            className="py-2"
                          />
                          <FormCheck
                            type="radio"
                            label="Engagement"
                            onChange={onChange}
                            name="type"
                            value="Engagement"
                            checked={type === "Engagement"}
                            className="py-2"
                          />
                          <FormCheck
                            type="radio"
                            label="Fashion"
                            onChange={onChange}
                            name="type"
                            value="Fashion"
                            checked={type === "Fashion"}
                            className="py-2"
                          />
                          <FormCheck
                            type="radio"
                            label="Others"
                            onChange={onChange}
                            name="type"
                            value="Other"
                            checked={type === "Other"}
                            className="py-2"
                          />
                        </Col>
                        <Col md={12} className="text-left">
                          <FormLabel>
                            <h5 className="p-3">Select An Option</h5>
                          </FormLabel>
                          <FormCheck
                            type="switch"
                            label="Facebook"
                            onChange={onChange}
                            name="select"
                            value="Facebook"
                            checked={select === "Facebook"}
                            className="py-2"
                          />
                          <FormCheck
                            type="switch"
                            label="Twitter"
                            onChange={onChange}
                            name="select"
                            value="Twitter"
                            checked={select === "Twitter"}
                            className="py-2"
                          />
                          <FormCheck
                            type="switch"
                            label="Instagram"
                            onChange={onChange}
                            name="select"
                            value="Instagram"
                            checked={select === "Instagram"}
                            className="py-2"
                          />
                          <FormCheck
                            type="switch"
                            label="Other"
                            onChange={onChange}
                            name="select"
                            value="Other"
                            checked={select === "Other"}
                            className="py-2"
                          />
                        </Col>

                        <Col>
                          <textarea
                            autoComplete="off"
                            name="message"
                            cols="137"
                            rows="7"
                            type="text"
                            required
                            placeholder="Message"
                            value={message}
                            onChange={onChange}
                            className="my-3 p-3 form-control"
                          ></textarea>
                        </Col>
                      </Row>

                      <Button type="submit" className="btn-block btn-send">
                        <h6
                          className="contact-submit"
                          style={{ color: "#fff", padding: "3px 0px" }}
                        >
                          Send Message
                        </h6>
                      </Button>
                    </Form>
                  </div>
                </Col>
              </div>
            </Row>
          </div>
        )}
      </Row>
    </Container>
  );
};

export default Contact;
