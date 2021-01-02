import React from "react";

import { IAccomplishment, accomplishmentPropType } from "../models/accomplishment";

interface IAccomplishmentItemProps {
    accomplishment: IAccomplishment
};

const AccomplishmentItem = (props: IAccomplishmentItemProps) => {
  return <li dangerouslySetInnerHTML={{ __html: props.accomplishment.description }} />;
};

export default AccomplishmentItem;

AccomplishmentItem.propTypes = {
    accomplishment: accomplishmentPropType()
};