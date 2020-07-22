import React from "react";
import Select from 'react-select'

const CategoriesSelect = (props) => {

  const options = props?.categories.map(function (c) {
    return { value: c._id, label: c.title, style: {width:'250px'}};
  });

  const handleChange = (selectedOption) => {
    props.handleCategorySelect(selectedOption);
  };

  return (
    <div className={"react-select"}>
      {!!options && <Select onChange={handleChange} options={options} />}
    </div>
  );
};

export default CategoriesSelect