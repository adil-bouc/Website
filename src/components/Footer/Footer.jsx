import React from "react";
import { Link } from "react-router";
import ParallaxImage from "../ParallaxImage/ParallaxImage";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-bg">
        <ParallaxImage src="/footer/footer.jpg" alt="" />
      </div>

      <div className="footer-nav">
        <div className="footer-nav-link">
          <Link to="/about">À Propos</Link>
        </div>
        <div className="footer-nav-link">
          <Link to="/solutions">Nos Services</Link>
        </div>
        <div className="footer-nav-link">
          <Link to="/updates">Actualités</Link>
        </div>
        <div className="footer-nav-link">
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="footer-outro">
        <div className="footer-col">
          <p>Une Question ?</p>
          <h3>Contactez-nous</h3>
          <p className="primary">
            contact@justonrecords.com <br />
            LinkedIn / Carrières
          </p>
          <p>© 2024 Juston Records</p>
        </div>
        <div className="footer-col">
          <p>Nos Bureaux</p>
          <h3>Paris</h3>
          <p className="primary">
            15 Rue de la Musique <br />
            75011 Paris, France
          </p>
          <p>Label Indépendant depuis 2006</p>
        </div>
      </div>

      <div className="footer-form">
        <p className="primary">Restez informés !</p>
        <p>Abonnez-vous à notre newsletter</p>

        <span>Recevez nos actualités et dates de sortie en avant-première.</span>

        <div className="footer-ws"></div>

        <div className="footer-input">
          <input type="text" placeholder="Prénom" />
        </div>
        <div className="footer-input">
          <input type="text" placeholder="Nom" />
        </div>
        <div className="footer-input">
          <input type="text" placeholder="Email" />
        </div>
        <div className="footer-submit">
          <Link to="/">S'abonner</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
