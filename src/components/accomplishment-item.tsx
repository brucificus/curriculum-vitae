import React from "react";

import { Accomplishment, accomplishmentPropType } from "../models/accomplishment";

interface IAccomplishmentItemProps {
    accomplishment: Accomplishment
};

const AccomplishmentItem = (props: IAccomplishmentItemProps) => {
  return <li dangerouslySetInnerHTML={{ __html: props.accomplishment }} />;
};

export default AccomplishmentItem;

AccomplishmentItem.propTypes = {
    accomplishment: accomplishmentPropType()
};