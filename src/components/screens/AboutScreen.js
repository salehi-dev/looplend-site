import React from "react";
import { Outlet, Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

import AboutProvider from "../about/AboutProvider";
import "./aboutScreen.css";

export default function AboutScreen() {
  return (
    <>
      <AboutProvider />
      <Outlet />
      <div className="footer-container">
        <Link className="link" to="media">
          Social Media
          <div style={{}}>
            <Link className="linkdin-icon icon">
              <LinkedInIcon fontSize="large" />
            </Link>
            <Link className="youtube-icon icon">
              <YouTubeIcon fontSize="large" />
            </Link>
            <Link className="faceboke-icon icon">
              <FacebookIcon fontSize="large" />
            </Link>
            <Link className="twitter-icon icon">
              <TwitterIcon fontSize="large" />
            </Link>
          </div>
        </Link>
        <Link className="link" to="contact">
          Contact Us
          <div>
            <Link className="email-icon icon">
              <EmailIcon fontSize="large" />
            </Link>
            <Link className="phone-icon icon">
              <ContactPhoneIcon fontSize="large" />
            </Link>
          </div>
        </Link>
      </div>
    </>
  );
}
