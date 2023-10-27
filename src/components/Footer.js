import React from 'react'
import { PageLinks } from "./data";
import { IconLinks } from "./data";

function Footer() {
    return (
      <footer className="section footer" id="footer">
        <ul className="footer-links">
          {PageLinks.map(({id, href, text}) => {
            return (
              <li key={id}>
                <a href={href} className="footer-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="footer-icons">
          {IconLinks.map(({id,href,icon}) => {
            return (
              <li key={id}>
                <a href={href} target="_blank" className="footer-icon">
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    );
}

export default Footer
