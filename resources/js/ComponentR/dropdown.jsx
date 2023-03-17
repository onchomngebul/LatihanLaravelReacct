import React from 'react';
import ReactDOM from 'react-dom/client';
import { SelectBox } from 'devextreme-react/select-box';
 
const response = await fetch('api/workflows');
const data = await response.json();

function DDWorkflow() {
    return (
        <SelectBox
            dataSource={data}
            valueExpr="id"
            displayExpr="wf_name"
        >
        </SelectBox>
    );
}


var con = ReactDOM.createRoot(document.getElementById('ddw'));
con.render(<DDWorkflow></DDWorkflow>)