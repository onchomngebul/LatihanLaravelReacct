import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { SelectBox } from 'devextreme-react/select-box';
 
const response = await fetch('api/workflows');
const data = await response.json();

function DDWorkflow() {
    const [selectedId, setSelectedId] = useState('');

    const handleDropdownChange = (event) => {
      setSelectedId(event.value);
    };

    return (
        <SelectBox
            value={selectedId}
            onValueChanged={handleDropdownChange}
            dataSource={data}
            valueExpr="id"
            displayExpr="wf_name"
        >
        </SelectBox>
    );
}

export default DDWorkflow;

// var con = ReactDOM.createRoot(document.getElementById('ddw'));
// con.render(<DDWorkflow></DDWorkflow>)