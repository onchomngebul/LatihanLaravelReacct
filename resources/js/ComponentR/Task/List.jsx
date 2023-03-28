import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import 'devextreme/dist/css/dx.dark.css';
import { DataGrid, Column, Editing, FilterRow } from 'devextreme-react/data-grid';


function ListTask() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`api/task`)
          .then(response => setData(response.data));
      }, []);

    function handleStore(e) {
        axios.post(`api/task`, e.data)
            .catch((error) => console.log(error));
    }

    function handleDelete(e) {
        axios.delete(`api/task/${e.key}`)
            .catch((error) => console.log(error));
    }

    function handleUpdate(e) {
        console.log(e.key);
        axios.put(`api/task/${e.key}`, e.data)
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
            <FilterRow visible={true} />
            <Column dataField="id" allowEditing={false} visible={false}/>
            <Column dataField="wf_id"></Column>
            <Column dataField="task_name"></Column>
            <Column dataField="task_type"></Column>
            <Column dataField="view_id"></Column>
            <Column dataField="attribute_json" width="200"></Column>
            <Column dataField="assigned_to"></Column>
        </DataGrid>
    );
}

if (document.getElementById('ListTask')) {
    const root = ReactDOM.createRoot(document.getElementById("ListTask"));
    root.render(<ListTask />);
}