import React from "react";
import Select from 'react-select'

const CategoriesSelect = (props) => {

  const options = props?.categories.map(function (c) {
    return { value: c._id, label: c.title };
  });

  return (
    <>
      {!!options && <Select options={options} />}
    </>
  );
};

export default CategoriesSelect