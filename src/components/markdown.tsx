import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from 'react-markdown'

interface IMarkdownProps {
    content: string
}

const Markdown = (props: IMarkdownProps) =>
    <ReactMarkdown children={props.content}/>

Markdown.propTypes = {
    content: PropTypes.string.isRequired
};

export default Markdown;