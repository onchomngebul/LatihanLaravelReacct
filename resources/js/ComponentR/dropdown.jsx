import React, { useState, useEffect } from 'react';
import { SelectBox } from 'devextreme-react/select-box';
import axios from 'axios';
 

function DDWorkflow(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('api/workflows')
          .then(response => setData(response.data));
      }, []);

    return (
        <SelectBox
            onValueChanged={props.onChange}
            dataSource={data}
            valueExpr="id"
            displayExpr="wf_name"
            placeholder="Select an Workflow"
        >
        </SelectBox>
    );
}

export default DDWorkflow;

// var con = ReactDOM.createRoot(document.getElementById('ddw'));
// con.render(<DDWorkflow></DDWorkflow>)