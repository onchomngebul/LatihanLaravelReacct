import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import 'devextreme/dist/css/dx.dark.css';
import { DataGrid, Column, Editing, FilterRow } from 'devextreme-react/data-grid';


function ListViewPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`api/viewpage`)
          .then(response => setData(response.data));
      }, []);

    function handleStore(e) {
        axios.post(`api/viewpage`, e.data)
            .catch((error) => console.log(error));
    }

    function handleDelete(e) {
        axios.delete(`api/viewpage/${e.key}`)
            .catch((error) => console.log(error));
    }

    function handleUpdate(e) {
        axios.put(`api/viewpage/${e.key}`, e.data)
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
            <Column dataField="view_name"></Column>
            <Column dataField="view_type"></Column>
            <Column dataField="view_rule_json" width="400"></Column>
        </DataGrid>
    );
}        

if (document.getElementById('ListViewPage')) {
    const root = ReactDOM.createRoot(document.getElementById("ListViewPage"));
    root.render(<ListViewPage />);
}