import React from "react";
import PropTypes from "prop-types";

import * as headerStyles from "./header.module.scss";
import PhoneNumber from "./contact/phone-number";
import EmailAddress from "./contact/email-address";
import LinkedIn from "./contact/linkedin";
import GitHub from "./contact/github";

interface IHeaderProps {
  professionText: string
}

const Header = (props: IHeaderProps) => (
  <header className={headerStyles.container}>
    <p>
      <span className={headerStyles.nameText}>Bruce Markham</span><span className={headerStyles.professionText}>{props.professionText}</span><br/>
      <ul className={headerStyles.contact}>
        <li><PhoneNumber value="(540) 627-5735" /></li>
        <li><EmailAddress value="bruce.markham@gmail.com"/></li>
        <li><LinkedIn shortUrlLeaf="dbmarkham2" /></li>
        <li><GitHub repoOwner="brucificus" /></li>
      </ul>
    </p>
  </header>
);

Header.propTypes = {
  professionText: PropTypes.string.isRequired
}

export default Header;