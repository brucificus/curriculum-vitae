import React from "react";
import PropTypes from "prop-types";

import sectionStyles from "./section.module.scss";

const Section = ({caption, children}) => (
    <section className={sectionStyles.container}>
        <header className={sectionStyles.caption}>
            {caption}
        </header>
        <main className={sectionStyles.content}>
            {children}
        </main>
    </section>
);

export default Section;

Section.propTypes = {
    caption: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};