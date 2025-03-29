import React from "react";
import "./footer.css";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">FAQ</a>
        <a href="#">Help Center</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy</a>
        <a href="#">Cookie Preferences</a>
        <a href="#">Corporate Information</a>
      </div>

      <div className="footer-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="icon" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <YouTube className="icon" />
        </a>
      </div>

      <p className="footer-text">© {new Date().getFullYear()} Netflix Clone. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
