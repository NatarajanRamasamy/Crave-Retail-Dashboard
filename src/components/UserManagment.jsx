import React from 'react';
import ReactTable from "react-table";


function makeData() {
  return [
    {
      id: 1,
      firstName: "judge",
      lastName: "babies",
      age: 16
    },
    {
      id: 2,
      firstName: "lamp",
      lastName: "point",
      age: 2
    },
    {
      id: 3,
      firstName: "argument",
      lastName: "insurance",
      age: 13
    },
    {
      id: 4,
      firstName: "pets",
      lastName: "fan",
      age: 27
    },
    {
      id: 5,
      firstName: "learning",
      lastName: "board",
      age: 9
    },
    {
      id: 6,
      firstName: "observation",
      lastName: "drink",
      age: 28
    },
    {
      id: 7,
      firstName: "mom",
      lastName: "pipe",
      age: 27
    },
  ];
}
export class UserManagment extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selected: {}, selectAll: 0, data: makeData() };

    this.toggleRow = this.toggleRow.bind(this);
  }



  toggleRow(firstName) {
    const newSelected = Object.assign({}, this.state.selected);
    newSelected[firstName] = !this.state.selected[firstName];
    this.setState({
      selected: newSelected,
      selectAll: 2
    });
  }

  toggleSelectAll() {
    let newSelected = {};

    if (this.state.selectAll === 0) {
      this.state.data.forEach(x => {
        newSelected[x.firstName] = true;
      });
    }

    this.setState({
      selected: newSelected,
      selectAll: this.state.selectAll === 0 ? 1 : 0
    });
  }

  render() {
    const columns = [
      // {
      //   Header: " Name",
      //   accessor: "",
      //   id: "checkbox",

      //   Cell: ({ original }) => {
      //     return (
      //       <input
      //         type="checkbox"
      //         className="checkbox"
      //         checked={this.state.selected[original.firstName] === true}
      //         onChange={() => this.toggleRow(original.firstName)}
      //       />
      //     );
      //   },
      //   Header: x => {
      //     return (
      //       <input
      //         type="checkbox"
      //         className="checkbox"
      //         checked={this.state.selectAll === 1}
      //         ref={input => {
      //           if (input) {
      //             input.indeterminate = this.state.selectAll === 2;
      //           }
      //         }}
      //         onChange={() => this.toggleSelectAll()}
      //       />
      //     );
      //   },
      //   sortable: false,
      //   width: 45

      // },
      {
        Header: "No:",
        accessor: "id",

      },
      {
        Header: "Name",
        accessor: "firstName",
      },
      {
        Header: "Role",
        id: "lastName",
        accessor: d => d.lastName
      },
      {
        Header: "Last Login",
        accessor: "age"

      }
    ];

    return (
      <div>
        <ReactTable
          data={this.state.data}
          columns={columns}
          defaultSorted={[{ id: "id", desc: false }]}
        />
      </div>
    );
  }
}

export default UserManagment
