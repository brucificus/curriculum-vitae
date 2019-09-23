import React from "react";

import headerStyles from "./header.module.scss";
import PhoneNumber from "./phone-number";
import EmailAddress from "./email-address";

const Header = () => (
  <header className={headerStyles.container}>
    <p>
      <span className={headerStyles.identityText}>Bruce Markham</span>, <span className={headerStyles.identityText}>Senior Software Engineer</span><br/>
      <PhoneNumber value="(540) 627-5735" /> | <EmailAddress value="bruce.markham@gmail.com"/>
    </p>
  </header>
);

export default Header;