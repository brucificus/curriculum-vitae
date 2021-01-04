import React from "react";
import Markdown from "./markdown";
import { IAccomplishment, accomplishmentPropType } from "../models/accomplishment";

interface IAccomplishmentsListItemProps {
    accomplishment: IAccomplishment
};

const AccomplishmentsListItem = (props: IAccomplishmentsListItemProps) => {
  return <li><Markdown content={props.accomplishment.description} /></li>;
};

export default AccomplishmentsListItem;

AccomplishmentsListItem.propTypes = {
    accomplishment: accomplishmentPropType()
};