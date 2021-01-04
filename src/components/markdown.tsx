import React from "react";
import PropTypes from "prop-types";
import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";

interface IMarkdownProps {
    content: string
}

const Markdown = (props: IMarkdownProps) =>
    <>{
        unified()
          .use(parse)
          .use(remark2react)
          .processSync(props.content).result
    }</>;

Markdown.propTypes = {
    content: PropTypes.string.isRequired
};

export default Markdown;