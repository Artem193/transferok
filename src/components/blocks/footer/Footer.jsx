import React from "react";

import './footer.scss';

export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <h1 className="footer__title">Контакти</h1>
        <p className="footer__text">
          Номер телефону:&nbsp;
          <a href="tel:+380978793288" className="footer__link">
            +38 0 (97) 879 32 88
          </a>
        </p>
        <p className="footer__text">
          Email:&nbsp;
          <a href="mailto:Tylpan7788@gmail.com" className="footer__link">
            Tylpan7788@gmail.com
          </a>
        </p>
        <a href="#">
          <div className="footer__logo"></div>
        </a>
      </footer>
      <p className="footer__copyright">
        © 2024 Transfer-OK. All rights reserved.
      </p>
    </div>
  )
}
