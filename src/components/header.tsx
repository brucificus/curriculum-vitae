import React from "react";

import headerStyles from "./header.module.scss";
import PhoneNumber from "./contact/phone-number";
import EmailAddress from "./contact/email-address";

const Header = () => (
  <header className={headerStyles.container}>
    <p>
      <span className={headerStyles.identityText}>Bruce Markham</span>, <span className={headerStyles.identityText}>Senior Software Engineer</span><br/>
      <div className={headerStyles.contact}>
        <PhoneNumber value="(540) 627-5735" />
        <EmailAddress value="bruce.markham@gmail.com"/>
      </div>
    </p>
  </header>
);

export default Header;