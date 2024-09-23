import React from "react";

import './contactsButtons.scss';

export const ContactsButtons = () => {
  return (
    <div className="contactsButtons">
      <a href="https://wa.me/380509573836" className="contactsButtons__link">
        <div className="contactsButtons__button contactsButtons__button--wp">
        </div>
      </a>
      <a href="viber://chat?number=380509573836" className="contactsButtons__link">
        <div className="contactsButtons__button contactsButtons__button--viber">
        </div>
      </a>
      <a href="https://t.me/exampleUser" className="contactsButtons__link">
        <div className="contactsButtons__button contactsButtons__button--telegram">
        </div>
      </a>
      <a href="mailto:Tylpan7788@gmail.com" className="contactsButtons__link">
        <div className="contactsButtons__button contactsButtons__button--gmail">
        </div>
      </a>
      <a href="tel:+380509573836" className="contactsButtons__link">
        <div className="contactsButtons__button contactsButtons__button--phone">
        </div>
      </a>
    </div>
  )
}
