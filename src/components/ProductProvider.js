import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import CoursesList from "./CoursesList";
import ImageProvider from "./ImageProvider";

export default function ProductProvider() {
  const { id } = useParams();
  const { image, describtion, title, alt } = CoursesList.find(
    (item) => item.id == id
  );
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>{title}</h2>
          <p>{describtion}</p>
        </Col>
        <Col>
          <img
            style={{ width: "90%", height: "350px", borderRadius: 7 }}
            src={`.${image}`}
            alt={alt}
          />
        </Col>
      </Row>
    </Container>
  );
}
