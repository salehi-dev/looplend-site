import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import "./headerStyle.css";

export default function ProviderHeader() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container style={{ gap: "12rem", margin: "0px" }} fluid>
        <Navbar.Brand style={{ fontSize: 24, fontWeight: "500" }} href="#home">
          LoopLend
        </Navbar.Brand>
        <Nav
          style={{ gap: 35, color: "#fff", fontSize: 21, fontWeight: "500" }}
          className="me-auto"
        >
          <NavLink
            className={(link) =>
              link.isActive ? "header-text active" : "header-text"
            }
            to="/welcome"
          >
            Home
          </NavLink>
          <NavLink className="header-text" to="/home">
            Products
          </NavLink>
          <NavLink className="header-text" to="/about">
            About
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
