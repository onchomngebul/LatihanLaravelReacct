import React from 'react';
import ReactDOM from 'react-dom/client';
import { SelectBox } from 'devextreme-react/select-box';
 
const response = await fetch('api/workflows');
const data = await response.json();

function DDWorkflow(props) {
    return (
        <SelectBox
            onValueChanged={props.onChange}
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