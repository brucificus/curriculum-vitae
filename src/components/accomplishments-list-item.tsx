import React from "react";

import { IAccomplishment, accomplishmentPropType } from "../models/accomplishment";

interface IAccomplishmentsListItemProps {
    accomplishment: IAccomplishment
};

const AccomplishmentsListItem = (props: IAccomplishmentsListItemProps) => {
  return <li dangerouslySetInnerHTML={{ __html: props.accomplishment.description }} />;
};

export default AccomplishmentsListItem;

AccomplishmentsListItem.propTypes = {
    accomplishment: accomplishmentPropType()
};