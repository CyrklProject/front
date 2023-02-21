import React, { useState } from 'react';
import './MultiSelect.css';
import Select from 'react-select';

export function MultiSelect() {
  // React state to manage selected options
  const [selectedOptions, setSelectedOptions] = useState();
  const [optionList, setOptionList] = useState([]);

  //   // Array of all options
  //   const optionList = [
  //     { value: 'red', label: 'Red' },
  //     { value: 'green', label: 'Green' },
  //     { value: 'yellow', label: 'Yellow' },
  //     { value: 'blue', label: 'Blue' },
  //     { value: 'white', label: 'White' }
  //   ];

  // Function triggered on selection
  function handleSelect(data, e, arr) {
    setSelectedOptions(data);
    setLabel(e.target.value);
    setOptionList(arr);
  }

  return (
    <div className="select">
      <div className="dropdown-container">
        <Select
          options={optionList}
          placeholder="Select"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
      </div>
    </div>
  );
}
