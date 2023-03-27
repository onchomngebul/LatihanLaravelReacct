import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import 'devextreme/dist/css/dx.dark.css';
import { DataGrid, Column, Editing, Button } from 'devextreme-react/data-grid';


function ListWorkflow() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`api/workflows`)
          .then(response => setData(response.data));
      }, []);

    function handleStore(e) {
        axios.post(`api/workflows`, e.data)
            .catch((error) => console.log(error));
    }

    function handleDelete(e) {
        axios.delete(`api/workflows/${e.key}`)
            .catch((error) => console.log(error));
    }

    function handleUpdate(e) {
        axios.put(`api/workflows/${e.key}`, e.data)
            .catch((error) => console.log(error));
    }
    
    return (
        <DataGrid id="dataGrid"
            dataSource={data}
            keyExpr="id"
            columnAutoWidth={true}
            onRowInserted={handleStore}
            onRowRemoved={handleDelete}
            onRowUpdated={handleUpdate}
            >
            <Editing
                mode="row"
                allowUpdating={true}
                allowDeleting={true}
                allowAdding={true}
                useIcons={true}
            />
            <Column dataField="id" allowEditing={false} visible={false}/>
            <Column dataField="wf_name"></Column>
            <Column dataField="description"></Column>
            <Column dataField="template_no_record"></Column>
            <Column dataField="template_form_json" width="200"></Column>
            <Column dataField="global_var_json"></Column>
            <Column dataField="is_active" dataType="boolean"></Column>
        </DataGrid>
    );
}

if (document.getElementById('ListWorkflow')) {
    const root = ReactDOM.createRoot(document.getElementById("ListWorkflow"));
    root.render(<ListWorkflow />);
}