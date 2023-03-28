import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import 'devextreme/dist/css/dx.dark.css';
import { DataGrid, Column, Editing, FilterRow } from 'devextreme-react/data-grid';


function ListWayFlow() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`api/wayflow`)
          .then(response => setData(response.data));
      }, []);

    function handleStore(e) {
        axios.post(`api/wayflow`, e.data)
            .catch((error) => console.log(error));
    }

    function handleDelete(e) {
        axios.delete(`api/wayflow/${e.key}`)
            .catch((error) => console.log(error));
    }

    function handleUpdate(e) {
        axios.put(`api/wayflow/${e.key}`, e.data)
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
            <Column dataField="flow_name"></Column>
            <Column dataField="flow_rule_json" width="200"></Column>
            <Column dataField="logic_rule" width="200"></Column>
            <Column dataField="taskid_origin"></Column>
            <Column dataField="taskid_aim"></Column>
        </DataGrid>
    );
}
if (document.getElementById('ListWayFlow')) {
    const root = ReactDOM.createRoot(document.getElementById("ListWayFlow"));
    root.render(<ListWayFlow />);
}