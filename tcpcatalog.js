import React, { useState,Component } from 'react';
import Header from './header';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { render } from "react-dom";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import BtnCellRenderer from "./BtnCellRenderer";
import './tcpcatalog.css';

class TCP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          field: "name",
          maxWidth: 200,
          sortable:true
        },
        {
          field: "status",
          minWidth: 150
        },
        {
          field: "enrichment",
          maxWidth: 200
        },
        {
          field: "noofskus",
          minWidth: 150
        },
        {
          field: "lastmodifiedonorby",
          minWidth: 150
        },
        { field: "lastsyncedonorby" },
        {
          field: "actions",
          cellRenderer: "btnCellRenderer",
          cellRendererParams: {
            clicked: function(field) {
              alert(`${field} was clicked`);
            }
          },
          minWidth: 200
        }
      ],
      defaultColDef: {
        flex: 1,
        minWidth: 100
      },
      frameworkComponents: {
        btnCellRenderer: BtnCellRenderer
      },
      rowData: []
    };
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
const data = [
        {name: "Staging V1 (Hindi)", status: "Online", enrichment: 99,noofskus:54,lastmodifiedonorby:"10 Oct. 2020 User_123",lastsyncedonorby:"11 Oct.2020 User_234"},
        {name: "Staging V1 (Tamil)", status: "Staging", enrichment: 99,noofskus:23,lastmodifiedonorby:"10 Oct. 2020 User_123",lastsyncedonorby:"11 Oct.2020 User_234"},
        {name: "Star Bazaar TCP", status: "Inactive", enrichment: 100,noofskus:345,lastmodifiedonorby:"10 Oct. 2020 User_123",lastsyncedonorby:"11 Oct.2020 User_234"},
        {name: "Croma Diwali Offers", status: "Inactive", enrichment: 75,noofskus:81,lastmodifiedonorby:"10 Oct. 2020 User_123",lastsyncedonorby:"11 Oct.2020 User_234"}
    ];
    this.setState({ rowData: data });
  };
  render() {
return(<div>

        <Header/>
        <div className="TCPBackground"><div className="title"><p>TCP Catalog</p></div>
        <div>
        <button className="button-10-12">Create New</button></div></div>
        <div className="ag-theme-alpine" style={ { height: 460, width: 1300,marginLeft:29 } }>
        <AgGridReact
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            frameworkComponents={this.state.frameworkComponents}
            onGridReady={this.onGridReady}
            rowData={this.state.rowData}
          />
        </div>
</div>);
}
}

export default TCP
